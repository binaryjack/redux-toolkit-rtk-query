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
// }
// import './App.scss';
// import TodoUi from './todo/todo';
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
// import { todoApi } from './feature/TodoApi';
// import { useEffect, useState } from 'react';

// interface Data {
//   id: number;
//   calc: number;
//   newCalc: number;
// }

// const template = (data?: Data): React.ReactElement => {
//   if (!data) return <></>;
//   return (
//     <div className="table-dcomp-calc">
//       <div className="row-dcomp-calc">{data.id}</div>
//       <div className="row-dcomp-calc">{data.calc + data.newCalc}</div>
//     </div>
//   );
// };

// type Props = {
//   template?: (data?: Data) => React.ReactElement;
//   data: Data;
// };

// const DComponent = ({ template, data }: Props): React.ReactElement => {
//   return (
//     <>
//       {template ? (
//         template(data)
//       ) : (
//         <div className="table-dcomp">
//           <div className="row-dcomp">{data.id}</div>
//           <div className="row-dcomp">{data.calc}</div>
//           <div className="row-dcomp">{data.newCalc}</div>
//         </div>
//       )}
//     </>
//   );
// };

// const App = () => {
//   const [coll, setCol] = useState<Data[]>([]);

//   useEffect(() => {
//     const collTempData: Data[] = [];
//     for (let i = 0; i < 10; i++) {
//       const dataTemp: Data = { id: i, calc: i + 54, newCalc: i + 12 };
//       collTempData.push(dataTemp);
//     }
//     setCol(collTempData);
//   }, []);

//   return (
//     <div className="App">
//       <ApiProvider api={todoApi}>
//         <div>
//           {coll &&
//             coll.map((item: Data, index: number) => (
//               <DComponent key={index} data={item} template={template} />
//             ))}
//         </div>
//       </ApiProvider>
//     </div>
//   );
// };

// export default App;
