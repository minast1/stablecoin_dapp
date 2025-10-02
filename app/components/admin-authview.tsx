import React from "react";
import { Card } from "./ui/card";
import { Shield } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {
  setIsAdminLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
const AdminAuthView = ({ setIsAdminLogin }: Props) => {
  return (
    <div className="flex flex-col w-lg place-self-center">
      {/* <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-primary/10 transition-smooth"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button> */}

      <Card className="p-8 bg-gradient-card border-primary/30 shadow-glow backdrop-blur-sm overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-primary transform hover:scale-105 transition-smooth">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              Admin Portal
            </h1>
            <p className="text-muted-foreground">
              Secure access to protocol management
            </p>
          </div>

          <form
            //onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@dsc.com"
                //value={email}
                //onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 bg-background/50 border-primary/20 focus:border-primary/50 transition-smooth"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11 bg-background/50 border-primary/20 focus:border-primary/50 transition-smooth"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-primary hover:opacity-90 shadow-primary text-white font-semibold transition-smooth transform hover:scale-[1.02] active:scale-[0.98]"
              // disabled={isLoading}
            >
              {/* {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Signing in...
                  </span>
                ) : ( */}
              Sign In to Dashboard
              {/* )} */}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <p className="text-xs text-warning-foreground text-center font-medium">
              🔐 Demo Credentials
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1">
              admin@dsc.com / admin123
            </p>
          </div>
        </div>
      </Card>

      <Button
        variant="link"
        onClick={() => setIsAdminLogin(false)}
        className="text-center text-sm text-muted-foreground/70"
      >
        Not an admin? Login as user with wallet
      </Button>
    </div>
  );
};

export default AdminAuthView;
