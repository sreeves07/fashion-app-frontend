import axios from "axios";
import { useState, useEffect } from "react";
import {  useParams, useNavigate, Link } from "react-router-dom";
import HoverImage from "./HoverImage";
import RelatedDrip from "./RelatedDrip";
const API = process.env.REACT_APP_API_URL

const DripDetails = () => {
    const [collection, setCollection] = useState({})
    const [related, setRelated] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();
    const {img2_url, img_url, name, price, description, product_url, store_name, category} = collection
   
    const getRelatedItems = () => {
        return related.filter((drip) => drip?.category === category)
    }

    const filtered = getRelatedItems();

    const deleteDrip = () => {
        axios
          .delete(`${API}/drip/${id}`)
          .then(() => {
            navigate("/drip");
            window.alert("Item successfully deleted.");
          })
          .catch((err) => {
            window.alert("Error, Item not deleted.");
          });
      };

    useEffect(() => {
        axios.get(`${API}/drip`)
          .then((response) => {
            setRelated(response.data);
          });
        }, []);

    useEffect(() => {
        axios.get(`${API}/drip/${id}`)
          .then((response) => {
            setCollection(response.data[0]);
          });
        }, [id, navigate]);

    return (
        <div className="wrapper">
            <div className="imageWrapper">
            <HoverImage 
            img_url={img_url} 
            img2_url={img2_url} 
            alt={`Image of the ${name}`} 
            height='100%' 
            width='100%'
            />
            </div>
            <div className="textWrapper">
                <h1>{name}</h1>
                <h2>${price}</h2>
                <p>{description}</p>
                <span>Available at {""}
                    <a href={product_url} target="_blank" rel="noreferrer" >{store_name}</a>
                </span>
                
            </div>
            <div className="relatedWrapper">
               <RelatedDrip filtered={filtered} />
            </div>
            <div className="dripDetailsButtons">
                <Link to="/drip">
                    <button id="btnBack">Back</button>
                </Link>
                <Link to={`/drip/${id}/edit`}>
                    <button id="btnEdit">Edit</button>
                </Link>
                <button id="btnDelete" onClick={deleteDrip}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DripDetails;