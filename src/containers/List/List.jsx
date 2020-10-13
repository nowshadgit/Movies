import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLocalStateData, handleClick, removeItems, setLocalStateData } from '../../utils/common';
import ACTIONS from '../../apiConfig/actions.constants';
import CustomCard from '../../components/CustomCard/CustomCard';
import unfavorite from '../../images/movie.jpeg'
import favorite from '../../images/favorite.png'

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = handleClick.bind(this)
  }

  handleFav = (type, imdbID)=>{
    let items = localStorage.getItem(type)
    if(items){
      items = JSON.parse(items)
      if(!items.includes(imdbID)){
        items.push(imdbID)
      }
    }else{
      items = [imdbID]
    }
    if(type === "fav"){
        setLocalStateData("unfav", removeItems(getLocalStateData("unfav"), imdbID))
    }
    if(type === "unfav"){
      setLocalStateData("fav", removeItems(getLocalStateData("fav"), imdbID))
    }
    setLocalStateData(type, items)
    this.forceUpdate()
  }

  render() {
    const { ListReducerStore } = this.props;
    const {data, errorCode} = ListReducerStore
    
    let favItems = []
    let unfavItems = []
    if(localStorage.getItem("fav") !==null){
        favItems = JSON.parse(localStorage.getItem("fav"))
    }

    if(localStorage.getItem("unfav") !== null){
        unfavItems = JSON.parse(localStorage.getItem("unfav"))
    }

  
    let elem =
      [<CustomCard 
          className={"col col-2 p-3 m-3 card"}
          id={`fav`}
          key={1}
          clickHandler={this.handleClick}
          Title={"Favorite"}
          Poster={favorite}
        />,
        <CustomCard 
          className={"col col-2 p-3 m-3 card"}
          id={`unfav`}
          key={2}
          clickHandler={this.handleClick}
          Title={"UnFavorite"}
          Poster={unfavorite}
        />
      ]
    

      elem = [...elem, data && data.length > 0 && data.map((each, index)=>{
        return (
          <CustomCard 
            className={"col col-2 p-3 m-3 card"}
            id={`card1${index}`}
            key={index}
            clickHandler={this.handleClick}
            handleFav={this.handleFav}
            showFav={true}
            favItems={favItems}
            unfavItems={unfavItems}
            {...each}
          />
        )
      })]
      
    return (
      <div id="add-edit-Movies" className="row justify-content-center">
        {errorCode ? errorCode :elem}
      </div>
    );
  }
}

Movies.propTypes = {
  inProgress: PropTypes.bool.isRequired,
  ListReducerStore: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ListReducerStore: state.ListReducerStore,
});

const mapDispatchToProps = dispatch => {
  return {
    getMoviesWithId: (payload) => {
      dispatch({type:ACTIONS.MOVIES.GET_MOVIE_WITH_ID, payload});
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movies)
);