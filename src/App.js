import React from 'react';
import './styles/App.scss';
import Navbar from './components/layouts/Navbar';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
    <Router>  
    <div className="App">
     <Navbar/>
     <div className="py-3">
       <Switch> 
        <Route exact path="/" component={Contacts}/> 
        <Route exact path="/create" component={AddContact}/>
        <Route exact path="/edit/:id" component={EditContact}/>
    </Switch> 
       </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
