import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

const PostCard = ({ author, postImage, caption }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.authorContainer}>
          <View style={styles.authorImageContainer}>
            <Image
              source={require("../assets/profile_img.png")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.authorNameContainer}>
            <Text style={styles.authorNameText}>{author}</Text>
          </View>
        </View>
        <Image source={require('../assets/post.jpeg')} style={styles.postImage} />
        <View style={styles.captionContainer}>
          <Text style={styles.captionText}>{caption}</Text>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.likeButton}>
            <Ionicons name="heart" size={RFValue(30)} color="white" />
            <Text style={styles.likeText}>12k</Text>
          </View>
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
  captionContainer: {
    padding: 10,
  },
  captionText: {
    fontSize: RFValue(16),
  },
  actionContainer: {
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
