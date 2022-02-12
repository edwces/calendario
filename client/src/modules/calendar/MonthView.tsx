import { useEffect, useState } from "react";
import Tile from "../../components/Tile";
import EventController from "../modals/EventController";
import { Event } from "../../generated/graphql";
import { getDaysInMonth, getFirstDay } from "../../lib/dateUtils";

interface MonthViewProps {
  date: Date; // the current month the view displays
  events: Partial<Event>[];
}

export default function MonthView({ date, events }: MonthViewProps) {
  const [isOpen, setOpen] = useState(""); // controls the event modal

  console.log(events);

  const daysBefore = getFirstDay(date).getDay() - 1;

  const calculateDay = (index: number, wIndex: number) =>
    index + 7 * wIndex - daysBefore + 1;

  const getDate = (index: number, wIndex: number) => {
    const day = calculateDay(index, wIndex);
    return new Date(date.getFullYear(), date.getMonth(), day);
  };

  const notInMonth = (day: number) => {
    return day <= 0 || day > getDaysInMonth(date);
  };

  return (
    <section className="flex flex-col p-2 h-full rounded-md bg-slate-200 gap-1">
      {[...Array(5)].map((item, wIndex) => (
        <div className="grow flex flex-row gap-1" key={wIndex}>
          {[...Array(7)].map((item, index) => (
            <Tile
              key={getDate(index, wIndex).getDate()}
              date={getDate(index, wIndex).getDate()}
              onClick={() =>
                setOpen(getDate(index, wIndex).toLocaleDateString("en-CA"))
              }
              events={events.filter(
                (item) =>
                  new Date(item.date).toLocaleDateString().split("T")[0] ===
                  getDate(index, wIndex).toLocaleDateString().split("T")[0]
              )}
              variant={
                notInMonth(calculateDay(index, wIndex)) ? "disabled" : "primary"
              }
            ></Tile>
          ))}
        </div>
      ))}

      <EventController
        isOpen={!!isOpen}
        selectedDate={isOpen}
        onRequestClose={() => setOpen("")}
      />
    </section>
  );
}
