import clsx from 'clsx';
import style from './ButtonChangeYear.module.scss';

export type CurrentWayButton = 'top' | 'down';

interface Props {
  text?: string;
  way: CurrentWayButton;
  currentYear: number;
  setYear: (year: number) => void;
}

export function ButtonChangeYear({ text, way, currentYear, setYear }: Props) {
  const howYearNow = new Date().getFullYear();
  const isDesabledButton =
    way === 'top' ? currentYear >= howYearNow : currentYear <= 1980;

  const changeYearButton = () => {
    if (way === 'top') {
      if (currentYear + 1 > howYearNow) return;
      setYear(currentYear + 1);
    } else if (way === 'down') {
      if (currentYear - 1 < 1980) return;
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
