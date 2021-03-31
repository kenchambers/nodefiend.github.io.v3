
import { Box,Icon, IconButton, useColorMode, Button } from "@chakra-ui/react"
import { RiFacebookCircleLine } from 'react-icons/ri'
import { RiInstagramLine } from 'react-icons/ri'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import {RiGithubFill} from 'react-icons/ri'
import { FaDev } from 'react-icons/fa'
import { RiTwitterLine } from 'react-icons/ri'

const socialMediaArray = [
  {
    as: RiTwitterLine,
    href: 'https://twitter.com/eventlisteners?lang=en'
  },
  {
    as: RiFacebookCircleLine,
    href: 'https://www.facebook.com/kenneth.chambers.925/'
  },
  {
    as: RiInstagramLine,
    href: 'https://www.instagram.com/chowderheads/'
  },
  {
    as: RiLinkedinBoxLine,
    href: 'https://www.linkedin.com/in/codeaholic/'
  },
  {
    as: RiGithubFill,
    href: 'https://github.com/nodefiend'
  },
  {
    as: FaDev,
    href: 'https://dev.to/nodefiend'
  }
]

function SocialMediaIconLink ({as, href}) {
  const { colorMode, toggleColorMode } = useColorMode()
  const accentColor = colorMode == "light" ? '#96bb7c' : '#ff6363'
  const responsiveIconSize = ['3em', '4em', '3em']
  return (
    <a href={href}>
      <Icon as={as} viewBox='0 0 48 48' boxSize={responsiveIconSize}  color={accentColor}/>
    </a>
  )
}

export default function ContactComponent() {


  return (
    <Box>
      {
        socialMediaArray.map((each,i) => {
          const { as,href } = each;
          return (
            <SocialMediaIconLink key={i} as={as} href={href}/>
          )
        })
      }
    </Box>
  )
}