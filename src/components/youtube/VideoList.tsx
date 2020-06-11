import React from 'react';
import VideoThumbnail from './VideoThumbnail';

const VideoList = ({videos, onSelect}) => (
    <div className="vid-list">
        {videos.map(video => (
            <VideoThumbnail key={video.id.videoId} video={video} onSelect={onSelect} />
        ))}
    </div>
);

export default VideoList;
