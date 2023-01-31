import { useEffect, useState } from "react";
import config from "../../config";

export function useAuth() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const { authUrl, clientId, clientSecret } = config.api;

    fetch(authUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    })
      .then((response) => response.json())
      .then((response) => {
        setAccessToken({ accessToken: response.access_token });
      })
      .catch((err) => console.error(err));
  }, []);

  return accessToken;
}
