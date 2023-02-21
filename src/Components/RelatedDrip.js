import { Link } from "react-router-dom";
import HoverImage from "./HoverImage";

const RelatedDrip = ({ filtered }) => {
    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
      
        return shuffled.slice(0, num);
      }
      
    return (
        <>
        
        <h3>You also like</h3>

        <div className="relatedImages">
                {getMultipleRandom(filtered, 3).map((card) => 
                <div className="relatedWrapper" key={card.id}>
                    <Link to={`/drip/${card.id}`}>
                    <HoverImage
                        img_url={card.img_url}
                        img2_url={card.img2_url}
                        width={'250px'}
                        height={'250px'}
                        alt={`Image of the ${card.name}`} 
                        />
                    </Link>
                        <p className="name">{card.name}</p>
                        <p className="relatedPrice">${card.price}</p>
                    
                </div>
                )}
        </div>
        </>

    );
};

export default RelatedDrip;