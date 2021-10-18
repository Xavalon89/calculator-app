import React, {Component} from 'react';
import { evaluate } from 'mathjs'
import Button from './Button';
import './Calculator.css';
import Display from './Display';
import Keypad from './Keypad';
import Navbar from './Navbar'

class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: ''}
    }

    calculate = () => {
        try {
            if (this.state.data) {
                const result = String(evaluate(this.state.data));
                this.setState({data: result});
            } else {
                const result = ''
                this.setState({data: result});
            }
        } catch (e) {
            this.setState({data: 'Error'})
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                this.setState({ data: ''});
                break;
            case 'equal':
                this.calculate();
                break;
            case '-':
            case '+':
            case '/':
            case '*':
            case '.':
                if (isNaN(this.state.data.slice(-1)) || this.state.data === '') {
                    this.setState({ data: this.state.data});
                    break;
                } else {
                    this.setState({ data: this.state.data + value});
                    break;
                }   
            default:
                if (this.state.data === 'Error') {
                    this.setState({ data: '' + value});
                } else {
                    this.setState({ data: this.state.data + value});
                }
        }
    }

    // . needs another case to prevent more than 1

    render(){
        return(
            <div className="Calculator">
                <Navbar />
                <Display data={this.state.data} />
                <Keypad>
                    <Button onClick={this.handleClick} label="C" value="clear" color="clear" />
                    <Button onClick={this.handleClick} label="" value="null" />
                    <Button onClick={this.handleClick} label="÷" value="/" color="operator" />
                    <Button onClick={this.handleClick} label="x" value="*" color="operator" />

                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="-" value="-" color="operator" />

                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="+" value="+" color="operator" />

                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button onClick={this.handleClick} label="=" value="equal" color="operator" height="2" />

                    <Button onClick={this.handleClick} label="0" value="0" width="2" />
                    <Button onClick={this.handleClick} label="." value="." />
                </Keypad>
            </div>
        );
    }
}

export default Calculator;