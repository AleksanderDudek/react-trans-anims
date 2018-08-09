import React, { Component } from 'react';

import '../css/App.css';

import { CSSTransition } from 'react-transition-group';

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

                {/* differnece between this and transition is that 
                 here we can for instance use classNames to append classes to div inside,
                 it will also add -enter and -active to it O_o */}
                <CSSTransition
                    in={this.state.show}
                    timeout={5000}
                    classNames="square"
                >
                    <div
                        className={`square ${this.state.show}`}
                    >
                    HELLO</div>
                </CSSTransition>
                <div className="showDiv"
                     onClick={this.showDiv}>
                    Show/Hide
                </div>
            </div>
        )
    }
}


export default Fade;