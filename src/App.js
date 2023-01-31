import React from "react";
import Discover from "./routes/Discover/components/Discover";
import { useAuth } from "./common/helpers/useAuth";

const App = () => {
  const accessToken = useAuth();

  if (!accessToken) {
    return null;
  }

  return <Discover accessToken={accessToken.accessToken} />;
};

export default App;
