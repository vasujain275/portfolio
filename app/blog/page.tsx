import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "backend-architecture-patterns",
    title: "Backend Architecture Patterns for Scalable Systems",
    excerpt: "Exploring microservices, event-driven architecture, and best practices for building robust backend systems that can handle high traffic and complex business logic.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Backend", "Architecture", "Microservices"],
    featured: true,
  },
  {
    id: "devops-best-practices",
    title: "DevOps Best Practices: From Code to Production",
    excerpt: "A comprehensive guide to implementing CI/CD pipelines, containerization strategies, and monitoring solutions for modern applications.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["DevOps", "CI/CD", "Docker"],
    featured: true,
  },
  {
    id: "rag-systems-implementation",
    title: "Building RAG Systems with LangChain and Qdrant",
    excerpt: "Step-by-step guide to implementing Retrieval-Augmented Generation systems, including vector database setup and semantic search optimization.",
    date: "2024-01-05",
    readTime: "15 min read",
    tags: ["AI/ML", "RAG", "LangChain"],
    featured: false,
  },
  {
    id: "spring-boot-security",
    title: "Securing Spring Boot Applications: A Complete Guide",
    excerpt: "Implementing JWT authentication, role-based access control, and security best practices in Spring Boot applications.",
    date: "2023-12-20",
    readTime: "10 min read",
    tags: ["Spring Boot", "Security", "Java"],
    featured: false,
  },
  {
    id: "fastapi-performance",
    title: "Optimizing FastAPI Performance for High-Traffic Applications",
    excerpt: "Techniques for improving FastAPI application performance, including async operations, database optimization, and caching strategies.",
    date: "2023-12-15",
    readTime: "9 min read",
    tags: ["FastAPI", "Python", "Performance"],
    featured: false,
  },
  {
    id: "docker-kubernetes-deployment",
    title: "Deploying Applications with Docker and Kubernetes",
    excerpt: "Complete workflow for containerizing applications and deploying them to Kubernetes clusters with proper monitoring and scaling.",
    date: "2023-12-10",
    readTime: "14 min read",
    tags: ["Docker", "Kubernetes", "DevOps"],
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Thoughts on backend development, DevOps practices, AI applications, 
          and everything in between.
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="project-card group">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm text-primary hover:underline group/link"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-3xl font-bold mb-12 text-center">All Posts</h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  {post.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm text-primary hover:underline group/link"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-20 p-8 bg-card border border-border rounded-xl text-center">
        <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Get notified when I publish new articles about backend development, DevOps, and AI.
        </p>
        <div className="flex max-w-md mx-auto space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base"
          />
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-base font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
} 