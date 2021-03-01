import { Icon, IconButton } from "@chakra-ui/react"
import { TiThMenuOutline } from 'react-icons/ti'


export default function HamburgerButton({toggleMenu, disabled}){

  return (
    <IconButton onClick={toggleMenu} disabled={disabled}>
      <Icon as={TiThMenuOutline} w={8} h={8} color="grey.500"/>
    </IconButton>

  )
}