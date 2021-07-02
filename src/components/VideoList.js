import { Grid } from '@material-ui/core';
import React from 'react'
import VideoItems from './VideoItems';

const VideoList = ({ videos, onVideoSelect }) => {

    const listOfVideos = videos.map((video, id) => <VideoItems onVideoSelect={onVideoSelect} key={id} video={video} />)

    return (
        <Grid container spacing={4}>
            {listOfVideos}
        </Grid>
    )
}
export default VideoList
