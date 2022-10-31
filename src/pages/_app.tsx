import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <ShoppingCartProvider>
      <ChakraProvider>
        <QueryClientProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ChakraProvider>
    </ShoppingCartProvider>
  );
}

export default MyApp;
