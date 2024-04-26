import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../../components/Global-Horror/Global/Views/Layout'
import Spinner from '../../components/Global-Horror/Global/loadings/Spinner'
import { Theme } from '../../Styles/size/Theme'
import Heading from '../../components/Global-Horror/Global/Text/Heading'

const Loadings = () => {
  return (
   <>
        <Heading txp='center'>Loading spinners</Heading>
    <Layout style={{flexDirection:'row' , flexWrap:'wrap' }}>
     <Spinner size={Theme.sizes.full} color={Theme.activeColors.danger}/>
     <Spinner size={Theme.sizes.xxl} color={Theme.activeColors.dark}/>
     <Spinner size={Theme.sizes.xl} color={Theme.activeColors.info}/>
     <Spinner size={Theme.sizes.lg} color={Theme.activeColors.primary}/>
     <Spinner size={Theme.sizes.md} color={Theme.activeColors.secondary}/>
     <Spinner size={Theme.sizes.sm} color={Theme.activeColors.danger}/>
    </Layout>
    </>
  )
}

export default Loadings