import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import SignIn from '@screens/Signin'
import SignUp from '@screens/Signup'

type AuthRoutes = {
    signin: undefined
    signup: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='signin' component={SignIn}/>
            <Screen name='signup' component={SignUp}/>
        </Navigator>
    )
}