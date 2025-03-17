import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Destructuring Props 
const ProductList = ({ title, image, desc, category, price, rating }) => {
  return (

    <>
      <Card sx={{ maxWidth: 345, margin: "2vw"}}>

        <CardMedia
          component="img"
          height="220"
          image={image}
          alt="Product"
          sx={{
            objectFit: 'contain',
          }}
        />

        <CardHeader
          sx={{
            '& .MuiCardHeader-title': {
              fontSize: '20px'
            },
            '& .MuiCardHeader-subheader': {
              paddingTop: "10px"
            },
          }}
          title={title}
          subheader={category}
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {desc}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}>
          <Box sx={{ display: "inline", alignItems: "center", gap: 1 }}>
            <Typography variant="h6" color="primary">
              ${price}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography variant="body2">{rating.rate}/5 ({rating.count})</Typography>
              <StarIcon color="warning" fontSize="small" />
            </Box>
          </Box>

          <Box>
            <IconButton color="error" aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Buy">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </>
  )
};

export default ProductList;