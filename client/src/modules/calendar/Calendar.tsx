import { useState } from "react";
import { useGetUserEventsQuery } from "../../generated/graphql";
import CalendarBar from "./CalendarBar";
import MonthView from "./month/MonthView";

export default function Calendar() {
  const [date, setDate] = useState(new Date());

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

  return (
    <section className="flex flex-col h-screen w-screen">
      <CalendarBar onLeft={onLeft} onRight={onRight} date={date} />
      <MonthView />
    </section>
  );
}
