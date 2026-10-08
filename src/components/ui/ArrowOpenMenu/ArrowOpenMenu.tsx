import clsx from 'clsx';
import style from './ArrowOpenMenu.module.scss';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  startWay: 'right' | 'left';
}

export function ArrowOpenMenu({ isMenuOpen, setIsMenuOpen, startWay }: Props) {
  const handleOpen = () => setIsMenuOpen(true);
  return (
    <button
      className={clsx(style.arrowWrapper, isMenuOpen && style.open)}
      onClick={handleOpen}
    >
      <img
        className={clsx(style.arrowImg)}
        src={
          startWay == 'right'
            ? '/arrow/arrow-right.svg'
            : '/arrow/arrow-left.svg'
        }
        alt={'Открыть меню'}
      />
    </button>
  );
}
