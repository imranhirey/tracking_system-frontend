import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Tag } from '@mui/icons-material';

export default function Createtracking({
    open=false,
    setOpen
}) {
  const [tags, setTags] = React.useState([]);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <Dialog style={{
        borderEndEndRadius: 112,

      }} open={open} onClose={handleClose}>
        <DialogTitle>Create New Tracking</DialogTitle>
        <DialogContent>
          <DialogContentText>
          To create a tracking number for your customer, please fill out the required information and click on the Create button. Once complete, you can provide the tracking link to your customer for them to track their event.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tracking Name"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tracking Description"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Client Name"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Client Email"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
        label="Enter tags"
        variant="standard"
        fullWidth
        margin="normal"
        onKeyDown={handleKeyDown}
      />
       <div>
        {tags.map((tag) => (
          <Tag onClick={()=>{
            // remove
            setTags(tags.filter((t)=>t!==tag))
          }} key={tag}>{tag+' '}</Tag>
        ))}
      </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

