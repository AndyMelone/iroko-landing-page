"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  MessageSquare,
  Github,
  FileText,
  Folder,
  Gavel,
  Shield,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/shared/tubelight-navbar";
import { NAVBAR_ITEMS } from "@/lib/constant";
import { MarqueeDemo } from "@/components/shared/marquee";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Page() {
  const Technologies = [
    // { name: "nest", logo: "/techno/nest-logo.png" },
    { name: "next", logo: "/techno/nextjs-logo.png" },
    { name: "docker", logo: "/techno/docker-logo.png" },
    { name: "python", logo: "/techno/python-logo.png" },
    { name: "gemma", logo: "/techno/gemma-logo.png" },
    { name: "milvus", logo: "/techno/milvus-logo.png" },
  ];

  return (
    <div>
      <NavBar items={NAVBAR_ITEMS} />

      <main className="flex-1">
        <section
          id="top"
          className="w-full py-4 md:py-8 lg:py-12 xl:py-28 overflow-hidden"
        >
          <div className="container px-4 md:px-6 rounded-3xl bg-gradient-to-br from-background to-muted/30">
            <div className="grid gap-3 lg:grid-cols-[1fr_400px] lg:gap-3 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col justify-center space-y-4 py-8"
              >
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-3xl bg-muted px-3 py-1 text-sm"
                  >
                    <Zap className="mr-1 h-3 w-3" />
                    AI Legal Innovation
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    Search less, Decide faster with{" "}
                    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      irokolaw
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[600px] text-muted-foreground md:text-xl"
                  >
                    Find the right text, article, or decision in less than a
                    minute. Save up to 10 hours per week on your legal research.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <Button size="lg" className="group">
                    Try it now
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  </Button>

                  <Button variant="default" size="lg">
                    GitHub <Github className="h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-3xl">
                  <Image
                    src="/logo.png"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="resume" className="w-full py-12 md:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Technologies
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Technologies intégrées
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Nous exploitons des technologies avancées pour offrir une
                  assistance juridique AI performante et sécurisée.
                </motion.p>
              </div>
            </div>

            <MarqueeDemo />
          </motion.div>
        </section>

        <section className="w-full py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Features
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  What does irokolaw offer?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  We help legal professionals be more productive
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl items-center gap-3 py-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: <Gavel className="h-10 w-10 text-primary" />,
                  title: "Conseils Juridiques AI",
                  description:
                    "Obtenez des conseils juridiques instantanés et précis grâce à notre intelligence artificielle.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-primary" />,
                  title: "Support 24/7",
                  description:
                    "Accédez à une assistance juridique en direct à tout moment via notre chat intégré.",
                },
                {
                  icon: <FileText className="h-10 w-10 text-primary" />,
                  title: "Analyse de Documents",
                  description:
                    "Automatisez l'analyse de vos documents juridiques pour une gestion efficace.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "Sécurité Renforcée",
                  description:
                    "Protégez vos données avec un chiffrement de bout en bout et des contrôles d'accès.",
                },
                {
                  icon: <Folder className="h-10 w-10 text-primary" />,
                  title: "Gestion de Cas",
                  description:
                    "Organisez et suivez vos affaires juridiques avec notre plateforme intuitive.",
                },
                {
                  icon: <Video className="h-10 w-10 text-primary" />,
                  title: "Démonstration Vidéo",
                  description:
                    "Explorez les fonctionnalités via une démo vidéo dédiée au hackathon Google Gemma 3n.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md bg-background/80"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                  <div className="relative space-y-3">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 "
          >
            <div className="grid gap-3 lg:grid-cols-2 lg:gap-3">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 p-6"
              >
                <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Laws for everyone
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Lancé en 2025 pour le hackathon Google Gemma 3n Impact
                  Challenge, irokolaw est né de la volonté d’offrir une
                  assistance juridique AI accessible en Afrique, notamment en
                  Côte d&apos;Ivoire, pour transformer l&apos;accès à la
                  justice.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Notre approche allie intelligence artificielle, sécurité
                  robuste et expertise locale pour fournir des solutions
                  juridiques efficaces et abordables.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl">
                  <Image
                    src="/logo.png"
                    alt="Team Photo"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
            <div id="our-teams" className="mt-16 px-6 pb-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold tracking-tighter sm:text-3xl"
              >
                Meet Our Team
              </motion.h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 "
              >
                {[
                  {
                    name: "Melone Andy",
                    role: "Software Engineer",
                    img: "/logo.png",
                  },
                  {
                    name: "Sanga Ousmani",
                    role: "Software Engineer",
                    img: "/logo.png",
                  },
                  {
                    name: "Hans Ariel",
                    role: "Gen AI Engineer",
                    img: "/logo.png",
                  },
                  {
                    name: "Levi Yao",
                    role: "AI Engineer",
                    img: "/logo.png",
                  },
                  {
                    name: "Elias Gbane",
                    role: "Data Engineer",
                    img: "/logo.png",
                  },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    variants={itemFadeIn}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-3xl"
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                      <h4 className="font-bold">{member.name}</h4>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t">
        <div className="border-t">
          <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row md:py-0">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Design Studio. All rights
              reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Crafted with passion in New York City
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
