export interface CollateralToken {
  id: string;
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  currentPrice: number;
  priceChange24h: number;
  liquidationThreshold: number;
  maxLTV: number;
  liquidationPenalty: number;
  isActive: boolean;
  maxStaleness: number; // in seconds
  lastPriceUpdate: Date;
  icon: string;
}

export interface Vault {
  id: string;
  owner: string;
  collateralToken: CollateralToken;
  collateralAmount: number;
  collateralValueUSD: number;
  borrowedDSC: number;
  liquidationPrice: number;
  collateralizationRatio: number;
  healthFactor: number;
  isLiquidatable: boolean;
  createdAt: Date;
  lastUpdated: Date;
}

export interface User {
  address: string;
  isAdmin: boolean;
  vaults: Vault[];
  totalCollateralUSD: number;
  totalBorrowedDSC: number;
  portfolioHealthFactor: number;
}

export interface PriceFeed {
  tokenId: string;
  price: number;
  timestamp: Date;
  source: string;
}

export interface VaultAction {
  id: string;
  vaultId: string;
  type: "deposit" | "withdraw" | "borrow" | "repay" | "liquidate";
  amount: number;
  tokenSymbol: string;
  timestamp: Date;
  txHash: string;
  user: string;
}
