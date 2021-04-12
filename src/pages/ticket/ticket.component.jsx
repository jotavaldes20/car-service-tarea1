import React from "react";

import TICKET_DATA from "./ticket.data.js";

import TicketList from "../../components/ticket-list/ticketlist.component";
import "./ticket.styles.scss"

class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: TICKET_DATA
    };
  }

  render() {
    const { tickets } = this.state;
    return (
      <div className="contenido">
        {tickets.map(({id}) =>(console.log(id)))}
          <TicketList tickets={tickets} />
      </div>
    );
  }
}

export default Ticket;