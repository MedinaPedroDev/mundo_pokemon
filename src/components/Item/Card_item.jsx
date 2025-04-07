import React from 'react'
import IconTriste from "../../assets/iconSvg/triste.svg"
import { Link } from "react-router-dom";

function Card_item({ item }) {
    return (
        <Link to={`/item/${item.name_original}`} className=" card-item text-decoration-none" >
            <div className='card-item2 '>
                <img src={item.img ? item.img : IconTriste} width="120px" alt={item.name_original} />
                <p>{item.name.replace(/-/g, " ")}</p>
            </div>
        </Link>
    )
}

export default Card_item