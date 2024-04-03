import Logo from '../../componets/logo/logo';
import FavoriteList from '../../componets/favorite-list/favorite-list';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/slice-offers';


export default function FavoritePage (): JSX.Element {

  const offers = useAppSelector(offersSelectors.offers);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <span
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </span>
                </li>
                <li className="header__nav-item">
                  <span className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {
              offers.slice(1,2).map((offer) => (
                <FavoriteList
                  key={offer.id}
                  offer = {offer}
                />))
            }
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>

  );
}
