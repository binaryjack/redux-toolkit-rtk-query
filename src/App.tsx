import './App.css';
import './table.scss';
import TableComponent from './table/TableComponent';
import tableDataMock from './table/TableMockData';

const App = () => {



  return (
    <div className="App">

      <TableComponent data={tableDataMock} />

    </div>
  )
}

export default App;
