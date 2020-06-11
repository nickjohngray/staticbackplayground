import React from 'react';

const Video = ({video}) =>
    video ? (
        <div className="vid">
            <div>
                <iframe
                    className="vid-iframe"
                    src={
                        'https://www.youtube.com/embed/' +
                        (video.id.videoId ? video.id.videoId : video.snippet.resourceId.videoId)
                    }
                    allowFullScreen
                    title="Video player"
                />
            </div>
            <div>
                <h4>{video.snippet.title}</h4>
            </div>
            <p>{video.snippet.description}</p>
        </div>
    ) : (
        <div>Pick one ...</div>
    );

export default Video;
