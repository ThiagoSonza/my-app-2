import React from 'react';
import { Table } from 'semantic-ui-react'

class TaskTable extends React.Component {

    render() {
        return(
            <Table basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> Solicitação </Table.HeaderCell>
                        <Table.HeaderCell> Atendente </Table.HeaderCell>
                        <Table.HeaderCell> Prioridade </Table.HeaderCell>
                        <Table.HeaderCell> Situação </Table.HeaderCell>
                        <Table.HeaderCell> Data </Table.HeaderCell>
                        <Table.HeaderCell> Cliente </Table.HeaderCell>
                        <Table.HeaderCell> Assunto </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                </Table.Body>                    
            </Table>
        )
    }

}

export default TaskTable;