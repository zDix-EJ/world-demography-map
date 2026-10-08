import { TIndicator } from '@/types/data';
import clsx from 'clsx';
import { ButtonMenu } from '../ui/ButtonMenu/ButtonMenu';
import { CrossButton } from '../ui/CrossButton/CrossButton';
import style from './Menu.module.scss';
import { MENU_BUTTONS } from './buttons.data';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;

  indicator: TIndicator;
  setIndicator: (indicator: TIndicator) => void;
}

export function Menu({
  isMenuOpen,
  setIsMenuOpen,
  indicator,
  setIndicator
}: Props) {
  return (
    <div className={clsx(style.menu, !isMenuOpen && style.closed)}>
      <div className={style.header}>
        <h1>Меню</h1>
        <CrossButton
          onClose={() => setIsMenuOpen(false)}
          alt="Закрыть меню"
        />
      </div>
      <hr className={style.separator} />
      <div className={style.buttonBox}>
        <p>Данные на карте</p>
        {MENU_BUTTONS.map((button) => (
          <ButtonMenu
            buttonIndicator={button.buttonIndicator}
            text={button.text}
            indicator={indicator}
            setIndicator={setIndicator}
            key={button.text}
          />
        ))}
      </div>
      <hr className={style.separator} />
      <div className={style.info}>
        <p>Источники</p>
      </div>
    </div>
  );
}
