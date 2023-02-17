import HoverImage from "./HoverImage";

const RelatedDrip = ({ filtered }) => {

    return (
        <>
        
        <h3>You also like</h3>

        <div className="relatedImages">
                {filtered.splice(0, 3).map((card) => 
                <div className="relatedWrapper" key={card.id}>
                    <HoverImage
                        img_url={card.img_url}
                        img2_url={card.img2_url}
                        width={'250px'}
                        height={'250px'}
                        alt={`Image of the ${card.name}`} />
                        <p className="name">{card.name}</p>
                        <p className="relatedPrice">${card.price}</p>
                        
                </div>
                )}
        </div>
        </>

    );
};

export default RelatedDrip;