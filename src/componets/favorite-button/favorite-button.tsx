import { useState } from 'react';
import { AppRoute } from '../../app/router/router/router';
import { useNavigate } from 'react-router-dom';

type FavoriteButtonProps = {
  className: string;
  iconWidth: string;
  iconHeight: string;
  isFavorite: boolean;
  isAuth: boolean;
}

export default function FavoriteButton ({className,iconWidth,iconHeight,isFavorite,isAuth}: FavoriteButtonProps):JSX.Element {
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const navigate = useNavigate();

  const handleFavoriteButtonClick = () => {
    if (!isAuth) {
      return navigate(AppRoute.Login, { replace: true });
    }
    setFavoriteStatus((prevState) => !prevState);

  };

  return (
    <button
      className={`${className}__bookmark-button button ${isAuth && favoriteStatus && `${className}__bookmark-button--active`}`}
      type="button"
      onClick={handleFavoriteButtonClick}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{favoriteStatus ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
