"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Trophy,
  Menu,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const navLinks = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Achievements",
    "Contact",
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">

        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

          <a
            href="#home"
            className="font-bold text-xl"
          >
            My Portfolio
          </a>

          <nav className="hidden md:flex gap-8">

            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition"
              >
                {item}
              </a>
            ))}

          </nav>

          <Sheet>

            <SheetTrigger asChild>

              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
              >
                <Menu />
              </Button>

            </SheetTrigger>

            <SheetContent side="left">

              <div className="flex flex-col gap-5 mt-10">

                {navLinks.map((item) => (

                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>

                ))}

              </div>

            </SheetContent>

          </Sheet>

        </div>

      </header>

      <main>

        {/* HERO */}

        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 gap-6"
        >

          <Avatar className="h-48 w-48">

            <AvatarImage
              src="/raghav.png"
              alt="Sree Sai Raghav"
            />

            <AvatarFallback>
              SR
            </AvatarFallback>

          </Avatar>

          <div>

            <h1 className="text-5xl font-bold">
              Sree Sai Raghav C
            </h1>

            <p className="text-primary text-2xl mt-2">
              ML • AI • IoT Enthusiast
            </p>

            <div className="flex justify-center gap-5 mt-5">

              <a
                href="https://github.com/sreesairaghav"
                target="_blank"
                aria-label="Github"
              >
                <Github />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>

              <a
                href="mailto:sreesairaghav13@gmail.com"
                aria-label="Mail"
              >
                <Mail />
              </a>

            </div>

          </div>

        </section>

        {/* ABOUT */}

        <section
          id="about"
          className="max-w-6xl mx-auto py-20 px-6"
        >

          <h2 className="text-3xl font-bold mb-10 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="md:col-span-2">

              <p className="text-muted-foreground">

                Analytical thinker and problem solver with
                experience in AI, predictive systems,
                IoT and data-driven applications.
                Strong in communication, leadership,
                and product management while building
                impactful technology.

              </p>

            </div>

            <Card>

              <CardHeader>

                <CardTitle>
                  Beyond Tech
                </CardTitle>

              </CardHeader>

              <CardContent>

                Keyboard player • Filmmaker • Cricket player

              </CardContent>

            </Card>

          </div>

        </section>

        {/* SKILLS */}

        <section
          id="skills"
          className="py-20 px-6"
        >

          <h2 className="text-center text-3xl font-bold mb-10">
            Skills
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

            <Card>

              <CardHeader>
                <CardTitle>Programming</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">

                <Badge>Python</Badge>
                <Badge>Java</Badge>
                <Badge>C++</Badge>
                <Badge>SQL</Badge>
                <Badge>JS</Badge>

              </CardContent>

            </Card>

            <Card>

              <CardHeader>
                <CardTitle>AI / ML</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">

                <Badge>TensorFlow</Badge>
                <Badge>Pandas</Badge>
                <Badge>Scikit</Badge>

              </CardContent>

            </Card>

            <Card>

              <CardHeader>
                <CardTitle>Tools</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">

                <Badge>Git</Badge>
                <Badge>Linux</Badge>
                <Badge>FastAPI</Badge>

              </CardContent>

            </Card>

          </div>

        </section>

        {/* ACHIEVEMENTS */}

        <section
          id="achievements"
          className="py-20 px-6"
        >

          <h2 className="text-center text-3xl font-bold mb-10">
            Achievements
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">

            {[
              "Recognized by CEO of Beumer Group",
              "Best Project — PayFluxa",
              "Best Project — TragerX",
              "Runner Up — IIITDM",
            ].map((item) => (

              <Card key={item}>

                <CardContent className="flex gap-4 py-5">

                  <Trophy />

                  <p>{item}</p>

                </CardContent>

              </Card>

            ))}

          </div>

        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="py-20 text-center"
        >

          <h2 className="text-3xl font-bold mb-10">

            Contact

          </h2>

          <div className="space-y-4">

            <div className="flex justify-center gap-3">

              <Mail />

              sreesairaghav13@gmail.com

            </div>

            <div className="flex justify-center gap-3">

              <Phone />

              +91 9962875610

            </div>

            <div className="flex justify-center gap-3">

              <MapPin />

              Chennai, India

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}
