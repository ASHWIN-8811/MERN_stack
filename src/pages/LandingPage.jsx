import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Layers,
  ListChecks,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ListChecks,
    title: "Structured Workflows",
    description:
      "Organize team deliverables, milestones, and priorities inside a clean, unified interface.",
  },
  {
    icon: Users,
    title: "Clear Employee Ownership",
    description:
      "Assign deliverables directly to team members so every initiative has an accountable owner.",
  },
  {
    icon: CalendarClock,
    title: "Deadline & Priority Control",
    description:
      "Balance Low, Medium, and High priority workloads with explicit target due dates.",
  },
  {
    icon: Layers,
    title: "Real-Time Status Tracking",
    description:
      "Move work smoothly across Pending, In Progress, and Completed stages without friction.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Team Access",
    description:
      "Role-ready authentication keeps your organization workspace protected and dependable.",
  },
  {
    icon: BarChart3,
    title: "Executive Visibility",
    description:
      "Give team leads an instant snapshot of execution health across every active sprint.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Create Your Workspace Account",
    description:
      "Register in seconds or sign in to access Targeton's unified operations hub.",
  },
  {
    step: "02",
    title: "Coordinate Team Initiatives",
    description:
      "Align team members on shared objectives, priorities, and target milestones.",
  },
  {
    step: "03",
    title: "Track Delivery to Completion",
    description:
      "Monitor status transitions from Pending to Completed with zero guesswork.",
  },
];

const sampleTasks = [
  {
    title: "Finalize Q4 Onboarding Flow",
    assignee: "Aarav Mehta",
    priority: "High",
    status: "In Progress",
    dueDate: "Dec 04",
    priorityVariant: "destructive",
    statusVariant: "soft",
  },
  {
    title: "Audit Role Permissions Matrix",
    assignee: "Sophia Chen",
    priority: "Medium",
    status: "Pending",
    dueDate: "Dec 08",
    priorityVariant: "warning",
    statusVariant: "secondary",
  },
  {
    title: "Publish Weekly Ops Digest",
    assignee: "Liam Brooks",
    priority: "Low",
    status: "Completed",
    dueDate: "Nov 29",
    priorityVariant: "outline",
    statusVariant: "success",
  },
];

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.91_0.07_258/0.55),transparent_55%),radial-gradient(ellipse_at_bottom_left,oklch(0.94_0.04_220/0.45),transparent_50%)]"
          />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-10 lg:px-8">
            <div className="space-y-6 lg:col-span-6">
              <Badge variant="soft" className="px-3 py-1 text-xs font-semibold">
                <Sparkles className="size-3.5" />
                Targeton Operations Platform
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Turn team goals into{" "}
                <span className="text-primary">measurable execution.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Targeton empowers modern teams to organize tasks, assign clear
                ownership, prioritize critical work, and hit every deadline from
                one streamlined workspace.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/register"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "h-11 gap-2 px-5 text-sm font-semibold shadow-sm shadow-primary/25"
                  )}
                >
                  Get Started
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  to="/login"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 px-5 text-sm font-semibold"
                  )}
                >
                  Login
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" />
                  Unified team collaboration
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" />
                  Responsive across all devices
                </span>
              </div>
            </div>

            {/* Hero Workspace Preview */}
            <div className="lg:col-span-6">
              <Card className="border-border/80 bg-card/95 shadow-xl shadow-primary/5 backdrop-blur">
                <CardHeader className="border-b pb-4">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-base">
                        Targeton Active Sprint Board
                      </CardTitle>
                      <CardDescription>
                        Live task priorities, owners, and completion status
                      </CardDescription>
                    </div>
                    <Badge variant="soft">3 Active</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 pt-1">
                  {sampleTasks.map((task) => (
                    <div
                      key={task.title}
                      className="flex flex-col justify-between gap-3 rounded-lg border bg-background p-3.5 transition-colors hover:border-primary/40 sm:flex-row sm:items-center"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">
                          {task.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Assigned to {task.assignee} · Due {task.dueDate}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant={task.priorityVariant}>
                          {task.priority}
                        </Badge>
                        <Badge variant={task.statusVariant}>
                          {task.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-3">
              Platform Capabilities
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for focused teams that ship on schedule
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Every module in Targeton is crafted to reduce coordination overhead
              and keep task data structured from day one.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <CardHeader>
                    <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="border-t bg-muted/40 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary" className="mb-3">
                How Targeton Works
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                From onboarding to task execution in minutes
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {workflowSteps.map((item) => (
                <Card key={item.step} className="bg-card">
                  <CardHeader>
                    <span className="text-xs font-bold tracking-wider text-primary">
                      STEP {item.step}
                    </span>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* CTA Banner */}
            <Card className="mt-12 border-primary/20 bg-primary text-primary-foreground shadow-lg">
              <CardContent className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
                <div className="space-y-1.5">
                  <h3 className="text-2xl font-bold tracking-tight">
                    Ready to get started with Targeton?
                  </h3>
                  <p className="text-sm text-primary-foreground/85 sm:text-base">
                    Create your Targeton account or sign in to access your team
                    workspace right away.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/register"
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "lg" }),
                      "h-10 px-5 font-semibold"
                    )}
                  >
                    Register Now
                  </Link>
                  <Link
                    to="/login"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "h-10 border-primary-foreground/30 bg-transparent px-5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    )}
                  >
                    Login
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
