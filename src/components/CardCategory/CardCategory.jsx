import React from 'react';
import { Link } from 'react-router-dom';
import './cardCategory.css';



const CardCategory = ({ image, categoryName }) => {
    return (
        <>
            <Link to="/">
                <div className="card__category flex jc-center m-1 a-item-center pos-rel">
                    <img
                        src={image}
                        alt="category-image" />

                    <div className="category__card__text pos-abs">{categoryName}</div>
                </div>
            </Link>
        </>
    );
}


export default CardCategory;