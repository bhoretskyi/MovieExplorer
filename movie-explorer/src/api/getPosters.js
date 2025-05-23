import axios from "axios";
const API_KEY = "912f8b69";

export const getPosters = async (title) => {
  const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
  return res.data;
};
