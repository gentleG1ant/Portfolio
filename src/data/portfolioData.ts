export const portfolioData = {
  personalInfo: {
    name: "Raj Aryan",
    title: "Aspiring Software Development Engineer | Machine Learning Engineer",
    location: "Bihar, India",
    email: "rajaryansubham52@gmail.com",
    phone: "+91 7050843652",
    careerObjective: "Fresher Computer Science postgraduate (MCA, BIT Mesra) with strong fundamentals in Data Structures, Algorithms, and OOP, seeking an entry-level opportunity in software development or machine learning.",
  },
  socials: {
    linkedIn: "https://linkedin.com/in/raj-aryan-dev",
    github: "https://github.com/gentleG1ant",
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C", "C++"],
    },
    {
      category: "Core Computer Science",
      items: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOPs)", "DBMS", "Operating Systems", "Computer Networks"],
    },
    {
      category: "Databases & Tools",
      items: ["SQL", "Git", "GitHub", "Jupyter Notebook", "VS Code", "IntelliJ"],
    },
    {
      category: "Data Science & Machine Learning",
      items: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Logistic Regression"],
    },
  ],
  projects: [
    {
      id: "resume-screening",
      title: "AI-Powered Resume Screening & Skill Matching System",
      status: "In Progress",
      summary: "Designed an NLP-based resume screening pipeline covering text preprocessing, feature extraction (TF-IDF), and skill matching.",
      details: "Implemented cosine similarity-based candidate scoring using Scikit-Learn and Pandas/NumPy to rank resumes against job requirements.",
      techStack: ["Python", "NLP", "Scikit-Learn", "TF-IDF", "Pandas", "NumPy"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      id: "crypto-stegano",
      title: "Secure Encryption & Decryption Using Cryptography and Steganography",
      status: "Completed",
      summary: "Built a two-layer data security system combining AES symmetric encryption with LSB-based image steganography.",
      details: "Implemented the pipeline (AES encryption -> Base64 encoding -> LSB pixel embedding -> stego image) with a reverse flow for extraction and decryption.",
      techStack: ["Python", "AES Encryption", "LSB Steganography", "Base64"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      id: "nursery-management",
      title: "Online Nursery Sales Management System",
      status: "Completed",
      summary: "Developed a CRUD-based web application to manage customer and order records for a nursery business.",
      details: "Built frontend forms integrated with backend logic to store and retrieve product/order data from a SQL database.",
      techStack: ["HTML", "CSS", "JavaScript", "SQL"],
      githubUrl: "",
      liveUrl: "",
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "BIT Mesra, Ranchi",
      year: "Ongoing",
      score: "",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Marwari College, Bhagalpur",
      year: "2025",
      score: "71.58%",
    },
  ],
  certifications: [
    {
      name: "DOEACC 'A' Level",
      year: "2026",
    },
    {
      name: "DOEACC 'O' Level",
      year: "2023",
    },
  ],
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]
};
