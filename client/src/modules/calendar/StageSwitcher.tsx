import Button from "../../components/Button";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";

export default function StageSwitcher() {
  return (
    <div className="inline-flex flex-row">
      <Button variant="transparent" size="sm">
        <ArrowLeft width={34} height={34} />
      </Button>
      <Button variant="transparent" size="sm">
        <ArrowRight width={34} height={34} />
      </Button>
    </div>
  );
}
