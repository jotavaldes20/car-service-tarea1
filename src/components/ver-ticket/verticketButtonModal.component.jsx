import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CerrarTicket from './../cerrar-ticket/CerrarTicketButtonModal.component'

const VerTicket =  ({ id, patente, fecha_ingreso, num_ticket,abierto  }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const ticket = {patente:patente,fecha_ingreso:fecha_ingreso,num_ticket:num_ticket}
    return (
        <div>
            <Button variant="contained" color="primary" size="small"
                        style={{ marginLeft: 2 }} onClick={handleOpen} >
                Ver
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Datos Ticket patente: {patente}</DialogTitle>
            <List>
                <ListItem >
                    <p>Patente: {patente}</p>
                </ListItem>
                <ListItem >
                    <p>Fecha de ingreso: {fecha_ingreso}</p>
                </ListItem>
                <ListItem >
                    <p>Num Ticket: {num_ticket}</p>
                </ListItem>
                <ListItem >
                    <p>cobro: $xxx.xxx</p>
                </ListItem>
                <ListItem >
                    {abierto===1? <CerrarTicket key={id}{...ticket}  /> : ''}
                </ListItem>
            </List>
            </Dialog>
        </div>
    );
}

export default VerTicket;




