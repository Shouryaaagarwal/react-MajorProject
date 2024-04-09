export { removemovie } from "../reducers/movieSlice";
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, getstate) => {
  try {
    const details = await axios.get(`/movie/${id}`);
    const extenalids = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const translations= await axios.get(`/movie/${id}/translations`);
    const watchprovider = await axios.get(`/movie/${id}/watch/providers`);

    let theultimatedetails = {
      details: details.data,
      extenalids: extenalids.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results, 
      translations:translations.data.translations.map(t=>t.english_name) , 
      videos: videos.data.results.find(m=>m.type === "Trailer"),
      watchprovider: watchprovider.data.results.IN,
    };
    dispatch(loadmovie(theultimatedetails))
  } catch (error) {
    console.log(error);
  }
};
