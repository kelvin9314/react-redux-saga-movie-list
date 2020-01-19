import axios from "axios";

// console.log(process.env.REACT_APP_API_TOEKN);
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const fetchMovies = async page => {
  // const data = await axios.get(
  //   `${BASE_URL}/now_playin?api_key=${
  //     process.env.REACT_APP_API_TOEKN
  //   }&language=zh-TW&page=${page}`
  // );

  // console.log(data);
  // if (data.status >= 400) {
  //   throw new Error(data.errors);
  // }
  // return data;

  try {
    const res = await axios.get(
      `${BASE_URL}/now_playing?api_key=${
        process.env.REACT_APP_API_TOEKN
      }&language=zh-TW&page=${page}`
    );
    return res;
  } catch (err) {
    throw err;
  }
};
