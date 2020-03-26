import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import DetailPage from './pages/Detail'
import NewContactPage from './pages/NewContact'
import Register from './pages/Register';
import LoginForm from './pages/Login';
import Home from './pages/Home';
import facebookRegis from './pages/facebookRegis';
import googleRegis from './pages/googleRegis';
import { LoadingExample } from './pages/testloading';
import APIGarden from './pages/APIGarden';
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/Home" component={Home} exact={true} />
        <Route path="/Detail" component={DetailPage} exact={true} />
        <Route path="/New-contact" component={NewContactPage} exact={true} />
        <Route path="/Register" component={Register} exact={true} />
        <Route path="/facebookRegis" component={facebookRegis} exact={true} />
        <Route path="/googleRegis" component={googleRegis} exact={true} />
        <Route path="/Login" component={LoginForm} exact={true} />
        <Route path="/testloading" component={LoadingExample} exact={true} />
        <Route path="/APIGarden" component={APIGarden} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/Login" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
