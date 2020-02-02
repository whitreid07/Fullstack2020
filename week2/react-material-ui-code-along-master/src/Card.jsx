import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: 500,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function CardComponent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.imgUrl}
        title={props.heading}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.heading}
        </Typography>
        <Typography>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.onClick} size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}