import React from 'react';
import "./itemcount.css";

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
    }
  
    increment() {
      this.setState(prevState => ({
        counter: this.state.counter + 1
      }));
    }
  
    decrement() {
      if (this.state.counter === 0) {
        this.setState({
          counter: 0
        });
      } else {
        this.setState(prevState => ({
          counter: this.state.counter - 1
        }));
      }
    }
  
    render() {
      return (
        <div>
          <div className="counter">
            <button
              className="counter-btn"
              onClick={this.decrement.bind(this)}
            >
              -
            </button>
            
            
            <input type="text" size="4" value={this.state.counter} />
           
            
            <button
              className="counter-btn"
              onClick={this.increment.bind(this)}
            >
              +
            </button>
            </div>
        </div>
      );
    }
  }

export default Counter;