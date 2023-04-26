
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import AppPractice from '../practice/practice';
import PracticeClock from '../practice-clock/practice-clock';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
      ],
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {

      //const index = data.findIndex(elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      const newArr = data.filter(item => item.id !== id)
      return {
        data: newArr
      }

    })
  };


  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      }
    })
  }

  onToggleIncrease = (id) => {
    console.log(`increase = ${id}`);
  }

  onToggleRise = (id) => {
    console.log(`rise = ${id}`);
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployersList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise} />

        <EmployersAddForm onAdd={this.addItem} />

        <AppPractice />
        <PracticeClock />

      </div>
    )
  }
}


export default App;
