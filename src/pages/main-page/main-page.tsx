import { useState } from 'react';
import Logo from '../../componets/logo/logo';
import OfferCard from '../../componets/offer-card/offer-card';
import {TOffer } from '../../types/types';
import { Nullable } from 'vitest';
import Map from '../../componets/map/map';
import {useAppSelector } from '../../hooks/store';
import { CITIES_LOCATION, SortingTypes} from '../../const';
import classNames from 'classnames';
import { offersSelectors } from '../../store/slices/slice';
import Sort from '../../componets/sort/sort-main';
import City from '../../componets/locations-city/locations-city';
import { sort } from '../../util';


export default function MainPage (): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const [currentSortingType, setСurrentSortingType] = useState(SortingTypes.Popular);
  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer || null);
  };

  const offers = useAppSelector(offersSelectors.offers);
  const currentCity = useAppSelector(offersSelectors.currentCity);


  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);

  const isEmpty = currentOffers.length === 0;


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={classNames('page__main', 'page__main--index', {'page__main--index-empty': isEmpty})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES_LOCATION.map((city) =>
                (
                  <City
                    key={city.name}
                    city= {city}
                  />
                ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentOffers.length} place{currentOffers.length > 1 && 's'} to stay in {currentCity.name}
              </b>
              <Sort current={currentSortingType} setter={setСurrentSortingType} />
              <div className="cities__places-list places__list tabs__content">
                {sort(offers, currentSortingType).map((offer) => (
                  <OfferCard
                    key={offer.id}
                    offer={offer}
                    handleHover={handleHover}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                className='cities__map'
                city={currentCity}
                offers={currentOffers}
                activeOffer={activeOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}


