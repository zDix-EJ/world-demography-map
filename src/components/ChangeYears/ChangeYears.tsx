import { ButtonChangeYear } from '../ui/ButtonChangeYear/ButtonChangeYear';
import { ScrollLine } from '../ui/ScrollLine/ScrollLine';
import style from './ChangeYears.module.scss';

interface Props {
  currentYear: number;
  setYear: (year: number) => void;
}

export function ChangeYears({ currentYear, setYear }: Props) {
  const minYear = 1990;
  const maxYear = new Date().getFullYear();

  return (
    <div className={style.changeBar}>
      <ButtonChangeYear
        way="down"
        currentYear={currentYear}
        minYear={minYear}
        maxYear={maxYear}
        setYear={setYear}
      />
      <ScrollLine
        currentYear={currentYear}
        minYear={minYear}
        maxYear={maxYear}
        setYear={setYear}
      />
      <ButtonChangeYear
        way="top"
        currentYear={currentYear}
        minYear={minYear}
        maxYear={maxYear}
        setYear={setYear}
      />
    </div>
  );
}
