import { useState } from 'react';
import OfferCard from '../../componets/offer-card/offer-card';
import {TCity, TOffer } from '../../types/types';
import { Nullable } from 'vitest';
import Map from '../../componets/map/map';
import {useAppDispatch, useAppSelector } from '../../hooks/store';
import { CITIES_LOCATION, SortingTypes} from '../../const';
import classNames from 'classnames';
import { offersSelectors, setCurrentCity } from '../../store/slices/slice-offers';
import Sort from '../../componets/sort/sort-main';
import City from '../../componets/city/city';
import { sort } from '../../util';
import Header from '../../componets/header/header';
import Spinner from '../../componets/spinner-coponent/spinner';
import { AuthorizationStatus } from '../../app/router/router/router';

type MainProps = {
  authorizationStatus: AuthorizationStatus;
}
export default function MainPage ({authorizationStatus}:MainProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const [currentSortingType, setСurrentSortingType] = useState(SortingTypes.Popular);

  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer || null);
  };

  const dispatch = useAppDispatch();

  const offers = useAppSelector(offersSelectors.offers);
  const currentCity = useAppSelector(offersSelectors.currentCity);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);


  const isEmpty = currentOffers.length === 0;

  const handleCityChange = (city: TCity) => {
    dispatch(setCurrentCity(city));
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
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
                    isActive={city.name === currentCity.name}
                    onClick={handleCityChange}
                  />
                ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              {currentOffers.length > 0 && (
                <>
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {currentOffers.length} place{currentOffers.length > 1 && 's'} to stay in {currentCity.name}
                  </b>
                  <Sort current={currentSortingType} setter={setСurrentSortingType} />
                  <div className="cities__places-list places__list tabs__content">
                    {sort(currentOffers, currentSortingType).map((offer) => (
                      <OfferCard
                        key={offer.id}
                        offer={offer}
                        handleHover={handleHover} isAuth={authorizationStatus === AuthorizationStatus.Auth}
                      />
                    ))}
                  </div>
                </>
              )}
              {!offers.length && <Spinner/>}
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


