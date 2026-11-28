import { Link } from "react-router-dom";
import { Target } from "lucide-react";

function BrandLogo({ to = "/", size = "md" }) {
  const iconBox =
    size === "sm" ? "size-8 rounded-lg" : "size-9 rounded-xl";
  const iconSize = size === "sm" ? "size-4" : "size-5";
  const textSize = size === "sm" ? "text-lg" : "text-xl";

  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2.5 font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90"
    >
      <span
        className={`inline-flex ${iconBox} items-center justify-center bg-primary text-primary-foreground shadow-sm shadow-primary/25`}
      >
        <Target className={iconSize} />
      </span>
      <span className={`${textSize} font-bold tracking-tight`}>Targeton</span>
    </Link>
  );
}

export default BrandLogo;
