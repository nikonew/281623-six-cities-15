import { useState } from 'react';
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
import Header from '../../componets/header/header';


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
                {offers.length} place{offers.length > 1 && 's'} to stay in {currentCity.name}
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


