import clsx from 'clsx';
import style from './ArrowOpenMenu.module.scss';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export function ArrowOpenMenu({ isOpen, setIsOpen }: Props) {
	const handleOpen = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

	return (
		<div
			className={style.arrowWrapper}
			onClick={handleOpen}
		>
			<img
				className={clsx(style.arrowImg, isOpen ? '' : style.open)}
				src={'/arrow/arrow-right.svg'}
				alt={isOpen ? 'Закрыть меню' : 'Открыть меню'}
			/>
		</div>
	);
}
