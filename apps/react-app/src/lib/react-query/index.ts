import { MutationCache, QueryClient } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
  DefaultOptions,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toaster } from "@repo/ui/chakra-ui";
import { getErrorMessage } from "@repo/utils";
const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    // retry: (failureCount: number, error: unknown) => {
    //   const status = (error as AxiosError).response?.status;
    //   if (status === 404) return false;
    //   return failureCount < 2;
    // },
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
    staleTime: 300_000, // 5 minutes
    gcTime: 3_600_000, // Garbage collect after 1h
    structuralSharing: true,
  },
  mutations: {
    retry: false,
    gcTime: 0, // Immediately GC unused mutations
  },
};

export const queryClient = new QueryClient({
  defaultOptions,
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      // console.log('in global config success');

      if (mutation.meta?.successMessage) {
        toaster.create({
          description: mutation.meta?.successMessage,
          type: "success",
        });
      }
    },
    onError: (error) => {
      // console.log('in global config error');

      toaster.create({
        description: getErrorMessage(error),
        type: "error",
      });
    },
    onSettled: (_data, _error, _variables, _context, mutation) => {
      // console.log('in global config settled');

      if (mutation?.meta?.invalidatesQuery) {
        queryClient.invalidateQueries({
          queryKey: mutation?.meta?.invalidatesQuery as any,
        });
      }
    },
  }),
});

export type ExtractFnReturnType<Fn extends (...args: any) => any> = Awaited<
  ReturnType<Fn>
>;

export type QueryConfigType<Fn extends (...args: any) => Promise<any>> = Omit<
  UseQueryOptions<Awaited<ReturnType<Fn>>, AxiosError>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<Fn extends (...args: any) => Promise<any>> = Omit<
  UseMutationOptions<Awaited<ReturnType<Fn>>, AxiosError, Parameters<Fn>[0]>,
  "mutationFn"
>;

export {
  useQuery,
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
