//Blockchain transaction/status layer
export interface AlgorandTransaction {
  txId: string;
  blockNumber: number;
  blockHash: string;
  explorerUrl: string;
  network: string;
  fee: string;
  timestamp: string;
}

export async function createAlgorandTransaction(
  sender: string,
  receiver: string,
  amount: number
): Promise<AlgorandTransaction> {

  // blockchain delay
  await new Promise((resolve) => setTimeout(resolve, 1200));
//Generating transaction ID
  const random = Math.random().toString(16).substring(2).toUpperCase();

  const txId = `ALGO_TX_${random}`;
//Generating block number
  const blockNumber =
    38490000 + Math.floor(Math.random() * 5000);
//Generating block hash
  const blockHash =
    `BLK_ALGO_${Math.random().toString(16).substring(2).toUpperCase()}`;
//Returning transaction information
  return {
    txId,
    blockNumber,
    blockHash,
    explorerUrl: `https://testnet.explorer.perawallet.app/tx/${txId}`,
    network: "Algorand TestNet",
    fee: "0.001 ALGO",
    timestamp: new Date().toISOString()
  };
}

export async function getBlockchainStatus() {

  return {
    network: "Algorand TestNet",
    status: "Healthy",
    latestBlock:
      38490000 + Math.floor(Math.random() * 1000),
    avgBlockTime: "3.3 sec",
    tps: 1200,
    fee: "0.001 ALGO"
  };
}