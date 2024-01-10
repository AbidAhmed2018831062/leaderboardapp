
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import MinimalDesign from "../screens/MinimalDesign/MinimalDesign";
import AdvanceDesign from "../screens/AdvanceDesign/Advance";

const Stack = createNativeStackNavigator();
const Navigation=()=>{
    return (
        <Stack.Navigator
        initialRouteName='Minimal'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
        name='Minimal'
        component={MinimalDesign}
        options={{ headerShown: false }}
        />
          <Stack.Screen
        name='Advance'
        component={AdvanceDesign}
        options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    )
}

export default Navigation;