import config from "../../config";

const { baseUrl } = config.api;

export const fetchNewReleases = (accessToken) => {
  return fetch(baseUrl + "/browse/new-releases", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const fetchFeaturedPlaylists = (accessToken) => {
  return fetch(baseUrl + "/browse/featured-playlists", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const fetchCategories = (accessToken) => {
  return fetch(baseUrl + "/browse/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
