import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import EditFiscalia from './components/EditFiscalia'
import App from './components/App'
//Componente principal

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
  <div>  
      <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/edit/:id" component={EditFiscalia} />
          
      </Switch>
  </div>
  </Router>
)

ReactDOM.render(
  <AppRouter/>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
