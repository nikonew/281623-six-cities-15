import { AppRoute, AuthorizationStatus } from '../router/router/router';
import MainPage from '../../pages/main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../router/private-route';
import { TComment, TOffer } from '../../types/types';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/slice';


type AppScreenProps = {
  offers: TOffer[];
  comments: TComment[];
  authorizationStatus: AuthorizationStatus;
}

export default function App({offers,comments, authorizationStatus}: AppScreenProps): JSX.Element {

  const status = useAppSelector(offersSelectors.offersStatus);

  if (status === AuthorizationStatus.Auth) {
    return <div>Loading...</div>;
  }
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
              <FavoritePage offers={offers}/>
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

