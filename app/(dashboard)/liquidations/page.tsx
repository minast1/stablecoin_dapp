import { Card } from "@/components/ui/card";
import VaultCard from "@/components/vault-card";
import { AlertTriangle, Shield } from "lucide-react";
import React from "react";

export default function LiquidationPage() {
  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <AlertTriangle className="h-8 w-8 text-warning" />
          Liquidation Opportunities
        </h1>
        <p className="text-muted-foreground">
          Liquidate undercollateralized vaults and earn rewards. No
          authentication required.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <Card className="p-4 bg-gradient-card border-destructive/20 shadow-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <AlertTriangle className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Available Liquidations
              </p>
              <p className="text-2xl font-bold">
                {
                  1
                  // liquidatableVaults.length
                }
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-card border-primary/20 shadow-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-success">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Total Value at Risk
              </p>
              <p className="text-2xl font-bold">
                $10,183.54
                {/* ${liquidatableVaults.reduce((acc, v) => acc + v.collateralValueUSD, 0).toLocaleString()} */}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-card border-primary/20 shadow-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Liquidation Bonus</p>
              <p className="text-2xl font-bold">10%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Liquidatable Vaults */}
      {/* {liquidatableVaults.length === 0 ? (
        <Card className="p-12 text-center bg-gradient-card border-success/20">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-success flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">All Vaults Healthy</h3>
              <p className="text-muted-foreground">
                No vaults are currently available for liquidation. Check back later.
              </p>
            </div>
          </div>
        </Card>
      ) : ( */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* {liquidatableVaults.map((vault) => (
            <VaultCard
              key={vault.id}
              vault={vault}
              onManage={setSelectedVaultId}
              isExternalLiquidator={true}
            />
          ))} */}
      </div>
      {/* )} */}

      {/* Modal */}
      {/* {selectedVaultId && selectedVault && (
        <ManageVaultModal
          vaultId={selectedVaultId}
          vault={selectedVault}
          open={!!selectedVaultId}
          onClose={() => setSelectedVaultId(null)}
          isExternalLiquidator={true}
        />
      )} */}
    </div>
  );
}
