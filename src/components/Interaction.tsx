"use client";

import React from "react";
import TransferTokens from "./TransferTokens";
import ViewBalance from "./ViewBalance";
import TransactionHistory from "./TransactionHistory";

function Interaction() {
  return (
    <div>
      <TransferTokens />
      <ViewBalance />
      <TransactionHistory />
    </div>
  );
}

export default Interaction;
