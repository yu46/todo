import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// import AddTodo from './AddTodo'
// import VisibleTodoList from './VisibleTodoList'
// import VisibleTodoList from './TodoList'
import TodoList from './TodoList2'
import Footer from './Footer'
import Header from './Header'

library.add(fab, fas, far)

const App = () => {
  return (
    <div>
      <Header />
      {/* <AddTodo /> */}
      <TodoList />

      <Footer />
    </div>
  );
}

export default App;
