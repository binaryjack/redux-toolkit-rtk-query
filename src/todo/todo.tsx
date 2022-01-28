import { useEffect, useState } from 'react'
import { Todo } from '../model/todoModel'


type ItemProps = {
    todo: Todo
}


const Item: React.FC<ItemProps> = ({ todo }): JSX.Element => {
    return (
        <div key={todo.id} className='item'>


        </div>
    )

}

type ItemsProps = {
    todos: Todo[]
}

const Items: React.FC<ItemsProps> = ({ todos }): JSX.Element => {
    return (
        <div className='items'>
            {todos && todos.length > 0 && todos.map((item, index) => {
                <Item todo={item} />
            })}
        </div>
    )
}

type TodoUiProps = {
}

const TodoUi: React.FC<TodoUiProps> = (): JSX.Element => {


    const [data, setData] = useState<Todo[]>([])
    const fakeData = () => {
        for (let i = 0; i < 10; i++) {

            const date = new Date()
            const dueDate = new Date(date.setDate(date.getDate() + 1))

            setData([{
                id: i.toString(), task: `Learn TypeScript${i}`, done: false, dueDate: dueDate.toLocaleDateString()
            }])
        }
    }

    useEffect(() => {
        fakeData()
    }, []);

    return (
        <div className='todo-ui'>
            <Items todos={data} />

        </div>
    )
}

export default TodoUi