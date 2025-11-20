import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

// This would typically come from a CMS or markdown files
const blogPosts = {
  "backend-architecture-patterns": {
    title: "Backend Architecture Patterns for Scalable Systems",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Backend", "Architecture", "Microservices"],
    content: `
# Backend Architecture Patterns for Scalable Systems

Building robust, scalable backend systems requires careful consideration of architecture patterns. In this post, I'll explore some of the most effective patterns I've used in my projects.

## Microservices Architecture

Microservices have become the go-to pattern for building scalable applications. Here's how I approach them:

\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }
}
\`\`\`

## Event-Driven Architecture

For systems that need to handle high throughput, event-driven architecture provides excellent scalability:

\`\`\`python
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel

app = FastAPI()

class OrderEvent(BaseModel):
    order_id: str
    user_id: str
    items: list

@app.post("/orders")
async def create_order(order: OrderEvent, background_tasks: BackgroundTasks):
    # Process order asynchronously
    background_tasks.add_task(process_order, order)
    return {"status": "accepted"}
\`\`\`

## Database Design Patterns

Proper database design is crucial for performance:

\`\`\`sql
-- Use indexes for frequently queried columns
CREATE INDEX idx_user_email ON users(email);

-- Implement proper foreign key constraints
ALTER TABLE orders
ADD CONSTRAINT fk_user_id
FOREIGN KEY (user_id) REFERENCES users(id);
\`\`\`

## Conclusion

These patterns have helped me build systems that can handle thousands of concurrent users while maintaining code quality and developer productivity.
    `,
  },
  "devops-best-practices": {
    title: "DevOps Best Practices: From Code to Production",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["DevOps", "CI/CD", "Docker"],
    content: `
# DevOps Best Practices: From Code to Production

A comprehensive guide to implementing CI/CD pipelines, containerization strategies, and monitoring solutions.

## CI/CD Pipeline Setup

Here's how I structure my GitHub Actions workflows:

\`\`\`yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: |
          npm install
          npm test
\`\`\`

## Docker Best Practices

Containerization is key to consistent deployments:

\`\`\`dockerfile
# Multi-stage build for optimization
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Monitoring and Logging

Proper monitoring is essential for production systems:

\`\`\`python
import logging
from prometheus_client import Counter, Histogram

# Metrics
request_counter = Counter('http_requests_total', 'Total HTTP requests')
request_duration = Histogram('http_request_duration_seconds', 'HTTP request duration')

# Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
\`\`\`
    `,
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link href="/blog" className="text-primary hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div
            className="space-y-6 text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("# ")) {
                    return `<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">${line.slice(
                      2
                    )}</h2>`;
                  }
                  if (line.startsWith("## ")) {
                    return `<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">${line.slice(
                      3
                    )}</h3>`;
                  }
                  if (line.startsWith("```")) {
                    return `<pre class="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm"><code>${line.slice(
                      3
                    )}</code></pre>`;
                  }
                  if (line.trim() === "") {
                    return "<br>";
                  }
                  return `<p>${line}</p>`;
                })
                .join(""),
            }}
          />
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Written by Vasu Jain
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/vasujain275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/vasujain275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
