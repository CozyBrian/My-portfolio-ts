import React, { useState, useEffect, createContext, useContext } from "react";
import { ref, child, get, Database } from "firebase/database";
import { Product, Profile } from "../@types";

type ApiContextType = {
  projects: Product[];
  profile: Profile;
  isLoaded: boolean;
  isSelected: Product | null;
  overlayIsOpen: boolean;
  setItem: (item: Product) => void;
  closeOverlay: () => void;
};

type Props = {
  children: React.ReactNode;
  db: Database;
};

const initialState: ApiContextType = {
  projects: [],
  profile: {
    profileImage: "",
    resume: "",
  },
  isLoaded: false,
  isSelected: null,
  overlayIsOpen: false,
  setItem: () => {},
  closeOverlay: () => {},
};

export const ApiContext = createContext<ApiContextType>(initialState);

const ApiContextProvider = ({ children, db }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [projects, setProjects] = useState<Product[]>([]);
  const [profile, setProfile] = useState<Profile>(initialState.profile);
  const [isSelected, setIsSelected] = useState<Product | null>(null);

  const setItem = (item: Product) => {
    setIsSelected(item);
    setOverlayIsOpen(true);
  };

  const closeOverlay = () => {
    setOverlayIsOpen(false);
  };
  const dbRef = ref(db);

  const getProfile = async () => {
    try {
      const snapshot = await get(child(dbRef, "Profile"));

      if (snapshot.exists()) {
        return snapshot.val() as Profile;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onLoad = async () => {
    const profile = await getProfile()!;
    setProfile(profile!);

    get(child(dbRef, `Projects/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let tempProjects: Product[] = [];
          Object.entries(snapshot.val()).forEach(([key, value], index) => {
            tempProjects.push(value as Product);
          });
          setProjects(tempProjects);
          setIsLoaded(true);
        }
      })
      .catch((e) => {
        setIsLoaded(false);
        console.error(e);
      });
  };

  useEffect(() => {
    onLoad();
    setTimeout(() => {
      if (!isLoaded) {
        onLoad();
      }
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ApiContext.Provider
      value={{
        projects,
        profile,
        isLoaded,
        isSelected,
        setItem,
        closeOverlay,
        overlayIsOpen,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);

export default ApiContextProvider;
