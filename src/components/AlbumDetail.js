//import libs
import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
//make comp
const AlbumDetail = ({ album }) => {
  const { artist, image, thumbnail_image, title, url } = album;
  const { 
    headerStyle, 
    headerTextStyle, 
    thumbnailStyle, 
    thumbnailContainer,
    imageStyle 
  } = styles;
  const buyNow = () => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Card>
        <CardSection>
          <View style={thumbnailContainer}>
            <Image 
              source={{ uri: thumbnail_image }} 
              style={thumbnailStyle}
            />
          </View>
          <View style={headerStyle}>
            <Text style={headerTextStyle}>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image 
            source={{ uri: image }}
            style={imageStyle}
          />
        </CardSection>
        <CardSection>
          <Button onPress={buyNow}>Buy Now</Button>
        </CardSection>
      </Card>
    </View>
  );
};

//style it
const styles = {
  headerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    paddingLeft: 5,
    paddingRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

//make it avail
export default AlbumDetail;
