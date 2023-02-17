import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const DripEditForm = () => {
    const [drip, setDrip] = useState({
        name: "",
        price: 0,
        category: "",
        description: "",
        store_name: "",
        product_url: "",
        img_url: "",
        img2_url: ""
    });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setDrip({
      ...drip,
      [e.target.id]: e.target.value,
    });
  };

  const handleNumberChange = (e) => {
    setDrip({
      ...drip,
      [e.target.id]: Number(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/drip/${id}`, drip)
      .then(() => navigate(`/drip`))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    axios
      .get(`${API}/drip/${id}`)
      .then((response) => setDrip(response.data[0]))
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          placeholder="Ralph Lauren Polo T-Shirt..."
          onChange={handleTextChange}
          value={drip.name}
        />
        <label htmlFor="price">Price: </label>
        <input
          id="price"
          type="number"
          min={0}
          onChange={handleNumberChange}
          value={drip.price}
        />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          type="text"
          onChange={handleNumberChange}
          value={drip.category}
        />
       <label htmlFor="description">Product Description: </label>
        <input
          id="description"
          type="text"
          onChange={handleNumberChange}
          value={drip.description}
        />
         <label htmlFor="store_name">Store Name: </label>
        <input
          id="store_name"
          type="text"
          onChange={handleNumberChange}
          value={drip.store_name}
        />
         <label htmlFor="product_url">Product URL: </label>
        <input
          id="product_url"
          type="text"
          onChange={handleNumberChange}
          value={drip.product_url}
        />
        <label htmlFor="image">Primary Image: </label>
        <input
          id="image"
          type="text"
          placeholder="https://picsum..."
          onChange={handleTextChange}
          value={drip.img_url}
        />
        <label htmlFor="image2">Secondary Image: </label>
        <input
          id="image"
          type="text"
          placeholder="https://picsum..."
          onChange={handleTextChange}
          value={drip.img2_url}
        />
        <div></div>
        <input id="submit-button" type="submit" />
      </form>
    </div>
  );
};

export default DripEditForm;
