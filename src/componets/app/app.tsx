import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  cardCount: number;
}

export default function App({cardCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage cardCount={cardCount} />
  );
}
