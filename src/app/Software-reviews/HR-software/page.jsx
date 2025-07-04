 "use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  CheckCircle2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  ExternalLink,
  Search,
  Filter,
  Star,
  Users,
  DollarSign,
  Clock,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function HRSoftwarePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [filterBy, setFilterBy] = useState("Reviews");
  const [sortBy, setSortBy] = useState("Featured");
  const [itemsPerPage, setItemsPerPage] = useState("10 per page");
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [openItems, setOpenItems] = useState({});
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "hr-software",
      title: "What is HR software?",
      active: false,
    },

    {
      id: "best-HR-software",
      title: "My picks for the best HR software",
      active: false,
    },
    {
      id: "honorable-mentions",
      title: "Honorable Mentions",
      active: false,
    },
    {
      id: "new-HR-software",
      title: "Find your new HR software",
      active: false,
    },

    {
      id: "how-to-choose",
      title: "How do you choose the best HR software?",
      active: false,
    },
    {
      id: "types-of-softwre",
      title: "What are the types of HR software?",
      active: false,
    },
    {
      id: "core-software",
      title: "Core HR software",
      active: false,
    },
    {
      id: "function-specific-software",
      title: "Function-specific HR software",
      active: false,
    },
    {
      id: "benefits",
      title: "What are the benefits of HR software?",
      active: false,
    },
  ]);

  const toggleSection = (sectionKey, labelKey = null) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));

    if (labelKey) {
      setActiveSection((prev) => (prev === sectionKey ? null : sectionKey));
      setOpenSection((prev) => (prev === labelKey ? null : labelKey));
    }

    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setTableOfContents((prev) =>
            prev.map((item) => ({
              ...item,
              active: item.id === sectionId,
            }))
          );
        }
      });
    };

    // Set initial active state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toolsContent = {
    ADP: {
      title: "ADP Workforce Now: Best overall",
      logo: "/images/ADP.jpeg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "3.9/5" },

        { label: "HRIS and reporting", score: "4.63/5" },
        { label: "Payroll and benefits", score: "4.38/5" },
        { label: "Pricing", score: "2.69/5" },
        { label: "Platform/interface", score: "3.80/5" },
        { label: "Workforce management", score: "4.13/5" },
        { label: "Talent acquisition", score: "4.0/5" },
        { label: "Employee relations", score: "3.66/5" },
        { label: "Support", score: "3.88/5" },
        { label: "User scores", score: "4.40/5" },
      ],
      pros: [
        "Narrative insights to assist with people data analysis.",
        "Optional HR advisory services for enhanced compliance.",
        "Extensive product line for fast-growing companies.",
        "Global payroll support for over 140 countries.",
      ],
      cons: [
        "Benefits administration is only available on the Plus plan and higher.",
        "Time and labor management is only available in the highest subscription tier.",
        "Several features, like recruiting, are powered through acquisitions or third-party partnerships.",
        "Users report slow customer service and turnaround times.",
      ],
      why: {
        intro: `ADP Workforce Now’s scalability makes it the king of HR software. It bridges the gap between simple human resources information systems (HRIS) and full-scale human capital management (HCM) platforms. In fact, ADP uses Workforce Now as the software to facilitate many of its optional services, like it’s PEO, TotalSource, and global payroll.`,
        body: `True, Workforce Now lost points for its hard-to-navigate interface and for forcing users to purchase its top plans for access to workforce management and benefits administration modules. Yet, ADP is making moves to make the software less clunky so that it is more accessible for small and large teams alike. For example, the addition of ADP Assist, its AI assistant is a huge improvement for finding information and streamlining HR processes.`,
        outro: `Workforce Now’s add-on modules, massive product and services catalog, and open API make it stand out among competitors. Choosing Workforce Now also reduces the likelihood of having to jump to a new solution in the future if you grow or shrink since the platform can accommodate your business shifts.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                ADP Workforce Now is an all-in-one human resources management
                system (HRMS) with a range of features to support the employee
                life cycle from recruitment to separation. Its business
                services, customization options, and extensive integration
                library make it the best HR software overall.
              </p>
              <p className="text-black">
                ADP Workforce Now’s 3.95 straddles the line between the needs of
                both small and large businesses. For example, small businesses
                can take advantage of its many HR services, including human
                resources outsourcing (HRO) or professional employer
                organization (PEO) and employers of record (EOR). Enterprises,
                meanwhile, will like its workforce analytics to help with
                strategic initiatives, like reducing turnover.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Breadth of integrations:
              </h4>
              <p className="text-black mb-4">
                ADP Workforce Now clients have access to ADP Marketplace. Here,
                you can find solutions to integrate with ADP Workforce Now and
                consolidate your data among your entire HR tech stack.
              </p>
              <p className="text-black mb-4">
                With integrations available for performance management, time
                tracking, employee engagement, recruiting, learning management,
                and financial wellness, you do not have to sacrifice the HR
                platforms you already use to start with ADP.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Robust payroll functionality
              </h4>
              <p className="text-black mb-4">
                ADP is well-known for its advanced payroll features. You can
                easily create multiple payroll schedules from ADP Workforce
                Now’s payroll dashboard to cover different employee
                classifications. Plus, once you finalize payroll, you can click
                a button and automatically prepare and download a general ledger
                file to upload into your accounting system ADP also accommodates
                more industry- or company-specific payroll needs. For example,
                if you’re a federal contractor, ADP can help you run certified
                payroll. Or, if you’re in a service industry like food or
                hospitality, ADP can calculate tip credits for your service
                staff to reduce the likelihood of payroll errors.
              </p>

              <h4 className="text-lg font-bold mb-2">Benchmarking:</h4>
              <p className="text-black">
                ADP Workforce Now is the only platform on my shortlist with
                benchmark information for understanding how your business
                compares to the competition. Using ADP’s U.S. client base of
                more than 42 million employees, you can see benchmark numbers in
                your industry and location for:
              </p>
              <ul className="list-disc pl-5 text-black">
                <li>
                  Creating fair and competitive total compensation packages.
                </li>
                <li>Comparing turnover rates.</li>
                <li>Tracking average time to fill in various roles.</li>
              </ul>
              <p className="text-black">
                Because Workforce Now offers this natively in-app with data that
                updates in real time, you don’t have to rely on third-party
                sources for this information—whether through integration or from
                outdated compensation survey reports. This is also a huge
                advantage if you’re a small business since access to this
                information is typically reserved for larger HCM platforms or
                requires manual input. For comparison, in Rippling, you need to
                add salary ranges by hand.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                ADP Workforce Now offers three subscription tiers to choose
                from: Select, Plus, and Premium. However, it does not reveal
                starting prices for any of its plans; you must contact ADP’s
                sales team for a quote.
              </p>
              <p className="font-bold  text-black mb-4">
                In my re-evaluation, Workforce Now’s pricing score dropped from
                3.13 to 2.69. This is in part due to the quote that I received,
                which revealed additional costs for HRIS implementation, your
                payroll schedule, and annual W2 and 1099s processing. For a
                business with 50 employees and a weekly pay schedule, ADP quoted
                me $8 per employee, per month (PEPM) plus $180 per month.
                There’s also a $500 implementation fee.
              </p>
              This means ADP can be slightly more expensive overall considering
              the fees for all of its services, such as check signing and
              delivery. Still, ADP is one of the only platforms to offer such
              expanded service options, so if this is a priority for you, going
              with Workforce Now is your best bet.
            </>
          ),
        },
      },
    },
    Deel: {
      title: "Deel: Best for startups",
      logo: "/images/deel.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "Overall Score", score: "3.64/5" },
        { label: "HRIS and reporting", score: "3.99/5" },
        { label: "Payroll and benefits", score: "4.31/5" },
        { label: "Pricing", score: "3.94/5" },
        { label: "Platform/interface", score: "4.30/5" },
        { label: "Workforce management", score: "3.45/5" },
        { label: "Talent acquisition", score: "0.88/5" },
        { label: "Employee relations", score: "3.66/5" },
        { label: "Support", score: "4.38/5" },
        { label: "User scores", score: "4.06/5" },
      ],
      pros: [
        "Immigration services to hire and relocate talent from across the globe.",
        "On-demand payroll support for direct and EOR employees.",
        "Light and dark mode functionality for increased accessibility.",
        "Diverse account payment options, including cryptocurrency using Coinbase.",
      ],
      cons: [
        "Difficult to navigate user interface (UI).",
        "Can only pay employees by direct deposit.",
        "Does not support weekly payroll schedules.",
        "Lacks recruiting features.",
      ],
      why: {
        intro: `Deel replaces my previous pick for the best HR software for startups, Gusto, by a narrow margin. Deel’s 3.64 beats Gusto’s 3.50 because of the former’s global capabilities that allow you to pay and retain employees worldwide. In fact, despite Gusto’s foray into EOR services in early 2024, it currently only supports 12 countries compared to Deel’s more than 150.`,
        body: `Deel’s platform is also better equipped to handle the challenges of fast-growing startups than others in this roundup. Need extra support services for your new business? Deel’s PEO, EOR, and U.S. Payroll services provide 24/7 support, a dedicated customer service manager, and white-glove benefits implementation. Need essential employee management tools? Use Deel HR for free to manage compliance, sign documents, and even get access to a basic employee time tracker.`,
        outro: `Need to complete HR operations without interrupting the flow of work? Use Deel’s Slack plugins to control everyday HR tasks, like requesting and approving time off. This is a much simpler solution if your startup has distributed teams working on various schedules.`,
        extras: {
          "About ": (
            <>
              <p className="text-black mb-4">
                Although Deel started as an EOR service provider similar to
                Oyster and Papaya Global, it’s exploded in recent years with the
                additions of its Deel HR, U.S. Payroll, Deel PEO, and Deel
                Engage products for more HR functionality. As a result, Deel is
                one of the top players in the HR system market, including heavy
                hitters like Rippling (with which it shares a rather
                entertaining rivalry).
              </p>
              <p className="text-black">
                However, because Deel started as an EOR, the core of its
                software aims to carry out global payroll and contract
                management in sync with its more than 100 international
                partners. This makes its platform somewhat confusing to navigate
                since its original purpose was to pull employee information from
                your onboarding platform or HRIS to facilitate global payroll.
              </p>
              <p className="text-black mb-4">
                Even with Deel HR’s more modern appearance, including a
                customizable homepage with widgets that mimic BambooHR, expect a
                bit of a learning curve. That said, its affordability,
                white-labeling, global capabilities, and workplace communication
                abilities give Deel a leg up for startups with scrappier HR
                teams who flow between administrators, employee advocates, and
                company marketers in the span of one afternoon.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">Contractor management:</h4>
              <p className="text-black mb-4">
                Deel isn’t unique when it comes to system features aimed at
                contractors. Gusto, for example, supports contractor payments in
                more than 120 countries. But I find Deel’s capabilities far more
                expansive and versatile.
              </p>
              <p classname="text-black mb-4">
                While Deel’s and Gusto’s contractor features are
                similar—step-by-step onboarding workflows, contract management,
                and in-app time trackers—Deel’s benefit offerings for
                contractors are more robust. For example, Deel offers 15 ways to
                pay contractors, including through its Deel Card. Gusto’s
                equivalent, the Gusto Wallet Spending account, is limited to
                direct employees.
              </p>
              <p classname="text-black mb-4">
                And, for a compliance nerd like myself, Deel’s the only vendor
                in my roundup with the contractor of record services to avoid
                the risk of worker misclassification. This is incredibly helpful
                for a startup where the line between contractor and employee is
                blurry and varies worldwide.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Tools for distributed teams:
              </h4>
              <p className="text-black mb-4">
                Deel used to be among my honorable mentions for its global
                capabilities. Unsurprisingly, these tools come in handy for
                startups where talent may be located across the globe and don’t
                work a normal nine-to-five. Some tools include its new
                time-tracking widget, overnight shift support, and mobile app
                with expense management.
              </p>
              <p className="text-black mb-4">
                But Deel’s Slack plugins, such as employee recognition, are my
                favorite tools for distributed teams. Slack allows for more
                free-flowing conversations between coworkers so that
                peer-to-peer recognition (“Kudos”) feels less like a chore and
                easier to offer in the moment—a critical component of building
                up company culture in your startup. Even better is that these
                plugins are free to use if you have Slack; you don’t need a Deel
                subscription.
              </p>
            </>
          ),
          Pricing: (
            <>
              <p className="text-black mb-4">
                You can start using Deel HR at the low price of free. You can
                also leverage other tools from Deel at no cost, including its
                Slack plugins (as long as you have a Slack subscription) and
                global employee cost calculator. This earned Deel a 3.94 in
                pricing, second only to Gusto’s 4.00. In fact, you can
                conceivably manage all your employee operations in Deel HR and
                do payroll yourself for the most cost savings, especially if you
                have fewer than 10 employees (although I wouldn’t recommend it
                if you’re new to payroll).
              </p>

              <p className="font-bold  text-black mb-4">
                However, if you want to start paying employees through Deel, it
                becomes expensive once you have more than three U.S.-based
                employees since you pay $19 PEPM. I’d turn to Gusto or other
                small business payroll software instead if you just need pay
                processing. But if you’re looking for global payroll support,
                either through your own entities or using an EOR, Deel’s pricing
                is one of the more competitive. Deel also frequently offers
                discounts if you decide to pay annually.
              </p>
            </>
          ),
        },
      },
    },
  };

  // Convert toolsContent object to array for mapping
  const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const coreData = [
    {
      question: "Human resources information system(HRIS)",
      answer: [
        "Human resources information systems (HRIS) offer a variety of capabilities for HR data management. The goal of these multi-function systems is to maintain individual employee data and handle the company’s regulatory and legal employment requirements.",
        "An HRIS stores key details about an organization’s workforce, including employees’ personal information, employment details, performance metrics, and compensation history. HRIS platforms can also act as a repository for important HR documents like employment contracts, tax forms, and policy guides.",
        "An HRIS can be a standalone product that integrates with other HR applications, or it can serve as a central database in an all-in-one HR software suite. At its core, an HRIS application focuses on optimizing processes associated with HR record-keeping and reporting.",
        "You can further divide HRIS into five types: operational, strategic, tactical, limited-function, and comprehensive HRIS. To learn more, check out Types of Human Resource Information Systems (HRIS).",
      ],
    },
    {
      question: "Human resources management system(HRMS)",
      answer: [
        "Human resources management systems (HRMS) focus on process optimization and cost efficiency. This type of software improves how an organization handles its HR processes by automating tasks and centralizing access to critical information.",
        "Many HRMS products extend the functionality of a traditional HRIS by including tools for payroll, benefits administration, recruiting, and performance management. Some HRMS also offer tools for more robust reporting and forecasting purposes, like succession planning and position control.",
      ],
    },
    {
      question: "Human Capital management (HCM) software",
      answer: [
        "Human capital management (HCM) software is often regarded as the largest umbrella in the HR software category. Most HCM solutions combine all of the functionalities of HRIS and HRMS platforms, plus additional features for employee engagement, learning management, and business intelligence. HCM software also offers advanced data analysis capabilities for business intelligence and HR process optimization.",
        "HCM software cultivates human capital by streamlining all HR functions and creating a holistic view of the employee lifecycle. This breadth allows companies to maximize the potential of their employees and their contributions to organizational performance. To that end, HCM software adds tactical and strategic HR features to keep employees engaged and motivated to work toward the company’s business goals.",
      ],
    },
  ];
  const functionData = [
    {
      question: "Recruiting",
      answer: [
        "Recruiting software, specifically applicant tracking systems (ATS), help hiring teams optimize the hiring process. It manages the entire recruitment process from beginning to end, from sourcing and screening candidates to extending job offers and onboarding new employees.",
        "ATS platforms manage information related to different candidates, allowing hiring managers to compare candidates against each other and choose the best one for the job. Many recruiting software suites include applicant tracking features in addition to candidate relationship management and workforce planning capabilities.",
      ],
    },
    {
      question: "Onboarding",
      answer: [
        "Onboarding software facilitates the process of introducing new hires to a company. It typically includes capabilities such as electronic signatures, pre-boarding checklists, and employee questionnaires.",
        "Effective onboarding platforms also include tools to help onboard onsite and remote employees, such as mobile and desktop support and customizable task assignments by role. That way, all necessary stakeholders timely complete their responsibilities to ensure a smooth employee onboarding experience.",
      ],
    },
    {
      question: "Payroll software",
      answer: [
        "Payroll software lets organizations track expenses, taxes, payouts, and schedules accurately. It also helps HR teams maintain compliance with labor and payroll regulations and analyze payroll data for discrepancies or inefficiencies. Organizations use payroll software to calculate, process, and record employee pay on time.",
        "Payroll software can also come in different sizes and shapes depending on worker classification, company industry, and where employees live and work. For example, you may choose a contractor payroll solution if you only employ contractors. If you employ workers internationally, you’ll want to research global payroll systems to handle competing pay laws by country.",
      ],
    },
    {
      question: "Performance management",
      answer: [
        "Performance management software enables organizations to assess employee skills, track goals, and monitor performance over time. Companies often use performance management software to coach employees and evaluate performance during formal reviews or through weekly pulse updates. It gives managers a clear view of employees’ growth and development in their roles.",
      ],
    },
    {
      question: "Employee management",
      answer: [
        "Employee engagement software helps companies understand employee sentiment over time and identify areas where the employee experience can improve. These systems offer survey tools, follow-up workflows, gamification, and analytics to understand how employees feel about their work. Employee feedback data is then consolidated and analyzed to produce actionable insights that can improve retention.",
      ],
    },
    {
      question: "Learning management systems(LMS)",
      answer: [
        "Learning management systems (LMS), or eLearning systems, help HR teams design, organize, and deliver employee training programs. These systems can evaluate employee skills, track active certifications, and identify opportunities for professional development.",
        "By incorporating this tool, HR can onboard new employees and keep tenured employees up to date with current industry knowledge standards. Moreover, LMS can optimize job and compliance training and learning and development.",
      ],
    },
  ];
  const hrData = [
    {
      id: 1,
      name: "ADP Workforce Now",
      image: "/images/ADP.jpeg",
      alt: "ADP Workforce Now",
      overallScore: 3.95,
      useFor: "Best overall",
      visitUrl: "ADP",
      startingPrice: "$8/employee/mo.*",
    },
    {
      id: 2,
      name: "Deel",
      image: "/images/deel.jpg",
      alt: "Deel",
      overallScore: 3.64,
      useFor: "Best for startups",
      visitUrl: "Deel",
      startingPrice: "$19/employee/mo.**",
    },
  ];

  const renderStars = (score) => {
    const stars = [];
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      );
    }

    return stars;
  };
// Fixed social sharing functions with proper description
const shareUrl = typeof window !== "undefined" ? window.location.href : "";
const shareTitle = "Best HR Software for 2025 | Complete Guide";
const shareDescription = "Comprehensive guide to choosing the best HR software for your business needs. Compare top HR platforms, features, and pricing to find the perfect solution for your company.";

const shareOnFacebook = () => {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    "_blank"
  );
};

const shareOnLinkedIn = () => {
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    "_blank"
  );
};

const shareOnTwitter = () => {
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle + " - " + shareDescription)}`,
    "_blank"
  );
};

// CORRECTED META TAGS - Replace your existing Head section with this:
return (
  <>
      <Head>
      <title>Best HR Software for 2025 | Complete Guide</title>
      
      {/* Standard meta tags */}
      <meta
        name="description"
        content="Comprehensive guide to choosing the best HR software for your business needs. Compare top HR platforms, features, and pricing to find the perfect solution for your company."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph meta tags for Facebook & LinkedIn */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Best HR Software for 2025 | Complete Guide" />
      <meta
        property="og:description"
        content="Comprehensive guide to choosing the best HR software for your business needs. Compare top HR platforms, features, and pricing to find the perfect solution for your company."
      />
      <meta
        property="og:image"
        content="https://blogs.compare-bazaar.com/images/blog3.webp"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:alt" content="Best HR Software Guide 2025" />
      <meta
        property="og:url"
        content="https://technology-advice.vercel.app/software-reviews/hr-software"
      />
      <meta property="og:site_name" content="Technology Advice" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best HR Software for 2025 | Complete Guide" />
      <meta
        name="twitter:description"
        content="Comprehensive guide to choosing the best HR software for your business needs. Compare top HR platforms, features, and pricing to find the perfect solution for your company."
      />
      <meta
        name="twitter:image"
        content="https://blogs.compare-bazaar.com/images/blog3.webp"
      />
      <meta name="twitter:image:alt" content="Best HR Software Guide 2025" />

      {/* Additional meta tags that might help */}
      <meta name="author" content="Jessica Dennis" />
      <meta name="article:author" content="Jessica Dennis" />
      <meta name="article:published_time" content="2025-01-31T00:00:00Z" />
      <meta name="article:modified_time" content="2025-04-25T00:00:00Z" />

      <link
        rel="canonical"
        href="https://technology-advice.vercel.app/software-reviews/hr-software"
      />
    </Head>



      <section id="hr-software">
        <div className="min-h-screen bg-[#0E1F1C] text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"></div>

          {/* Main content container */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            {/* Breadcrumb Navigation */}
            <nav
              className="pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-12 lg:pb-16"
              aria-label="Breadcrumb"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg">
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors group"
                  aria-label="Go to homepage"
                >
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Go to homepage"
                >
                  <span>Home</span>
                </Link>
                <span className="text-white/60">›</span>
                <span className="text-white font-medium">
                  Best Human Resources Software
                </span>
              </div>
            </nav>

            {/* Main Heading */}
            <div className="max-w-6xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
                Best Human Resources Software (Updated for April 2025)
              </h1>
            </div>

            {/* Author and Reviewer Section */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mb-8 sm:mb-12 lg:mb-16">
              {/* Author */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image
                    src="/images/HR.jpeg"
                    alt="Jessica Dennis- Writer"
                    fill
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-1">
                    Written by
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl font-semibold">
                    Jessica Dennis
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-1">
                    Lead Writer
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer Section */}
            <div className="max-w-4xl xl:max-w-5xl">
              <div className="flex items-start space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
                <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                  <p>
                    <span className="font-semibold text-white">
                      Technology Advice
                    </span>{" "}
                    is able to offer our services for free because some vendors
                    may pay us for web traffic or other sales opportunities. Our
                    mission is to help technology buyers make better purchasing
                    decisions, so we provide you with information for all
                    vendors — even those that don't pay us.
                  </p>
                </div>
              </div>
            </div>
            {/* lasted updated */}
            <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <span>Last Updated: April 25, 2025</span>
              </div>
            </div>
            {/* Publication Date */}
            <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
              <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <span>Published Date: January 31, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Table of Contents - Left Sidebar */}

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Left Sidebar */}
            <div className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
              <div
                className="bg-white rounded-4xl shadow-sm border border-gray-200 p-6"
                style={{ scrollBehavior: "smooth" }}
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block py-2 px-3 rounded-md text-sm transition-colors duration-200 ${
                        item.active
                          ? "bg-green-50 text-green-700 border-l-4 border-green-500 font-medium"
                          : "text-gray-600 hover:text-black hover:bg-gray-100"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                {/* Share Section */}
                <div className=" pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Share this article
                  </h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={shareOnFacebook}
                      className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}

            <div className="flex-1 max-w-4xl">
              <section id="hr-software">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      What is HR software?
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Human resources (HR) software systems unify
                      administration, recruitment, payroll, training, employee
                      engagement, performance management, and other essential HR
                      functions. This provides a secure database of employee
                      data and a centralized view of a company. It also helps HR
                      teams effectively manage each stage of the employee life
                      cycle.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-8">
                      The right HR software solution can help optimize processes
                      by automating manual tasks, organizing employee records,
                      and building data-driven reports. Moreover, advanced HR
                      software solutions enable better workforce planning,
                      financial forecasting, and strategic decision-making.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      I reviewed 13 human resources software solutions and
                      narrowed them down to the best of the best:
                    </p>

                    {/* Recommendations List */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            ADP Workforce Now
                          </a>{" "}
                          is the best HR software overall.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Deel
                          </a>{" "}
                          is the best HR software for startups.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            BambooHR
                          </a>{" "}
                          is the best HR software for small businesses.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Rippling
                          </a>{" "}
                          is the best HR software for midsize companies.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            SAP SuccessFactors HCM
                          </a>{" "}
                          is the best HR software for large enterprises.
                        </p>

                        <p className="text-gray-700">Honorable mentions:</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Paycor
                          </a>{" "}
                          is the best for companies with field and frontline
                          workers.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Paylocity
                          </a>{" "}
                          is the best for workforce management.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Gusto
                          </a>{" "}
                          is the best for new businesses in the U.S.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Featured Partners Section */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Featured partners
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Advertisement</span>
                    <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
                      <span className="text-white  font-bold">i</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex  space-x-2">
                        <div className="text-xl font-bold text-gray-900">
                          Keka
                          <br />
                          <span className="text-lg">HR</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Good For</div>
                      <div className="font-medium text-gray-900">
                        Medium sized companies
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        360 Degree Feedback, Applicant Tracking, Benefits
                        Administration, and 10 more
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        QuickBooks Online, Tally
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex  space-x-2">
                        <div className="text-xl font-bold text-gray-900">
                          Montitask
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Good For</div>
                      <div className="font-medium text-gray-900">
                        Any Company Size
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Core Features</div>
                      <div className="font-medium text-gray-900">
                        Employee Shift Scheduling, Self-Service Portal,
                        Time/Attendance Management, and 1 more
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">
                        Asana, Basecamp, ClickUp, and 10 more
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section id="best-HR-software" className="mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-8 sm:mb-12">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                  </div>

                  {/* Unified Table Layout for All Screen Sizes */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-full">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="text-left py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg"></th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Overall Score
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Use case
                            </th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Starting Price
                            </th>

                            <th className="text-center py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {hrData.map((hr, index) => (
                            <tr
                              key={hr.id}
                              className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                              }`}
                            >
                              <td className="py-4 sm:py-8 px-2 sm:px-8">
                                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                  <div className="w-16 h-8 sm:w-32 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img
                                      src={hr.image}
                                      alt={hr.alt}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div className="text-center sm:text-left">
                                    <span className="font-medium text-gray-800 text-xs sm:text-base">
                                      {hr.name}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                                  <span className="text-lg sm:text-2xl font-bold text-gray-800">
                                    {hr.overallScore}
                                  </span>
                                  <div className="flex space-x-1 scale-75 sm:scale-100">
                                    {renderStars(hr.overallScore)}
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                  {hr.useFor}
                                </span>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6">
                                <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                  {hr.startingPrice}
                                </span>
                              </td>

                              <td className="py-4 sm:py-8 px-2 sm:px-8">
                                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 px-3 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 flex items-center space-x-1 sm:space-x-2 mx-auto text-xs sm:text-sm">
                                  <span>Visit Website</span>
                                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <p className="text-gray-600 text-sm">
                      Pricing across all featured human resources software
                      providers are up to date (April 25, 2025). *Based on a
                      quote I received. ADP Workforce Now charges additional
                      fees based on your payroll schedule and add-on services
                      like check printing, signing, and delivery. For a weekly
                      payroll schedule, ADP quoted me an additional $180 per
                      month and $500 implementation fee.
                    </p>
                  </div>
                </div>
              </section>
              {/* what are best project management tools */}

              {/* Common Heading

                <h1 className="text-3xl font-bold mt-4 text-black mb-2">
                  What is the best project management software?
                </h1>
                <p className="text-gray-700 mt-2">
                  Here are our top recommendations for project management
                  software in 2025.
                </p> */}

              {/* Map through the tools array */}
              {toolsArray.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border mt-4  border-gray-200  p-6 mb-8"
                >
                  {/* Tool Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Image
                          src={tool.logo}
                          alt={`${tool.title} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-black">
                        {tool.title}
                      </h2>
                    </div>
                    <a
                      href={tool.button.link}
                      className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
                    >
                      {tool.button.text}
                    </a>
                  </div>

                  {/* Scores */}
                  <div className="space-y-4 text-black mb-6">
                    {tool.scores.map((score, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm font-medium mb-1">
                          <span>{score.label}</span>
                          <span>{score.score}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{
                              width: `${(parseFloat(score.score) / 5) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid md:grid-cols-2 text-black gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Pros</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {tool.pros.map((pro, index) => (
                          <li key={index}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Cons</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {tool.cons.map((con, index) => (
                          <li key={index}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Why I Chose Section */}
                  <div className="mb-6 text-black">
                    <h3 className="text-lg font-semibold mb-2">
                      Why I chose {tool.title.split(":")[0]}
                    </h3>
                    <p className="mb-4">{tool.why.intro}</p>
                    {tool.why.bullets && (
                      <ul className="list-disc pl-5 space-y-1 mb-4">
                        {tool.why.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    <p>{tool.why.outro}</p>
                  </div>

                  {/* Expandable Sections */}
                  {tool.why.extras &&
                    Object.entries(tool.why.extras).map(([label, content]) => {
                      const sectionKey = `${tool.id}-${label}`;
                      return (
                        <div
                          key={sectionKey}
                          className="border-t text-black pt-4 mb-4"
                        >
                          <button
                            onClick={() => toggleSection(sectionKey)}
                            className="w-full flex justify-between items-center font-medium"
                          >
                            <span>{label}</span>
                            <span className="text-green-600">
                              {openSections[sectionKey] ? (
                                <Minus className="w-5 h-5" />
                              ) : (
                                <Plus className="w-5 h-5" />
                              )}
                            </span>
                          </button>
                          {openSections[sectionKey] && (
                            <div className="mt-2 text-gray-700">
                              {typeof content === "string" ? (
                                <p>{content}</p>
                              ) : (
                                content
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              ))}

              <section id="honorable-mentions">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  
                   
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                     <div className="px-4 sm:px-6 py-4 sm:py-5">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                        Honorable mentions
                      </h2>
                      <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                        HR software is a broad and segmented product category.
                        Below are some runners-up that I think performed well in
                        specific categories and may better suit your business
                        needs.
                      </p>
                    </div>
                    {/* Payroll Card */}
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-5 lg:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
                        {/* Left Column */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
                            <div>
                              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                                Payroll: Best for companies with field and
                                frontline workers
                              </h3>
                              <p className="text-sm text-gray-600">
                                Alternative for:{" "}
                                <span className="font-medium">
                                  Rippling and BambooHR
                                </span>
                              </p>
                            </div>
                            <Link
                              href="#"
                              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
                            >
                              Visit Website
                              <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                            </Link>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm text-gray-600 mb-2">
                              Overall score:{" "}
                              <span className="font-semibold text-gray-900">
                                4.83/5.00
                              </span>
                            </p>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < 4 ? "text-green-500" : "text-gray-300"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                When to choose Payroll
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                Payroll returns to my honorable mentions list in
                                2024 for its competitive pricing and feature
                                set. Although both Payroll and Paylocity offer
                                similar features and services, Payroll takes the
                                lead with a slightly more intuitive interface.
                              </p>
                              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                                I'm fond of Payroll's mobile and tablet kiosk
                                apps, which provide multiple options for
                                frontline and field workers to keep track of
                                their HR records and work time. Payroll is also
                                the only one in my roundup that allows managers
                                to track employee locations in real-time, which
                                is great for jobsites employees whose work
                                locations change daily. Fair this with Payroll's
                                badge, PIN, biometric, or telephonic timeclock
                                hardware for stronger time management processes,
                                especially in locations like restaurants and
                                manufacturing.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                Why it didn't make the list
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                Payroll is a much more robust software platform
                                than what I need for this comparison. Most data
                                is still formalized like old-school
                                spreadsheets, increasing the learning curve for
                                most businesses. For example, its pay grid for
                                payroll processing and significantly speed up
                                payroll processing for advanced users but can be
                                very confusing if you're unfamiliar with payroll
                                software.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* find your prodoct management software */}
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 p-6 sm:p-8 transition-shadow duration-300 overflow-hidden">
                {/* Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                    Find your new HR software
                  </h2>
                </div>

                {/* Filter Products & Search Section */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8 border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Filter Products */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Filter className="w-4 h-4 text-blue-600" />
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Filter Products
                        </h3>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white/70 hover:bg-white group-hover:shadow-md"
                        />
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Search className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Products Search */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-2 mb-3">
                        <Search className="w-4 h-4 text-green-600" />
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                          Search Products
                        </h3>
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Search product name"
                          value={productSearch}
                          onChange={(e) => setProductSearch(e.target.value)}
                          className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-300 bg-white/70 hover:bg-white group-hover:shadow-md text-lg"
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <Search className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter Controls */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Filter by */}
                  <div className="group">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Filter by
                      </h3>
                    </div>
                    <div className="relative">
                      <select
                        value={filterBy}
                        onChange={(e) => setFilterBy(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
                      >
                        <option>Reviews</option>
                        <option>Pricing</option>
                        <option>Company Size</option>
                        <option>Features</option>
                        <option>Industry</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Sort by */}
                  <div className="group">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Sort by
                      </h3>
                    </div>
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
                      >
                        <option>Featured</option>
                        <option>Most Reviews</option>
                        <option>Highest Rated</option>
                        <option>Lowest Price</option>
                        <option>Most Popular</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Items per page */}
                  <div className="group">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-indigo-500" />
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        Items per page
                      </h3>
                    </div>
                    <div className="relative">
                      <select
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 bg-white/70 hover:bg-white appearance-none cursor-pointer group-hover:shadow-md"
                      >
                        <option>10 per page</option>
                        <option>25 per page</option>
                        <option>50 per page</option>
                        <option>100 per page</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
              {/* keka HR details */}
              <section id="new-HR-software" className="mt-8">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/keka.png" // Replace with your actual logo path
                            alt="keka HR Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Keka HR
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Medium (250-999 Employees),
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        A true employee experience platform, Keka is the SME HR
                        Tech space leader in India. It enables businesses to put
                        to sleep mundane and tedious tasks of workplace
                        administration. The product helps organisations in
                        managing their HR processes from hire to retire while
                        ensuring an awesome user experience to the employees.
                        Keka follows an employee-first approach, making it
                        easier for any company to make the journey from good to
                        great.
                      </p>

                      <Link
                        href="/learn-more/keka"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Keka HR
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.keka.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Montitask details */}
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  <div className="p-6  md:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/montitask.png" // Replace with your actual logo path
                            alt="Montitask Logo"
                            width={80}
                            height={80}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                            priority
                          />
                        </div>

                        {/* Title and Review Link */}
                        <div className="min-w-0 flex-1">
                          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Montitask
                          </h1>
                          <Link
                            href="/reviews/zoho-projects"
                            className="text-sm sm:text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                          >
                            Leave a Review
                          </Link>
                        </div>
                      </div>

                      {/* Compare Button */}
                      <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Good For Section */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
                        <span className="font-semibold text-gray-700">
                          Good for:
                        </span>
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-gray-600">
                            Micro (0-49 Employees),
                          </span>
                          <span className="text-gray-600">
                            Medium (250-999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Enterprise (5,000+ Employees),
                          </span>
                          <span className="text-gray-600">
                            Large (1,000-4,999 Employees),
                          </span>
                          <span className="text-gray-600">
                            Small (50-249 Employees),
                          </span>
                          <span className="text-gray-600">
                            Any Company Size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                        Optimize your team's performance with Monitask—your
                        comprehensive employee monitoring and productivity
                        tracking solution. Our real-time dashboard delivers
                        actionable insights that empower managers to streamline
                        task management and boost efficiency across both remote
                        and in-office teams. Discover clear, data-driven results
                        that transform workforce productivity. Click now to
                        learn how Monitask can elevate your operational success.
                      </p>

                      <Link
                        href="/learn-more/montitask"
                        className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                      >
                        Learn More About Montitask
                      </Link>
                    </div>

                    {/* Visit Website Button */}
                    <div className="flex justify-end">
                      <Link
                        href="https://www.montitask.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm sm:text-base md:text-lg rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* How do you choose the best HR software Section */}
              <section id="how-to-choose" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    How do you choose the best HR software?
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg  text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      “When selecting HR software, consider your business size,
                      budget, day-to-day HR processes, and company goals. It’s
                      crucial to have software that can manage compliance
                      obligations, such as payroll and benefits administration.
                      This software often comes with pre-built safeguards that
                      limit labor law violations and prevent data entry errors,
                      making it a must-have for your business.
                    </p>
                  </div>

                  {/* Second Paragraph with Links */}
                  <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      That doesn’t mean HR processes like recruitment,
                      retention, and employee performance and development are
                      less important. Your organization should still have
                      procedures to support these key areas. As your business
                      grows, you’ll likely add HR software to cover these
                      functions to improve process efficiency and access data
                      insights that aid in effective workforce planning.”
                    </p>
                  </div>


                <section id="types-of-softwre">
                  <div>
                    {/* What are the types of HR software? */}

                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      What are the types of HR software?
                    </h1>

                    {/*Contact management Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      There are three main categories of HR software: HRIS,
                      HRMS, and HCM. Although they are often used
                      interchangeably, there are several technical differences
                      between them. Some HR software also focuses on specific
                      human resources functions, like recruiting, onboarding,
                      payroll, benefits administration, performance management,
                      employee engagement, and learning management.
                    </p>
                  </div>

                  </section>
                  {/*Core HR software */}
                  <section
                    id="core-software"
                    className="mt-8 max-w-7xl mx-auto"
                  >
                    <div className="max-w-none">
                      {/* Main Heading */}
                      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                        Core HR software
                      </h1>

                      {/* FAQ Accordion */}
                      <div className="space-y-0 -mt-8">
                        {coreData.map((item, index) => (
                          <div key={index} className="border-b border-gray-200">
                            {/* Question Button */}
                            <button
                              onClick={() => toggleItem(index)}
                              className="w-full flex items-center justify-between py-6 sm:py-7 md:py-8 lg:py-9 text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-700 leading-relaxed pr-4 sm:pr-6 md:pr-8">
                                {item.question}
                              </h3>

                              {/* Plus/Minus Icon */}
                              <div
                                className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${
                                  openItems[index]
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-green-600 hover:bg-green-700"
                                }`}
                              >
                                {openItems[index] ? (
                                  <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                ) : (
                                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                )}
                              </div>
                            </button>

                            {/* Answer Content */}
                            {openItems[index] && (
                              <div className="pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  {/*Function-specific HR software */}
                  <section
                    id="function-specific-software"
                    className="mt-8 max-w-7xl mx-auto"
                  >
                    <div className="max-w-none">
                      {/* Main Heading */}
                      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                        Function-specific HR software
                      </h1>

                      {/* FAQ Accordion */}
                      <div className="space-y-0 -mt-8">
                        {functionData.map((item, index) => (
                          <div key={index} className="border-b border-gray-200">
                            {/* Question Button */}
                            <button
                              onClick={() => toggleItem(index)}
                              className="w-full flex items-center justify-between py-6 sm:py-7 md:py-8 lg:py-9 text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                              <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-700 leading-relaxed pr-4 sm:pr-6 md:pr-8">
                                {item.question}
                              </h3>

                              {/* Plus/Minus Icon */}
                              <div
                                className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${
                                  openItems[index]
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-green-600 hover:bg-green-700"
                                }`}
                              >
                                {openItems[index] ? (
                                  <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                ) : (
                                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                )}
                              </div>
                            </button>

                            {/* Answer Content */}
                            {openItems[index] && (
                              <div className="pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </section>
              {/* What are the benefits of HR software?*/}
              <section id="benefits" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    What are the benefits of HR software?
                  </h1>

                  {/* First Paragraph */}
                  <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      HR software solutions offer businesses a number of
                      advantages, including increased efficiency, consistent
                      compliance, and deeper reporting capabilities.
                    </p>
                  </div>
                  {/* Efficiency Section */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Efficiency
                    </h2>

                    {/*  Efficiency Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      Many HR software solutions include automation capabilities
                      that drive the efficiency of different HR processes. When
                      HR staff can spend less time on repetitive, manual tasks,
                      they are able to focus on more valuable priorities.
                      Additionally, HR software provides employees with direct
                      access to the services employees need most so they can
                      complete tasks like direct deposit updates or benefits
                      enrollment independently.
                    </p>
                  </div>
                </div>
                <div>
                  {/* Compliance Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Compliance
                  </h2>

                  {/* Compliance Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Compliance with HR-related laws and regulations is usually
                    non-negotiable because of the costly penalties associated
                    with violations. HR software helps organizations stay in
                    compliance with current local, state, federal, and
                    international laws, as well as industry-specific
                    regulations. Typically, this manifests as built-in time and
                    pay compliance warnings, legally mandated paperwork
                    tracking, news on laws affecting your workforce, and access
                    to HR best practices documents.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}