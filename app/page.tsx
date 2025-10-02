"use client";
import { AlertTriangle, Shield, TrendingUp, Home } from "lucide-react";
import { Button } from "./components/ui/button";
import WalletConnection from "./components/wallet-connection";
import { useState } from "react";
import UserAuthView from "./components/user-authview";
import AdminAuthView from "./components/admin-authview";

export default function HomePage() {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
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
        {isAdminLogin ? (
          <AdminAuthView setIsAdminLogin={setIsAdminLogin} />
        ) : (
          <UserAuthView setIsAdminLogin={setIsAdminLogin} />
        )}
      </div>
    </div>
  );
}
