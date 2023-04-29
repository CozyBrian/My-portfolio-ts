export type Project = {
  id: string;
  image: string[];
  title: string;
  disc: string;
  link: string;
  live: string;
  type: "web" | "mobile";
  tags?: string[];
};

export type Profile = {
  profileImage: string;
  resume: string;
};

export type Work = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string[];
};
