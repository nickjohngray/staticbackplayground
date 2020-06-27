import React from 'react';
import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';
import Video from './Video';

class YoutubePlayer extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.loadPlayList();
    }

    loadPlayList = async () => {
        const response = await youtube.get('/playlistItems', {
            params: {
                part: 'snippet',
                key: 'AIzaSyBM7PTCdQdc09guxwVGtRXAroZJ7WScE4A',
                maxResults: 50,
                playlistId: 'PLQKHRXKBnJUso4ZPSidM9SA12ng-dsm9V'
            }
        });
        if (response.data.items && response.data.items.length > 0) {
            const videos = response.data.items.reverse();
            this.setState({
                videos
            });
            this.selectVideo(videos[0]);
        }
    };
    search = async termFromSearchBar => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar,
                part: 'snippet',
                key: 'AIzaSyBM7PTCdQdc09guxwVGtRXAroZJ7WScE4A',
                maxResults: 50,
                channelId: 'UCaP2lYZlTFCH7n-OarKM_lA'
            }
        });
        this.setState({
            videos: response.data.items
        });
        if (response.data.items.length > 0) {
            this.selectVideo(response.data.items[0]);
        }
    };
    selectVideo = video => this.setState({selectedVideo: video});

    render = () => (
        <div className="vid-container">
            <div className="vid-controls">
                <SearchBar handleFormSubmit={this.search} />
                <a className="show-recent" onClick={this.loadPlayList}>
                    Show Recent
                </a>
            </div>
            <div className="vid-an-list">
                <Video video={this.state.selectedVideo} />
                <VideoList onSelect={this.selectVideo} videos={this.state.videos} />
            </div>
        </div>
    );
}

export default YoutubePlayer;
