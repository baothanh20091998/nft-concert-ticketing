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

export const TYPE_TICKET_NAME = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
];

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

    async mint({ typeTicket, address }) {
        const typeToPrice = [0.01, 0.02, 0.03, 0.04, 0.05];
        const price = typeToPrice[typeTicket];

        const rawTxn = {
            from: address,
            value: web3.utils.toWei(price.toString(), "ether"),
        };
        const response = await this.contract.methods
            .mint(typeTicket)
            .send(rawTxn);

        const { tokenId } = response.events.Mint.returnValues;

        const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");

        const i = tickets.findIndex((item) => item.address === address);
        if (i === -1) {
            const owner = {
                address: address,
                tickets: [
                    {
                        ticketType: TYPE_TICKET_NAME[typeTicket],
                        ticketId: tokenId,
                    },
                ],
            };
            tickets.push(owner);
        } else {
            tickets[i].tickets.push({ type: typeTicket, id: tokenId });
        }

        JSON.setItem("tickets", JSON.stringify(tickets));
    }
}

export const MTContract = new MusicTicketContract();

// typeToPrice[0] = 0.01 ether;
// typeToPrice[1] = 0.02 ether;
// typeToPrice[2] = 0.03 ether;
// typeToPrice[3] = 0.04 ether;
// typeToPrice[4] = 0.05 ether;

// base url + link image
const baseURLImg = "https://nftstorage.link/ipfs/";
