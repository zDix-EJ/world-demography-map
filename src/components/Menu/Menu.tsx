import { TIndicator } from '@/types/data';
import { ButtonMenu } from '../ui/ButtonMenu/ButtonMenu';
import style from './Menu.module.scss';
import { MENU_BUTTONS } from './buttons.data';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  indicator: TIndicator;
  setIndicator: (indicator: TIndicator) => void;
}

export function Menu({ indicator, setIndicator }: Props) {
  return (
    <div className={style.menu}>
      <h1>Меню</h1>
      <hr className={style.separator} />
      <div className={style.buttonBox}>
        <p>Данные на карте</p>
        {MENU_BUTTONS.map(button => (
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
