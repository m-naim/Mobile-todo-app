import React from 'react';
import {View, Text} from 'react-native';


class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'profile',
    };    
    ComponentDidMount(){
        console.log('hello from profile')
        console.log(this.props)
    }
    render() {
        const {navigation}=this.props;
        const name=navigation.getParam('name','unknown')
      return (
        <View>
            <Text>hello {name}</Text>
        </View>
      );
    }
  }

  export default ProfileScreen;