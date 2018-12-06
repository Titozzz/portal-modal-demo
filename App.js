/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//require('MessageQueue').spy(true);
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { ModalRoot, Modal } from 'react-native-modal';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    show: false,
    show2: false,
  };

  render() {
    return (
      <ModalRoot>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>{`show: ${this.state.show}`}</Text>
          <Button
            title="Toggle Modal 1"
            onPress={() => {
              this.setState({ show: !this.state.show });
            }}
          />
          <Button
            title="Toggle Modal 2"
            marginTop={10}
            onPress={() => {
              this.setState({ show2: !this.state.show2 });
            }}
          />
          <Button
            title="Toggle Both"
            marginTop={10}
            onPress={() => {
              this.setState({
                show: !this.state.show,
                show2: !this.state.show2,
              });
            }}
          />
          <Modal
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            isVisible={this.state.show}
            onBackdropPress={() => {
              this.setState({ show: false });
            }}
          >
            <View
              style={{ height: 200, width: 200, backgroundColor: 'green' }}
            />
          </Modal>
          <Modal
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            isVisible={this.state.show2}
            onBackdropPress={() => {
              this.setState({ show2: false });
            }}
          >
            <View
              style={{ height: 200, width: 200, backgroundColor: 'blue' }}
            />
          </Modal>
        </View>
      </ModalRoot>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
