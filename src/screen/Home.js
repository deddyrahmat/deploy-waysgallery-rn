import React, { Component,useState, useEffect, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,List, ListItem } from 'native-base';

// alternative mapping
import {FlatList} from 'react-native'

// api
import axios from "axios"

export default Home = (props) => {

    const [itemPosts, setItemPosts] = useState([]);

    const posts = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos",{
                params: {
                _limit: 10
                }
            });
            // const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setItemPosts(response.data)
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        posts();
    }, [])

    // console.log("item",itemPosts);

    const renderItem = ({item}) => {
    return (
        <Card key={item.id}>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: item.thumbnailUrl}} />
                    <Body>
                    <Text>{item.title}</Text>
                    <Text note>{item.id}</Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem cardBody>
                <Image source={{uri: item.url}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                <Left>
                    <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12</Text>
                    </Button>
                </Left>
                <Body>
                    <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4</Text>
                    </Button>
                </Body>
                <Right>
                    <Text>11h ago</Text>
                </Right>
                </CardItem>
            </Card>
        )
    }

    // =========================================================
    // asli


    // const renderItem = ({item}) => {
    // return (
    //     <ListItem avatar key={item.id}>
    //         <Body>
    //         <Text>{item.title}</Text>
    //         <Text note>{item.body}</Text>
    //         </Body>
    //         <Right>
    //         <Text note>3:43 pm</Text>
    //         </Right>
    //     </ListItem>
    //     )
    // }
    // =========================================================

    return (

        <Container>
            <Content>

                    <FlatList
                        data={itemPosts}
                        // refreshing={isLoading}
                        // onRefresh={getPost}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        />

                {/* // ========================================================= */}
                {/* <List>
                    <FlatList
                        data={itemPosts}
                        // refreshing={isLoading}
                        // onRefresh={getPost}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        />
                </List> */}
                {/* // ========================================================= */}
            </Content>
        </Container>
    )
}