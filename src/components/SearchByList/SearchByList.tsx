import style from './SearchByList.module.scss';

interface Props {}

export function SearchByList({}: Props) {
  return (
    <div className={style.list}>
      <div className={style.searchBox}>
        <input
          className={style.input}
          id="search"
          type="search"
        />
      </div>
    </div>
  );
}
