import React, { useState, useEffect } from "react";
import { setAccessToken, getAccessToken } from "./accessToken";
import "./tailwind.generated.css";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (res) => {
      const { accessToken } = await res.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return getAccessToken() ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
