import ContractABI from "./constants/contractABI.json";
import { ContractAddress } from "./constants/contract";
import Web3 from "web3";

const GoerliTestNetURL = "https://goerli.blockpi.network/v1/rpc/public";

const web3 = new Web3(Web3.givenProvider);

// class Wallet {
//   wallet = "";

//   connectWallet = async () => {
//     try {
//       const response = await web3.eth.requestAccounts();
//       this.wallet = response[0];
//       web3.eth.defaultAccount = response[0];
//       return response[0];
//     } catch (error) {
//       console.log("error connet : ", error);
//     }
//   };
// }

class MusicTicketContract {
  contract;
  contractAbi = ContractABI;
  contractAdress = ContractAddress;

  constructor() {
    this.contract = this.initContract();
  }

  initContract() {
    const contract = new web3.eth.Contract(
      this.contractAbi,
      this.contractAdress
    );
    return contract;
  }

  async getBalanceOf(address) {
    const response = await this.contract.methods.balanceOf(address).call();
    console.log("balance of: ", response);
  }

  async getTiketPrices(ticket) {
    const response = await this.contract.methods.ticketPrices(ticket).call();
    console.log("ticket prices: ", response);
  }

  async ticketMinted(ticket) {
    const response = await this.contract.methods.ticketMinted(ticket).call();
    console.log("ticket response: ", response);
  }

  async mint({ amount, typeTicket, address }) {
    const response = await this.contract.methods.mint(typeTicket).send({
      from: address,
      value: Web3.utils.toWei(amount.toString(), "ether"),
    });

    const { tokenId } = response.events.Mint.returnValues;

    console.log(response);
    console.log(tokenId);
    this.getTokenUri({ tokenId });

    console.log("mint response: ", response);
  }

  async getTokenUri({ tokenId }) {
    const response = await this.contract.methods.tokenURI(tokenId).call();
    console.log("token uri: ", response);
  }

  async getBalanceOf({ address }) {
    const response = await this.contract.methods.balanceOf(address).call();
    console.log("balance of: ", response);
  }
}

export const MTContract = new MusicTicketContract();

// typeToPrice[0] = 0.01 ether;
//         typeToPrice[1] = 0.02 ether;
//         typeToPrice[2] = 0.03 ether;
//         typeToPrice[3] = 0.04 ether;
//         typeToPrice[4] = 0.05 ether;

// base url + link image
const baseURLImg = "https://nftstorage.link/ipfs/";
