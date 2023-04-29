import React, { useState, useEffect, createContext, useContext } from "react";
import { ref, child, get, Database } from "firebase/database";
import { Project, Profile, Work } from "../@types";

type ApiContextType = {
  projects: Project[];
  works: Work[];
  profile: Profile;
  isLoaded: boolean;
  isSelected: Project | null;
  overlayIsOpen: boolean;
  setItem: (item: Project) => void;
  closeOverlay: () => void;
};

type Props = {
  children: React.ReactNode;
  db: Database;
};

const initialState: ApiContextType = {
  projects: [],
  works: [],
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
  const [projects, setProjects] = useState<Project[]>([]);
  const [works, setWorks] = useState<Work[]>([]);
  const [profile, setProfile] = useState<Profile>(initialState.profile);
  const [isSelected, setIsSelected] = useState<Project | null>(null);

  const setItem = (item: Project) => {
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

  const getWorks = async (): Promise<Work[] | undefined> => {
    try {
      const snapshot = await get(child(dbRef, "Work"));

      if (snapshot.exists()) {
        return snapshot.val();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getProjects = async (): Promise<Project[] | undefined> => {
    try {
      const snapshot = await get(child(dbRef, "Projects"));

      if (snapshot.exists()) {
        return snapshot.val();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onLoad = async () => {
    try {
      const profile = await getProfile()!;
      setProfile(profile!);

      const works = await getWorks();

      const projects = await getProjects();

      if (projects) {
        let temp: Project[] = [];
        Object.entries(projects).forEach(([key, value], index) => {
          temp.push(value as Project);
        });
        setProjects(temp);
      }

      if (works) {
        let temp: Work[] = [];
        Object.entries(works).forEach(([key, value], index) => {
          temp.push(value as Work);
        });
        setWorks(temp);
      }

      setIsLoaded(true);
    } catch (error) {
      setIsLoaded(false);
      console.error(error);
    }
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
        works,
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
