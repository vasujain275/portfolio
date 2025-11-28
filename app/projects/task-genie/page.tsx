"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot, CheckCircle2, Clock, Github, MessageSquare, Shield } from "lucide-react";
import Link from "next/link";

export default function TaskGeniePage() {
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
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Task Genie
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                AI-Powered Task Management Telegram Bot
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/vasujain275/task-genie" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="h-5 w-5" />
                  View Code
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Python", "FastAPI", "LangGraph", "LangChain", "MongoDB", "Redis", "Telegram API", "Docker"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Task Genie is an intelligent Telegram bot that helps you manage tasks and reminders through
            <span className="text-primary font-semibold"> natural conversation</span>.
            Instead of clicking through menus or using strict commands, just tell the bot what you need to do in plain English!
            The bot uses a custom LangGraph AI agent powered by OpenAI to understand your intent.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 p-8 bg-card border border-border rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="p-2 bg-primary/10 rounded-lg text-primary"><Bot className="h-6 w-6" /></span>
              Natural Language Processing
            </h3>
            <ul className="space-y-3">
              {[
                "Conversational Interface - talk like a human",
                "Smart Date Parsing ('tomorrow', 'next Monday')",
                "Timezone Aware scheduling",
                "Advanced Intent Recognition"
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
              <span className="p-2 bg-primary/10 rounded-lg text-primary"><MessageSquare className="h-6 w-6" /></span>
              Task Management
            </h3>
            <ul className="space-y-3">
              {[
                "Create, edit, delete tasks via chat",
                "Organize with tags and categories",
                "Set priority levels (low, medium, high)",
                "Recurring tasks support"
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
              <span className="p-2 bg-primary/10 rounded-lg text-primary"><Clock className="h-6 w-6" /></span>
              Smart Reminders
            </h3>
            <ul className="space-y-3">
              {[
                "Automatic reminders before deadlines",
                "Custom reminder times",
                "Timezone-aware notifications",
                "Multiple reminders per task"
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
              <span className="p-2 bg-primary/10 rounded-lg text-primary"><Shield className="h-6 w-6" /></span>
              Architecture & Security
            </h3>
            <ul className="space-y-3">
              {[
                "Custom LangGraph Agent workflow",
                "MongoDB for persistent storage",
                "Redis for FSM state management",
                "Encrypted API key storage"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture Diagram Placeholder/Description */}
        <div className="space-y-8 py-12 border-t border-border">
          <h2 className="text-3xl font-bold text-center">System Architecture</h2>
          <div className="bg-card border border-border rounded-xl p-8 font-mono text-sm overflow-x-auto">
            <pre className="text-muted-foreground">
{`┌─────────────────────────────────────────────────────────┐
│                    Telegram User                        │
└───────────────────┬─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────┐
│              Aiogram Bot (Telegram API)                 │
└───────────────────┬─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────┐
│              LangGraph AI Agent                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │  Custom Graph Workflow:                         │    │
│  │  START → agent → [decide] → tools → agent       │    │
│  └─────────────────────────────────────────────────┘    │
└───────────────────┬─────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────┐
│                   LangChain Tools                       │
└───────────────────┬─────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
