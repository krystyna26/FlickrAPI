import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(){
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event){
        // this function will prevent the form from submitting to back-end
        event.preventDefault();
        let API_KEY = "97824781326f2943c6432725c5d85485";
        let tag = this.refs.tag.value;
        this.refs.tag.value = '';
        let url = `https://api.flickr.com/services/rest/?api_key=${API_KEY}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&tags=${tag}`;

        // we need to fetch data in json format
        fetch(url)
            .then(response => response.json())
            .then(data => { this.props._getImages(data.photos.photo);
            })
            .catch(error => { throw error;
            });
    }


    // handling user input
    render() {
        return  (
            <div className="search">
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="text" 
                        // ref is a direct reference to the html component
                        ref="tag" 
                        placeholder="Search" 
                        required 
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
    
}

export default SearchBar;