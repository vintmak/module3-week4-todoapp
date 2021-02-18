import {createStackNavigator} from 'react-navigation-stack'; 
import { createAppContainer } from "react-navigation"; 
import Home from './components/home'; 
import Add from './components/add'; 
import Detail from './components/detail'; 

const screens = { 
    Home: { screen: Home }, 
    Add: { screen:Add }, 
    Detail: { screen:Detail } 
} 

    const HomeStack = createStackNavigator(screens); 

    export default createAppContainer(HomeStack); 