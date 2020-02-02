import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import { useEffect } from 'react';


const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));


export default function List(props) {
  const classes = useStyles();
  const [queens, updateQueens] = useState([]);

  useEffect(() => {
    async function getQueens() {
      const resp = await fetch('http://www.nokeynoshade.party/api/queens')
      const data = await resp.json();
      updateQueens(data);
    }
    getQueens();
  }, []) // [] used to stop the function to keeping getting called

  console.log(props)

  return (
     <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {
          queens.map((queen) => {
            return (
              <Grid  key={queen.id} item xs={12} sm={6} m={4}>
                <Card 
                  heading={queen.name}
                  description={queen.quote}
                  imgUrl={queen.image_url}
                  onClick={() => {
                    props.history.push(`/queen/${queen.id}`);
                  }}
                />
              </Grid>
            );
          })
        }
      </Grid>
     </Container>
  );
}