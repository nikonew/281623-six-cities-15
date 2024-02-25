import { Link } from 'react-router-dom';
import Logo from '../../componets/logo/logo';

export default function NotFoundPage (): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <div className="container">
          <h1>404 Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </main>
    </div>
  );
}
