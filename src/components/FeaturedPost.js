import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const FeaturedPost = ({ post, handleDelete }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: 'flex', position: 'relative' }}>
        <CardActionArea component="a" href="#">
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </CardActionArea>
        <IconButton
          aria-label="delete"
          sx={{ position: 'absolute', top: 0, right: 0 }}
          onClick={() => handleDelete(post.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Card>
    </Grid>
  );
};

export default FeaturedPost;

// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// const FeaturedPost = ({ post, handleDelete }) => {
//   return (
//     <Grid item xs={12} md={6}>
//       <Card sx={{ display: 'flex', position: 'relative' }}>
//         <CardActionArea component="a" href="#">
//           <CardContent sx={{ flex: 1 }}>
//             <Typography component="h2" variant="h5">
//               {post.title}
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//               {post.date}
//             </Typography>
//             <Typography variant="subtitle1" paragraph>
//               {post.description}
//             </Typography>
//             <Typography variant="subtitle1" color="primary">
//               Continue reading...
//             </Typography>
//           </CardContent>
//           <CardMedia
//             component="img"
//             sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
//             image={post.image}
//             alt={post.imageLabel}
//           />
//         </CardActionArea>
//         <IconButton
//           aria-label="delete"
//           sx={{ position: 'absolute', top: 0, right: 0 }}
//           onClick={() => handleDelete(post.id)}
//         >
//           <DeleteIcon />
//         </IconButton>
//       </Card>
//     </Grid>
//   );
// };

// export default FeaturedPost;

