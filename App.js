import React from 'react';
<<<<<<< HEAD
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
=======
import { createStackNavigator,createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen
},
{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App= createAppContainer(navigator);

export default () =>{
  return <BlogProvider>
      <App/>
  </BlogProvider>
};
>>>>>>> c1cb63d9cb9215c7ceaabac9727f878d680381f3
