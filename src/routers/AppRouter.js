import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddSound from '../components/AddSound';
import EditSound from '../components/EditSound';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div className='container-fluid'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/add" component={AddSound} />
                <Route path="/sound/:id" component={EditSound} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;