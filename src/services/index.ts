import { config } from "@/constants";
import { IProduct, IWork } from "@/types";
import PortfolioJSON from "@/data/my-portfolio-data.json";
import axios from "axios";
import { cache } from "react";

export const revalidate = 30; // revalidate the data at most every 30 seconds

export const getProfileData = cache(async () => {
  try {
    const { data: profileData } = await axios.get<{
      resume: string;
    }>(`${config.FIREBASE_DATABASEURL}/Profile.json`);

    return { profileData };
  } catch (error) {
    console.error(error);
    return { profileData: PortfolioJSON.Profile };
  }
});

export const getProjectsData = cache(async () => {
  try {
    const { data: rawProjectsData } = await axios.get<{
      [key: string]: IProduct;
    }>(`${config.FIREBASE_DATABASEURL}/Projects.json`);

    const projectsData = Object.entries(rawProjectsData)
      .map(([key, value], index) => {
        return value;
      })
      .sort((a, b) => a.pos - b.pos);

    return { projectsData };
  } catch (error) {
    const projectsData = Object.entries(PortfolioJSON.Projects)
      .map(([key, value], index) => {
        return value as IProduct;
      })
      .sort((a, b) => a.pos - b.pos);
    console.error(error);
    return { projectsData };
  }
});

export const getWorkData = cache(async () => {
  try {
    const { data: rawWorkData } = await axios.get<{
      [key: string]: IWork;
    }>(`${config.FIREBASE_DATABASEURL}/Work.json`);

    const workData = Object.entries(rawWorkData)
      .map(([key, value], index) => {
        return value;
      })
      .sort((a, b) => a.pos - b.pos);

    // await new Promise((resolve) => setTimeout(resolve, 1000 * 60 * 5));

    return { workData };
  } catch (error) {
    const workData = Object.entries(
      PortfolioJSON.Work as {
        [key: string]: IWork;
      },
    )
      .map(([key, value], index) => {
        return value;
      })
      .sort((a, b) => a.pos - b.pos);
    console.error(error);
    return { workData };
  }
});
