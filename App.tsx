import React from 'react';
import {Image} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';

import {FeedScreen} from './app/screens/feed/feed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabBarItemConfig,
  FlashyTabBarConfig,
} from '@gorhom/animated-tabbar';
import {RedirectScreen} from './app/screens/redirect/redirect';
import Icon from 'react-native-vector-icons/FontAwesome';
import hsvg from './hsvg';

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
const tabs: TabsConfig<FlashyTabBarConfig> = {
  Home: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: hsvg,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Profile: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: hsvg,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

const Tab = createBottomTabNavigator();

const App = () => {
  // @ts-ignore
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <AnimatedTabBar tabs={tabs} {...props} />}>
            <Tab.Screen name="Home" component={FeedScreen} />
            <Tab.Screen name="Profile" component={FeedScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
