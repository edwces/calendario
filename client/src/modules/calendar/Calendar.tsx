import { useContext, useState } from "react";
import { useGetUserEventsQuery } from "../../generated/graphql";
import userStateContext from "../../stores/userState/userStateContext";
import CalendarBar from "./bar/CalendarBar";
import MonthView from "./MonthView";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const { user } = useContext(userStateContext);
  const [result, reexecute] = useGetUserEventsQuery({
    variables: { where: { userId: { equals: user?.id } } },
  });
  const { data, error, fetching } = result;

  const onLeft = () => {
    const newDate = new Date();
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth() - 1);
    setDate(newDate);
  };

  const onRight = () => {
    const newDate = new Date();
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth() + 1);
    setDate(newDate);
  };

  if (error) return <section>Error</section>;
  if (fetching) return <section>Fetching</section>;

  return (
    <section className="flex flex-col h-screen w-screen">
      <CalendarBar onLeft={onLeft} onRight={onRight} date={date} />
      <MonthView
        date={date}
        events={data!.events.filter(
          (item) =>
            new Date(item.date).getMonth() <= date.getMonth() + 1 &&
            new Date(item.date).getMonth() >= date.getMonth() - 1 &&
            new Date(item.date).getFullYear() === date.getFullYear()
        )}
      />
    </section>
  );
}
