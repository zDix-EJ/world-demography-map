import clsx from 'clsx';
import style from './Loader.module.scss';

interface Props {
  error?: string | null;
  message?: string;
}

export function Loader({ error, message }: Props) {
  if (error) {
    return (
      <div className={clsx(style.loader, style.error)}>
        <p className={style.brand}>Демография</p>
        <p className={style.errorIcon}>⚠️</p>
        <p className={style.message}>{error}</p>
      </div>
    );
  }

  return (
    <div className={style.loader}>
      <p className={style.brand}>Демография</p>
      <div className={style.spinner} />
      {message && <p className={style.message}>{message}</p>}
    </div>
  );
}
