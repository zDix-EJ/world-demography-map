import style from './CrossButton.module.scss';

interface Props {
  onClose: () => void;
  alt: string;
}

export function CrossButton({ onClose, alt }: Props) {
  return (
    <button
      className={style.crossBox}
      onClick={onClose}
    >
      <img
        src="/cross.svg"
        alt={alt}
      />
    </button>
  );
}
