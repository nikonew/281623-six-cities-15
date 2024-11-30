type props = {
    image: string;
}

export default function OfferGallery ({image}: props): JSX.Element {


  return (

    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={image}
        alt="Photo studio"
      />;
    </div>
  );
}
