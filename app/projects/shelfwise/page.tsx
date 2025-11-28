"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Github } from "lucide-react";
import Link from "next/link";

export default function ShelfwisePage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-20">
      <Link href="/projects">
        <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                ShelfWise
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                Modern Library Management System
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/vasujain275/shelfwise" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  View Code
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Spring Boot", "React", "MySQL", "Docker", "TypeScript", "Java", "Spring Security", "Tailwind CSS"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            ShelfWise is a full-featured, production-ready library management system designed specifically for
            <span className="text-primary font-semibold"> offline-first operations</span>.
            Built with React and Spring Boot, it provides a seamless experience for managing books, members,
            and transactions with role-based access control and comprehensive reporting capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 p-8 bg-card border border-border rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">🔐</span>
              Authentication & Security
            </h3>
            <ul className="space-y-3">
              {[
                "JWT-based Authentication with HttpOnly cookies",
                "Role-Based Access Control (MEMBER, ADMIN, SUPER_ADMIN)",
                "Secure Spring Security implementation",
                "Refresh Token mechanism"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 p-8 bg-card border border-border rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">📖</span>
              Book Management
            </h3>
            <ul className="space-y-3">
              {[
                "Complete CRUD operations",
                "Bulk Book Upload via JSON",
                "Advanced Search with pagination",
                "Custom Barcode Generation for printing"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 p-8 bg-card border border-border rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">🔄</span>
              Transactions
            </h3>
            <ul className="space-y-3">
              {[
                "Issue, Return, and Renew workflows",
                "Automatic late fee calculation",
                "Overdue transaction alerts",
                "Transaction receipt generation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 p-8 bg-card border border-border rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">📊</span>
              Analytics & Reports
            </h3>
            <ul className="space-y-3">
              {[
                "Real-time admin dashboard",
                "Member borrowing history",
                "Inventory and user reports",
                "Data export to CSV/PDF"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Detail */}
        <div className="space-y-8 py-12 border-t border-border">
          <h2 className="text-3xl font-bold text-center">Technical Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Backend</h4>
              <p className="text-muted-foreground leading-relaxed">
                Built with Spring Boot 3.3.13 and Java 21. Uses Spring Security 6.x for robust protection,
                Spring Data JPA for persistence, and MapStruct for efficient DTO mapping.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Frontend</h4>
              <p className="text-muted-foreground leading-relaxed">
                Modern React 19 application using TypeScript and Vite. Features Tailwind CSS for styling,
                shadcn/ui for accessible components, and TanStack Query for state management.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">DevOps</h4>
              <p className="text-muted-foreground leading-relaxed">
                Containerized with Docker supporting multi-arch builds. CI/CD pipelines via GitHub Actions
                ensure automated testing and deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
