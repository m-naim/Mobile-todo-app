import React from 'react';
import{FlatList, Text, View, Button} from 'react-native';
import {StyleSheet} from 'react-native'

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            lists: [
                {key:'today'}, 
                {key:'tomorow'},
                {key:'more'}, 
                {key:'others'},
                {key:'At Home'}, 
                {key:'next Year'},
                {key:'important'}
            ]
        }
    }
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <FlatList
          data={this.state.lists}
          renderItem={({item}) => (
              <View style={styles.item}>
                    <Text style={styles.itemName}>{item.key}</Text>
                    <Text>Contains 3 Tasks</Text>
                    <Button title="diplay" onPress={()=>navigate('Profile',{name: item.key})} />
              </View>
            )
        }
        />
      );
    }
  }

  const styles = StyleSheet.create({
    item: {

        width: '97%' ,
        marginTop: 10,
        alignSelf:'center',
        justifyContent:'space-between',
        height:100,
        flex:1,
        color:'black',
        fontSize: 30,
        borderWidth:1,
        borderColor:'#aaa',
        borderRadius:5
    },
    itemName:{
        alignSelf:'center',
        fontSize: 31
    }
  });
  export default HomeScreen;