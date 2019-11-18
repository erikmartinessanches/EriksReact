import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        values: [] //First an empty array
    }

    componentDidMount() { //After mounting we set the state array
        axios.get('http://localhost:62243/api/values')
            .then((response) => {
                console.log(response);
                this.setState({
                    values: response.data
                })
            })

    }

    render() {
        return (
            <div>
                <Header as='h2'>
                    <Icon name='users' />
                    <Header.Content>Erik's React app</Header.Content>
                </Header>
                <List>
                    {this.state.values.map((value: any) => (
                        <li key={value.id}>{value.name}</li>
                    ))}
                </List>


            </div>
        );
    }

}

export default App;
