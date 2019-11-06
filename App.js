/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Spinner} from 'native-base';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3500),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({isLoading: false});
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <React.Fragment>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: '50%',
                height: '70%',
                marginTop: hp('30%'),
              }}
              source={require('./src/img/logo.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: hp('20%'),
            }}>
            <Spinner color={'#607D8B'} />
          </View>

        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <WebView source={{uri: 'http://lol.zenithwebs.com/'}} />
      </React.Fragment>
    );
  }
}

export default App;
