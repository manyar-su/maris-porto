import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "Tentang" },
  { id: "work", title: "Pengalaman" },
  { id: "contact", title: "Kontak" },
];

const services: TService[] = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend React / Next.js",
    icon: mobile,
  },
  {
    title: "Backend Node.js & API",
    icon: backend,
  },
  {
    title: "Website, Landing Page & Dashboard",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "Project UMKM & Landing Page Lokal",
    icon: web,
    iconBg: "#1d4ed8",
    date: "2018 - 2019",
    points: [
      "Membangun website profil usaha dan landing page promosi untuk kebutuhan bisnis lokal.",
      "Fokus pada UI responsif, kecepatan akses, dan tampilan profesional untuk meningkatkan kepercayaan pelanggan.",
      "Melakukan maintenance konten dan update berkala sesuai campaign penjualan.",
    ],
  },
  {
    title: "Frontend & System Developer",
    companyName: "Kolaborasi Website Bisnis Dalam Negeri",
    icon: mobile,
    iconBg: "#2563eb",
    date: "2020 - 2021",
    points: [
      "Mengembangkan halaman web interaktif dengan React serta integrasi API untuk kebutuhan operasional.",
      "Membantu digitalisasi alur kerja internal melalui dashboard berbasis web.",
      "Berkoordinasi dengan tim desain dan owner untuk memastikan user experience yang jelas.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "KPBS Mitra Ternak & Mitra Bisnis Lainnya",
    icon: backend,
    iconBg: "#0f172a",
    date: "2022 - 2024",
    points: [
      "Mengerjakan pengembangan website dan sistem pendukung bisnis sesuai kebutuhan perusahaan dalam negeri.",
      "Menangani frontend, backend API, serta deployment agar aplikasi siap digunakan tim operasional.",
      "Meningkatkan stabilitas sistem dan menyederhanakan proses kerja berbasis data.",
    ],
  },
  {
    title: "Open Hire Full Stack Web Developer",
    companyName: "Freelance & Contract Project",
    icon: creator,
    iconBg: "#16a34a",
    date: "2025 - Sekarang",
    points: [
      "Aktif mengerjakan project website, portfolio, dashboard KPI, dan workflow automation berbasis web.",
      "Menggunakan stack React / Next.js / Node.js untuk membangun solusi digital cepat dan scalable.",
      "Tersedia untuk Open Hire kapanpun (remote / on-site) untuk pengembangan sistem baru maupun peningkatan sistem yang sudah berjalan.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Maris mampu menerjemahkan kebutuhan bisnis menjadi website yang mudah dipakai tim kami. Pengerjaannya rapi dan cepat.",
    name: "Perwakilan Operasional",
    designation: "Tim Internal",
    company: "Perusahaan Dalam Negeri",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Komunikasi enak, revisi jelas, dan hasil akhirnya sesuai target promosi yang kami butuhkan.",
    name: "PIC Marketing",
    designation: "Marketing",
    company: "Mitra Bisnis Lokal",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Dari sisi teknis sampai deployment dibantu end-to-end. Cocok untuk project yang butuh eksekusi cepat.",
    name: "Owner Project",
    designation: "Business Owner",
    company: "Klien Web Development",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "MimoCanvas",
    description:
      "Kegunaan: platform kanvas digital interaktif untuk kebutuhan visual web. Base framework: Vue + Vite.",
    tags: [
      { name: "vue", color: "blue-text-gradient" },
      { name: "vite", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/manyar-su/MimoCanvas",
  },
  {
    name: "Bradwear Landing Page",
    description:
      "Kegunaan: landing page promosi apparel custom dengan fokus konversi lead. Base framework: HTML + CSS + JavaScript.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/manyar-su/bradwearLandingPage",
  },
  {
    name: "GenzToolz AI Influencer",
    description:
      "Kegunaan: toolkit kreator konten untuk workflow AI influencer. Base framework: TypeScript web app.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "ai-tools", color: "green-text-gradient" },
      { name: "web", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/manyar-su/GenzToolz-Ai-influencer",
  },
];

export { services, technologies, experiences, testimonials, projects };
