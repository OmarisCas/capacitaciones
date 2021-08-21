import React, { Component } from 'react';

import { Table, Segment, Loader, Image, Dimmer } from 'semantic-ui-react';

import ColumnaAlumno from './ColumnaAlumno';

import alumnos from '../../api/alumnos';

class TablaAlumnos extends Component {
    constructor(){
        super();

        this.state = {
            //alumnos: []
            alumnos: null
        };
    }

    componentDidMount(){
        //this.getAlumnos();
        setTimeout(() => {
            this.getAlumnos();
        }, 1500);
    }

    getAlumnos() {
        this.setState({ alumnos: alumnos });
    }

    render() {
        const { alumnos } = this.state;
        if(alumnos === null){
            return(
                <Segment>
                    <Dimmer active inverted>
                        <Loader indeterminate><h3>Recuperando datos...</h3></Loader>
                    </Dimmer>

                    <Image src='../../logo192.png' />
                </Segment>
            );
        }else{
            //
        }
        return (
            //Solo puede retornar un componente, en este caso table
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Edad</Table.HeaderCell>
                        <Table.HeaderCell>Nivel actual</Table.HeaderCell>
                        <Table.HeaderCell>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { alumnos.map(alumno => (
                        <ColumnaAlumno key={alumno.id} alumno={alumno} />
                    ))}
                </Table.Body>
            </Table>
        );
    }
}

export default TablaAlumnos;