import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  queenImage: {
    height: 500,
    width: '85%',
  }
}))

export default function Queen(props) {
  const classes = useStyles();
  const [queen, updateQueen ] = useState({
    name: '',
    image: '',
    quote: '',
  });

  useEffect(() => {
    async function getQueenByID(id) {
      try {
        const resp = await fetch(`https://www.nokeynoshade.party/api/queens/${id}`)
        const data = await resp.json()
  
        updateQueen(data)

      } catch (ex) {
        console.log(ex);
      }
    }

    getQueenByID(props.match.params.id);
  }, [props.match.params.id]);

  return(
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <img className={classes.queenImage} src={queen.image_url} alt={queen.name} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2">{queen.name}</Typography>
          <Typography variant="body1">{queen.desciption}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}