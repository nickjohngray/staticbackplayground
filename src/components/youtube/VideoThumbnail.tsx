import React from 'react';

const VideoThumbnail = ({video, onSelect}) => (
    <div className="vid-thumbnail" onClick={() => onSelect(video)}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
        <div>
            <div className="vid-thumbnail-title">{video.snippet.title}</div>
        </div>
    </div>
);

export default VideoThumbnail;
