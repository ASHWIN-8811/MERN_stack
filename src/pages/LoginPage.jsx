import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Eye, EyeOff, Lock, Mail } from "lucide-react";
import AuthShell from "@/components/AuthShell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Targeton Login Submitted:", { email });
    setStatusMessage(`Signed in as ${email}. Welcome back to Targeton!`);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setStatusMessage(
      email
        ? `Password reset instructions prepared for ${email}.`
        : "Enter your email address above and click Forgot Password to reset."
    );
  };

  return (
    <AuthShell>
      <Card className="border-border/80 shadow-lg shadow-primary/5">
        <CardHeader className="space-y-1.5 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Sign in to Targeton
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your team workspace
          </CardDescription>
        </CardHeader>

        <CardContent>
          {statusMessage && (
            <div
              role="status"
              className="mb-5 flex items-start gap-2.5 rounded-lg border border-primary/25 bg-primary/10 px-3.5 py-2.5 text-sm text-primary"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@targeton.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="login-password">Password</Label>
                <a
                  href="#forgot-password"
                  onClick={handleForgotPassword}
                  className="text-xs font-medium text-primary underline-offset-4 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pr-10 pl-9"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-2 h-10 w-full font-semibold">
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center border-t pt-5 text-sm text-muted-foreground">
          <span>
            Don&apos;t have a Targeton account?{" "}
            <Link
              to="/register"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Register
            </Link>
          </span>
        </CardFooter>
      </Card>
    </AuthShell>
  );
}

export default LoginPage;
