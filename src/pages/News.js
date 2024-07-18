import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainNewsFeature from '../components/MainNewsFeature';
import FeaturedPost from '../components/FeaturedPost';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const News = () => {
  const [mainFeaturedPost, setMainFeaturedPost] = useState({});
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    date: '',
    description: '',
    image: '',
    imageLabel: 'Image Text'
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get('http://localhost:1122/mainFeaturedPost')
      .then(response => setMainFeaturedPost(response.data))
      .catch(error => console.error('Error fetching mainFeaturedPost:', error));

    axios.get('http://localhost:1122/featuredPosts')
      .then(response => setFeaturedPosts(response.data))
      .catch(error => console.error('Error fetching featuredPosts:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1122/featuredPosts/${id}`)
      .then(() => {
        setFeaturedPosts(prevPosts => prevPosts.filter(post => post.id !== id));
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  const handleAddPost = () => {
    const postToAdd = {
      ...newPost,
      id: Date.now() // Ensure unique ID using timestamp
    };
    axios.post('http://localhost:1122/featuredPosts', postToAdd)
      .then(() => {
        fetchPosts(); // Re-fetch posts to ensure UI is updated
        setOpen(false);
      })
      .catch(error => console.error('Error adding post:', error));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <main>
        <MainNewsFeature post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.id} post={post} handleDelete={handleDelete} />
          ))}
        </Grid>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add New Post
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Post</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="title"
              label="Title"
              fullWidth
              value={newPost.title}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="date"
              label="Date"
              fullWidth
              value={newPost.date}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="description"
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={newPost.description}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="image"
              label="Image URL"
              fullWidth
              value={newPost.image}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="imageLabel"
              label="Image Label"
              fullWidth
              value={newPost.imageLabel}
              onChange={handleChange}
              defaultValue="Image Text"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddPost} color="primary">
              Add Post
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </Container>
  );
};

export default News;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import MainNewsFeature from '../components/MainNewsFeature';
// import FeaturedPost from '../components/FeaturedPost';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';

// const News = () => {
//   const [mainFeaturedPost, setMainFeaturedPost] = useState({});
//   const [featuredPosts, setFeaturedPosts] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [newPost, setNewPost] = useState({
//     title: '',
//     date: '',
//     description: '',
//     image: '',
//     imageLabel: 'Image Text'
//   });

//   useEffect(() => {
//     axios.get('http://localhost:1122/mainFeaturedPost')
//       .then(response => setMainFeaturedPost(response.data))
//       .catch(error => console.error('Error fetching mainFeaturedPost:', error));

//     axios.get('http://localhost:1122/featuredPosts')
//       .then(response => setFeaturedPosts(response.data))
//       .catch(error => console.error('Error fetching featuredPosts:', error));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:1122/featuredPosts/${id}`)
//       .then(() => {
//         setFeaturedPosts(prevPosts => prevPosts.filter(post => post.id !== id));
//       })
//       .catch(error => console.error('Error deleting post:', error));
//   };

//   const handleAddPost = () => {
//     const postToAdd = {
//       ...newPost,
//       id: featuredPosts.length + 1
//     };
//     axios.post('http://localhost:1122/featuredPosts', postToAdd)
//       .then(response => {
//         setFeaturedPosts(prevPosts => [...prevPosts, response.data]);
//         setOpen(false);
//       })
//       .catch(error => console.error('Error adding post:', error));
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
//       <main>
//         <MainNewsFeature post={mainFeaturedPost} />
//         <Grid container spacing={4}>
//           {featuredPosts.map((post) => (
//             <FeaturedPost key={post.id} post={post} handleDelete={handleDelete} />
//           ))}
//         </Grid>
//         <Button variant="contained" color="primary" onClick={handleClickOpen}>
//           Add New Post
//         </Button>
//         <Dialog open={open} onClose={handleClose}>
//           <DialogTitle>Add New Post</DialogTitle>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               name="title"
//               label="Title"
//               fullWidth
//               value={newPost.title}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="dense"
//               name="date"
//               label="Date"
//               fullWidth
//               value={newPost.date}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="dense"
//               name="description"
//               label="Description"
//               fullWidth
//               multiline
//               rows={4}
//               value={newPost.description}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="dense"
//               name="image"
//               label="Image URL"
//               fullWidth
//               value={newPost.image}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="dense"
//               name="imageLabel"
//               label="Image Label"
//               fullWidth
//               value={newPost.imageLabel}
//               onChange={handleChange}
//               defaultValue="Image Text"
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleAddPost} color="primary">
//               Add Post
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </main>
//     </Container>
//   );
// };

// export default News;

