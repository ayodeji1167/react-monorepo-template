import NotifcationOne from "@dataulinzi/assets/icons/notification-1.svg";
import NotifcationTwo from "@dataulinzi/assets/icons/notification-2.svg";
import NotifcationFour from "@dataulinzi/assets/icons/notification-4.svg";
import NotifcationThree from "@dataulinzi/assets/icons/notification-3.svg";
import { createListCollection } from "@chakra-ui/react";

export const NotificationsData = [
  {
    id: "1",
    title: (
      <>
        New DSSR request <strong>DSSR-00124</strong> has been submitted
      </>
    ),
    time: "1 min ago",
    status: "unread",
    icon: NotifcationOne,
  },
  {
    id: "2",
    title: (
      <>
        Policy <strong>"Remote Work Policy V1.1"</strong> has been updated
      </>
    ),
    time: "15min ago",
    status: "unread",
    icon: NotifcationTwo,
  },
  {
    id: "3",
    title: "Task “Complete Security Training” is due tomorrow",
    time: "5h ago",
    status: "read",
    icon: NotifcationThree,
  },
  {
    id: "4",
    title: "API Services experiening minor delays",
    time: "1h ago",
    status: "read",
    icon: NotifcationFour,
  },
] as const;

export const Solutions = createListCollection({
  items: [
    {
      value: "1",
      label: "TechFin Solutions Ltd",
    },
    {
      value: "2",
      label: "Software Solutions Ltd",
    },
  ],
});
