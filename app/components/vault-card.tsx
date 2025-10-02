import React from "react";
import { Card } from "./ui/card";
import { AlertTriangle, DollarSign, Shield } from "lucide-react";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Vault } from "@/types";

interface VaultCardProps {
  vault: Vault;
  onManage: (vaultId: string) => void;
  isExternalLiquidator?: boolean;
}

const VaultCard = ({
  vault,
  onManage,
  isExternalLiquidator,
}: VaultCardProps) => {
  const getHealthFactorColor = (healthFactor: number) => {
    if (healthFactor >= 2) return "text-success";
    if (healthFactor >= 1.5) return "text-warning";
    return "text-destructive";
  };

  const getHealthFactorBadge = (healthFactor: number) => {
    if (healthFactor >= 2)
      return {
        variant: "default" as const,
        label: "Healthy",
        className: "bg-success/10 text-success border-success/30",
      };
    if (healthFactor >= 1.5)
      return {
        variant: "default" as const,
        label: "Moderate",
        className: "bg-warning/10 text-warning border-warning/30",
      };
    return {
      variant: "destructive" as const,
      label: "At Risk",
      className: "bg-destructive/10 text-destructive border-destructive/30",
    };
  };

  const healthBadge = getHealthFactorBadge(vault.healthFactor);
  const collateralizationPercentage = Math.min(
    vault.collateralizationRatio,
    200
  );

  return (
    <Card className="p-6 bg-gradient-card border-primary/20 shadow-card hover:shadow-primary/20 transition-all duration-300">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{vault.collateralToken.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">
                {vault.collateralToken.symbol} Vault
              </h3>
              <p className="text-sm text-muted-foreground">ID: {vault.id}</p>
            </div>
          </div>
          <Badge variant="default" className={healthBadge.className}>
            <Shield className="h-3 w-3 mr-1" />
            {healthBadge.label}
          </Badge>
        </div>

        {/* Collateral Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Collateral</p>
            <div className="font-semibold">
              {vault.collateralAmount.toFixed(4)} {vault.collateralToken.symbol}
            </div>
            <div className="text-sm text-muted-foreground">
              ${vault.collateralValueUSD.toLocaleString()}
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Borrowed</p>
            <div className="font-semibold flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              {vault.borrowedDSC.toLocaleString()} DSC
            </div>
            <div className="text-sm text-muted-foreground">
              ${vault.borrowedDSC.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Health Factor */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Health Factor</span>
            <span
              className={`font-semibold ${getHealthFactorColor(
                vault.healthFactor
              )}`}
            >
              {vault.healthFactor.toFixed(2)}
            </span>
          </div>
          <Progress
            value={Math.min(vault.healthFactor * 50, 100)}
            className="h-2"
          />
        </div>

        {/* Collateralization Ratio */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Collateralization
            </span>
            <span className="font-semibold">
              {vault.collateralizationRatio.toFixed(1)}%
            </span>
          </div>
          <Progress value={collateralizationPercentage / 2} className="h-2" />
        </div>

        {/* Risk Info */}
        {vault.isLiquidatable && (
          <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm text-destructive font-medium">
              Liquidation Risk
            </span>
          </div>
        )}

        {/* Actions */}
        <Button
          onClick={() => onManage(vault.id)}
          className="w-full"
          variant={
            vault.isLiquidatable && isExternalLiquidator
              ? "destructive"
              : "default"
          }
        >
          {vault.isLiquidatable && isExternalLiquidator ? (
            <>
              <AlertTriangle className="h-4 w-4 mr-2" />
              Liquidate Vault
            </>
          ) : (
            "Manage Vault"
          )}
        </Button>
      </div>
    </Card>
  );
};

export default VaultCard;
