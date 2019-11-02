import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import TodoList from "./TodoList2";
import NewTodoList from "./NewTodoList";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Title from "./Title";

library.add(fab, fas, far);

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#546e7a",
        Dark: "#29434e",
        light: "#819ca9"
      }
    }
  });

  return (
    <div className="container">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Typography
          component="div"
          style={{ backgroundColor: "#fafafa", height: "100vh" }}
        >
          <Container maxWidth="sm">
            <Title />
            {/* <Paper> */}
            {/* <Header /> */}
            <Main />
            {/* <AddTodo /> */}
            {/* <TodoList /> */}
            {/* <NewTodoList /> */}
            {/* </Paper> */}
            <Footer />
          </Container>
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default App;
