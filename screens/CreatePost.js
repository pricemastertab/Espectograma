import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

const PostCard = ({ author, postImage, caption }) => {
  const [likes, setLikes] = useState(0);
  const [previewImage, setPreviewImage] = useState('image_1'); // Define a primeira imagem como padrão

  const previewImages = {
    image_1: require('../assets/image_1.jpg'),
    image_2: require('../assets/image_2.jpg'),
    image_3: require('../assets/image_3.jpg'),
    image_4: require('../assets/image_4.jpg'),
    image_5: require('../assets/image_5.jpg'),
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.authorContainer}>
          <View style={styles.authorImageContainer}>
            <Image source={require("../assets/profile_img.png")} style={styles.profileImage} />
          </View>
          <View style={styles.authorNameContainer}>
            <Text style={styles.authorNameText}>{author}</Text>
          </View>
        </View>
        <Image source={previewImages[previewImage]} style={styles.postImage} />

        <DropDownPicker
          items={[
            { label: 'Image 1', value: 'image_1' },
            { label: 'Image 2', value: 'image_2' },
            { label: 'Image 3', value: 'image_3' },
            { label: 'Image 4', value: 'image_4' },
            { label: 'Image 5', value: 'image_5' },
          ]}
          defaultValue={previewImage}
          containerStyle={styles.dropDownContainer}
          style={styles.dropDownStyle}
          itemStyle={styles.dropDownItemStyle}
          onChangeItem={(item) => setPreviewImage(item.value)}
        />

        <ScrollView style={styles.captionContainer}>
          <View style={styles.captionTextInputContainer}>
            <TextInput
              placeholder="Adicione uma legenda..."
              placeholderTextColor="gray"
              numberOfLines={4}
              style={styles.captionTextInput}
            />
          </View>
        </ScrollView>

        <View style={styles.likeButtonContainer}>
          <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
            <Ionicons name="heart" size={RFValue(30)} color="white" />
            <Text style={styles.likeText}>{likes} Likes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  authorImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  authorNameContainer: {
    marginLeft: 10,
  },
  authorNameText: {
    fontSize: RFValue(18),
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  dropDownContainer: {
    marginTop: 10,
  },
  dropDownStyle: {
    borderColor: '#ccc',
  },
  dropDownItemStyle: {
    justifyContent: 'flex-start',
  },
  captionContainer: {
    padding: 10,
  },
  captionTextInputContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  captionTextInput: {
    fontSize: RFValue(16),
  },
  likeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    marginLeft: 5,
    fontSize: RFValue(14),
    color: 'white',
  },
});

export default PostCard;
