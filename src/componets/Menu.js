import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";

import StarIcon from "./StarIcon";
import DeleteIcon from "./DeleteIcon";

export default function SimpleMenu({ todo, onClickEdit }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Tooltip
            title={todo.completed ? "編集できません" : "編集"}
            style={{
              disabled: todo.completed || false
            }}
          >
            <IconButton onClick={onClickEdit} color="primary">
              <FontAwesomeIcon icon={["fas", "pen"]} />
            </IconButton>
          </Tooltip>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StarIcon todo={todo} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteIcon todo={todo} />
        </MenuItem>
      </Menu>
    </div>
  );
}
