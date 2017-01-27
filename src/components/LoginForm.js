import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state={ email: '' };
  state={ password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="username@email.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            underlineColorAndroid={'transparent'}
          />
        </CardSection>
        
        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid={'transparent'}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
