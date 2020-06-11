import React from 'react';
import YouTube from 'react-youtube';

/*
interface VideoPlayerProps {
    videoIds:string[]
}
*/

class VideoPlayer extends React.Component {
    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return <YouTube videoId="PBbTYP8xl9k" opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default VideoPlayer;
