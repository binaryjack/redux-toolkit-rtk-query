// __tests__/fetch.test.js
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { dataFromApi } from '../../api/data'
import { DataAdapter, DataRow } from '../adapter/columns/ColumnDataAdapter'
import Cell from './Cell'


const dataTable = DataAdapter<DataRow>(dataFromApi)


test('display Cell', () => {
    render(<Cell id={"custom-cell"} column={dataTable.rows[1].columns[1]} edit={false} />)
    expect(screen.getAllByTestId('custom-cell-test')[0].innerHTML).toEqual('Piana')
})


test('display Input Cell', () => {
    dataTable.rows[1].columns[1].editable = true

    render(<Cell id={"custom-cell"} column={dataTable.rows[1].columns[1]} edit={true} />)
    expect(screen.getAllByTestId('custom-cell-test-edit')[0]).toBeTruthy()
    expect(screen.getAllByTestId('custom-cell-test-edit')[0]).toHaveDisplayValue("Piana")
})

test('display Input Cell', () => {
    dataTable.rows[1].columns[1].editable = true

    render(<Cell id={"custom-cell"} column={dataTable.rows[1].columns[1]} edit={true} />)
    expect(screen.getAllByTestId('custom-cell-test-edit')[0]).toBeTruthy()
    expect(screen.getAllByTestId('custom-cell-test-edit')[0]).toHaveDisplayValue("Piana")
})

// const server = setupServer(
//     rest.get('/greeting', (req, res, ctx) => {
//         return res(ctx.json({ greeting: 'hello there' }))
//     }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// test('loads and displays greeting', async () => {
//     render(<Cell column={ } />)

//     fireEvent.click(screen.getByText('Load Greeting'))

//     await waitFor(() => screen.getByRole('heading'))

//     expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//     expect(screen.getByRole('button')).toBeDisabled()
// })

// test('handles server error', async () => {
//     server.use(
//         rest.get('/greeting', (req, res, ctx) => {
//             return res(ctx.status(500))
//         }),
//     )

//     render(<Fetch url="/greeting" />)

//     fireEvent.click(screen.getByText('Load Greeting'))

//     await waitFor(() => screen.getByRole('alert'))

//     expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//     expect(screen.getByRole('button')).not.toBeDisabled()
// })