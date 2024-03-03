import { AppRoute, AuthorizationStatus } from '../router/router/router';
import MainPage from '../../pages/main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../router/private-route';
import { TOffer } from '../../componets/offer-card/types';


type AppScreenProps = {
  offers: TOffer[];
  authorizationStatus: AuthorizationStatus;
}

export default function App({offers, authorizationStatus}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers} authorizationStatus={authorizationStatus}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritePage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

