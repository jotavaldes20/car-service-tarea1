import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import VerTicket from './../ver-ticket/verticketButtonModal.component'
import CerrarTicket from './../cerrar-ticket/CerrarTicketButtonModal.component'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'patente', headerName: 'Patente', width: 130 },
    { field: 'fecha_ingreso', headerName: 'Fecha Ingreso', width: 350 },
    { field: 'num_ticket', headerName: 'Num Ticket', width: 250 },
    { field: 'abierto', headerName: 'estado', width: 100 },
    {
        field: 'accion',
        headerName: 'accion',
        renderCell: (params) => (

            <strong>
                {(params.getValue('abierto') === 1 ?

                    <ButtonGroup>

                        <VerTicket key={params.row.id} {...params.row} />
                        <CerrarTicket key={params.row.id} {...params.row} />
                    </ButtonGroup>

                    :
                    <VerTicket key={params.row.id} {...params.row} />
                )
                }
            </strong>
        ),
        width: 250
    },
];


const TicketList = ({ tickets }) => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <div style={{ display: 'flex', height: 500, width: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <DataGrid
                            rows={tickets}
                            columns={columns}
                            pageSize={10}
                            autoHeight={true}
                        />
                    </div>
                </div>
            </Grid>
        </Grid>

    )

}

export default TicketList;