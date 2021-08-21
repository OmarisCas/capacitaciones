import React, { Component } from 'react';

import { Button } from 'semantic-ui-react';

class ButtonGroup extends Component {
    constructor(props){
        super(props);
    }

    render (){
        const { setTablaVisible, tablaSeleccionada } = this.props;

        let alumnosSeleccionado = tablaSeleccionada === 'alumnos' ? true : false;

        let profesoresSeleccionado = tablaSeleccionada === 'profesores' ? true : false;

        return (
            <Button.Group>
                <Button onClick={() => setTablaVisible('alumnos')} color="blue" positive={alumnosSeleccionado}>
                    Habilitados
                </Button>
                <Button.Or text=""/>
                <Button onClick={() => setTablaVisible('profesores')} color="blue" positive={profesoresSeleccionado}>
                    Deshabilitados
                </Button>
            </Button.Group>
        );
    }
}

export default ButtonGroup;