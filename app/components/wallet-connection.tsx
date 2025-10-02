"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Card } from "./ui/card";
import { Shield, User, Wallet } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  setAdminLogin: Dispatch<SetStateAction<boolean>>;
};
const WalletConnection = ({ setAdminLogin }: Props) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectedUser, setConnectedUser] = useState(null);
  const handleConnect = async (isAdmin = false) => {
    setIsConnecting(true);
    // Simulate wallet connection delay
    // setTimeout(() => {
    //   onConnect(isAdmin ? mockAdmin : mockUser);
    //   setIsConnecting(false);
    // }, 1500);
  };
  if (connectedUser) {
    return (
      <Card className="p-4 bg-gradient-card border-primary/20 shadow-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Wallet className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                {/* <span className="font-medium">
                  {connectedUser.address.slice(0, 6)}...{connectedUser.address.slice(-4)}
                </span> */}
                {/* {connectedUser.isAdmin && (
                  <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                    <Shield className="h-3 w-3 mr-1" />
                    Admin
                  </Badge>
                )} */}
              </div>
              <p className="text-sm text-muted-foreground">Connected</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            //onClick={onDisconnect}
            className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
          >
            Disconnect
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-gradient-card border-primary/20 shadow-card">
      <div className="text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
          <Wallet className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect Wallet</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Connect your wallet to access the DSC Stablecoin platform
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => handleConnect(false)}
            disabled={isConnecting}
            className="bg-gradient-primary hover:opacity-90 shadow-primary"
          >
            <User className="h-4 w-4 mr-2" />
            {isConnecting ? "Connecting..." : "Connect as User"}
          </Button>
          <Button
            variant="outline"
            onClick={() => setAdminLogin(true)}
            disabled={isConnecting}
            className="border-warning/30 text-warning hover:bg-warning/10"
          >
            <Shield className="h-4 w-4 mr-2" />
            Login as Admin
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default WalletConnection;
