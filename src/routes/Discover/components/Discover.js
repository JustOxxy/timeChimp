import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import {
  fetchNewReleases,
  fetchFeaturedPlaylists,
  fetchCategories,
} from "../../../common/helpers/fetchData";

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }

  componentDidMount() {
    Promise.all([
      fetchNewReleases(this.props.accessToken),
      fetchFeaturedPlaylists(this.props.accessToken),
      fetchCategories(this.props.accessToken),
    ])
      .then((responses) => {
        // Get a JSON object from each of the responses
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then((data) => {
        this.setState({
          newReleases: data[0].albums.items,
          playlists: data[1].playlists.items,
          categories: data[2].categories.items,
        });
      })
      .catch((error) => {
        // if there's an error, log it
        console.log(error);
      });
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
