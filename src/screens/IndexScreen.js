<<<<<<< HEAD
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
=======
import React , { useContext } from 'react';
import {Text,View,Stylesheet,FlatList,Button} from 'react-native';
import { Context } from '../context/BlogContext'; 
import {Feather} from '@expo/vector-icons'

const IndexScreen = () =>{

    const {state,addBlogPost}= useContext(Context);

    return (
        <View>
            <Button title="Add Post"  onPress={()=>addBlogPost()} />
            <FlatList 
             data={state}/>
             keyExtractor={(blogPost)=> blogPost.title }
             renderItem={({item}) => {
                 return <View style={styles.row}>
                 <Text style={styles.title}>{item.title}</Text>
                 <Feather style={styles.icon} name="trash"/>
                 </View>
             }}

            
        </View>
    )
};

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth : 1,
        borderColor : 'gray'
    },
    title:{
        fontSize:20
    },
    icon:{
        fontSize:   25
    }
})  

export default IndexScreen;
>>>>>>> c1cb63d9cb9215c7ceaabac9727f878d680381f3
