/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useRef } from "react";

const HoverImage = ({ img_url, img2_url, alt, width='350px', height='350px'}) => {
    const imageRef = useRef(null)

    return (
        <img
        src={img_url}
        alt={alt}
        ref={imageRef}
        width={width}
        height={height}
        onMouseOver={() => {
          imageRef.current.src = img2_url;
        }}
        onMouseOut={() => {
          imageRef.current.src = img_url;
        }}
      />
    );
};

export default HoverImage;