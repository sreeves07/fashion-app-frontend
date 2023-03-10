import { useState, useEffect } from "react";
import axios from "axios"
import SectionWrapper from "./SectionWrapper";
const API = process.env.REACT_APP_API_URL

const Drips = () => {
    const [collection, setCollection] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const sortData = (data) => {
        const newData = {};
        for (let i = 0; i < data.length; i++) {
          const currCategory = data[i];
          if (!newData[currCategory.category]) {
            newData[currCategory.category] = [];
          }
          newData[currCategory.category].push(currCategory);
        }
        return newData;
      }

      const tester = sortData(collection)

    useEffect(() => {
        axios.get(`${API}/drip`)
            .then((res) => {
                setCollection(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
              window.alert("Error cant find drip!");
            });
    },[])

    return (
        isLoading ? <h3> Loading... </h3> : 
        <div> 

        {Object.keys(tester).map(function (keyName) {
        return (
          <>
            <h1>{keyName}</h1>
            <SectionWrapper key={tester[keyName].id} drip={tester[keyName]} />
          </>
        );
      })}
        </div>
    );
};

export default Drips;