import { TCity } from '../../types/types';

type CityProps = {
    city: TCity;
    isActive: boolean;
    onClick: (city: TCity) => void;
  }

export default function City ({city,isActive, onClick}: CityProps): JSX.Element {

  const handleLinkClick = () => {
    onClick(city);
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${
        isActive ? 'tabs__item--active' : ''
      }`}
      onClick={handleLinkClick}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
