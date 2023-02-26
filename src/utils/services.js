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

  async mint({ amount, typeTicket }) {
    const response = await this.contract.methods
      .mint(amount, typeTicket)
      .send();

    console.log("mint response: ", response);
  }
}

export const MTContract = new MusicTicketContract();
