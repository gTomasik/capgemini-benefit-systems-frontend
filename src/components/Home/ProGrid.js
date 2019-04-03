import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MiniProject from './MiniProject';
<<<<<<< HEAD
=======
import AddProject from './AddProject';
>>>>>>> origin/master

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
<<<<<<< HEAD
    padding: theme.spacing.unit * 0.1,
    width: '200%',
    color: theme.palette.background.secondary,
    backgroundColor: 'white'
=======
    padding: theme.spacing.unit * 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:'',
>>>>>>> origin/master
  },
  cont: {
    width: '74.5%',
    padding: '1rem 1rem 1rem 1rem',

  },
});

function CenteredGrid(props) {
  const { classes } = props;
<<<<<<< HEAD

  return (
    <div className={classes.root}>
      <Grid container className={classes.cont} spacing ={12}>
        <Grid item xs={6}>
          <Paper className={classes.paper}><MiniProject/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><MiniProject/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><MiniProject/></Paper>
        </Grid>
     
=======
  const projects = props.props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.cont} spacing ={12}>

      {projects.map((data) => {
           return <Grid item xs={6}>
          <Paper className={classes.paper}><MiniProject props = {data}/></Paper>
        </Grid>
          })}
        <Grid item xs={6}>
          <Paper className={classes.paper}><AddProject/></Paper>
        </Grid>
>>>>>>> origin/master
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);