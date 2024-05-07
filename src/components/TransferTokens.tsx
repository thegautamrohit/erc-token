import React, { useState, useEffect } from "react";
import { useAppProvider } from "@/components/context/AppContext";

function TransferTokens() {
  const { CSquadData, account, contractAddress } = useAppProvider();
  console.log(contractAddress);

  const [receiver, setReceiver] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  async function transferTokens() {
    try {
      await CSquadData.methods
        .transfer(receiver, amount.toString())
        .send({ from: account });
      console.log("Tokens transferred successfully!");
    } catch (error) {
      console.log(error);
    }
  }

  function transferHandler(e: React.SyntheticEvent) {
    e.preventDefault();

    if (receiver.trim().length > 0 && amount.trim().length > 0) {
      transferTokens();
    }
  }

  return (
    <div className="bg-white w-1/2 m-auto flex item-center justify-center flex-col p-6 rounded-lg gap-4 ">
      <h4 className="text-center text-2xl text-black font-semibold">
        Transfer Tokens
      </h4>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => transferHandler(e)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="recipient" className="text-base font-normal">
            Recipient Address
          </label>
          <input
            type="text"
            placeholder="Enter Recipient Address"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            className="border border-[#e5e5e5] p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-[#e5e5e5] p-1 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-sky-900 text-white rounded-md p-2 font-medium cursor-pointer"
        >
          Transfer
        </button>
      </form>
    </div>
  );
}

export default TransferTokens;
