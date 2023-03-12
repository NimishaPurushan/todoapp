import { Component, createSignal } from 'solid-js';
import { For } from "solid-js";
import DummyTasks from '../data/dummy.data';
import { createTodoStore } from '../store/todo.store.';
import { Title } from '@solidjs/meta';
import { Tab } from '../types/tab.enum';
import { createLocalStore } from '../store/local.store';


export const TodoApp: Component = () => {
  const todoApi = createTodoStore(DummyTasks);
  const [state, setState] = createLocalStore("tab", {
    tab: Tab.All,
    title: ""
  });


  const selectedTab = () => state.tab;
  const title = () => state.title;
  const setTitle = (title: string) => setState({...state, title});
  const setSelectedTab = (tab: Tab) => setState({...state, tab })

  const getFilteredData = () => {
    switch (selectedTab()) {
      case Tab.Completed:
        return todoApi.findAll().filter(x => x.isCompleted === true);
      case Tab.Todo:
        return todoApi.findAll().filter(x => x.isCompleted === false);
      default:
        return todoApi.findAll();
    }
  }


  const createTodo = (e: any) => {
    e.preventDefault();
    todoApi.create({ title: title() });
    setTitle("");
  }

  return (
    <div class="flex items-center justify-center flex-col">
      <Title>ToDo app</Title>
      <h1 class="text-3xl font-bold mb-4">ToDo app</h1>
      <form onSubmit={createTodo} class="flex mb-4">
        <input placeholder="Enter a Task" required value={title()} onInput={(e) => setTitle(e.currentTarget.value)} class="p-4 rounded-l-lg border border-gray-300 shadow-sm flex-grow outline-none" />
        <button class="p-4 rounded-r-lg bg-blue-500 text-white font-semibold shadow-sm hover:bg-blue-600 transition-colors duration-300"> + </button>
      </form>

      <div class="mb-4">
        <button class={`px-4 py-2 rounded-l-lg ${selectedTab() === Tab.All && "bg-gray-300"}`} onClick={() => setSelectedTab(Tab.All)}>All</button>
        <button class={`px-4 py-2 ${selectedTab() === Tab.Completed && "bg-gray-300"}`} onClick={() => setSelectedTab(Tab.Completed)}>Completed</button>
        <button class={`px-4 py-2 rounded-r-lg ${selectedTab() === Tab.Todo && "bg-gray-300"}`} onClick={() => setSelectedTab(Tab.Todo)}>To Do</button>
      </div>

      <ul class="text-left">
        <For each={getFilteredData()}>
          {({ id, title, isCompleted }) => (
            <li class={`flex items-center justify-between mb-2 ${isCompleted && "text-gray-500 line-through"}`}>
              <input type="checkbox" checked={isCompleted} onChange={() => todoApi.update(id, { isCompleted: !isCompleted })} class="mr-2" />
              <span class="text-lg">{title}</span>
              <button class="fas fa-trash text-red-500" onClick={_ => todoApi.remove(id)} />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}