import type { NextPage } from "next";
import { Container, Flex, VStack } from "@chakra-ui/react";
import { Details } from "../src/sections/details";
import { Cart } from "../src/sections/cart";
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;

