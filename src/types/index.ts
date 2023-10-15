export type IProduct = {
  id: string;
  image: string[];
  title: string;
  disc: string;
  link: string;
  live: string;
  type: "web" | "mobile";
  tags?: string[];
};

export type IProfile = {
  profileImage: string;
  resume: string;
};
