import clsx from 'clsx';
import style from './ArrowOpenMenu.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  startWay: 'right' | 'left';
}

export function ArrowOpenMenu({ isOpen, setIsOpen, startWay }: Props) {
  const handleOpen = () => setIsOpen((isOpen: boolean) => !isOpen);
  return (
    <div
      className={style.arrowWrapper}
      onClick={handleOpen}
    >
      <img
        className={clsx(style.arrowImg, isOpen ? style.open : '')}
        src={
          startWay == 'right'
            ? '/arrow/arrow-right.svg'
            : '/arrow/arrow-left.svg'
        }
        alt={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      />
    </div>
  );
}
