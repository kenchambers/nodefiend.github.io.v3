
import { Icon, IconButton, useColorMode, Button } from "@chakra-ui/react"
import { CgMoon } from 'react-icons/cg'
import { CgSun } from 'react-icons/cg'


export default function ToggleDarkModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  const buttonColor = colorMode === "light" ? "grey.500" : "yellow.500"
  const buttonIcon = colorMode === "light" ? CgMoon : CgSun
  return (
    <Button onClick={toggleColorMode}>

      <Icon as={buttonIcon} style={{marginRight: 10}} viewBox='0 0 24 24' boxSize='1em' w={8} h={8} color={buttonColor}/>

       {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  )
}