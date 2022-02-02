import Changebar from "./Changebar";
import MonthView from "./month/MonthView";

export default function Calendar() {
  return (
    <section>
      <Changebar />
      <MonthView />
    </section>
  );
}
