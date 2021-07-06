import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '15px 0 35px rgb(0 0 0 / 10%), 0 -15px 35px rgb(0 0 0 / 10%), 0 15px 35px rgb(0 0 0 / 10%)'
    
  },
  cardMedia: {
    paddingTop: '100%',
    /* padding-top: 0; */
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundSize:'contain'
    
  },
 
  

  cardContent: {
    flexGrow: 1,
    borderBottom: '1px solid #dadada',
    borderTop: '1px solid #dadada',
    marginTop: '10px',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  const classes = useStyles();
  return (
      <Container  className={classes.cardGrid} >
          <Grid container spacing={2}>
          <ProductComponent  useStyles={useStyles}/>
          </Grid>
   

      </Container>
          
   
        
  
  );
};

export default ProductPage;
