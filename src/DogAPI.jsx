import axios from "axios";

const BASE_URL = "https://dog.ceo/api";

export const getDogBreeds = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds/list/all`);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const getDogImages = async (breed) => {
  try {
    const response = await axios.get(`${BASE_URL}/breed/${breed}/images/random/10`);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};
