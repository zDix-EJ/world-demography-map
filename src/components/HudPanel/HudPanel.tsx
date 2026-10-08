import { TIndicator } from '@/types/data';
import { useState } from 'react';
import { Menu } from '../Menu/Menu';
import { ArrowOpenMenu } from '../ui/ArrowOpenMenu/ArrowOpenMenu';
import styles from './HudPanel.module.scss';

interface Props {
  indicator: TIndicator;
  setIndicator: (indicator: TIndicator) => void;
}

export function HudPanel({ setIndicator, indicator }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.hudPanel}>
      <Menu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        indicator={indicator}
        setIndicator={setIndicator}
      />
      <ArrowOpenMenu
        startWay="right"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
