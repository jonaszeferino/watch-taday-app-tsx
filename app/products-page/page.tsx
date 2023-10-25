"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
<Heading size="md">Living room Sofa</Heading>;
import {
  ChakraProvider,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export default function New() {
  return (
    <div>
      <Navbar />
      <ChakraProvider>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                R$45
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <br />
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://i.imgur.com/hUIntdO.jpg"
              alt="Green Alfaces"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">ALfaces</Heading>
              <Text>Alfaces orgãnicas - Venda por Atacado</Text>
              <Text color="blue.600" fontSize="2xl">
                R$99
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <br/>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://i.imgur.com/3kjcesS.jpg"
              alt="guitar"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Violão</Heading>
              <Text>Violão</Text>
              <Text color="blue.600" fontSize="2xl">
                R$99
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </ChakraProvider>
      <Footer />
    </div>
  );
}



