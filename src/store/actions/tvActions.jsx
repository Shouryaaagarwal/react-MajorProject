export { removetv } from "../reducers/tvSlice";
import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch, getstate) => {
  try {
    const details = await axios.get(`/tv/${id}`);
    const extenalids = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const translations= await axios.get(`/tv/${id}/translations`);
    const watchprovider = await axios.get(`/tv/${id}/watch/providers`);

    let theultimatedetails = {
      details: details.data,
      extenalids: extenalids.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results, 
      translations:translations.data.translations.map(t=>t.english_name) , 
      videos: videos.data.results.find(m=>m.type === "Trailer"),
      watchprovider: watchprovider.data.results.IN,
    };
    dispatch(loadtv(theultimatedetails))
  } catch (error) {
    console.log(error);
  }
};
