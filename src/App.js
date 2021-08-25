import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'
import Footer from './components/Footer';


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div>
          <Router>
            <Header />
            <Section />
            <Footer />
          </Router>
        </div>
        
      </DataProvider>
    );
  }
}

export default App;
