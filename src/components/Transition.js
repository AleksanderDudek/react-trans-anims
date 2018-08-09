import React, { Component } from 'react';
import '../css/App.css';

import {Transition} from 'react-transition-group';

class TransitionComp extends Component{


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
                <Transition
                // IN decides what is the begining state of transition
                in={this.state.show}
                // timeout says how long does the trans take
                    timeout={{
                        entering: 1200,
                        enter: 300,
                        exiting: 500,
                        exit: 500
                    }}
                >
                    { state => 
                    <div className={`square square-${state}`}> 
                        { `square square-${state}` }
                    </div> 
                    }
                </Transition>
    
                <div className="showDiv"
                     onClick={this.showDiv}>
                    Show/Hide
                </div>
            </div>
            
        )
    }
}


export default TransitionComp;