import { AppRoute, AuthorizationStatus } from '../router/router/router';
import MainPage from '../../pages/main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../router/private-route';
import { TComment} from '../../types/types';
import { useActionCreators, /*useAppSelector*/ } from '../../hooks/store';
import { offersActions, /*offersSelectors*/ } from '../../store/slices/slice';
import { useEffect } from 'react';
//import { RequestStatus } from '../../const';


type AppScreenProps = {
  comments: TComment[];
  authorizationStatus: AuthorizationStatus;
}

export default function App({comments, authorizationStatus}: AppScreenProps): JSX.Element {

  // const status = useAppSelector(offersSelectors.offersStatus);

  const {fetchAllOffers} = useActionCreators(offersActions);

  useEffect(() => {
    fetchAllOffers()
      .unwrap()
      .then(()=> {
        // eslint-disable-next-line no-console
        console.log('SACCES');
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('ERROR');
      });
  });

  // if (status === RequestStatus.Loading) {
  //   return <div>Loading...</div>;
  // }

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

