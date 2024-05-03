import { View, Text } from 'react-native'
import React from 'react'
import Gallery from '../../components/Global-Horror/Global/Gallery/Gallery'
import Images from '../../components/Global-Horror/Global/Images/Images'
import Layout from '../../components/Global-Horror/Global/Views/Layout'
import Heading from '../../components/Global-Horror/Global/Text/Heading'

const GalleryImages = () => {
  const objects =  [ {
        images:
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      },
      {
        images:
          'https://y4v9k2m9.rocketcdn.me/pictures/google-on-stock-photography-authenticity.jpg',
      },
      {
        images:
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      },
      {
        images:
          'https://y4v9k2m9.rocketcdn.me/pictures/google-on-stock-photography-authenticity.jpg',
      },
      {
        images:
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      },
      {
        images:
          'https://y4v9k2m9.rocketcdn.me/pictures/google-on-stock-photography-authenticity.jpg',
      },
      {
        images:
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      },]
  return (
    <Layout >
      <Heading>image gallery</Heading>
        <Gallery 
        data={objects}
        renderItem={(item:any)=>(
          <Images 
          uri={item.images}
          imgH={100}
          imgS={100}
          style={{margin:5}}
          />
        )}
        />
      
    </Layout>
  )
}

export default GalleryImages