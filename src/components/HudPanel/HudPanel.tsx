import { TIndicator } from '@/types/data';
import clsx from 'clsx';
import { useState } from 'react';
import { Menu } from '../Menu/Menu';
import { ArrowOpenMenu } from '../ui/ArrowOpenMenu/ArrowOpenMenu';
import style from './HudPanel.module.scss';

interface Props {
  indicator: TIndicator;
  setIndicator: (indicator: TIndicator) => void;
}

export function HudPanel({ setIndicator, indicator }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className={clsx(style.hudPanel, !isMenuOpen && style.close)}>
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        indicator={indicator}
        setIndicator={setIndicator}
      />
      <ArrowOpenMenu
        startWay="right"
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
}
