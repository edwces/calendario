import { useState } from "react";
import Tile from "../../../components/Tile";
import EventController from "../EventController";

export default function MonthView() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="flex flex-col p-2 h-full rounded-md bg-slate-200 gap-1">
      {[...Array(5)].map((item, index) => (
        <div className="grow flex flex-row gap-1" key={index}>
          {[...Array(7)].map((item, index) => (
            <Tile
              key={index + 2}
              date={index + 1}
              onClick={() => setOpen(true)}
            ></Tile>
          ))}
        </div>
      ))}

      <EventController isOpen={isOpen} onRequestClose={() => setOpen(false)} />
    </section>
  );
}
