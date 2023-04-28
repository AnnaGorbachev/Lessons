
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
      term: ''//поиск
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
    // this.setState(({ data }) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //   return {
    //     data: newArr
    //   }
    // })

    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, increase: !item.increase }
        }
        return item;
      })
    }))

  }

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, rise: !item.rise }
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {//поиск
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term: term });
  }

  render() {

    const { data, term } = this.state;
    const employers = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    //поиск
    const visibleData = this.searchEmp(data, term);//видимые люди т е это отфильтр-й массив

    return (
      <div className="app">
        <AppInfo employers={employers} increased={increased} />

        <div className="search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>

        <EmployersList
          data={visibleData}
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
