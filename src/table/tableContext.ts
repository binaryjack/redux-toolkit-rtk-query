import { createContext } from 'react';


export const TableContext = createContext({
    selectRow: (id: number) => { },
    onDrop: (sourceId: EventTarget, targetId: number) => { },

});

