import CalendarBar from "./CalendarBar";
import DaysDescription from "./DaysDescription";
import MonthView from "./month/MonthView";

export default function Calendar() {
  return (
    <section>
      <CalendarBar />
      <DaysDescription />
      <MonthView />
    </section>
  );
}
