import styles from './AppHeader.module.scss';

interface Props {}

export function AppHeader({}: Props) {
	return (
		<div className={styles.header}>
			<h1>ДЕМОГРАФИЯ</h1>
		</div>
	);
}
