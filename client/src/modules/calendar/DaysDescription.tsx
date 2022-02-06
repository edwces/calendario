export default function DaysDescription() {
  return (
    <ul className="flex flex-row w-full p-2 gap-1">
      {[
        "Poniedzialek",
        "Wtorek",
        "Sroda",
        "Czwartek",
        "Piatek",
        "Sobota",
        "Niedziela",
      ].map((item, index) => (
        <li className="grow" key={index}>
          <h2 className=" text-center">{item}</h2>
        </li>
      ))}
    </ul>
  );
}
