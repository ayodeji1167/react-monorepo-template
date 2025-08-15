import {
  useGetUserOrganizationsQuery,
  useGetUserQuery,
} from "@/feature/auth/queries/user";
import { useAppContext } from "@/provider/AppContext";
import { useEffect } from "react";

export function useCurrentOrganization() {
  const { currentOrganization, setCurrentOrganization } = useAppContext();

  const { data: UserData, isSuccess: UserSuccess } = useGetUserQuery();
  const userHasOrganizations = Number(UserData?.organizations?.length) > 0;

  const { data: AllOrganizations, isSuccess: AllOrgsSuccess } =
    useGetUserOrganizationsQuery({
      enabled: UserSuccess && !userHasOrganizations,
    });

  useEffect(() => {
    if (!UserSuccess || currentOrganization) return;

    const organizationId = userHasOrganizations
      ? UserData.organizations[0]?.id
      : AllOrganizations?.result?.[0]?.id;

    if (organizationId) {
      setCurrentOrganization(organizationId);
    }
  }, [
    UserSuccess,
    AllOrgsSuccess,
    currentOrganization,
    UserData,
    AllOrganizations,
    userHasOrganizations,
    setCurrentOrganization,
  ]);
  return {
    currentOrganization,
    isLoading:
      !UserSuccess || (UserSuccess && !userHasOrganizations && !AllOrgsSuccess),
  };
}
