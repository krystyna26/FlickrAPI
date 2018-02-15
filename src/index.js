import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import ImageList from './components/imageList';


class App extends Component {
    
    // constructor runs first
    constructor(){
        super();
        // component level state
        this.state = {
            photos: []
        };
        this.handleGetPhotos = this.handleGetPhotos.bind(this);
    }

    handleGetPhotos(photos){
        this.setState({'photos': photos});
    }

    render() {
        return (
        <div className="box">
            <SearchBar _getImages={this.handleGetPhotos}/>
            <ImageList data={this.state.photos}/>            
        </div>
        )
    }
}
  

ReactDOM.render(<App />, document.getElementById('root'));
