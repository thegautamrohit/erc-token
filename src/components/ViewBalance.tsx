import React, { useState } from "react";
import { useAppProvider } from "@/components/context/AppContext";

function ViewBalance() {
  const { account, CSquadData } = useAppProvider();

  const [balance, setBalance] = useState(null);
  const [address, setAddress] = useState<string>("");

  async function viewTokenBalance() {
    const bal = await CSquadData.methods.balanceOf(address).call();
    setBalance(bal);
    console.log("Token Balance:", bal);
  }

  function balanceHandler(e: React.SyntheticEvent) {
    e.preventDefault();

    if (address.trim().length > 0) {
      viewTokenBalance();
    }
  }

  return (
    <div className="bg-white w-1/2 m-auto flex item-center justify-center flex-col p-6 rounded-lg gap-4 mt-4">
      <h4 className="text-center text-2xl text-black font-semibold">
        Check Balance
      </h4>
      <form className="flex flex-col gap-4" onSubmit={(e) => balanceHandler(e)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="recipient" className="text-base font-normal">
            Wallet Address
          </label>
          <input
            type="text"
            placeholder="Enter Recipient Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-[#e5e5e5] p-1 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-sky-900 text-white rounded-md p-2 font-medium cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ViewBalance;
