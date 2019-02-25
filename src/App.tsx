import * as React from 'react';
import Styled from 'styled-components/native';

import LottieView from 'lottie-react-native';
import { View } from 'react-native';

interface Props {}
interface State {}

const Container = Styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;
const Label = Styled.Text``;

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <View style={{ width: '170%', height: '100%' }}>
          <LottieView
            speed={0.7}
            hardwareAccelerationAndroid
            resizeMode="contain"
            source={require('./Assets/animations/data.json')}
            autoPlay
            loop
            imageAssetsFolder={'images'}
          />
        </View>
      </Container>
    );
  }
}
