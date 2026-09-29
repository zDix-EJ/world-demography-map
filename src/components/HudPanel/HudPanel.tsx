import { Menu } from '../Menu/Menu';
import styles from './HudPanel.module.scss';

interface Props {}

export function HudPanel({}: Props) {
	return (
		<div className={styles.hudPanel}>
			<Menu />
		</div>
	);
}
