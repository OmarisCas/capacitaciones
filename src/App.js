//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import { Header, Icon, Divider, Container } from 'semantic-ui-react';
import alumnos from './api/alumnos';

import { TablaAlumnos } from './components/alumnos';
import ButtonGroup from './components/ButtonGroup';
import TablaProfesores from './components/profesores/TablaProfesores';

class App extends Component {
  constructor(){
    super();

    this.state = {
      tablaVisible: alumnos
    };

    this.setTablaVisible =  this.setTablaVisible.bind(this);
  }

  setTablaVisible(tablaSeleccionada) {
    this.setState({ tablaVisible: tablaSeleccionada });
  }

  renderTabla(){
    const { tablaVisible } = this.state;

    if(tablaVisible === 'alumnos'){
      return <TablaAlumnos />;
    }else if(tablaVisible === 'profesores'){
      return <TablaProfesores />;
    }
  }

  render(){
    const { tablaVisible } = this.state;

    return(
      <div className="App">
        <Header as="h2" icon textAlign="center">
          <Icon name="book" circular/>
          <Header.Content>AcademyApp</Header.Content>
        </Header>
        <Divider/>
        <Container textAlign="center">
          <h1>Aquí irán los alumnos y profesores de la AcademyApp</h1>
          {this.renderTabla()}
          <ButtonGroup setTablaVisible={this.setTablaVisible} tablaSeleccionada={tablaVisible} />
        </Container>
      </div>
    );
  }
}

export default App;
