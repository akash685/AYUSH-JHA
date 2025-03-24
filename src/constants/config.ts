type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

// ... existing code ...
export const config: TConfig = {
  html: {
    title: "AYUSH JHA — Data & Fraud Analyst",
    fullName: "AYUSH JHA",
    email: "Ayushdjha@gmail.com", // Updated email
  },
  hero: {
    name: "AYUSH JHA",
    p: ["Data & Fraud Analyst", "Business Intelligence Professional"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Analyst with strong expertise in data analysis, process optimization, and project
      management. Skilled in leveraging Excel, Power Query, SQL, Tableau, Power BI, Python,
      and SAP to derive actionable business insights. Proven ability to enhance decision-making 
      and drive operational efficiency through advanced analytics and reporting. Currently working
      as a Fraud Analyst at Airtel where I've achieved a 50% improvement in fraud detection accuracy
      and delivered revenue savings worth ₹2 crore through automation.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `My portfolio showcases my expertise in data analysis, visualization, and fraud detection.
      Each project demonstrates my ability to solve complex problems using tools like Power BI, Excel,
      SQL, and Python. My work reflects my capability to enhance decision-making processes, optimize
      operations, and deliver significant business value through advanced analytics and automation.`,
    },
  },
};