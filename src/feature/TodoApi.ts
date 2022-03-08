import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import { Todo } from '../model/todoModel';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getAll: builder.query<Todo[], void>({
      query: () => 'todos',
      providesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    addTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: 'add',
          method: 'POST',
          body: todo,
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    updateTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `update/${todo.id}`,
          method: 'PUT',
          body: todo,
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    deleteTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `delete/${todo.id}`,
          method: 'POST',
          body: todo,
        };
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
});
