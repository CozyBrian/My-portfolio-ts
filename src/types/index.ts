export type IProduct = {
  id: string;
  image: string[];
  title: string;
  disc: string;
  link: string;
  live: string;
  type: "web" | "mobile";
  tags: string[];
};

export type IWork = {
  id: string;
  title: string;
  url: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  stack: string[];
};

export type IProfile = {
  profileImage: string;
  resume: string;
};
