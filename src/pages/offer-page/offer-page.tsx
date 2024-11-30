import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import Reviews from '../../componets/reviews/review';
import { AuthorizationStatus } from '../../app/router/router/router';
import Map from '../../componets/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { getAdultsText, getBedroomsText, getRatingStars } from '../../util';
import { MAX_RATING } from '../../const';
import { offerPageSelector } from '../../store/slices/slice-offer';
import { useEffect } from 'react';
import { fetchAllReviews, fetchOffer } from '../../store/thunk/offers-api';
import Spinner from '../../componets/spinner-coponent/spinner';
import Header from '../../componets/header/header';
import { offersSelectors } from '../../store/slices/slice-offers';
import OfferGallery from '../../componets/offer-gallery/offer-gallery';
import NearByContainer from '../../componets/near-by-container/near-by-container';
import FavoriteButton from '../../componets/favorite-button/favorite-button';
import { reviewsSelectors } from '../../store/slices/slice-reviews';


type OfferPageProps = {
  authorizationStatus: AuthorizationStatus;
}


export default function OfferPage ({authorizationStatus}: OfferPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(offersSelectors.offers);
  const currentCity = useAppSelector(offersSelectors.currentCity);
  const offerPage = useAppSelector(offerPageSelector.offerPage);
  const nearby = useAppSelector(offerPageSelector.nearByOffer);
  const comments = useAppSelector(reviewsSelectors.reviews);
  const {id} = useParams();
  const offerId = id?.trim() ?? '';


  useEffect(() => {
    dispatch(fetchOffer(offerId));
    dispatch(fetchAllReviews(offerId));
  },[dispatch, offerId]);

  if(offerId === '') {
    return <NotFoundPage/>;
  }

  if (!offerPage) {
    return <Spinner/>;
  }

  const activeOfferId = offers.find((offer) => offer.id === id);

  const {isPremium, title, rating,type,bedrooms,price,maxAdults,host,description,images,isFavorite} = offerPage;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.slice(0,6).map((image)=> (<OfferGallery key={image} image={image}/>))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ? <div className="offer__mark"><span>Premium</span></div> : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <FavoriteButton className='offer' iconWidth='31' iconHeight='33' isFavorite={isFavorite} isAuth = {authorizationStatus === AuthorizationStatus.Auth}/>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${getRatingStars(rating, MAX_RATING)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {getBedroomsText(bedrooms)}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {getAdultsText(maxAdults)}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">{title}</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">Wi-Fi</li>
                  <li className="offer__inside-item">Washing machine</li>
                  <li className="offer__inside-item">Towels</li>
                  <li className="offer__inside-item">Heating</li>
                  <li className="offer__inside-item">Coffee machine</li>
                  <li className="offer__inside-item">Baby seat</li>
                  <li className="offer__inside-item">Kitchen</li>
                  <li className="offer__inside-item">Dishwasher</li>
                  <li className="offer__inside-item">Cabel TV</li>
                  <li className="offer__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">{title}</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro && <span className='offer__user-status'> Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {title}
                  </p>
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                {
                  <Reviews
                    comments={comments}
                    isAuth = {authorizationStatus === AuthorizationStatus.Auth}
                  />
                }
              </section>
            </div>
          </div>
          <Map
            className='offer__map'
            city={currentCity}
            offers={nearby}
            activeOffer={activeOfferId}
          />
        </section>
        <NearByContainer/>
      </main>
    </div>


  );
}
