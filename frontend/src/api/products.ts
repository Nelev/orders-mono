import axios, { AxiosResponse } from "axios";
import { IProduct } from "../model/products";

const apiUrl = process.env.REACT_APP_API_URL;

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response: AxiosResponse<IProduct[]> = await axios.get(
      `${apiUrl}/orders`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProduct = (product: IProduct) => {
  return axios
    .post(`${apiUrl}/addProduct`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        ...product,
      },
    })
    .catch((error) => {
      console.error("Get products error:", error);
    });
};
