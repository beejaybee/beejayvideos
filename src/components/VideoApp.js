import { Component } from "react";
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class VideoApp extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    componentDidMount () {
        this.handleFormSubmit('bug-bounty')
    }
    handleFormSubmit = async (userInput) => {
        const response = await youtube.get('/search', {
            params: {
                q: userInput 
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render () {
        return (
            <div className="ui container" style={{marginTop:"10px"}}> 
                <SearchBar
                 handleFormSubmit={this.handleFormSubmit}
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>    
                    </div>
                </div>
                
            </div>
        )
    }
}


export default VideoApp