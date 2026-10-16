import clsx from 'clsx';
import style from './SearchByList.module.scss';

interface Props {
  search: string;
  setSearch: (search: string) => void;
}

export function SearchByList({ search, setSearch }: Props) {
  return (
    <div className={style.list}>
      <label
        htmlFor="search"
        className="sr-only"
      >
        Поиск страны
      </label>
      <div className={style.searchBox}>
        <div className={style.inputWrapper}>
          <input
            id="search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Введите название страны на (пока что) английском"
          />
          <button
            className={clsx(style.deleteButton, !search && style.isHidden)}
            type="button"
            onClick={() => setSearch('')}
          >
            <img
              src="/cross.svg"
              alt="Очистить"
            />
          </button>
        </div>
        <button
          className={style.searchButton}
          type="button"
        >
          <img
            src="/search.svg"
            alt="Поиск"
          />
        </button>
      </div>
    </div>
  );
}
