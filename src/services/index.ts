import { config } from "@/constants";
import { IProduct } from "@/types";
import PortfolioJSON from "@/data/my-portfolio-data.json";
import axios from "axios";
import { cache } from "react";

export const revalidate = 30; // revalidate the data at most every 30 seconds

export const getPortfolioData = cache(async () => {
  try {
    const { data: rawProjectsData } = await axios.get<{
      [key: string]: IProduct;
    }>(`${config.FIREBASE_DATABASEURL}/Projects.json`);

    const { data: profileData } = await axios.get<{
      resume: string;
    }>(`${config.FIREBASE_DATABASEURL}/Profile.json`);

    const projectsData = Object.entries(rawProjectsData).map(
      ([key, value], index) => {
        return value;
      },
    );

    return { projectsData, profileData };
  } catch (error) {
    const projectsData = Object.entries(PortfolioJSON.Projects).map(
      ([key, value], index) => {
        return value as IProduct;
      },
    );
    console.error(error);
    return { projectsData, profileData: PortfolioJSON.Profile };
  }
});
