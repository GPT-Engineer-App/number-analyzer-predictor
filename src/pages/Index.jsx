import React, { useState } from "react";
import { Box, Button, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess)) {
      toast({
        title: "Invalid input",
        description: "Please enter a valid number.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    if (numGuess < targetNumber) {
      setMessage("Too low! Try a higher number.");
    } else if (numGuess > targetNumber) {
      setMessage("Too high! Try a lower number.");
    } else {
      setMessage("Congratulations! You guessed the number!");
    }
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Text fontSize="2xl" fontWeight="bold">
        Number Predictor Game
      </Text>
      <Box>
        <Input placeholder="Enter a number between 1 and 100" value={guess} onChange={(e) => setGuess(e.target.value)} size="md" width="250px" />
        <Button leftIcon={<FaArrowRight />} colorScheme="teal" ml={2} onClick={handleGuess}>
          Guess
        </Button>
      </Box>
      <Text fontSize="xl">{message}</Text>
    </VStack>
  );
};

export default Index;
