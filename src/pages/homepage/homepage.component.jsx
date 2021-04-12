import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import carServiceImg from "./../../assets/solucion_app_carservice_verde.svg"
const useStyles = makeStyles((theme) =>
  createStyles({
 
    posicion: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    grid: {
        paddingLeft:100,
      },
  }),
);
const HomePage = () => {
    const classes=useStyles();
  return (
    <div className={classes.content}>
        <div className={classes.posicion} >
            <Grid container spacing={3} className={classes.grid}>
                <Grid item sm={3} xs={5}>
                    <h2>Bienvenido a CarService</h2>
                </Grid>
                <Grid item sm={9} xs ={7}>
                    <img alt="carservice" src={carServiceImg} width="500" maxWidth="200" />
                </Grid>
            </Grid>
           
        </div>
    </div>
  );
}

export default HomePage;