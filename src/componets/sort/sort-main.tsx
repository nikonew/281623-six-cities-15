import { useEffect } from 'react';
import { SORT_OPTIONS, SortingTypes } from '../../const';
import { useBoolean } from '../../hooks/useBoolean';
import classNames from 'classnames';

type SortProps = {
  current: SortingTypes;
  setter: React.Dispatch<React.SetStateAction<SortingTypes>>;
}

export default function Sort ({current, setter}: SortProps): JSX.Element {
  const {isOn, off, toggle} = useBoolean(false);

  useEffect (()=> {
    if(isOn) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          off();
        }
      };

      document.addEventListener('keydown', onEscKeyDown);

      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  }, [isOn,off]);

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggle}>
      <span className="places__sorting-caption">{'Sort by '}</span>
      <span className="places__sorting-type" tabIndex={0}>
        {current}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={classNames('places__options', 'places__options--custom', { 'places__options--opened': isOn,
        })}
      >
        {SORT_OPTIONS.map((type) => (
          <li
            className={classNames('places__option', { 'places__option--active': current === type })}
            key={type}
            onClick={() => setter(type)}
            tabIndex={0}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}
