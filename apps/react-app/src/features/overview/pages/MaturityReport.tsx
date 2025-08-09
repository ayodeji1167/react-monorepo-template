import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Header from "../components/maturity-report/Header";
import { MaturityLevel } from "../components/maturity-report/MaturityLevel";
import { MaturityBreakdown } from "../components/maturity-report/MaturityBreakdown";
import { Recommendations } from "../components/maturity-report/Recommendations";
import ExportIcon from "@dataulinzi/assets/icons/export.svg";
import { Head } from "@/components/seo/head";
import { UserDashboardContainer } from "@repo/ui/hoc/UserDashboardContainer";

export function MaturityReport() {
  return (
    <>
      <Head title="Maturity Report" description="Maturity Report" />
      <UserDashboardContainer pt={"1.75rem"}>
        <Stack height="100%" width="100%">
          <Header />
          <Flex
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mb="21px"
          >
            <Text textStyle="h5-bold">Privacy Program Maturity Report</Text>
            <Button
              variant="outline"
              _hover={{
                bg: "gray.50",
              }}
              borderColor="gray.50"
              color="gray.300"
              height="52px"
              textStyle="default-regular"
              width="225px"
            >
              <Image src={ExportIcon} alt="export-icon" />
              Export Report (PDF)
            </Button>
          </Flex>
          <Flex width="100%" gap="24px">
            <Flex width="60%">
              <MaturityLevel />
            </Flex>
            <Flex flex="1">
              <MaturityBreakdown />
            </Flex>
          </Flex>
          <Flex paddingBottom="45px" paddingTop="31px">
            <Recommendations />
          </Flex>
        </Stack>
      </UserDashboardContainer>
    </>
  );
}
