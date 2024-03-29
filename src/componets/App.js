import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import AddTodo from './AddTodo'
// import VisibleTodoList from './VisibleTodoList'
// import VisibleTodoList from './TodoList'
import TodoList from './TodoList2'
import NewTodoList from './NewTodoList'
import Footer from './Footer'
import Header from './Header'

library.add(fab, fas, far)

const App = () => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#546e7a',
      }
    }
  })

  return (
    <div className="container">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Typography component="div" style={{ backgroundColor: '#fafafa', height: '100vh' }} >

          <Container maxWidth="sm" >
            <Header />
            {/* <AddTodo /> */}
            <TodoList />
            <NewTodoList />
            <Footer />
          </Container>
        </Typography>
      </ThemeProvider>
    </div >
  );
}

export default App;
