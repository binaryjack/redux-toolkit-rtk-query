// import './App.scss';
// import './table.scss';
// import TableComponent from './table/TableComponent';
// import tableDataMock from './table/TableMockData';

// const App = () => {
//   return (
//     <div className="App">

//       <TableComponent data={tableDataMock} />

//     </div>
//   )
// }
// }
import './App.scss';

import { Provider } from 'react-redux';

import { store } from './feature/middleware/ErrorsHandler';
import TodoUi from './todo/todo';

interface Data {
  id: number;
  calc: number;
  newCalc: number;
}

const template = (data?: Data): React.ReactElement => {
  if (!data) return <></>;
  return (
    <div className="table-dcomp-calc">
      <div className="row-dcomp-calc">{data.id}</div>
      <div className="row-dcomp-calc">{data.calc + data.newCalc}</div>
    </div>
  );
};

type Props = {
  template?: (data?: Data) => React.ReactElement;
  data: Data;
};

const DComponent = ({ template, data }: Props): React.ReactElement => {
  return (
    <>
      {template ? (
        template(data)
      ) : (
        <div className="table-dcomp">
          <div className="row-dcomp">{data.id}</div>
          <div className="row-dcomp">{data.calc}</div>
          <div className="row-dcomp">{data.newCalc}</div>
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoUi />
      </Provider>
    </div>
  );
};

export default App;
