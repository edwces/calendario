import Button from "../../components/Button";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";

export default function StageSwitcher() {
  return (
    <div className="inline-flex flex-row gap-1">
      <Button variant="transparent" size="sm">
        <ArrowLeft
          width={34}
          height={34}
          className="transition ease-in duration-200 hover:fill-blue-500"
        />
      </Button>
      <Button variant="transparent" size="sm">
        <ArrowRight
          width={34}
          height={34}
          className="transition ease-in duration-200 hover:fill-blue-500"
        />
      </Button>
    </div>
  );
}
