import { useEffect, useState } from "react";
import Tile from "../../../components/Tile";
import EventController from "../EventController";
import { Event } from "../../../generated/graphql";

interface MonthViewProps {
  date: Date; // the current month the view displays
  events: Partial<Event>[];
}

export default function MonthView({ date, events }: MonthViewProps) {
  const [isOpen, setOpen] = useState(""); // controls the event modal
  console.log(events);

  useEffect(() => {
    const dateClone = new Date(date.getTime());
    dateClone.setDate(1);
    const firstDay = dateClone.getDay();
    dateClone.setDate(31);
    const lastDay = dateClone.getDay();
    console.log(firstDay, lastDay);
  }, [date]);

  return (
    <section className="flex flex-col p-2 h-full rounded-md bg-slate-200 gap-1">
      {[...Array(5)].map((item, wIndex) => (
        <div className="grow flex flex-row gap-1" key={wIndex}>
          {[...Array(7)].map((item, index) => (
            <Tile
              key={index + 2}
              date={index + 1 + wIndex * 7}
              onClick={() =>
                setOpen(
                  new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    index + wIndex * 7
                  ).toLocaleDateString("en-CA")
                )
              }
              events={events.filter(
                (item) =>
                  new Date(item.date).getDate() === index + 1 + wIndex * 7
              )}
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
