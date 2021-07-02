import React from 'react'
import { Grid } from "@material-ui/core";
import Searchbar from "./components/Searchbar"
// import axios from "axios";
import youtube from "./api/youtube"
import VideoDetails from "./components/VideoDetails"
import VideoList from "./components/VideoList"

class App extends React.Component {


  state = {
    videos: [],
    selectedvideo: ""
  }
  onVideoSelect = (videos) => {
    this.setState({ selectedvideo: videos })

  }

  handelsubmit = async (searchTerm) => {
    const youtube_data = await youtube.get("", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBy_O3V7N070OvF-Zu8esLsUzsU51oBtr0",
        q: searchTerm
      }
    })
    // const dataa = await axios({
    //   method: "GET",
    //   url: 'https://www.googleapis.com/youtube/v3/search',
    //   params: {
    //     part: 'snippet',
    //     maxResults: '20',
    //     key: 'AIzaSyBy_O3V7N070OvF-Zu8esLsUzsU51oBtr0',
    //     q: searchTerm
    //   }
    // })
    // console.log(youtube_data.data.items[0]);
    this.setState({ videos: youtube_data.data.items, selectedvideo: youtube_data.data.items[0] })
  }

  render() {
    const { selectedvideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={12}>
        <Grid item xs={12}>
          <Grid container spacing={5}>
            <Grid item xs={10} >
              <Searchbar onFormSubmit={this.handelsubmit} />
            </Grid><Grid item xs={6}>
              <VideoDetails video={selectedvideo} />
            </Grid>
            <Grid item xs={5} xy={50}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>

          </Grid>

        </Grid>



      </Grid>
    )
  }
}

export default App;
