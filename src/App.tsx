import { Component } from 'solid-js';
import { MetaProvider } from '@solidjs/meta';
import { TodoApp } from './component/todo.component';


const App: Component = () => (
  <MetaProvider>
    <TodoApp />
  </MetaProvider>
);

export default App;