import Changebar from "./Changebar";
import DaysDescription from "./DaysDescription";
import MonthView from "./month/MonthView";

export default function Calendar() {
  return (
    <section>
      <Changebar />
      <DaysDescription />
      <MonthView />
    </section>
  );
}
