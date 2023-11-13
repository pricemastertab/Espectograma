import React from "react";
import { View, Text, ImageBackground, Image} from "react-native";
import PostCard from "./Postcard";

export default function Feed(){
    renderItem = ({ tem: post }) => {
        return <PostCard post={post} navigation={this.props.navigation} />
    }
    
}
