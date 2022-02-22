
import { dataFromApi } from '../api/data'
import { DataAdapter } from './adapter/columns/ColumnDataAdapter'

const dataTable = DataAdapter(dataFromApi)

export default dataTable





