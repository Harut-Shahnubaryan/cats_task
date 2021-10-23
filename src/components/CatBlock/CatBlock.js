import React, { useEffect, useState } from "react";
import Api from "../../api/Api";
import './CatBlock.css';
import CatContainer from "./CatContainer";

function CatBlock(props) {

    const [count, setCount] = useState(0);

    const addComponent = ()=>{
        setCount(count + 1)
    }

    return (
        <>
            <div className="cats">
                <CatContainer />
                { Array(count).fill(<CatContainer />) }
            </div>
            <button onClick={addComponent} className="button">add</button>
        </>
    )
}

export default CatBlock