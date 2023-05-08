import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
//icons
import HomeIcon from '@assets/home.svg'
import HistoryIcon from '@assets/history.svg'
import ProfileIcon from '@assets/profile.svg'
import { useTheme } from "native-base";
import { Platform } from "react-native";



type AppRoutesProps = {
    home: undefined
    profile: undefined
    history: undefined
    exercise : undefined

}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>


const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes(){

    const {colors, sizes} = useTheme()
    
    const iconSizes = sizes[6]

    return (
        <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[100],
            tabBarIconStyle: {
                width: iconSizes,
                height: iconSizes,
            
                
            },
            tabBarStyle: {
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
                height: Platform.OS === 'ios' ? 96 : 60,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                
                
            }          
            
        
        }} > 
        
            <Screen name="home" component={Home} options={{
               tabBarIcon: ({color}) => <HomeIcon fill={color} />,
            }}/>
            <Screen name="profile" component={Profile} 
            options={{
                tabBarIcon: ({color }) => <ProfileIcon fill={ color}/>,
            }}
            
            />
            <Screen name="history" component={History} 
            options={{
                tabBarIcon: ({ color }) => <HistoryIcon fill={ color}/>,
            }}
            
            />
            <Screen name="exercise" component={Exercise} options={{
                tabBarButton: () => null,
            
            }}/>

        </Navigator>
    )


}