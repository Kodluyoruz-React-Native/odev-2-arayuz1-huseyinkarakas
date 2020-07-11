import React from 'react';
import {View , Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity,
        TextInput, Image,} from 'react-native';

const renk1 = '#5f6ba7';
const renk2 = '#f2f2f2';

const background1 = require('./assets/background1.png');
const background2 = require('./assets/background2.png');
const background3 = require('./assets/background3.png');
const background4 = require('./assets/background4.png');

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

class UI1 extends React.Component {

  state = {
    sayfa: '',
  };

  firstOnPress = () => {
    this.setState({sayfa: ''});
  }

  nextOnPress = () => {
    this.setState({sayfa: 'signup'});
  }

  signUpOnPress = () => {
    this.setState({sayfa: 'login'});
  }

  firstPage() {
    return(
      <ImageBackground
        source = {background1}
        style={stil.imageContainer}>
          
          <View style={stil.firstViewContainer}>
            <Text style={stil.textContainer}>
              Welcome 
            </Text>

            <TouchableOpacity
              onPress={this.nextOnPress}
            >
              <Text style={stil.buttonTextContainer}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>

      </ImageBackground>
    
    );
  }

  next() {
    return (
        <ImageBackground 
          source={background2}
          style={stil.imageContainer}>
          
          <View style={stil.nextViewContainer}>
            <Text style={stil.textContainer}>
              Login
            </Text>

            <View style={{paddingTop: 30}}>
                <TextInput
                    style={stil.input}
                    placeholder= 'Email Address'/>
            
                <TextInput
                    style={[stil.input, stil.buttonContainer]}
                    placeholder= 'Password'/>
            </View>

            <TouchableOpacity 
              style={stil.buttonContainer}
              onPress={this.firstOnPress}
            >
              <Text style={stil.buttonTextContainer}>
                Login
              </Text>
            </TouchableOpacity>

            <View style={stil.imageViewContainer}>
              <Image 
                source={background3}/>
            </View>

          </View>
          </ImageBackground>
    );
  }

  signUp() {
    return (
      <ImageBackground 
        source={background2}
        style={stil.imageContainer}>
        
        <View style={stil.nextViewContainer}>
          <Text style={stil.textContainer}>
            Sign Up
          </Text>

          <View style={{paddingTop: 30}}>
            <TextInput
              style={stil.input}
              placeholder= 'Email Address'/>
        
            <TextInput
              style={[stil.input, stil.buttonContainer]}
              placeholder= 'Password'/>

            <TextInput
              style={[stil.input, stil.buttonContainer]}
              placeholder= 'Password'/>
          </View>

          <TouchableOpacity 
            style={stil.buttonContainer}
            onPress={this.signUpOnPress}
          >
            <Text style={stil.buttonTextContainer}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={stil.imageViewContainer}>
            <Image 
              source={background4}/>
          </View>
        </View>
        </ImageBackground>
    );
  }

  render() {
    return (
      <>
        <View style={stil.mainContainer}>
          {this.state.sayfa === '' && this.firstPage()}
          {this.state.sayfa === 'signup' && this.signUp()}
          {this.state.sayfa === 'login' && this.next()}
        </View>
      
      </>
    );

  }
}

const stil = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  imageContainer: {
    width: W,
    height: H,
  },

  imageViewContainer: {
    width: W * 0.1,
    height: H * 0.1
  },

  firstViewContainer: {
    paddingTop: H * 0.70,
    paddingLeft: W * 0.15,
  },

  nextViewContainer:{
    paddingTop: H * 0.15,
    paddingLeft: W * 0.15,
  },

  textContainer: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    paddingBottom: 30,
  },

  buttonContainer: {
    marginTop: 20
  },

  buttonTextContainer: {
    width: W * 0.7,
    height: H * 0.065,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: renk1,
    borderRadius: W * 0.175,
    textAlign: 'center',
    textAlignVertical: 'center'  
  },

  input: {
    width: W * 0.7,
    height: H * 0.065,
    borderRadius: W * 0.175,
    backgroundColor: 'white',
    borderColor: 'white',
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: 25,
  },

  inputCaption: {
    color: renk2,
    fontWeight: 'bold'
},

});

export default UI1;