import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  white:{
    color:'#fff',
    
  }
}))
const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
    <AppBar position="fixed">
        <Toolbar>
        <Link to='/'  className={classes.white}>
         <Typography variant="h6" color="inherit" noWrap>
            Ecommerce Shop 
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  );
};

export default Header;
