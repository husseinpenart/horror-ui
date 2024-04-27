import React, { useState } from 'react'
import TextView from '../../components/Global-Horror/Global/Text/TextView'
import Button from '../../components/Global-Horror/Global/buttons/Button'
import Window from '../../components/Global-Horror/Global/Modals/Window'
import Heading from '../../components/Global-Horror/Global/Text/Heading'
import Images from '../../components/Global-Horror/Global/Images/Images'
import { Theme } from '../../Styles/size/Theme'

const Modal = () => {
    const [openModal ,  setOpenModal] = useState(false)
  return (
    <>
     <Button Pressing={()=>setOpenModal(true)}><TextView cl='white'>open modal</TextView></Button>
     <Window modalVisible={openModal} onRequestClose={()=>setOpenModal(false)}
     backStyle={'red'}
     animationType={'slide'}
     backgroundColor='green'
     modalBack={Theme.activeColors.secondary}
     >
        <Heading txp='center'>Hi! I'm Here </Heading>
        <Images uri={'https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg'} imgS={200} imgH={200}/>

     </Window>
    </>
  )
}

export default Modal