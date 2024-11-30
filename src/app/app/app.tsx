import { AppRoute, AuthorizationStatus } from '../router/router/router';
import MainPage from '../../pages/main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../router/private-route';
import { TComment} from '../../types/types';
import { useAppDispatch } from '../../hooks/store';
import { useEffect } from 'react';
import { fetchAllOffers } from '../../store/thunk/offers-api';


type AppScreenProps = {
  comments: TComment[];
  authorizationStatus: AuthorizationStatus;
}

export default function App({comments, authorizationStatus}: AppScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect (() => {
    dispatch(fetchAllOffers());
  });

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritePage />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage comments={comments} authorizationStatus= {authorizationStatus}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

