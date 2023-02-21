import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const API = process.env.REACT_APP_API_URL

const DripNewForm = () => {
    let navigate = useNavigate();
    const addNewDrip = (newDrip) => {
      axios
      .post(`${API}/drip`, newDrip)
      .then(
        () => {
          navigate(`/drip`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
    }
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
      addNewDrip(drip)
      };
    
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
              onChange={handleNumberChange}
              value={drip.price}
            />
            <label htmlFor="category">Category: </label>
            <input
              id="category"
              type="text"
              onChange={handleTextChange}
              value={drip.category}
            />
           <label htmlFor="description">Product Description: </label>
            <input
              id="description"
              type="text"
              onChange={handleTextChange}
              value={drip.description}
            />
             <label htmlFor="store_name">Store Name: </label>
            <input
              id="store_name"
              type="text"
              onChange={handleTextChange}
              value={drip.store_name}
            />
             <label htmlFor="product_url">Product URL: </label>
            <input
              id="product_url"
              type="text"
              onChange={handleTextChange}
              value={drip.product_url}
            />
            <label htmlFor="image">Primary Image: </label>
            <input
              id="img_url"
              type="text"
              placeholder="https://picsum..."
              onChange={handleTextChange}
              value={drip.img_url}
            />
            <label htmlFor="image2">Secondary Image: </label>
            <input
              id="img2_url"
              type="text"
              placeholder="https://picsum..."
              onChange={handleTextChange}
              value={drip.img2_url}
            />
            <br></br>
            <div>
                <input id="submit-button" type="submit" />
            </div>
            
          </form>
        </div>
      );
    };
    

export default DripNewForm;
