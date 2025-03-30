import { Tabs } from 'expo-router';
import { ROUTES_NAME } from '@repo/constants';
import {
  HomeIcon,
  FavoriteIcon,
  NotificationIcon,
  ProfileIcon
} from '@repo/ui';

const TabLayout = () => {
  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
          height: 60
        }
      }}
    >
      <Tabs.Screen
        name={ROUTES_NAME.INDEX}
        options={{
          tabBarIcon: ({ focused }) => <HomeIcon isActive={focused} />
        }}
      />
      <Tabs.Screen
        name={ROUTES_NAME.FAVORITE_TAB}
        options={{
          tabBarIcon: ({ focused }) => <FavoriteIcon isActive={focused} />
        }}
      />
      <Tabs.Screen
        name={ROUTES_NAME.NOTIFICATION_TAB}
        options={{
          tabBarIcon: ({ focused }) => <NotificationIcon isActive={focused} />
        }}
      />
      <Tabs.Screen
        name={ROUTES_NAME.PROFILE_TAB}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon isActive={focused} />
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
