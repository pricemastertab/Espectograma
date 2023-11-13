import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Tab from "./TabNavigation";
import CreatePost from "../screens/CreatePost"
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <View style={styles.container} >
            <SafeAreaView style={styles.droidSafeArea}>
                <View style={styles.appTitle} >
                    <View style={styles.appIcon} >
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer} >
                        <Text style={styles.appTitleText} >Espectograma</Text>

                    </View>
                </View>
                <View style={styles.cardContainer} >
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    ></FlatList>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default DrawerNavigator;