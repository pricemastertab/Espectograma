import React from "react" 
import Feed from "../screens/Feed"
import CreatePost from "../screens/CreatePost"

const BottonTabNavigator = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            TabBarIcon: ({ facused, color, size }) => {
                let iconName;
                if (route.name === 'Feed') {
                    iconName = facused? 'book': 'book-outline'
                } else if (route.name === "CreatePost") {
                  iconName = facused? 'create' : 'create-outline'
                }
                return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions = {{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name='Feed' component={Feed} />
          <Tab.Screen name='CriarPost' component={CreatePost}/>

        </Tab.Navigator>
    )
}
