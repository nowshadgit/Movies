import Axios from "axios";
import { reverse } from "named-urls";
import { MOVIES_ROUTE } from "../config";
import { PAGE } from "./constants";

const redirect = (props, url) => {
  props.history.push(url);
};

const getLocalStateData =(key)=>{
  let Items = localStorage.getItem(key)
  if(Items){
    Items = JSON.parse(Items)
  }else{
    Items = []
  }
  return Items
}

const setLocalStateData =(key, arr)=>{
  localStorage.setItem(key, JSON.stringify(arr))
}

const removeItems = (arr,item)=>{
    const index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr
}



const getData=(url)=>{
  return Axios.get(url)
}

function handleClick(id, props) {
  const cuProps = this ? this.props : props
  const {getMoviesWithId} = cuProps
  if(id == "fav" || id == "unfav"){
    redirect(cuProps, 
      reverse('/')
    )
    getMoviesWithId(getLocalStateData(id))
  }else{
    redirect(cuProps, 
      reverse(MOVIES_ROUTE[PAGE.MOVIE_LIST][PAGE.MOVIE_DETAILS]['SHOW'], {movieId: id})
    )
  }
};


export {
  redirect,
  getLocalStateData,
  setLocalStateData,
  removeItems,
  getData,
  handleClick
};
