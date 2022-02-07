import { useState } from "react";
import Tile from "../../../components/Tile";
import EventController from "../EventController";
import EventModal from "../EventModal";

export default function MonthView() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className=" grid grid-cols-7 p-2 auto-cols-max auto-rows-max rounded-md bg-slate-200 gap-1 w-full h-full">
      <Tile key={0} date={30}></Tile>
      <Tile key={1} date={31}></Tile>
      {[...Array(31)].map((item, index) => (
        <Tile
          key={index + 2}
          date={index + 1}
          onClick={() => setOpen(true)}
        ></Tile>
      ))}
      <Tile key={32} date={1}></Tile>
      <Tile key={33} date={2}></Tile>
      <EventController isOpen={isOpen} onRequestClose={() => setOpen(false)} />
    </section>
  );
}
