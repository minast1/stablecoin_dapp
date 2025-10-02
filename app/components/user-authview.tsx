import { AlertTriangle, Home, Shield, TrendingUp } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import WalletConnection from "./wallet-connection";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  setIsAdminLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
const UserAuthView = ({ setIsAdminLogin }: Props) => {
  return (
    <>
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

      <div className="max-w-md mx-auto flex flex-col space-y-6">
        <WalletConnection setAdminLogin={setIsAdminLogin} />
        <Button
          className="bg-warning/90 text-black hover:bg-warning/80 font-semibold"
          //variant={pathname === "/liquidations" ? "default" : "ghost"}
          asChild
          //size="sm"
        >
          <Link href="/liquidations">
            <AlertTriangle className="h-4 w-4" />
            Liquidations
            {/* {liquidatableVaults.length > 0 && (
                      <span className="ml-2 px-1.5 py-0.5 text-xs bg-destructive text-destructive-foreground rounded-full">
                        {liquidatableVaults.length}
                      </span>
                    )} */}
          </Link>
        </Button>
      </div>
    </>
  );
};

export default UserAuthView;
