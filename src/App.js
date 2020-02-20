import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import TablesBookingEdit from './components/views/TablesBookingEdit/TablesBookingEdit';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsId from './components/views/TablesEventsId/TablesEventsId';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';

import { StylesProvider } from '@material-ui/core/styles';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route
                exact path={`${process.env.PUBLIC_URL}/`}
                component={Dashboard}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/login`}
                component={Login}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/tables`}
                component={Tables}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`}
                component={TablesBookingEdit}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/tables/booking/new`}
                component={TablesBookingNew}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/tables/events/:id`}
                component={TablesEventsId}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/tables/events/new`}
                component={TablesEventsNew}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/waiter`}
                component={Waiter}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`}
                component={WaiterOrderId}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/waiter/order/new`}
                component={WaiterOrderNew}
              />
              <Route
                exact path={`${process.env.PUBLIC_URL}/kitchen`}
                component={Kitchen}
              />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
