import clsx from 'clsx';
import style from './ButtonChangeYear.module.scss';

export type CurrentWayButton = 'top' | 'down';

interface Props {
  text?: string;
  way: CurrentWayButton;
  currentYear: number;
  minYear: number;
  maxYear: number;
  setYear: (year: number) => void;
}

export function ButtonChangeYear({
  text,
  way,
  currentYear,
  minYear,
  maxYear,
  setYear
}: Props) {
  const isDesabledButton =
    way === 'top' ? currentYear >= maxYear : currentYear <= minYear;

  const changeYearButton = () => {
    if (way === 'top') {
      if (currentYear + 1 > maxYear) return;
      setYear(currentYear + 1);
    } else if (way === 'down') {
      if (currentYear - 1 < minYear) return;
      setYear(currentYear - 1);
    }
  };
  return (
    <button
      onClick={() => changeYearButton()}
      className={style.yearButton}
      disabled={isDesabledButton}
    >
      <img
        className={clsx(isDesabledButton && style.buttonDisabled)}
        src={way == 'top' ? '/arrow/arrow-top.svg' : '/arrow/arrow-down.svg'}
        alt={way == 'top' ? 'Стрелка вверх' : 'Стрелка вниз'}
      />
      {text}
    </button>
  );
}
