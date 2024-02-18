import MainPage from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  cardCount: number;
}

export default function App({cardCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage cardCount={cardCount} />
  );
}
