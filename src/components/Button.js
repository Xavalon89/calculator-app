import React, {Component} from 'react';
import "./Button.css";

class Button extends Component {
    render(){
        return(
            <div 
                className="Button"
                onClick={this.props.onClick}
                data-height={this.props.height}
                data-width={this.props.width}
                data-color={this.props.color}
                data-value={this.props.value}>
                {this.props.label}
            </div>
        );
    }
}

export default Button;