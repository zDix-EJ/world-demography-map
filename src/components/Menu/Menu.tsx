import style from './Menu.module.scss';

interface Props {}

export function Menu({}: Props) {
	return (
		<div className={style.menu}>
			<h1>Меню</h1>
			<hr className={style.separator} />
			<div className={style.buttonBox}>
				<p>Данные на карте</p>
				<button>Population</button>
				<button>Deaths</button>
				<button>Born</button>
			</div>
			<hr className={style.separator} />
			<div className={style.info}>
				<p>Источники</p>
			</div>
		</div>
	);
}
