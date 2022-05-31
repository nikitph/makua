import React from 'react';
import {Image} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';

import {FeedScreen} from './app/screens/feed/feed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RedirectScreen} from './app/screens/redirect/redirect';

const queryClient = new QueryClient();

function LogoTitle() {
  return (
    <Image
      style={{width: 40, height: 40}}
      source={require('./app/assets/mk.webp')}
    />
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  // @ts-ignore
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
              name="Feed"
              component={FeedScreen}
              options={{headerRight: props => <LogoTitle {...props} />}}
            />
            <Stack.Screen
              name="Redirect"
              component={RedirectScreen}
              options={{headerRight: props => <LogoTitle {...props} />}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
