import { MouseEventHandler } from "react";
import Button from "../../../components/Button";
import ArrowLeft from "../../../icons/ArrowLeft";
import ArrowRight from "../../../icons/ArrowRight";

interface StageSwitcherProps {
  onLeft?: MouseEventHandler<HTMLButtonElement>;
  onRight?: MouseEventHandler<HTMLButtonElement>;
}

export default function StageSwitcher({ onLeft, onRight }: StageSwitcherProps) {
  return (
    <div className="inline-flex flex-row">
      <Button variant="transparent" size="sm" onClick={onLeft}>
        <ArrowLeft width={34} height={34} />
      </Button>
      <Button variant="transparent" size="sm" onClick={onRight}>
        <ArrowRight width={34} height={34} />
      </Button>
    </div>
  );
}
