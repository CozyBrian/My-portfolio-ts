export type IProduct = {
  id: string;
  image: string[];
  title: string;
  disc: string;
  link: string;
  live: string;
  type: "web" | "mobile";
  tags: string[];
  pos: number;
};

export type IWork = {
  id: string;
  company: string;
  url: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  stack: string[];
  pos: number;
};

export type IProfile = {
  profileImage: string;
  resume: string;
};
