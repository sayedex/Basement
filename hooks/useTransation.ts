import { getContractInstance } from "../utils/Contracthelper";
import React, { useState, useEffect } from "react";
import { Toast, toast } from "react-hot-toast";
import { ethers } from "ethers";
import ercabi from "../config/ABI/erc1155.json";
import { provider } from "../utils/providerweb3";

const useDirectCall = (signer: any, contractaddress: string) => {
  const [loading, setSellTokenLoading] = useState(false);

  const Checklimit = async (fname: string, args: Array<any>) => {
    const name = String(fname);
    //coming from hook
    const myContract = await getContractInstance(signer, contractaddress);
    try {
      const response = await myContract?.[name](...args);
      console.log(response);

      return response;
    } catch (error) {
      //failed
      return false;
    }
  };

  const BuyToken = async (fname: string, args: Array<any>) => {
    const name = String(fname);
    setSellTokenLoading(true);

    //coming from hook
    const myContract = await getContractInstance(signer, contractaddress);
    try {
      //  const gasprice =await myContract.estimateGas?.[name](...args,{value: (ethers.utils.parseUnits(Amount))});
      const response = await myContract?.[name](...args);
      const receipt = await response.wait();
      toast.success("Nft mint successfully");
      setSellTokenLoading(false);
    } catch (error) {
      setSellTokenLoading(false);
      console.log(error);
      toast.error("Something went wrong try again");
      //failed
    }
  };

  return { loading, BuyToken, Checklimit };
};

export default useDirectCall;
