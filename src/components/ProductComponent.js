import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Typography from '@material-ui/core/Typography';



const ProductComponent = (prop) => {

  const truncate=function(str) {
    return str.length > 10 ? str.substring(0, 200) + "..." : str;
  }

  
  const classes = prop.useStyles();
  
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category,description } = product;
    return (

      
         <Grid item key={id} xs={12} sm={6} md={4}>

<Card className={classes.card}>
<Link to={`/product/${id}`}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title={title}
                  />
                 </Link>
                  <CardContent className={classes.cardContent}>

                    <Typography gutterBottom variant="h5" component="h2">
                    <Link to={`/product/${id}`}>
                    <div className="big">{title}</div>
                    <div className="small">{category}</div>
                    </Link>
                    </Typography>
                    <Typography>
                      {truncate(description)}
                     
                    </Typography>
                  </CardContent>
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
                </Card>
         
            {/* <div className="card"> */}
            {/* <Link to={`/product/${id}`}> */}

            {/* <div className="shoeBackground" >
              <div className="gradients">
               <div className="gradient behind" color="white"></div>
                <div className="gradient" color="blue"></div>
                <div className="gradient" color="red"></div>
                <div className="gradient" color="green"></div>
                <div className="gradient" color="orange"></div>
                <div className="gradient" color="black"></div>
                </div>
                <h1 className="nike">nike</h1>
                <img src="/static/media/logo.b3434e3e.png" alt="logo" className="logo" />
                <a href="/#" className="share">
                  <svg className="svg-inline--fa fa-share-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
                    </svg>
                  </a> */}
                  {/* <img src={image} alt={title}  color="blue"  className="shoe show"/> */}
                      {/* <img src="/static/media/blue.182fd044.png" alt="blue shoe" className="shoe show" color="blue" />
                      <img src="/static/media/red.60bfc4f3.png" alt="red shoe" className="shoe" color="red" />
                      <img src="/static/media/green.88f61bc5.png" alt="green shoe" className="shoe" color="green" />
                      <img src="/static/media/orange.0e59d7df.png" alt="orange shoe" className="shoe" color="orange" />
                      <img src="/static/media/black.f49f54e4.png" alt="black shoe" className="shoe " color="black" /> */}

                  {/* </div>
                  <div className="info">
                    <div className="shoeName">
                      <div>
                        <h1 className="big">Nike Zoom KD 12</h1>
                        <span className="new">new</span>
                        </div>
                        <h3 className="small">Men's running shoes</h3>
                        </div>
                        <div className="description"
                        ><h3 className="title">Product Info</h3>
                        <p className="text">Ensure a comfortable running session by wearing this pair of cool running shoes from Nike.</p>
                        </div>
                        <div className="color-container">
                          <h3 className="title">Color</h3>
                          <div className="colors">
                            <span className="color active" primary="#2175f5" color="blue"></span>
                            <span className="color" primary="#f84848" color="red"></span>
                            <span className="color" primary="#29b864" color="green"></span>
                            <span className="color" primary="#ff5521" color="orange"></span>
                            <span className="color" primary="#444" color="black"></span>
                            </div>
                            </div>
                            <div className="size-container">
                              <h3 className="title">size</h3>
                              <div className="sizes">
                                <span className="size">7</span>
                                <span className="size">8</span>
                                <span className="size active">9</span>
                                <span className="size">10</span>
                                <span className="size">11</span>
                                </div>
                            </div>
                            <div className="buy-price">
                              <a href="/#" className="buy">
                                   <i className="fas fa-shopping-cart"></i> Add to card</a>
                                    <div className="price">
                                     
                                <i className="fas fa-dollar-sign"></i>
                                <h1>149.99</h1>
                                </div>
                                </div> */}
                                {/* </div> */}
              {/* <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div> */}
              {/* </Link> */}
            {/* </div> */}
       
       </Grid>

    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
