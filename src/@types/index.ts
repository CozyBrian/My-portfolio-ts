export type Product = {
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
