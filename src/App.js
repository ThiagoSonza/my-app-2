
import React from 'react';
import Menu from './Components/Menu';
import TaskTable from './Components/TasksTable';
import { Container, Grid, Button, Tab } from 'semantic-ui-react'

function App() {

  const panes = [
    {
      menuItem: 'Em antendimento',
      render: () => <Tab.Pane attached={false}> <TaskTable></TaskTable> </Tab.Pane>,
    },
    {
      menuItem: 'Em Pausa',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'Aguardando Atendimento',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
    {
      menuItem: 'Aguardando Outra Área',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
    {
      menuItem: 'Aguardando Solicitante',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ]

return (
    <div className="App">
      <Menu></Menu>
      <Container className="container-content">
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Button floated='left'> + Nova Solicitação </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid columns={1} className="tasks">
          <Grid.Row>
            <Grid.Column>
              <Tab menu={{ text: true }} panes={panes} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
