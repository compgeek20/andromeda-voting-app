# Voting Dashboard

The Voting Dashboard serves as a simple user interface to display and interact with voting proposals. It is designed to be a starting point for integrating blockchain data, allowing developers to expand and customize the functionality as needed. The dashboard supports two main views:

- **New Proposals:** This view displays all currently available proposals. Each proposal is presented with its title, a description, and a vote count. Users can click the "Vote" button to cast a vote, which automatically moves that proposal to the voted section.
- **Voted Proposals:** This view lists all the proposals that the user has voted on. Proposals in this view are marked as voted and cannot be voted on again.

The application currently uses mock data for proposals, making it easier to set up and test. The left-hand sidebar menu allows users to quickly switch between the “New Proposals” and “Voted Proposals” views, and the main content area updates dynamically based on the selection.

By incorporating a clean, responsive layout and an intuitive interface, the Voting Dashboard is prepared for future enhancements, including connecting to blockchain data and enabling real on-chain voting.

## Configuration

The application relies on environment variables to determine its operating mode and blockchain endpoint. To configure these settings:

1. Open the `.env` file in the root directory.
2. Set the `NEXT_PUBLIC_GRAPHQL_ENDPOINT` variable:
   - For testnet: `NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://testnet.api.andromedaprotocol.io/graphql`
   - For dev: `NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://dev.api.andromedaprotocol.io/graphql`

3. Set the `NEXT_PUBLIC_CHAIN_ID` variable:
   - For testnet: `NEXT_PUBLIC_CHAIN_ID="galileo-4"`
   - For dev: `NEXT_PUBLIC_CHAIN_ID="messier-1"`

Make sure the environment file matches the intended network and chain ID before running the application.

## Running the Application

To run the application locally, follow these steps:

1. **Install dependencies**:  

```bash
npm install
```
2. **Start the development server**:  

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

**Note**: Ensure the environment variables in the `.env` file are configured correctly before starting the server.

## Proposal Data

This application currently uses example proposal data stored in the codebase to demonstrate functionality. For future implementations, you can replace these examples with dynamic data sources, such as a backend API or blockchain queries. The existing mock data is intended as a placeholder to help visualize how the proposal display and voting interactions work.

If you wish to modify the proposal data, you can:

1. Open the file where the mock proposals are defined.  
2. Add, remove, or update the proposals to match your desired use case.  
3. Save the file and refresh the application to see the changes.

By replacing or extending the proposal data, you can easily adapt the Voting Dashboard to accommodate your specific project requirements.

## Customization

The Voting Dashboard is designed to be a flexible starting point for your project. You can customize various aspects of the application, including:

- **Proposal Structure:**  
  The proposals displayed in the app are currently represented as mock data. You can edit the data structure, add new fields (such as icons, descriptions, or statuses), and update the components accordingly.

- **Styling and Layout:**  
  The layout and design are built using Chakra UI, which makes it easy to change the look and feel. Adjust colors, spacing, typography, and overall layout to suit your branding and user experience needs.

- **Environment Configuration:**  
  Update environment variables in the `.env` file to point to different endpoints for testnet or devnet, ensuring you’re always connected to the desired blockchain environment.

- **Feature Set:**  
  If your project requires additional functionality—such as filtering proposals by category, integrating smart contract interactions, or adding user profiles—you can expand the codebase to include these features.

These customizations allow you to tailor the Voting Dashboard to your specific requirements, making it a suitable foundation for more complex and feature-rich applications.

## Future Enhancements

While the Voting Dashboard currently serves as a simple foundation, there are several ways to extend its functionality and improve the user experience:

- **Smart Contract Integration:**  
  Add support for interacting directly with Andromeda smart contracts to securely record votes on-chain and display real-time data from the blockchain.

- **User Authentication:**  
  Implement user authentication mechanisms that allow voters to log in with their Andromeda wallets and ensure that only authorized users can participate in voting.

- **Proposal Categories and Tags:**  
  Introduce categories, tags, or filters to help users quickly find proposals that interest them. For example, users could browse proposals related to governance, technical improvements, or community initiatives.

- **Enhanced Proposal Details:**  
  Expand each proposal’s detail view with additional information, such as a full description, the proposer’s name, deadline, and even comments from other users.

- **Analytics Dashboard:**  
  Build a dashboard that tracks voting patterns, proposal outcomes, and user engagement metrics over time. This data can help decision-makers understand trends and prioritize proposals effectively.

By pursuing these enhancements, you can transform the Voting Dashboard into a fully-featured governance platform that provides a seamless, transparent, and interactive experience for your users.

# Contributing

We welcome contributions! Here’s how to get started:

1. **Fork this repository.**  
2. **Create a branch** for your changes.  
3. **Make your changes** in the new branch.  
4. **Test your changes** locally to ensure they work.  
5. **Submit a pull request.**  
6. **Respond to feedback** if maintainers ask for adjustments.  

Thank you for contributing!
