import axios from "axios";

export const getAutoCompletePlace = async (payload) => {
  const url = "https://barikoi.xyz/v2/api/search/autocomplete/place";
  return await axios.get(url, { params: payload });
};
