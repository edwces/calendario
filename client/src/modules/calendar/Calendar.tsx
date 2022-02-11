import { useState } from "react";
import { useGetUserEventsQuery } from "../../generated/graphql";
import CalendarBar from "./CalendarBar";
import MonthView from "./month/MonthView";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [result, reexecute] = useGetUserEventsQuery({
    variables: { where: { userId: { equals: 1 } } },
  });
  const { data, error, fetching } = result;

  const onLeft = (e) => {
    const newDate = new Date();
    newDate.setMonth(date.getMonth() - 1);
    setDate(newDate);
  };

  const onRight = (e) => {
    const newDate = new Date();
    newDate.setMonth(date.getMonth() + 1);
    setDate(newDate);
  };

  if (error) return <section>Error</section>;
  if (fetching) return <section>Fetching</section>;
  if (data) {
    return (
      <section className="flex flex-col h-screen w-screen">
        <CalendarBar onLeft={onLeft} onRight={onRight} date={date} />
        <MonthView
          date={date}
          events={data.events.filter(
            (item) =>
              new Date(item.date).getMonth() === date.getMonth() &&
              new Date(item.date).getFullYear() === date.getFullYear()
          )}
        />
      </section>
    );
  }
}
