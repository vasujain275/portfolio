import { skills, experience, getSkillsByCategory } from "@/lib/experience";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const backendSkills = getSkillsByCategory("backend");
  const devopsSkills = getSkillsByCategory("devops");
  const aiSkills = getSkillsByCategory("ai");
  const frontendSkills = getSkillsByCategory("frontend");
  const databaseSkills = getSkillsByCategory("database");

  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
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
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Backend developer and DevOps engineer passionate about building robust microservices, 
            AI applications, and sharing knowledge through code and writing.
          </p>
        </div>

        {/* Personal Info */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Background</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm Vasu Jain, a highly motivated and self-driven CSE undergrad from India, currently 
                entering my third year. I'm passionate about backend development, DevOps, and practical 
                GenAI applications. I am a backend and AI engineer working on robust backend microservices 
                and agentic AI workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm actively working toward that with a rigorous self-study and project schedule: 
                2 hours of DSA daily and 3 hours dedicated to backend systems, cloud, and GenAI development.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg">India</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:vasujain275@gmail.com" className="text-lg hover:text-primary transition-colors">
                  vasujain275@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="h-5 w-5 text-muted-foreground" />
                <a href="https://github.com/vasujain275" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                  github.com/vasujain275
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Current Focus</h2>
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-semibold text-lg mb-3">Backend Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building secure, scalable REST APIs and microservices using Spring Boot, FastAPI, and Go.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-semibold text-lg mb-3">DevOps & Cloud</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automating deployment workflows, containerization with Docker/K8s, and AWS infrastructure.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-semibold text-lg mb-3">AI/ML Applications</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exploring RAG systems, LangChain, vector databases, and multi-agent orchestration patterns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Backend */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Backend</h3>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between text-base">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">DevOps</h3>
              <div className="space-y-4">
                {devopsSkills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between text-base">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">AI/ML</h3>
              <div className="space-y-4">
                {aiSkills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between text-base">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Frontend</h3>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between text-base">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Database</h3>
              <div className="space-y-4">
                {databaseSkills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between text-base">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center">Experience Timeline</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <Badge variant="secondary" className="text-sm">
                        {exp.type}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium text-lg">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.period}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {index < experience.length - 1 && (
                  <div className="absolute left-7 top-14 w-0.5 h-20 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Goals */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Certifications (In Progress)</h3>
            <div className="space-y-4">
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h4 className="font-semibold text-lg mb-2">AWS Cloud Practitioner</h4>
                <p className="text-muted-foreground leading-relaxed">Validating cloud computing knowledge and AWS services understanding</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h4 className="font-semibold text-lg mb-2">AWS Developer Associate</h4>
                <p className="text-muted-foreground leading-relaxed">Demonstrating expertise in developing and maintaining applications on AWS</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Future Goals</h3>
            <div className="space-y-4">
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h4 className="font-semibold text-lg mb-2">MLH Fellowship</h4>
                <p className="text-muted-foreground leading-relaxed">Exploring opportunities to contribute to open source projects</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h4 className="font-semibold text-lg mb-2">LFX Mentorship</h4>
                <p className="text-muted-foreground leading-relaxed">Seeking mentorship opportunities in the Linux Foundation ecosystem</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <h4 className="font-semibold text-lg mb-2">Google Summer of Code</h4>
                <p className="text-muted-foreground leading-relaxed">Exploring summer internship opportunities with open source organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 