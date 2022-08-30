import React, { useState, useEffect, createContext } from "react";
import { ref, child, get } from "firebase/database";

export const ApiContext = createContext();

const ApiContextProvider = ({ children, db }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [projects, setProjects] = useState([]);

  const dbRef = ref(db);

  const onLoad = () => {
    get(child(dbRef, `Projects/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProjects(snapshot.val());
          console.log("Loaded");
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
    <ApiContext.Provider value={{ projects, isLoaded }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
