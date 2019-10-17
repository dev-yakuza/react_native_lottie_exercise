import React from 'react';
import {View} from 'react-native';
import Styled from 'styled-components/native';

import LottieView from 'lottie-react-native';

const Container = Styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <View style={{width: '170%', height: '100%'}}>
        <LottieView
          speed={0.7}
          hardwareAccelerationAndroid
          resizeMode="contain"
          source={require('~/Assets/animations/data.json')}
          autoPlay={true}
          loop={true}
          imageAssetsFolder={'images'}
        />
      </View>
    </Container>
  );
};

export default App;
