
import { Component } from 'react';

import './practice.css';



class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
      position: '',
    }
    //this.nextYear = this.nextYear.bind(this);
  }

  nextYear = () => { // nextYear () {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const { name, surname, link } = this.props;
    const { years, position } = this.state;
    return (
      <>
        <button onClick={this.nextYear} >{this.state.text}</button>
        <h1>My name is {name},
          surname - {surname},
          age - {years},
          position - {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </>
    )
  }
}


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }

  incCounter = () => {
    if (this.state.counter < 10) {
      this.setState(state => ({
        counter: state.counter + 1
      }))
    }
  }

  decCounter = () => {
    if (this.state.counter > -10)
      this.setState(state => ({
        counter: state.counter - 1
      }))
  }

  rndCounter = () => {
    this.setState({
      counter: +(Math.random() * (10 - -10) + -10).toFixed(0)
    })
  }

  resetCounter = () => {
    this.setState({
      counter: 0
    })
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="app-counter">
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={this.incCounter} >INC</button>
          <button onClick={this.decCounter}>DEC</button>
          <button onClick={this.rndCounter}>RND</button>
          <button onClick={this.resetCounter} >RESET</button>
        </div>
      </div >
    )
  }
}


function AppPractice() {
  return (
    <div className="app-practice">
      <WhoAmI name='John' surname='Smith' link='facebook.com' />
      <WhoAmI name='Anna' surname='Gorbacheva' link='facebook.com' />
      {/* <WhoAmI name='John' surname='Smith' link='facebook.com' />
      <WhoAmI name='Anna' surname='Gorbacheva' link='facebook.com' /> */}

      {/* <WhoAmI name={{ firstName: 'John' }} surname='Smith' link='facebook.com' /> */}
      {/* <WhoAmI name={() => { return 'John' }} surname='Smith' link='facebook.com' /> */}

      <Counter counter={0} />


    </div>
  )
}


export default AppPractice;
