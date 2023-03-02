import { Box, Image, Text, Link } from "@chakra-ui/react";

const RecipeCard = ({ recipe, onClick }) => {
  const { label, image } = recipe.recipe;
  return (
    <Link onClick={onClick}>
      <Box
        p="1rem"
        bg="white"
        shadow="md"
        borderWidth="1px"
        w="300px"
        h="400px"
        m="1rem"
        overflow={"auto"}
        display="flex"
        flexDirection="column"
        alignItems="center">
        <Image src={image} alt={label} w="100%" h="70%" objectFit="cover" />
        <Text fontWeight="bold" fontSize="xl">
          {label}
        </Text>
      </Box>
    </Link>
  );
};

export default RecipeCard;
