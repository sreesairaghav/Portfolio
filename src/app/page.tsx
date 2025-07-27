
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone, Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Home() {

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between">
          <a href="#home" className="text-lg font-bold">Sree Sai Raghav C</a>
          <nav className="hidden md:flex gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </a>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <div className="flex flex-col gap-4 p-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </a>
                ))}
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto">
        <section id="home" className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-3.5rem)] py-20 gap-8">
            <Avatar className="w-48 h-48">
              <AvatarImage src="https://firebasestudio-hosting.web.app/images/sree-sai-raghav-c.jpeg" alt="Sree Sai Raghav C" />
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">Sree Sai Raghav C</h1>
              <p className="text-xl md:text-2xl text-primary">ML and IoT Enthusiast</p>
               <div className="flex justify-center items-center gap-4 pt-4">
                <a href="https://www.linkedin.com/in/sree-sai-raghav-c-023822291/" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Linkedin /></a>
                <a href="https://github.com/sreesairaghav" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Github /></a>
                <a href="mailto:sree23110160@snuchennai.edu.in" className="hover:text-primary"><Mail /></a>
              </div>
            </div>
        </section>

        <div className="px-4 md:px-8 lg:px-12 py-16 space-y-16">
            <section id="about">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-3 text-center">About Me</h2>
              <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground text-center md:text-left">
                <p>A passionate tech enthusiast exploring the intersection of Artificial Intelligence, Machine Learning, and the Internet of Things. I enjoy building smart, real-world applications that make life easier, more efficient, and better connected.</p>
                <p>With hands-on internship experience, I’ve worked on ML models and big data analytics to solve meaningful problems. Whether it’s automating systems, analyzing complex datasets, or experimenting with IoT, I love turning ideas into reality.</p>
                <p>Driven by curiosity and a builder’s mindset, I’m always learning, exploring, and creating.</p>
                <p>Apart from studies, I am a Grade 4, Trinity College London certified Keyboard player. I am a filmmaker, having written and directed short films, and an academy-level cricket player.</p>
              </div>
            </section>

            <section id="experience">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-3 text-center">Professional Experience</h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>ML Intern</CardTitle>
                    <CardDescription>Beumer Group Middle East, Dubai (Onsite) | May 2025 - June 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground">Worked with the Global Monitoring Center on big data and ML from Doha International Airport's GMC data, building two impactful AI projects.</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li><strong>Fehlix:</strong> Forecasted sensor faults in baggage systems using ML models; deployed a fault prediction engine to improve maintenance response time.</li>
                      <li><strong>Nexflight:</strong> Developed an optimization model to compute baggage transfer feasibility between flights, minimizing delays across airport logistics. Currently under deployment.</li>
                    </ul>
                     <p className="italic text-sm text-primary">Honoured to have been appreciated by the CEO of Beumer Group Middle East for my contributions.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Student Ambassador</CardTitle>
                    <CardDescription>Shiv Nadar University, Chennai | Jan 2025 - Present</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Serving as a key point of contact for prospective students and parents, addressing queries about university life. I foster connections, guide applicants, and provide insights into academic programs and resources through various outreach initiatives.</p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <section id="projects">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-3 text-center">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                 <Card>
                  <CardHeader>
                    <CardTitle>WattSight</CardTitle>
                     <CardDescription>AI-powered web dashboard for EV charging stations.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Advanced dashboard for real-time monitoring, predictive analytics, and intelligent insights into electric vehicle charging stations.</p>
                     <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild><a href="https://wattsight-production.up.railway.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                        <Button variant="outline" size="sm" asChild><a href="https://github.com/sreesairaghav/WattSight" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
                    </div>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader>
                    <CardTitle>TragerX</CardTitle>
                    <CardDescription>ROS-based autonomous trolley navigation system.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Enhances passenger convenience by enabling autonomous trolleys to navigate seamlessly to key airport locations like check-in counters and boarding gates.</p>
                     <p className="italic text-sm text-primary">Best Project Presentation at CEG Anna University, Chennai &amp; Runner-up at IoT Verse, IIITDM Kanchipuram.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

             <section id="skills">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-3 text-center">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div>
                      <h3 className="font-semibold mb-4 text-center md:text-left text-xl">Programming</h3>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          <Badge variant="secondary">Python</Badge>
                          <Badge variant="secondary">C++</Badge>
                          <Badge variant="secondary">Java</Badge>
                          <Badge variant="secondary">SQL</Badge>
                      </div>
                  </div>
                   <div>
                      <h3 className="font-semibold mb-4 text-center md:text-left text-xl">Tools</h3>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          <Badge variant="secondary">Git</Badge>
                          <Badge variant="secondary">ROS2</Badge>
                          <Badge variant="secondary">SLAM</Badge>
                          <Badge variant="secondary">Embedded Systems &amp; Sensor Integration</Badge>
                      </div>
                  </div>
                   <div>
                      <h3 className="font-semibold mb-4 text-center md:text-left text-xl">AI/ML</h3>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          <Badge variant="secondary">TensorFlow</Badge>
                          <Badge variant="secondary">PyTorch</Badge>
                          <Badge variant="secondary">Scikit-learn</Badge>
                          <Badge variant="secondary">OpenCV</Badge>
                          <Badge variant="secondary">NumPy</Badge>
                          <Badge variant="secondary">Pandas</Badge>
                      </div>
                  </div>
              </div>
            </section>
            
            <section id="education">
                <h2 className="text-3xl font-semibold mb-6 border-b pb-3 text-center">Education</h2>
                <div className="space-y-6 max-w-2xl mx-auto">
                    <div className="text-center">
                        <h3 className="font-semibold text-xl">Shiv Nadar University, Chennai</h3>
                        <p className="text-sm text-muted-foreground">Aug 2023 - Aug 2027</p>
                        <p>Bachelor of Technology - Computer Science Engineering with IoT</p>
                        <p className="text-sm">CGPA: 8.86</p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-xl">DAV Public School, Chennai</h3>
                        <p className="text-sm text-muted-foreground">Graduated 2023</p>
                         <p className="text-sm">Served as the School Pupil Leader.</p>
                    </div>
                </div>
            </section>
            
            <section id="achievements">
                <h2 className="text-3xl font-semibold mb-6 border-b pb-3 text-center">Achievements</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 max-w-2xl mx-auto">
                    <li>Recognized by Beumer CEO for impactful ML contributions.</li>
                    <li>Best Project – TragerX (CEG Anna University, Chennai).</li>
                    <li>Runner-Up – IoT-Verse Hackathon (IIITDM, Kanchipuram).</li>
                    <li>Student Ambassador – Shiv Nadar University.</li>
                    <li>School Pupil Leader – DAV Public School.</li>
                </ul>
            </section>

             <section id="contact" className="text-center py-10">
                <h2 className="text-3xl font-semibold mb-6 border-b pb-3">Contact Me</h2>
                <div className="space-y-4 max-w-md mx-auto">
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <a href="mailto:sree23110160@snuchennai.edu.in" className="hover:text-primary">sree23110160@snuchennai.edu.in</a>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                      <span>+91 9962875610</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <span>Chennai, India</span>
                    </div>
                </div>
              </section>
        </div>
      </main>
    </div>
  );
}

    