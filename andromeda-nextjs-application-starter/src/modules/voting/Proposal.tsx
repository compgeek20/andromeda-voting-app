
import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export interface ProposalProps {
  id: string;
  title: string;
  description: string;
  votes: number;
  onVote: (id: string) => void;
  isVoted: boolean;
}

const Proposal: React.FC<ProposalProps> = ({ id, title, description, votes, onVote, isVoted }) => {
  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      mb={4}
      _hover={{ boxShadow: "lg" }}
    >
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text mb={2}>{description}</Text>
      <Text fontSize="sm" color="gray.500">
        Votes: {votes}
      </Text>
      {!isVoted && (
        <Button mt={2} colorScheme="blue" onClick={() => onVote(id)}>
          Vote
        </Button>
      )}
    </Box>
  );
};


export default Proposal;
