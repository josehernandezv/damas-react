import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Home from './pages/Home';
import Room from './pages/Room';
import UnderConstruction from './pages/UnderConstruction';
import Layout from './components/common/Layout';
import RoomStore from './stores/RoomStore';

const roomStore = new RoomStore();

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 },
});

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Route
                    render={({ location }) => (
                        <PoseGroup>
                            <RouteContainer key={location.pathname}>
                                <Switch location={location}>
                                    <Route path="/room" render={() => <Room store={roomStore} />} />
                                    <Route
                                        path="/under-construction"
                                        component={UnderConstruction}
                                    />
                                    <Route exact path="/" component={Home} />
                                    <Redirect to="/" />
                                </Switch>
                            </RouteContainer>
                        </PoseGroup>
                    )}
                />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
