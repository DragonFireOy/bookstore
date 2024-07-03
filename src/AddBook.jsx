import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddBook(props) {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({title: '', author: '', year: '', isbn: '', price: ''});

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = () => {
    props.AddBook(book);
    handleClose();
  }

  const inputChanged = (event) => {
    setBook({...book, [event.target.name]: event.target.value});
  }

  return(
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add book
      </Button>
     <Dialog open={open}>
       <DialogTitle>New book</DialogTitle>
       <DialogContent> 
         <TextField
            name="title"
            value={book.description}
            onChange={inputChanged}
            margin="dense"
            label="Title"
            fullWidth
          /> 
         <TextField
           name="author"
           value={book.date}
           onChange={inputChanged}
           margin="dense"
           label="Author"
           fullWidth
         /> 
         <TextField
           name="year"
           value={book.priority}
           onChange={inputChanged}
           margin="dense"
           label="Year"
           fullWidth
         /> 
         <TextField
           name="isbn"
           value={book.priority}
           onChange={inputChanged}
           margin="dense"
           label="ISBN"
           fullWidth
         /> 
         <TextField
           name="price"
           value={book.priority}
           onChange={inputChanged}
           margin="dense"
           label="Price"
           fullWidth
         /> 
      </DialogContent>
      <DialogActions>
         <Button color="primary" onClick={handleClose}>Cancel</Button>
         <Button color="primary" onClick={handleSave}>Save</Button>
      </DialogActions>
     </Dialog> 
    </>
  );
}

export default AddBook;