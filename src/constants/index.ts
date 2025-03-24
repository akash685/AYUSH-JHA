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
  powerBI,
  tableau,
  sdlc,
  excel,
  sql,
  sap,
  jira,
  python,
  airtel,
  greatway,
  fraudSystem,
  biDashboard,
  revenueAutomation,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Data Analysis",
    icon: web,
  },
  {
    title: "Fraud Detection",
    icon: mobile,
  },
  {
    title: "Business Intelligence",
    icon: backend,
  },
  {
    title: "Process Automation",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Power BI",
    icon: powerBI
  },
  {
    name: "Tableau",
    icon: tableau
  },
  {
    name: "Excel/VBA",
    icon: excel,
  },
  {
    name: "SDLC",
    icon: sdlc,
  },
  {
    name: "SQL/MySQL",
    icon: sql,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "SAP FI-CO",
    icon: sap,
  },
  
  {
    name: "JIRA",
    icon: jira,
  },
];

const experiences: TExperience[] = [
  {
    title: "Fraud Analyst",
    companyName: "Airtel",
    icon: airtel,
    iconBg: "#E40000",
    date: "September 2023 - Present",
    points: [
      "Automated IR reports for data visualization utilizing Power Query, resulting in a 35% increase in reporting efficiency.",
      "Optimized live trackers and workflows with advanced Excel (VBA, Macro) and Oracle (SQL), enhancing process efficiency by 40%.",
      "Achieved a 50% improvement in fraud detection accuracy and a 28% reduction in fraud incidents through the implementation of sophisticated analytics tools.",
      "Successfully resolved over 3,000 fraud cases within strict deadlines, demonstrating exceptional problem-solving skills and efficiency.",
      "Delivered a revenue impact of savings worth ₹2 crore through the strategic automation of fraud detection processes."
    ],
  },
  {
    title: "Data Analyst",
    companyName: "Greateway Software PVT.LTD",
    icon: greatway,
    iconBg: "#FFFFFF",
    date: "January 2023 - June 2023",
    points: [
      "Developed interactive dashboards and reports using Power BI, providing real-time insights for stakeholders and enhancing data-driven decision-making.",
      "Conducted data validation and quality checks to ensure accuracy and reliability, identifying discrepancies and implementing corrective measures.",
      "Developed and maintained KPI to measure and track the effectiveness of business operations.",
      "Designed and implemented custom DAX formulas to automate complex calculations, reducing manual effort by 30% and improving overall data accuracy.",
      "Contributed to the creation of a comprehensive data dictionary that improved team understanding of available data sources and metrics."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "AYUSH demonstrated exceptional analytical skills and a keen ability to detect fraud patterns that others missed.",
    name: "Team Lead",
    designation: "Manager",
    company: "Airtel",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "The automation solutions developed by AYUSH transformed our reporting processes and saved countless hours of manual work.",
    name: "Project Manager",
    designation: "Director",
    company: "Greateway Software",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Fraud Detection System",
    description:
      "Developed an automated system to detect and analyze call anomalies, reducing manual intervention and improving response times by 25%. Implemented SQL queries to monitor suspicious calling patterns in real-time.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "Power Query",
        color: "green-text-gradient",
      },
      {
        name: "Excel VBA",
        color: "pink-text-gradient",
      },
    ],
    image: fraudSystem,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Business Intelligence Dashboard",
    description:
      "Created dynamic dashboards and reports to visualize fraud trends and business metrics, providing actionable insights to stakeholders. Implemented custom DAX formulas for complex calculations.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
      {
        name: "DAX",
        color: "pink-text-gradient",
      },
    ],
    image: biDashboard,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Revenue Assurance Automation",
    description:
      "Implemented automation in CDR trend analysis, KPI monitoring, and detection systems using SQL, Power Query, and VBA scripts, leading to a 45% reduction in manual intervention and ₹2 crore in revenue savings.",
    tags: [
      {
        name: "Automation",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
      {
        name: "Process Optimization",
        color: "pink-text-gradient",
      },
    ],
    image: revenueAutomation,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
