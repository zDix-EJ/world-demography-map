import style from './ScrollLine.module.scss';

interface Props {
  currentYear: number;
  minYear: number;
  maxYear: number;
  setYear: (year: number) => void;
}

export function ScrollLine({ currentYear, minYear, maxYear, setYear }: Props) {
  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(Number(event.target.value));
  };

  return (
    <div className={style.lineBox}>
      <label
        htmlFor="changeYear"
        className={style.lineLabel}
      >
        {currentYear}
      </label>
      <input
        className={style.line}
        type="range"
        id="changeYear"
        min={minYear}
        max={maxYear}
        step={1}
        value={currentYear}
        onChange={handleChangeYear}
      />
    </div>
  );
}
