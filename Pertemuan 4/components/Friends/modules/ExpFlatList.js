import { FlatList } from "react-native";
import React from "react";
import FriendlistUI from "../widgets/FriendListUI";

const ExpFlatList = ({Users}) => {
    return(
        <FlatList data={Users} renderItem={({item}) => <FriendlistUI items={item} />} />
    )
}

export default ExpFlatList