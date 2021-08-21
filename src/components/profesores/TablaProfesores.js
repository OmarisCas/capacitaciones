import React, { Component } from 'react';

import { Table, Segment, Loader, Image, Dimmer } from 'semantic-ui-react';

import ColumnaProfesor from './ColumnaProfesor';

import profesores from '../../api/profesores';

class TablaProfesores extends Component {
    constructor(){
        super();

        this.state = {
            profesores: null
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.getProfesores();
        }, 1500);
    }

    getProfesores() {
        this.setState({ profesores: profesores });
    }

    render() {
        const { profesores } = this.state;
        if(profesores === null){
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
                    { profesores.map(profesor => (
                        <ColumnaProfesor key={profesor.id} profesor={profesor} />
                    ))}
                </Table.Body>
            </Table>
        );
    }
}

export default TablaProfesores;