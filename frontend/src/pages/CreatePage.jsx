import React, { useState } from "react";
import { Container, VStack, Heading, Box, Input, useColorModeValue, Button, useToast } from "@chakra-ui/react";
import { useProductStore } from "../store/product";

  const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
      name: "",
      price: 0,
      imageUrl: "",
   });
  
  const toast = useToast();

  const {createProduct} = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name:"", price:"", image:""})
  };

  return <Container>
    <VStack
      spacing={0}
    >
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
          Create new Product;
        </Heading>

        <Box
          w={"full"}
          bg = {useColorModeValue("white", "gray.800")}
          p={6}
          rounder={"lg"}
          shadow={"base"}
        >
          <VStack
            spacing={4}>
            <Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name || ""}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price || ""}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image || ""}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button colorScheme={"teal"} onClick={handleAddProduct}>Create Product
            </Button>

          </VStack>
        </Box>
    </VStack>
  </Container>
};

export default CreatePage;