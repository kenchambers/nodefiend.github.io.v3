import { Text, Heading, Center } from "@chakra-ui/react"
import Logo from '../components/logo'
import HeroGraphic from '../components/hero-graphic'

export default function Index() {
  return (
    <section>
      <HeroGraphic />
      <Center bg="clear" h="100vh" w="100%">

        <Heading size="lg" style={{ fontFamily: 'PoiretOne-Regular', position: 'absolute', zIndex: 999999}}>
          <Text fontSize={{ base: "30px", md: "76px", lg: "75px" }}>
            Hi, I'm Ken Chambers
          </Text>

        </Heading>
      </Center>
    </section>
  );
}
