import React, { useState, useEffect, createContext, useContext } from "react";
import { ref, child, get, Database } from "firebase/database";
import { Product } from "../@types";

type ApiContextType = {
  projects: Product[];
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
  const [isSelected, setIsSelected] = useState<Product | null>(null);

  const setItem = (item: Product) => {
    setIsSelected(item);
    setOverlayIsOpen(true);
  };

  const closeOverlay = () => {
    setOverlayIsOpen(false);
  };

  const dbRef = ref(db);

  const onLoad = () => {
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
