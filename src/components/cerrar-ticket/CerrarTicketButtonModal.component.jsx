import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MiAlerta from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


function Alert(props) {
    return <MiAlerta elevation={6} variant="filled" {...props} />;
  }


const useStyles = makeStyles(theme => ({
    alerta: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
    },
}));
const CerrarTicket = ({ id, patente, fecha_ingreso, num_ticket }) => {
    const classes = useStyles();
    const [openAlerta, setOpenAlerta] = React.useState(false);
    const abrirAlerta = () => {
        setOpenAlerta(!openAlerta);
    };
    const cerrarAlerta = () => {
        setOpenAlerta(false);
    };
    return (
        <div id="alerta">
            <div className={classes.alerta}>
            <Button variant="contained" color="secondary" size="small"
                style={{ margin: 6 }} onClick={abrirAlerta}>
                Sacar Ticket
            </Button>
            <Snackbar open={openAlerta} autoHideDuration={6000} onClose={cerrarAlerta} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
                <Alert onClose={cerrarAlerta} severity="success">
                    <p>Ticket patente: <b>{patente}</b> cerrada exitosamente</p>
                </Alert>
            </Snackbar>
            </div >
        </div >
    );
}

export default CerrarTicket;




