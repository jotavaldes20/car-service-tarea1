import React from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Common/header/header.component";
import Footer from "./components/Common/footer/footer.component";
import HomePage from "./pages/homepage/homepage.component";
import TicketList from "./pages/ticket/ticket.component";
//StateLess
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid sm={12} style={{ paddingBottom: 200 }}>
            <CssBaseline />
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/ticketList" component={TicketList} />
            </Switch>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
