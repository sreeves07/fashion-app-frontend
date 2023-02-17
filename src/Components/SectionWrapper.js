import { useState } from "react";
import Drip from "./Drip";

const SectionWrapper = ({ drip }) => {
    // const [startIndex, setStartIndex] = useState(0)
    // const [endIndex, setEndIndex] = useState(10)

    // const updateIndexForSection = () => {
    //     if (drip.length > endIndex + 10) {
    //       setEndIndex(endIndex + 10);
    //       setStartIndex(startIndex + 12);
    //     }
    console.log('section wrapper, drip', drip)
    return (
    <div className="catalog">
      {drip?.map((elem) => (
        <Drip key={elem.id} drip={elem}
        />
      ))}
    </div>
    );
};

export default SectionWrapper;