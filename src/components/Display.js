import React, {Component} from 'react';
import "./Display.css";

class Display extends Component {
    render(){
        return(
            <div className="Display">
                <div className="data">
                    {this.props.data}
                </div>
            </div>
        );
    }
}

export default Display;