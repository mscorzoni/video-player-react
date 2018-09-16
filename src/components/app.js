import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import REACT_APP_GOOGLE_API_KEY from '../.././env';
import VideoList from './video_list';
import VideoDetail from './video_detail';


const API_KEY = REACT_APP_GOOGLE_API_KEY;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], 
                   selectedVideo: null
                  }; 

    this.videoSearch('triathlon');

  }

  videoSearch(term) {

    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos: videos });
    });

  }


  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
