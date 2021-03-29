
import { Box,Icon, IconButton, useColorMode, Button } from "@chakra-ui/react"
import { RiFacebookCircleLine } from 'react-icons/ri'
import { RiInstagramLine } from 'react-icons/ri'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import {RiGithubFill} from 'react-icons/ri'
import { FaDev } from 'react-icons/fa'
import { RiTwitterLine } from 'react-icons/ri'

export default function ContactComponent() {
  const { colorMode, toggleColorMode } = useColorMode()
  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'

  const responsiveIconSize = ['3em', '4em', '3em']

  return (
    <Box>
      <Icon as={RiTwitterLine} viewBox='0 0 48 48' boxSize={responsiveIconSize}  color={accentColor}/>
      <Icon as={RiFacebookCircleLine} viewBox='0 0 48 48' boxSize={responsiveIconSize}  color={accentColor}/>
      <Icon as={RiInstagramLine} viewBox='0 0 48 48' boxSize={responsiveIconSize}  color={accentColor}/>
      <Icon as={RiLinkedinBoxLine} viewBox='0 0 48 48' boxSize={responsiveIconSize}  color={accentColor}/>
      <Icon as={RiGithubFill} viewBox='0 0 48 48' boxSize={responsiveIconSize}  color={accentColor}/>
      <Icon as={FaDev} viewBox='0 0 48 48' boxSize={responsiveIconSize}  color={accentColor}/>
    </Box>
  )
}