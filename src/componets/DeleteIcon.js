import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";

import { deleteTodo } from "../actions";

const DeleteIcon = ({ dispatch, todo }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let icon;
  if (todo.onDialog) {
    icon = (
      <React.Fragment>
        <Tooltip title="削除">
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={handleClickOpen}
            // onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <FontAwesomeIcon icon={["fas", "trash-alt"]} />
          </IconButton>
        </Tooltip>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{"削除してもよろしいですか"}</DialogTitle>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              キャンセル
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
                handleClose();
              }}
              color="primary"
              autoFocus
            >
              タスクの削除
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  } else {
    icon = (
      <Tooltip title="削除">
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <FontAwesomeIcon icon={["fas", "trash-alt"]} />
        </IconButton>
      </Tooltip>
    );
  }

  return <React.Fragment>{icon}</React.Fragment>;
};

// export default DeleteIcon;
export default connect()(DeleteIcon);
