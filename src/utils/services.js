import ContractABI from "./constants/contractABI.json";
import { ContractAddress } from "./constants/contract";
import Web3 from "web3";
import axios from "axios";

const web3 = new Web3(Web3.givenProvider);

const baseURLImg = "https://nftstorage.link/ipfs/";
const baseURL = "https://coin98-hackathon-api.onrender.com/metadata";

export const BaseApi = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const apiPostNft = async ({ id, type, owner }) =>
  await BaseApi.post("/token", {
    id,
    type,
    owner,
    image: "default.png",
    description: "default",
    name: "default",
  });

const apiGetNftByOwener = async ({ address }) =>
  await BaseApi.get(`/owner/${address}`);

const apiGetAllNfts = async () => await BaseApi.get("/token");

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
    // const response = await this.contract.methods.balanceOf(address).call();
    const res = await apiGetNftByOwener({ address });
    return res.data;
    // console.log("balance of: ", response);
  }

  async mint({ typeTicket, address }) {
    const typeToPrice = [0.01, 0.02, 0.03, 0.04, 0.05];
    const price = typeToPrice[typeTicket];

    const rawTxn = {
      from: address,
      value: web3.utils.toWei(price.toString(), "ether"),
    };
    const response = await this.contract.methods.mint(typeTicket).send(rawTxn);

    const { tokenId } = response.events.Mint.returnValues;

    const res = await apiPostNft({
      id: tokenId,
      type: typeTicket.toString(),
      owner: address,
    });
    console.log(res);
  }
}

export const MTContract = new MusicTicketContract();

// typeToPrice[0] = 0.01 ether;
// typeToPrice[1] = 0.02 ether;
// typeToPrice[2] = 0.03 ether;
// typeToPrice[3] = 0.04 ether;
// typeToPrice[4] = 0.05 ether;

// base url + link image
