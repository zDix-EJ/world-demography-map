import styles from './AppHeader.module.scss';

interface Props {}

export function AppHeader({}: Props) {
	return <div className={styles.header}>Header</div>;
}
