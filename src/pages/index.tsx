import Products from "@/components/Product/Products";
import { Container } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoppy</title>
      </Head>
      <Container maxW="6xl">
        <Products />
      </Container>
    </>
  );
}
