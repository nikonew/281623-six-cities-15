import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { offerPageSelector } from '../../store/slices/slice-offer';
import { fetchNearBy } from '../../store/thunk/offers-api';
import NearByOffers from './near-by-offers';
import Spinner from '../spinner-coponent/spinner';

export default function NearByContainer ():JSX.Element {
  const dispatch = useAppDispatch();
  const nearby = useAppSelector(offerPageSelector.nearByOffer);
  const {id} = useParams();
  const offerId = id?.trim() ?? '';

  useEffect (() => {
    dispatch(fetchNearBy(offerId));
  },[dispatch, offerId]);

  if (!offerId) {
    return <Spinner/>;
  }
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
    Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {
            nearby.map((nearBy) => (
              <NearByOffers
                key={nearBy.id}
                nearBy = {nearBy}
              />))
          }
        </div>
      </section>
    </div>
  );
}
