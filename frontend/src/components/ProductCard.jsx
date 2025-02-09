import { Box } from '@chakra-ui/react';
import React from 'react'

const ProductCard = ({product}) => {
	const bg = 'white'; // Define the bg variable
	return (
		<Box
			shadow='lg'
			rounded='lg'
			overflow='hidden'
			transition='all 0.3s'
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
		>
			<Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

		</Box>
	)
};

export default ProductCard;