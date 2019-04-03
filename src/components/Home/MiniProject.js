import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing.unit * 0.1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  desc: {
    padding: theme.spacing.unit * 0.1,
    textAlign: 'center',
    color: theme.palette.text.secondary,

    
  },
  cont: {
    width: '33%',
    padding: '1rem 1rem 1rem 1rem',

  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
     <NavLink style={naviStyle} exact to="/project">
      <Grid container 
      className={classes.cont}
      direction="column"
      wrap="nowrap"
      >
        <Grid item xs>
          <Paper className={classes.paper}>
            <div style ={photoStyle}>
              <Typography >foto</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant="h4">Tytul</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Typography variant="h5" >Liczba Miejsc: 3/7</Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.desc}>
            <Typography noWrap variant="p">
            "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer,Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer  "
            </Typography>
          </Paper>
        </Grid>

      </Grid>
      </NavLink>
    </div>
  );
}

const photoStyle = {
    background: '#6a6a6a',
    height:'20rem',

}
const naviStyle = {
  textDecoration: 'none',
  color: '#ffffff',
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);