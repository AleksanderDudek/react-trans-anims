import React, { Component } from 'react';

import '../css/App.css';

class Fade extends Component{

    state = {
        show:true
    }

    showDiv = () => {
        this.setState({
            show: this.state.show ? false : true
        })
    }

    render(){
        return(
            <div>
                CSS TRANSITIONS
            </div>
        )
    }
}


export default Fade;