import React, { useState } from "react";
import LoaderComponent from "../Loader";

const useLoader = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ? <LoaderComponent /> : null,
    () => setLoading(true), //Show loader
    () => setLoading(false), //Hide Loader
  ];
};

export default useLoader;
