import { RowDataModel } from '../model/tableModel';

export const tracing = (rows: RowDataModel[]) => {
    let trace = '';

    for (let i: number = 1; i < rows.length; i++) {
        trace += `source: ID ${rows[i].id} dd[${rows[i].dragDropSortOrder}]   ${rows[i].columns[0].label} ${rows[i].columns[1].label}  ${rows[i].columns[2].label} ${rows[i].columns[3].label}\r\n `;
    }
    console.log(trace);
};
