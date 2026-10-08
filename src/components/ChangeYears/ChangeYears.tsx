import { ButtonChangeYear } from '../ui/ButtonChangeYear/ButtonChangeYear';
import { ScrollLine } from '../ui/ScrollLine/ScrollLine';
import style from './ChangeYears.module.scss';

interface Props {
  currentYear: number;
  setYear: (year: number) => void;
}

export function ChangeYears({ currentYear, setYear }: Props) {
  return (
    <div className={style.changeBar}>
      <ButtonChangeYear
        way="down"
        currentYear={currentYear}
        setYear={setYear}
      />
      <ScrollLine
        currentYear={currentYear}
        setYear={setYear}
      />
      <ButtonChangeYear
        way="top"
        currentYear={currentYear}
        setYear={setYear}
      />
    </div>
  );
}
