import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Global-Horror/Global/Views/Layout'
import BlogCard from './Components/BlogCard'
import SmallCard from './Components/SmallCard'
import Buttons from './Components/Buttons'
import Divider from '../components/Global-Horror/Global/common/Divider'
import Loadings from './Components/Loadings'
import Scroll from '../components/Global-Horror/Global/Lists/Scroll'
import Heading from '../components/Global-Horror/Global/Text/Heading'
import Modal from './Components/Modal'
import Selection from './Components/Selection'
import Inputs from './Components/Inputs'
import ImageAvatar from '../components/Global-Horror/Global/avatars/ImageAvatar'
import Gallery from './Components/GalleryImages'
import GalleryImages from './Components/GalleryImages'
import ToastMessage from './Components/ToastMessage'

const AllPack = () => {
  return (
    <Scroll disableVertical={false} style={{marginBottom:100}}>
      <Heading txp='center'>Scroll and Components</Heading>
      <BlogCard />
      <SmallCard />
      <Buttons/>
      <Divider wSize={300} hSize={1} bg='red'/>
      <Loadings />
      <Divider wSize={300} hSize={1} bg='black'/>
      <Modal />
      <Divider wSize={300} hSize={1} bg='green'/>
      <Selection />
      <Inputs />
      <Heading txp='center'>  Avatar</Heading>

      <ImageAvatar uri={'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'} imgS={200} imgH={200}/>
      <GalleryImages />

      <ToastMessage />
    </Scroll>
  )
}

export default AllPack