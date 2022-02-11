import { useEffect, useState } from "react";
import Tile from "../../components/Tile";
import EventController from "../modals/EventController";
import { Event } from "../../generated/graphql";
import {
  getDatesAfter,
  getDatesBefore,
  getDaysInMonth,
  getFirstDay,
  getLastDay,
} from "../../lib/dateUtils";

interface MonthViewProps {
  date: Date; // the current month the view displays
  events: Partial<Event>[];
}

export default function MonthView({ date, events }: MonthViewProps) {
  const [isOpen, setOpen] = useState(""); // controls the event modal

  const daysBefore = getFirstDay(date).getDay() - 1;

  const getDate = (index: number, wIndex: number) => {
    const day = index + 7 * wIndex - daysBefore + 1;
    return new Date(date.getFullYear(), date.getMonth(), day).getDate();
  };

  return (
    <section className="flex flex-col p-2 h-full rounded-md bg-slate-200 gap-1">
      {[...Array(5)].map((item, wIndex) => (
        <div className="grow flex flex-row gap-1" key={wIndex}>
          {[...Array(7)].map((item, index) => (
            <Tile
              key={index + 2}
              date={getDate(index, wIndex)}
              onClick={() =>
                setOpen(
                  new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    getDate(index, wIndex)
                  ).toLocaleDateString("en-CA")
                )
              }
              events={events.filter(
                (item) =>
                  new Date(item.date).getDate() === getDate(index, wIndex)
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
