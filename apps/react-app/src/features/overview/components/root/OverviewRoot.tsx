import { SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";

export default function OverviewRoot() {
  return (
    <div>
      <SimpleGrid columns={3} gap={"1rem"}>
        <Card
          title="Test title"
          description="This is a test description"
          stats="4"
          color="primary.300"
        />
        <Card
          title="Test title"
          description="This is a test description"
          stats="4"
          color="primary.300"
        />
        <Card
          title="Test title"
          description="This is a test description"
          stats="4"
          color="primary.300"
        />
      </SimpleGrid>
    </div>
  );
}
