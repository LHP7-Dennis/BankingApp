import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import AccountScreen from '../screens/AccountScreen'
import StatScreen from '../screens/StatScreen'
import StackNavigation from './StackNavigation'

const HomeRoute = () => <StackNavigation />
const AccountRoute = () => <AccountScreen/>
const StatRoute = () => <StatScreen/>

const BottomTabNavigation = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home'},
    { key: 'account', title: 'Account', icon: 'card' },
    { key: 'stat', title: 'Stats', icon: 'wave' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    account: AccountRoute,
    stat: StatRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default BottomTabNavigation