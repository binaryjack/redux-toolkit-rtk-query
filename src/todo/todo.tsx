import { useEffect, useState } from 'react'
import { Todo } from '../model/todoModel'
import "./todo.scss"

type ItemProps = {
    todo: Todo,
    onChecked: (id: string) => void
    onRemove: (id: string) => void
}


const Item: React.FC<ItemProps> = ({ todo, onChecked, onRemove }): JSX.Element => {


    return (
        <div className='item'>
            <div className='head'>
                <div className='id  d-flex'>
                    {todo.id}
                </div>
                <div className='done d-flex'>
                    <input type="checkbox" checked={todo.done} onChange={() => onChecked(todo.id)} />
                </div>
            </div>
            <div className='task  d-flex'>
                {todo.task}
            </div>
            <div className='right-aside'>
                <div className='due-date  d-flex'>
                    {todo.dueDate}
                </div>
                <div className='remove  d-flex'>
                    <button onClick={() => onRemove(todo.id)} >X</button>
                </div>
            </div>
        </div>
    )

}

type ItemsProps = {
    todos: Todo[],
    onChecked: (id: string) => void
    onRemove: (id: string) => void
}

const Items: React.FC<ItemsProps> = ({ todos, onChecked, onRemove }): JSX.Element => {
    return (
        <div className='items'>
            {todos && todos.map((item: Todo, index) =>
                <Item key={index} todo={item} onChecked={onChecked} onRemove={onRemove} />
            )}
        </div>
    )
}

type TodoUiProps = {

}

const TodoUi: React.FC<TodoUiProps> = (): JSX.Element => {


    const [data, setData] = useState<Todo[]>([])
    const [newTask, setNewTask] = useState<string>("")

    useEffect(() => {
        fakeData()
    }, []);

    const getNewDueDate = () => {
        const date = new Date()
        const dueDate = new Date(date.setDate(date.getDate() + 1))
        return dueDate
    }

    const fakeData = () => {
        const dataCollection: Todo[] = [];
        for (let i = 0; i < 10; i++) {
            dataCollection.push({
                sortOrder: i, id: i.toString(), task: `Learn TypeScript${i}`, done: false, dueDate: getNewDueDate().toLocaleDateString()
            })
        }
        setData(dataCollection)
    }

    const onAdd = () => {
        if (!newTask) return
        const last = data[data.length - 1]
        const nextId = last.sortOrder + 1;
        const newCollecton = [{ sortOrder: nextId, id: nextId.toString(), task: newTask, dueDate: getNewDueDate().toLocaleDateString() } as Todo, ...data].sort((a, b) => (a.sortOrder - b.sortOrder))
        setData(newCollecton)
        setNewTask("");
    }
    const onRemove = (id: string) => {
        console.log("remove: ", id)

        const element = data.find(o => o.id === id);
        if (!element) return;

        const newCollecton = [...data.filter(o => o.id !== id)].sort((a, b) => (a.sortOrder - b.sortOrder))
        console.log(`id: ${element.id} is ${element.done}`)
        setData(newCollecton)

    }
    const onCheck = (id: string) => {

        const element = data.find(o => o.id === id);
        if (!element) return;
        element.done = !element.done
        const newCollecton = [element, ...data.filter(o => o.id !== id)].sort((a, b) => (a.sortOrder - b.sortOrder))
        console.log(`id: ${element.id} is ${element.done}`)
        setData(newCollecton)
    }

    return (
        <div className='todo-ui'>
            <div className="add-section"><input className='new-task' value={newTask} onChange={e => setNewTask(e.target.value)} /><button onClick={onAdd}>Add</button></div>
            <div className="tasks-container">
                <Items todos={data} onRemove={onRemove} onChecked={onCheck} />
            </div>
        </div>
    )
}

export default TodoUi