import { Link } from "react-router-dom";
import HoverImage from "./HoverImage";

const Drip = ({ drip }) => {
    return (
        <div className="collectionImg" key={drip?.id}>
            <Link to={`/drip/${drip?.id}`}>
                <HoverImage 
                img_url={drip?.img_url} 
                img2_url={drip?.img2_url} 
                alt={`Image of the ${drip?.name}`} />
            </Link>
            
            <p className="name">{drip?.name}</p>
            <p>${drip?.price}</p>

            
        </div>
    );
};

export default Drip;

/*
const Product = ({ title, images, id, published_at, variants }) => {
    const publishedTime = new Date(published_at);
    const nowTime = new Date();
    const displayNew = getIsPublishedWithinLastSevenDays(nowTime, publishedTime);
    const currVariant = getCurrVariant(id, variants);
    const variantsAvailable = getNumVariantsAvailable(variants);
  
    return (
      <div key={id}>
        <ImageToggleOnHover
          displayNew={displayNew}
          primaryImg={images[0].src}
          secondaryImg={images[1].src}
          alt={`Image of the ${title}.`}
        />
        <p>{title} </p>
        <p>Price: ${currVariant.price}</p>
        {currVariant.compare_at_price ? (
          <p> Compared At: ${currVariant.compare_at_price} </p>
        ) : null}
        {variantsAvailable > 1 ? (
          <p>{variantsAvailable} Styles Available</p>
        ) : null}
      </div>
    );
  };
 */ 