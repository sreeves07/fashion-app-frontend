import Drip from "./Drip";

const SectionWrapper = ({ drip }) => {
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