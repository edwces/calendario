import { useState } from "react";
import Button from "../../components/Button";

export default function ViewSwitcher() {
  const [current, changeCurrent] = useState(-1);

  return (
    <div className="p-2 inline-flex flex-row bg-slate-100 gap-2 rounded-lg">
      {["Monthly", "Weekly", "Daily"].map((item, index) => (
        <Button
          key={index}
          onClick={() => changeCurrent(index)}
          variant={current === index ? "active" : "disabled"}
          size="lg"
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
