import React, { Component } from 'react';

import { Table, Button, Icon  } from 'semantic-ui-react';

class ColumnaAlumno extends Component {
    constructor(props){
        super(props);

    }

    render(){
        const { alumno } = this.props; 
        return(
            <Table.Row>
                <Table.Cell>{alumno.name}</Table.Cell>
                <Table.Cell>{alumno.age}</Table.Cell>
                <Table.Cell>{alumno.level}</Table.Cell>
                <Table.Cell>
                    <Button color="blue" animated>
                        <Button.Content visible>
                            <Icon name="eye"/>
                        </Button.Content>
                        <Button.Content hidden>
                            <Icon name="right arrow" />
                        </Button.Content>
                    </Button>

                    <Button color="green" animated="vertical">
                        <Button.Content visible>
                        <Icon name="pencil"/>
                        </Button.Content>
                        <Button.Content hidden>
                        <Icon name="right arrow" />
                        </Button.Content>
                    </Button>

                    <Button  color="red" animated="fade">
                        <Button.Content visible>
                        <Icon name="trash"/>
                        </Button.Content>
                        <Button.Content hidden>
                        <Icon name="remove" />
                        </Button.Content>
                    </Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default ColumnaAlumno;