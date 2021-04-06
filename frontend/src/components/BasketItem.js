import React from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';

// Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

//Actions
import { addToBasket, removeFromBasket } from '../redux/actions/basketActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '500px',
  },
  details: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { user } = useSelector((state) => state.auth);

  const { imageUrl, quantity, price, name, productId } = item;

  const increaseByOne = () => {
    dispatch(addToBasket(user._id, productId, 1));
  };
  const decreaseByOne = () => {
    dispatch(removeFromBasket(user._id, productId, 1));
  };

  return (
    <>
      <Grid container item xs={12}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Brand Here
              </Typography>
              <Typography component="h5" variant="h5">
                £ {price[2].toFixed(2)}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton onClick={decreaseByOne}>-</IconButton>
              <IconButton disabled>{quantity}</IconButton>
              <IconButton onClick={increaseByOne}>+</IconButton>
            </div>
          </div>

          <CardMedia className={classes.image} image={imageUrl} title={name} />
        </Card>
      </Grid>
    </>
  );
};

export default BasketItem;
