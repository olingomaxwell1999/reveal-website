//Importing of Link Component from next js
import Link from "next/link"

//importing Image container component from next js
import Image from "next/image"

//Importing other components from Chakra ui
import { Flex, Box, Text, Button } from "@chakra-ui/react"

//importing from threutils file
import {baseUrl, fetchApi} from '../utils/fetchApi'

//importing the property component
import Property from "../Components/Property/Property"

//Creating the banner Component

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, bannerImage}) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>

    <Image src={bannerImage} width={500} height={300} alt="Banner"/>

    <Box p='5'>

      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>

      <Text fontSize='3x1' fontWeight='bold'>{title1} <br/> {title2} </Text>

      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1} <br/> {desc2} </Text>

      <Button fontSize='xl' bg='blue.300' color='white'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>

    </Box>

  </Flex>
)

export default function Home({propertiesForSale, propertiesForRent}) {
  return (
    <Box>
      {/* <h1>hello next js</h1> */}

      {/* using the banner we just created above */}
      <Banner 
        purpose={'Buy a Home'} 
        title1='Find, Buy & Own'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, homes'
        desc2='and many more'
        buttonText='Explore Properties'
        linkName='/search?purpose=for-sale'
        bannerImage='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />

      <Flex flexWrap='wrap'>
        {/* Fetch properties and map over them */}

        {propertiesForSale.map((property) => <Property property={property} key={property.id}/>)}

      </Flex>

      <Banner
        purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      bannerImage='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
    <Flex flexWrap='wrap'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
    </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)

  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}