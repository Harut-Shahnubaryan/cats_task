import React, { useEffect, useState } from "react";
import Api from "../../api/Api";
import './CatBlock.css';


function CatContainer(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        Api.get('images/search?limit=10&page=1&category_ids=1').then((r) => {
            setData(r.data)
        })
    }, [])

    return (
                data.map((elem, i) => {
                    return (
                        <div className="cats__block" key={i}>
                            <img className="cats__img" src={elem.url}/>
                        </div>
                    )
                })
    )
}

export default CatContainer