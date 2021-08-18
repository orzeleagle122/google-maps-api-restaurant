import axios from "axios";

const url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": "c0b70ff419mshf6abc2a144dfa76p19dbe1jsn4a93647205b3",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    });
    const filtered = data.filter((item) => item.hasOwnProperty("name"));
    return filtered;
  } catch (e) {
    console.log(e);
  }
};
