import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function AuthShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.92_0.06_258/0.45),transparent_60%)]"
        />
        <div className="w-full max-w-md">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default AuthShell;
