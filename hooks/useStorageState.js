import { useState } from "react";

const useStorageState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState(null);

  return [[isLoading, session], setSession];
};

export default useStorageState;
