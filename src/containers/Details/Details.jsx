import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ACTIONS from '../../apiConfig/actions.constants';
import './Details.scss'

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchMoviesDetails();
  }

  fetchMoviesDetails= ()=>{
    const { match, getMovieDetails } = this.props;
    const {movieId} = match.params
    getMovieDetails({movieId})
  }

  render() {
    const { DetailsReducerStore } = this.props;
    const { data } = DetailsReducerStore
    
    return (
      <div id="add-edit-Movies">
        {data && Object.keys(data).length > 0 && <div className="row">
            <div className="col col-7 ml-4 ">
              <div className="mb-2 details row "> 
                <span className="each-d-header col-2">Title</span> 
                <span className="col-1">:</span>
                <span className="each-d-body col">{data.Title}</span>
              </div>
              <div className="mb-2 details row"> 
                <span className="each-d-header col-2">Year</span> 
                <span className="col-1">:</span>
              <span className="each-d-body col">{data.Year}</span>
              </div>
              <div className="mb-2 details row"> 
                <span className="each-d-header col-2">Rated:</span> 
                <span className="col-1">:</span>
                <span className="each-d-body col">{data.Rated}</span>
                 </div>
              <div className="mb-2 details row"> 
                <span className="each-d-header col-2">Released:</span> 
                <span className="col-1">:</span>
                <span className="each-d-body col">{data.Released}</span>
              </div>
              <div className="mb-2 details row"> 
                <span className="each-d-header col-2">Runtime:</span> 
                <span className="col-1">:</span>
                <span className="each-d-body col">{data.Runtime}</span>
              </div>
              <div className="mb-2 details row"> 
                <span className="each-d-header col-2">Genre:</span> 
                <span className="col-1">:</span>
                <span className="each-d-body col">{data.Genre}</span>
              </div>
              <div className="mb-2 details row"> 
                <span className="each-d-header col-2">Director:</span> 
                <span className="col-1">:</span>
                <span className="each-d-body col">{data.Director}</span>
              </div>
              <div className="mb-2 details row"> 
                <span className="each-d-header col-2"> Writer:</span> 
                <span className="col-1">:</span>
                <span className="each-d-body col">{data.Writer}</span>
              </div>
              <div className="mb-2 details row"> 
                <span className="each-d-header col-2">Actors:</span> 
                <span className="col-1">:</span>
                <span className="each-d-body col">{data.Actors}</span>
              </div>
              <div className="mb-2 details row"> 
                <span className="each-d-header col-2">Plot:</span> 
                <span className="col-1">:</span>
                <span className="each-d-body col">{data.Plot}</span> 
              </div>
            </div>
            <div className="col col-3 movie-poster text-center">
              <img src={data.Poster} alt={"Loading..."} />
            </div>
        </div>}
      </div>
    );
  }
}

Details.propTypes = {
  inProgress: PropTypes.bool.isRequired,
  DetailsReducerStore: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  DetailsReducerStore: state.DetailsReducerStore,
});

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetails: (data) => {
      dispatch({type:ACTIONS.MOVIES.GET_MOVIE_DETAILS, data});
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Details)
);