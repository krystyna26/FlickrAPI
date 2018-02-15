import React, { Component } from 'react';


class ImageList extends Component {

    constructor() {
        super();
        // initial state
        this.state = { term: false };
    }

    // this function is called once all children elements and 
    // component instances are mounted onto the native UI
    componentDidMount(){
        this.setState({ term: true });
    }

    //render picture
    render(){
        var photoObj;
        if(this.state.term){
            photoObj = this.props.data.map(function (photo) {
                if(photo){
                    var id = photo.id;
                    var source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                 
                    return (
                        <a href={source} key={id} target="_blank">
                            <img src={source} alt=""/>
                        </a>
                    );
                } // end if
                return photoObj
            }) // end photoObj
        } //end if

        return (
            <div className="list">
                {photoObj}
            </div>
        )
    }
}

export default ImageList;