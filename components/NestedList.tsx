
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


import AddIcon from '@mui/icons-material/Add';

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


import EditNoteIcon from '@mui/icons-material/EditNote';

import ManageHistoryIcon from '@mui/icons-material/ManageHistory';


export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'  }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<></>}
    >
      <ListItemButton>
        <ListItemIcon>
          <PlaylistAddIcon />
        </ListItemIcon>
        <ListItemText primary="ثبت غلطک" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <EditNoteIcon />
        </ListItemIcon>
        <ListItemText primary="تراش" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ManageHistoryIcon />
        </ListItemIcon>
        <ListItemText primary="تغییر وضعیت غلطک" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pr: 6 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="موجودی انبار workshop" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}