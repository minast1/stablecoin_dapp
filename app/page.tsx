import { AlertTriangle, Shield, TrendingUp, Home } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import Link from "next/link";
import WalletConnection from "./components/wallet-connection";

export default function HomePage() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            The Future of DeFi
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create overcollateralized vaults, borrow DSC stablecoin, and
            participate in a fully decentralized financial ecosystem.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center bg-gradient-card border-primary/20 shadow-card">
            <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Vaults</h3>
            <p className="text-sm text-muted-foreground">
              Create overcollateralized vaults with multiple supported tokens
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card border-primary/20 shadow-card">
            <div className="w-12 h-12 rounded-full bg-gradient-success mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Stable Borrowing</h3>
            <p className="text-sm text-muted-foreground">
              Borrow DSC stablecoin against your collateral at competitive rates
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card border-primary/20 shadow-card">
            <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
              <Home className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Liquidation Engine</h3>
            <p className="text-sm text-muted-foreground">
              Automated liquidation system ensures protocol stability
            </p>
          </Card>
        </div>

        <div className="max-w-md mx-auto">
          <WalletConnection />
        </div>
      </div>
    </div>
  );
}
