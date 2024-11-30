import { Link } from 'react-router-dom';
import { TOffer } from '../../types/types';
import { AppRoute } from '../../app/router/router/router';
import { getRatingStars } from '../../util';
import { MAX_RATING } from '../../const';
import FavoriteButton from '../favorite-button/favorite-button';

type OfferCardProps = {
  offer: TOffer;
  handleHover: (offer?: TOffer) => void;
  isAuth: boolean;
}

export default function OfferCard ({offer, handleHover, isAuth}: OfferCardProps): JSX.Element {


  const {id, price,rating,type, title, isPremium, isFavorite, previewImage} = offer;


  const handleHoverMouseOn = () => {
    handleHover(offer);
  };

  const handleHoverMouseOff = () => {
    handleHover();
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleHoverMouseOn}
      onMouseLeave={handleHoverMouseOff}
    >
      {
        isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;
              /&nbsp;night
            </span>
          </div>
          <FavoriteButton className={'place-card'} iconWidth={'18'} iconHeight={'19'} isFavorite={isFavorite} isAuth={isAuth}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingStars(rating, MAX_RATING)}%` }} />
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {title}
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
