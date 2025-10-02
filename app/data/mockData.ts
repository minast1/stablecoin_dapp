import { CollateralToken, Vault, User, VaultAction } from "../types/index";

export const mockCollateralTokens: CollateralToken[] = [
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    address: "0x...",
    decimals: 18,
    currentPrice: 2450.5,
    priceChange24h: 2.45,
    liquidationThreshold: 80,
    maxLTV: 75,
    liquidationPenalty: 10,
    isActive: true,
    maxStaleness: 3600,
    lastPriceUpdate: new Date(),
    icon: "⟠",
  },
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    address: "0x...",
    decimals: 8,
    currentPrice: 67890.25,
    priceChange24h: -1.23,
    liquidationThreshold: 75,
    maxLTV: 70,
    liquidationPenalty: 12,
    isActive: true,
    maxStaleness: 3600,
    lastPriceUpdate: new Date(),
    icon: "₿",
  },
  {
    id: "link",
    name: "Chainlink",
    symbol: "LINK",
    address: "0x...",
    decimals: 18,
    currentPrice: 14.82,
    priceChange24h: 5.67,
    liquidationThreshold: 70,
    maxLTV: 65,
    liquidationPenalty: 15,
    isActive: true,
    maxStaleness: 1800,
    lastPriceUpdate: new Date(),
    icon: "🔗",
  },
];

export const mockVaults: Vault[] = [
  {
    id: "1",
    owner: "0x1234...5678",
    collateralToken: mockCollateralTokens[0],
    collateralAmount: 5.25,
    collateralValueUSD: 12865.13,
    borrowedDSC: 8500,
    liquidationPrice: 1942.86,
    collateralizationRatio: 151.35,
    healthFactor: 1.89,
    isLiquidatable: false,
    createdAt: new Date("2024-01-15"),
    lastUpdated: new Date(),
  },
  {
    id: "2",
    owner: "0x1234...5678",
    collateralToken: mockCollateralTokens[1],
    collateralAmount: 0.15,
    collateralValueUSD: 10183.54,
    borrowedDSC: 9500,
    liquidationPrice: 76333.33,
    collateralizationRatio: 107.19,
    healthFactor: 1.34,
    isLiquidatable: true,
    createdAt: new Date("2024-02-10"),
    lastUpdated: new Date(),
  },
  {
    id: "3",
    owner: "0xabcd...efgh",
    collateralToken: mockCollateralTokens[2],
    collateralAmount: 1250,
    collateralValueUSD: 18525,
    borrowedDSC: 12000,
    liquidationPrice: 11.52,
    collateralizationRatio: 154.38,
    healthFactor: 2.15,
    isLiquidatable: false,
    createdAt: new Date("2024-03-05"),
    lastUpdated: new Date(),
  },
];

export const mockUser: User = {
  address: "0x1234567890abcdef1234567890abcdef12345678",
  isAdmin: false,
  vaults: mockVaults.filter((v) => v.owner === "0x1234...5678"),
  totalCollateralUSD: 23048.67,
  totalBorrowedDSC: 18000,
  portfolioHealthFactor: 1.62,
};

export const mockAdmin: User = {
  address: "0xadmin1234567890abcdef1234567890abcdef1234",
  isAdmin: true,
  vaults: [],
  totalCollateralUSD: 0,
  totalBorrowedDSC: 0,
  portfolioHealthFactor: 0,
};

export const mockAdminCredentials = [
  {
    email: "admin@dsc.com",
    password: "admin123",
    user: mockAdmin,
  },
];

export const mockRecentActions: VaultAction[] = [
  {
    id: "1",
    vaultId: "1",
    type: "deposit",
    amount: 1.5,
    tokenSymbol: "ETH",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    txHash: "0xabc123...",
    user: "0x1234...5678",
  },
  {
    id: "2",
    vaultId: "2",
    type: "borrow",
    amount: 2500,
    tokenSymbol: "DSC",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    txHash: "0xdef456...",
    user: "0x1234...5678",
  },
  {
    id: "3",
    vaultId: "3",
    type: "repay",
    amount: 1000,
    tokenSymbol: "DSC",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    txHash: "0x789ghi...",
    user: "0xabcd...efgh",
  },
];

export const DSC_PRICE = 1.0; // Stablecoin target price
export const TOTAL_DSC_SUPPLY = 125000000;
export const TOTAL_COLLATERAL_VALUE = 85000000;
