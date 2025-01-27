
'use client';

import { ConnectWallet } from '@/modules/wallet';
import Proposal, { ProposalProps } from '@/modules/voting/Proposal';
import { mockProposals } from '@/mockProposals';
import { Box, Flex, Button, Text, Image, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Page = () => {
  const [currentView, setCurrentView] = useState("new"); // "new" or "voted"
  const [newProposals, setNewProposals] = useState<ProposalProps[]>(mockProposals);
  const [votedProposals, setVotedProposals] = useState<ProposalProps[]>([]);

  const handleVote = (id: string) => {
    setNewProposals((prevNewProposals) => {
      const proposalIndex = prevNewProposals.findIndex(p => p.id === id);
      if (proposalIndex === -1) return prevNewProposals;
  
      const updatedProposal = { ...prevNewProposals[proposalIndex], votes: prevNewProposals[proposalIndex].votes + 1 };
      const updatedNewProposals = [...prevNewProposals];
      updatedNewProposals.splice(proposalIndex, 1);
  
      // Check if updatedProposal is already in votedProposals before adding
      setVotedProposals((prevVotedProposals) => {
        const alreadyVoted = prevVotedProposals.some(p => p.id === id);
        if (alreadyVoted) return prevVotedProposals;
        return [...prevVotedProposals, updatedProposal];
      });
  
      return updatedNewProposals;
    });
  };
  

  return (
    <Flex direction="column" width="100vw" height="100vh" bg="gray.50">
      {/* Header */}
      <Flex
        as="header"
        justify="space-between"
        align="center"
        px={8}
        py={4}
        bg="white"
        shadow="md"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Flex align="center">
          <Image src="/logo.png" boxSize="40px" alt="Andromeda Logo" mr={4} />
          <Text fontSize="2xl" fontWeight="bold">
            Voting Dashboard
          </Text>
        </Flex>
        <ConnectWallet />
      </Flex>

      <Flex flex="1" direction="row">
        {/* Sidebar Menu */}
        <Box
          width="240px"
          bg="white"
          borderRight="1px solid"
          borderColor="gray.200"
          p={6}
          shadow="md"
        >
          <Stack spacing={3}>
            <Button
              colorScheme="blue"
              variant="solid"
              onClick={() => setCurrentView("new")}
            >
              View New Proposals
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={() => setCurrentView("voted")}
            >
              See Voted Proposals
            </Button>
          </Stack>
        </Box>

        {/* Main Content */}
        <Flex direction="column" flex="1" p={8}>
          {currentView === "new" && (
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                New Proposals
              </Text>
              {newProposals.map(proposal => (
                <Proposal
                  key={proposal.id}
                  id={proposal.id}
                  title={proposal.title}
                  description={proposal.description}
                  votes={proposal.votes}
                  onVote={handleVote}
                  isVoted={false}
                />
              ))}
            </Box>
          )}

          {currentView === "voted" && (
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Voted Proposals
              </Text>
              {votedProposals.map(proposal => (
                <Proposal
                  key={proposal.id}
                  id={proposal.id}
                  title={proposal.title}
                  description={proposal.description}
                  votes={proposal.votes}
                  onVote={handleVote}
                  isVoted={true}
                />
              ))}
            </Box>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page;
