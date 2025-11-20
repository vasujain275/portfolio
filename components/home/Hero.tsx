"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const roles = [
  "Backend Developer",
  "DevOps Engineer", 
  "AI Engineer",
  "Full-Stack Developer"
];

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "10+" },
  { label: "Open Source", value: "5+" },
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < role.length) {
          setCurrentText(role.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentRoleIndex, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10 lg:pr-12">
            <div className="space-y-8">
              {/* Profile Picture and Name */}
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                    <Image
                      src="https://avatars.githubusercontent.com/u/69643310?v=4"
                      alt="Vasu Jain"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                    Hi, I'm{" "}
                    <span className="text-primary">Vasu Jain</span>
                  </h1>
                  <div className="text-xl lg:text-2xl text-muted-foreground">
                    I'm a{" "}
                    <span className="text-primary font-mono typing-animation">
                      {currentText}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about building robust backend microservices, DevOps automation, 
                and practical GenAI applications. Currently working on secure, scalable systems 
                and exploring advanced AI orchestration patterns.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group px-8 py-3 text-lg">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-3 text-lg">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/vasujain275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/vasujain275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:vasujain275@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Terminal/Code Demo */}
          <div className="space-y-8 lg:pl-12">
            <div className="terminal">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-muted-foreground">vasu@backend:~</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">$</span>
                  <span>whoami</span>
                </div>
                <div className="text-secondary">vasu-jain</div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">$</span>
                  <span>cat skills.txt</span>
                </div>
                <div className="text-secondary">
                  Backend: Java, Go, TypeScript, Python<br/>
                  DevOps: Docker, K8s, AWS, CI/CD<br/>
                  AI: LangChain, RAG, Vector DBs<br/>
                  Frontend: React, TypeScript, shadcn/ui
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">$</span>
                  <span>ls projects/</span>
                </div>
                <div className="text-secondary">
                  student-management-system/<br/>
                  bookstore-api/<br/>
                  ipl-rag-chatbot/<br/>
                  library-management-system/
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link 
                href="https://ipl-chatbot.vasujain.me" 
                target="_blank"
                className="flex items-center justify-between p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div>
                  <div className="font-semibold text-lg">IPL RAG Chatbot</div>
                  <div className="text-sm text-muted-foreground">Live Demo</div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link 
                href="https://bookstore-api.vasujain.me" 
                target="_blank"
                className="flex items-center justify-between p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div>
                  <div className="font-semibold text-lg">Bookstore API</div>
                  <div className="text-sm text-muted-foreground">Live Demo</div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 