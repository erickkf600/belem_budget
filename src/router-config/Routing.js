import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Search, GenereteBudget, Budgets, Profile } from './LazyImport'
import TabBar from './Tab-bar'
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const GenereteBudgetStackScreenStack = createStackNavigator();
const BudgetStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name="Home" component={Home} options={{ title: 'Belem Budget' }} />
        </HomeStack.Navigator>
    )
}
const SearchStackScreen = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Pesquisar" component={Search} options={{ title: '' }} />
        </SearchStack.Navigator>
    )
}
const GenereteBudgetStackScreen = () => {
    return (
        <GenereteBudgetStackScreenStack.Navigator>
            <GenereteBudgetStackScreenStack.Screen name="GerarOrcamento" component={GenereteBudget} options={{ title: '' }} />
        </GenereteBudgetStackScreenStack.Navigator>
    )
}
const BudgetStackScreen = () => {
    return (
        <BudgetStack.Navigator>
            <BudgetStack.Screen name="Orcamentos" component={Budgets} options={{ title: '' }} />
        </BudgetStack.Navigator>
    )
}
const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Perfil" component={Profile} options={{ title: '' }} />
        </ProfileStack.Navigator>
    )
}
const MyTheme = {
    dark: false,
    colors: {
        background: '#D0D8E2',
    },
};
const Routing = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={MyTheme}>    
                    <Tab.Navigator
                        initialRouteName="Home"
                        tabBar={props => <TabBar {...props} />}
                    >
                    <Tab.Screen name="Home" component={HomeStackScreen}/>
                    <Tab.Screen name="Pesquisar" component={SearchStackScreen}/>
                    <Tab.Screen name="GerarOrcamento" component={GenereteBudgetStackScreen}/>
                    <Tab.Screen name="Orcamentos" component={BudgetStackScreen} />
                    <Tab.Screen name="Perfil" component={ProfileStackScreen} />
                    </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
export default Routing;


    
