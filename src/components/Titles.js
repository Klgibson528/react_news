import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function Titles(props) {

  const { classes } = props;

  const listOfCards = props.titles.map(article => (
    
    <div key={article.title} className='card'>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={article.urlToImage}
          title={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          {article.title}
          </Typography>
          <Typography component="p">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary" href={article.url}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  ));
  
  return (
    <div className="card_box">
      {listOfCards}
    </div>
  );
}

Titles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Titles);
