import { Link } from 'react-router-dom';
import { TOffer } from './types';
import { AppRoute } from '../../app/router/router/router';

type OfferCardProps = {
  offer: TOffer;
  handleHover: (offer?: TOffer) => void;
}

export default function OfferCard ({offer, handleHover}: OfferCardProps): JSX.Element {
  const {price,rating,type} = offer;

  const handleHoverMouseOn = () => {
    handleHover(offer);
  };

  const handleHoverMouseOff = () => {
    handleHover();
  };

  return (
    <Link to={`${AppRoute.Offer}/${offer.id}`}>
      <article
        className="cities__card place-card"
        onMouseEnter={handleHoverMouseOn}
        onMouseLeave={handleHoverMouseOff}
      >
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src="img/room.jpg"
              width={260}
              height={200}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">{price}</b>
              <span className="place-card__price-text">
              /&nbsp;night
              </span>
            </div>
            <button
              className="place-card__bookmark-button place-card__bookmark-button--active button"
              type="button"
            >
              <svg
                className="place-card__bookmark-icon"
                width={18}
                height={19}
              >
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '80%' }} />
              <span className="visually-hidden">{rating}</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">Wood and stone place</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}
