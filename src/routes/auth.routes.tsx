import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";

import { SignUp } from "../screens/SignUp";

type AuthRoutesProps = {
    singin: undefined
    singup: undefined
    
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesProps>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();


export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="singin" component={SignIn} />
        <Screen name="singup" component={SignUp} />
        </Navigator>
    );
}