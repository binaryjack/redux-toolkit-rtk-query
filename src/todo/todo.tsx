import './todo.scss';

import { useState } from 'react';

import { todoApi } from '../feature/TodoApi';
import { Todo } from '../model/todoModel';

type ItemProps = {
  todo: Todo;
  onChecked: (id: string) => void;
  onRemove: (id: string) => void;
};

const Item: React.FC<ItemProps> = ({
  todo,
  onChecked,
  onRemove,
}): JSX.Element => {
  return (
    <div className="item">
      <div className="head">
        <div className="id  d-flex">{todo.id}</div>
        <div className="done d-flex">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onChecked(todo.id)}
          />
        </div>
      </div>
      <div className="task  d-flex">{todo.title}</div>
      <div className="right-aside">
        <div className="due-date  d-flex">{todo.dueDate}</div>
        <div className="remove  d-flex">
          <button onClick={() => onRemove(todo.id)}>X</button>
        </div>
      </div>
    </div>
  );
};

type ItemsProps = {
  todos: Todo[];
  onChecked: (id: string) => void;
  onRemove: (id: string) => void;
};

const Items: React.FC<ItemsProps> = ({
  todos,
  onChecked,
  onRemove,
}): JSX.Element => {
  return (
    <div className="items">
      {todos &&
        todos.map((item: Todo, index) => (
          <Item
            key={index}
            todo={item}
            onChecked={onChecked}
            onRemove={onRemove}
          />
        ))}
    </div>
  );
};

type TodoUiProps = {};

const TodoUi: React.FC<TodoUiProps> = (): JSX.Element => {
  const getNewDueDate = () => {
    const date = new Date();
    const dueDate = new Date(date.setDate(date.getDate() + 1));
    return dueDate;
  };
  const [newTask, setNewTask] = useState<string>('');
  const { data: todos, isLoading } = todoApi.useGetAllQuery();
  const [addTodo] = todoApi.useAddTodoMutation();
  const [updateTodo] = todoApi.useUpdateTodoMutation();
  const [deleteTodo] = todoApi.useDeleteTodoMutation();

  const onAdd = () => {
    console.log('A');
    if (/*!newTask || */ !todos) return;
    const last = todos[todos.length - 1];
    console.log('B');

    const nextId = last && last.sortOrder ? last.sortOrder + 1 : 1;
    console.log('C');
    const newTodo = {
      sortOrder: nextId,
      id: nextId.toString(),
      title: newTask,
      dueDate: getNewDueDate().toLocaleDateString(),
    } as Todo;
    console.log('newTodo');
    addTodo(newTodo);

    setNewTask('');
  };
  const onRemove = (id: string) => {
    if (!todos) return;

    console.log('remove: ', id);

    const element = todos.find((o) => o.id === id);
    if (!element) return;
    deleteTodo(element);
  };
  const onCheck = (id: string) => {
    if (!todos) return;

    const element = todos.find((o) => o.id === id);
    if (!element) return;
    const newTodo = { ...element };

    newTodo.completed = !newTodo.completed;
    console.log(newTodo);
    updateTodo(newTodo);
  };

  return (
    <div className="todo-ui">
      <div className="add-section">
        <input
          className="new-task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={onAdd}>Add</button>
      </div>
      <div className="tasks-container">
        {isLoading ? 'loading...' : ''}
        {todos && (
          <Items todos={todos} onRemove={onRemove} onChecked={onCheck} />
        )}
      </div>
    </div>
  );
};

export default TodoUi;
