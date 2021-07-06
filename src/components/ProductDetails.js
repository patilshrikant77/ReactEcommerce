import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  grid:{
    justifyContent: 'center',
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  description:{
    padding:'16px',

  },
  cover: {
    width: '90%',
    backgroundSize:'contain'

  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardActions:{
    display:'flex',
    justifyContent:'flex-end',
    borderTop: '1px solid #dadada',
    marginTop:'1rem',
  }
}));

const ProductDetails = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <Container  className={classes.cardGrid} >
          <Grid container spacing={2} className={classes.grid}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Grid item  xs={12} sm={8} md={8} >
        <Card >
       <div  className={classes.root}>
            <CardMedia
          className={classes.cover}
          image={image}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
             {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
             {category}
            </Typography>
          </CardContent>
         
          <Typography variant="subtitle1" color="textSecondary" className={classes.description}>
             {description}
            </Typography>
         
        </div>
        </div>
        <div className={classes.cardActions}>
        <CardActions >
                  
                    
                  <Button variant="contained"  color="primary"  startIcon={<AddShoppingCartIcon />}>
                    Add To Card
                  </Button> 
                  

                    <div className="buy-price" >
                      <div className="price">
                      $<h1>{price}</h1>
                      </div>
                    </div>
                    
                   
               
                </CardActions>

        </div>
      
      </Card>

     
      </Grid>
        
        // <div className="ui placeholder segment">
        //   <div className="ui two column stackable center aligned grid">
        //     <div className="ui vertical divider">AND</div>
        //     <div className="middle aligned row">
        //       <div className="column lp">
        //         <img className="ui fluid image" src={image} />
        //       </div>
        //       <div className="column rp">
        //         <h1>{title}</h1>
        //         <h2>
        //           <a className="ui teal tag label">${price}</a>
        //         </h2>
        //         <h3 className="ui brown block header">{category}</h3>
        //         <p>{description}</p>
        //         <div className="ui vertical animated button" tabIndex="0">
        //           <div className="hidden content">
        //             <i className="shop icon"></i>
        //           </div>
        //           <div className="visible content">Add to Cart</div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
   </Grid>
   </Container>
  );
};

export default ProductDetails;
