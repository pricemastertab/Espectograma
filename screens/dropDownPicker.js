import React from 'react'
import { View, SafeAreaView, Image, ScrollView, StyleSheet, TextInput } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

export default function dropDownPicker(){
    return (
        <View style={StyleSheet.container} >
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.appTitle} >
                <View style={styles.appIcon} >
                    <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                    ></Image>
                </View>
                <View style={styles.appTItleTextContainer} >
                    <Text style={styles.appTItleText} >Novo Post</Text>
                </View>
            </View>
            <View style={styles.fieldsContainer} >
                <ScrollView>
                    <Image
                    source={preview_images[this.state.previewImages]}
                    style={styles.previewImages}
                    ></Image>
                    <View style={{height: CSSVariableReferenceValue(this.state.dropdownHeight)}} >

                        <DropDownPicker
                        items={[
                            {label: 'Image 1', value: 'Image 1' },
                            {label: 'Image 2', value: 'Image 2' },
                            {label: 'Image 3', value: 'Image 3' },
                            {label: 'Image 4', value: 'Image 4' },
                            {label: 'Image 5', value: 'Image 5' },
                            {label: 'Image 6', value: 'Image 6' },
                            {label: 'Image 7', value: 'Image 7' }
                        ]}

                        defaultValue={this.state.previewImages}
                        containerStyle ={{
                            borderRadius: 20,
                            marginBottom: 10
                        }}

                        onOpen={() => {
                            this.setState({ dropdownHeight: 170 });
                        }}

                        style={{ backgroundColor: "transparent" }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}

                        dropDownStyle={{backgroundColor: '#2a2a2a'}}

                        labelStyle={{
                            color: 'white'
                        }}

                        arrowStyle={{
                            color: 'white',
                        }}
                        onChangeItem={item => 
                        this.setState({
                            previewImage: item.value
                        })
                        }
                        ></DropDownPicker>

                    </View>

                    <TextInput
                    style={styles.inputFont}
                    onChangeText={caption => this.setState({ caption })}
                    placeholder={'Legenda'}
                    placeholderTextColor='white'
                    ></TextInput>
                </ScrollView>
            </View>
            <View style={{flex: 0.08}} />
        </View>
    )
}

const styles = StyleSheet.create({

})