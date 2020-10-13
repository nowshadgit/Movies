import React from 'react'
import PropTypes from 'prop-types';
import { faHeartBroken, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CustomCard.scss'

function CustomCard(props){
    const {
        clickHandler,
        id,
        className,
        Title,
        Year,
        Poster,
        showFav,
        handleFav,
        imdbID,
        favItems,
        unfavItems
    } = props;

    const favCls = favItems && favItems.includes(imdbID) ? "fav" : ""
    const unfavCls = unfavItems && unfavItems.includes(imdbID) ? "unfav" : ""
    let elements = (
        <>
            {Poster && <div key="mpc" className="movie-pcard p-1">
                <img className="movie-poster" src={Poster} alt={"Loading..."}/>
            </div>}
            {Title && <div key="titel" className=" row justify-content-center">
                <p className="title">{Title}</p>
            </div>}
            {Year && <div key="year" className="row justify-content-center">
                <p className="year">{Year}</p>
            </div>}
            {showFav && <div key="icon" className="row fav-icon">
                <FontAwesomeIcon className={`col ${favCls}`}  icon={faHeart} onClick={(e)=>{e.stopPropagation();handleFav("fav", imdbID)}} />
                <FontAwesomeIcon className={`col ${unfavCls}`} icon={faHeartBroken} onClick={(e)=>{e.stopPropagation();handleFav("unfav", imdbID)}} />
            </div>}
        </>
    )
    return (
        <div key={id} className={className} onClick={()=>clickHandler(imdbID?imdbID:id)}>
            {elements}
        </div>
    )
}


CustomCard.prototype = {
    clickHandler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };
  

export default CustomCard