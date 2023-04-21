
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

import AppPractice from '../practice/practice';
import PracticeClock from '../practice-clock/practice-clock';


function App() {

  const data = [
    { name: 'John C.', salary: 800, increase: false, id: 1 },
    { name: 'Alex M.', salary: 3000, increase: true, id: 2 },
    { name: 'Carl W.', salary: 5000, increase: false, id: 3 }
  ];

  return (
    <div className="app">
      <AppInfo></AppInfo>
      <div className="search-panel">
        <SearchPanel></SearchPanel>
        <AppFilter></AppFilter>
      </div>
      <EmployersList data={data}></EmployersList>
      <EmployersAddForm></EmployersAddForm>
      <AppPractice></AppPractice>
      <PracticeClock></PracticeClock>

    </div>
  )
}


export default App;
