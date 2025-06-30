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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Hr() {
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
      id: "what-is-HR-software?",
      title: "What is HR software?",
      active: false,
    },
    {
      id: "My picks for the best HR software",
      title: "My picks for the best HR software",
      active: false,
    },
    {
      id: "ADP Workforce Now: Best overall",
      title: "ADP Workforce Now: Best overall",
      active: false,
    },
    {
      id: "Deel: Best for startups",
      title: "Deel: Best for startups",
      active: false,
    },
    {
      id: "BambooHR: Best for small businesses",
      title: "BambooHR: Best for small businesses",
      active: false,
    },
    {
      id: "Rippling: Best for midsize businesses",
      title: "Rippling: Best for midsize businesses",
      active: false,
    },
    {
      id: "SAP SuccessFactors HCM: Best for large enterprises",
      title: "SAP SuccessFactors HCM: Best for large enterprises",
      active: false,
    },
    { id: "payroll-faqs", title: "Payroll software FAQs", active: false },
    {
      id: "Honorable mentions",
      title: "Honorable mentions",
      active: false,
    },
    {
      id: "Find your new HR software",
      title: "Find your new HR software",
      active: false,
    }, 
    {
      id: "How do you choose the best HR software?",
      title: "How do you choose the best HR software?",
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
      setOpenSections((prev) => ({
        ...prev,
        [labelKey]: !prev[labelKey]
      }));
    }
    
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
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
    "ADP Workforce Now": {
      title: "ADP Workforce Now: Best overall",
      logo: "/images/adp.gif",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User scores", score: "4.64/5" },
        { label: "Pricing", score: "4.06/5" },
        { label: "Employee relations", score: "4/5" },
        { label: "Platform and interface", score: "4.23/5" },
        { label: "HRIS and reporting", score: "4.63/5" },
        { label: "Workforce management", score: "4.56/5" },
        { label: "Payroll and benefits", score: "4.15/5" },
      ],
      pros: [
        "Narrative insights to assist with people data analysis.",
        "Optional HR advisory services for enhanced compliance.",
        "Extensive product line for fast-growing companies.",
        "Global payroll support for over 140 countries."
      ],
      cons: [
        "Benefits administration is only available on the Plus plan and higher.",
        "Time and labor management is only available in the highest subscription tier.",
        "Several features, like recruiting, are powered through acquisitions or third-party partnerships.",
        "Users report slow customer service and turnaround times."
      ],
      why: {
        intro: "ADP Workforce Now's scalability makes it the king of HR software. It bridges the gap between simple human resources information systems (HRIS) and full-scale human capital management (HCM) platforms. In fact, ADP uses Workforce Now as the software to facilitate many of its optional services, like it's PEO, TotalSource, and global payroll.",
        bullets: [
          "True, Workforce Now lost points for its hard-to-navigate interface and for forcing users to purchase its top plans for access to workforce management and benefits administration modules. Yet, ADP is making moves to make the software less clunky so that it is more accessible for small and large teams alike. For example, the addition of ADP Assist, its AI assistant is a huge improvement for finding information and streamlining HR processes.",
        ],
        outro: "Workforce Now's add-on modules, massive product and services catalog, and open API make it stand out among competitors. Choosing Workforce Now also reduces the likelihood of having to jump to a new solution in the future if you grow or shrink since the platform can accommodate your business shifts.",
        extras: {
          "About ADP Workforce Now": (
            <>
              <p className="text-black mb-4">
                ADP Workforce Now is an all-in-one human resources management system (HRMS) with a range of features to support the employee life cycle from recruitment to separation. Its business services, customization options, and extensive integration library make it the best HR software overall.
              </p>
              <p className="text-black">
                ADP Workforce Now's 3.95 straddles the line between the needs of both small and large businesses. For example, small businesses can take advantage of its many HR services, including human resources outsourcing (HRO) or professional employer organization (PEO) and employers of record (EOR). Enterprises, meanwhile, will like its workforce analytics to help with strategic initiatives, like reducing turnover.
              </p>
              <p className="text-black">
                Be aware though: ADP Workforce Now is a legacy system, meaning that its interface is more old-fashioned than platforms like BambooHR. Setting up a new hire can also be tedious since that number of customization options means jumping through several steps before the new employee can complete the onboarding workflow. But this is more of a minor inconvenience if you have unique process cadences, reporting, or payroll needs.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Breadth of integrations
              </h4>
              <p className="text-black mb-4">
                ADP Workforce Now clients have access to ADP Marketplace. Here, you can find solutions to integrate with ADP Workforce Now and consolidate your data among your entire HR tech stack
              </p>
              <p className="text-black mb-4">
                With integrations available for performance management, time tracking, employee engagement, recruiting, learning management, and financial wellness, you do not have to sacrifice the HR platforms you already use to start with ADP.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Robust payroll functionality
              </h4>
              <p className="text-black">
                ADP is well-known for its advanced payroll features. You can easily create multiple payroll schedules from ADP Workforce Now's payroll dashboard to cover different employee classifications. Plus, once you finalize payroll, you can click a button and automatically prepare and download a general ledger file to upload into your accounting system ADP also accommodates more industry- or company-specific payroll needs. For example, if you're a federal contractor, ADP can help you run certified payroll. Or, if you're in a service industry like food or hospitality, ADP can calculate tip credits for your service staff to reduce the likelihood of payroll errors.
              </p>
            </>
          ),
          "Pricing": (
            <>
              <p className="text-black mb-4">
                ADP Workforce Now offers three subscription tiers to choose from: Select, Plus, and Premium. However, it does not reveal starting prices for any of its plans; you must contact ADP's sales team for a quote.
                In my re-evaluation, Workforce Now's pricing score dropped from 3.13 to 2.69. This is in part due to the quote that I received, which revealed additional costs for HRIS implementation, your payroll schedule, and annual W2 and 1099s processing. For a business with 50 employees and a weekly pay schedule, ADP quoted me $8 per employee, per month (PEPM) plus $180 per month. There's also a $500 implementation fee.
                This means ADP can be slightly more expensive overall considering the fees for all of its services, such as check signing and delivery. Still, ADP is one of the only platforms to offer such expanded service options, so if this is a priority for you, going with Workforce Now is your best bet.
              </p>
            </>
          ),
        },
      },
    },
    "Deel": {
      title: "Deel: Best for startups",
      logo: "/images/deel.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User scores", score: "4.64/5" },
        { label: "Pricing", score: "4.06/5" },
        { label: "Employee relations", score: "4/5" },
        { label: "Platform and interface", score: "4.23/5" },
        { label: "HRIS and reporting", score: "4.63/5" },
        { label: "Workforce management", score: "4.56/5" },
        { label: "Payroll and benefits", score: "4.15/5" },
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
        intro: "Deel replaces my previous pick for the best HR software for startups, Gusto, by a narrow margin. Deel's 3.64 beats Gusto's 3.50 because of the former's global capabilities that allow you to pay and retain employees worldwide. In fact, despite Gusto's foray into EOR services in early 2024, it currently only supports 12 countries compared to Deel's more than 150.",
        outro: `Deel's platform is also better equipped to handle the challenges of fast-growing startups than others in this roundup. Need extra support services for your new business? Deel's PEO, EOR, and U.S. Payroll services provide 24/7 support, a dedicated customer service manager, and white-glove benefits implementation. Need essential employee management tools? Use Deel HR for free to manage compliance, sign documents, and even get access to a basic employee time tracker.

Need to complete HR operations without interrupting the flow of work? Use Deel's Slack plugins to control everyday HR tasks, like requesting and approving time off. This is a much simpler solution if your startup has distributed teams working on various schedules.`,
        extras: {
          "About Deel": (
            <>
              <p className="text-black mb-4">
                Although Deel started as an EOR service provider similar to Oyster and Papaya Global, it's exploded in recent years with the additions of its Deel HR, U.S. Payroll, Deel PEO, and Deel Engage products for more HR functionality. As a result, Deel is one of the top players in the HR system market, including heavy hitters like Rippling (with which it shares a rather entertaining rivalry).
              </p>
              <p className="text-black">
                However, because Deel started as an EOR, the core of its software aims to carry out global payroll and contract management in sync with its more than 100 international partners. This makes its platform somewhat confusing to navigate since its original purpose was to pull employee information from your onboarding platform or HRIS to facilitate global payroll.
              </p>
              <p className="text-black mb-4">
                Even with Deel HR's more modern appearance, including a customizable homepage with widgets that mimic BambooHR, expect a bit of a learning curve. That said, its affordability, white-labeling, global capabilities, and workplace communication abilities give Deel a leg up for startups with scrappier HR teams who flow between administrators, employee advocates, and company marketers in the span of one afternoon.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Contractor management
              </h4>
              <p className="text-black mb-4">
                Deel isn't unique when it comes to system features aimed at contractors. Gusto, for example, supports contractor payments in more than 120 countries. But I find Deel's capabilities far more expansive and versatile.
              </p>
              <p className="text-black mb-4">
                While Deel's and Gusto's contractor features are similar—step-by-step onboarding workflows, contract management, and in-app time trackers—Deel's benefit offerings for contractors are more robust. For example, Deel offers 15 ways to pay contractors, including through its Deel Card. Gusto's equivalent, the Gusto Wallet Spending account, is limited to direct employees.
              </p>
              <p className="text-black mb-4">
                And, for a compliance nerd like myself, Deel's the only vendor in my roundup with the contractor of record services to avoid the risk of worker misclassification. This is incredibly helpful for a startup where the line between contractor and employee is blurry and varies worldwide.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Tools for distributed teams
              </h4>
              <p className="text-black">
                Deel used to be among my honorable mentions for its global capabilities. Unsurprisingly, these tools come in handy for startups where talent may be located across the globe and don't work a normal nine-to-five. Some tools include its new time-tracking widget, overnight shift support, and mobile app with expense management.
              </p>
              <p className="text-black">
                But Deel's Slack plugins, such as employee recognition, are my favorite tools for distributed teams. Slack allows for more free-flowing conversations between coworkers so that peer-to-peer recognition ("Kudos") feels less like a chore and easier to offer in the moment—a critical component of building up company culture in your startup. Even better is that these plugins are free to use if you have Slack; you don't need a Deel subscription.
              </p>
            </>
          ),
          "Pricing": (
            <>
              <p className="text-black mb-4">
                You can start using Deel HR at the low price of free. You can also leverage other tools from Deel at no cost, including its Slack plugins (as long as you have a Slack subscription) and global employee cost calculator. This earned Deel a 3.94 in pricing, second only to Gusto's 4.00. In fact, you can conceivably manage all your employee operations in Deel HR and do payroll yourself for the most cost savings, especially if you have fewer than 10 employees (although I wouldn't recommend it if you're new to payroll).
              </p>
              <p className="text-black mb-4">
                However, if you want to start paying employees through Deel, it becomes expensive once you have more than three U.S.-based employees since you pay $19 PEPM. I'd turn to Gusto or other small business payroll software instead if you just need pay processing. But if you're looking for global payroll support, either through your own entities or using an EOR, Deel's pricing is one of the more competitive. Deel also frequently offers discounts if you decide to pay annually.
              </p>
            </>
          ),
        },
      },
    },
    "BambooHR": {
      title: "BambooHR: Best for small businesses",
      logo: "/images/bamboohr1.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User scores", score: "4.64/5" },
        { label: "Pricing", score: "4.06/5" },
        { label: "Employee relations", score: "4/5" },
        { label: "Platform and interface", score: "4.23/5" },
        { label: "HRIS and reporting", score: "4.63/5" },
        { label: "Workforce management", score: "4.56/5" },
        { label: "Payroll and benefits", score: "4.15/5" },
      ],
      pros: [
        "Refreshed new interface for easier navigation.",
        "Ability to change platform colors and logos to reflect your brand.",
        "Customizable homepage and profile dashboards.",
        "Automated wellbeing surveys to track employee happiness over time.",
      ],
      cons: [
        "Reports have limited customization settings.",
        "No modules for employee training or scheduling.",
        "Does not support paying employees outside of the U.S.",
      ],
      why: {
        intro: "With a total score of 3.64 out of 5, BambooHR is my top choice for small businesses because it is by far the easiest platform to use on my shortlist. It strikes a perfect balance between simple pre-built workflows for HR teams looking for no-fuss process implementation and features to support processes from hire to retire.",
        outro: "In fact, BambooHR is one of the few solutions in my roundup that pays as much attention to the employee experience as system administrators. Besides a modern but user-friendly homepage where employees can see PTO banks, request time off, or clock in for a shift with one click, BambooHR also offers a platform where they can collaborate with peers in Employee Community. This is huge for small businesses where subscribing to standalone employee experience, recognition, and communication platforms can be a costly added expense.",
        extras: {
          "About BambooHR": (
            <>
              <p className="text-black mb-4">
                BambooHR is one of the most popular HR software solutions for its simple, effective UI and out-of-the-box workflows and reports. If you only need to centralize your people data and processes but don't need the granular customization of HR platforms like Rippling or SAP SuccessFactors, then BambooHR may be for you.
              </p>
              <p className="text-black">
                BambooHR focuses on creating a platform accessible for your tech-savvy and tech-averse HR teams. It comes with pre-built reports and analytics visualizations that you can use for fundamental insights into your organization, like turnover and time-off usage. System administrators can even customize BambooHR's homepage with widgets to access this information as soon as they log in.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Digital record-keeping
              </h4>
              <p className="text-black mb-4">
                BambooHR lets you upload, share, and store company and personnel documents directly within the platform. You can also create digital, legally recognized forms from the documents you use daily with eSignature to move away from paper processes and to an entirely digital filing system.
              </p>
              <p className="text-black mb-4">
                Creating these documents can be time-consuming, but it's worth it. After you upload your PDF or .docx document to BambooHR, you can drag and drop the fields you want employees to complete into the appropriate areas. You can then send your electronic documents to the necessary employees for signatures and store the completed forms in their electronic personnel files.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Employee self-service
              </h4>
              <p className="text-black">
                Like most modern HRIS, BambooHR has employee self-service features like preboarding checklists, benefits enrollment, and paystub access. What sets BambooHR apart is that employees can also update their information, request time off, clock in and out of shifts, update professional goals, and track training assignments from the same place.
              </p>
              <p className="text-black">
                Plus, if you're a small business with frontline workers, BambooHR allows employees to access all this information from their mobile device instead of a desktop computer. It even made it into my list of the best HR apps for mobile as a result.
              </p>
            </>
          ),
          "Pricing": (
            <>
              <p className="text-black mb-4">
                BambooHR offers two subscription plans to choose from: Core and Pro. The Core plan includes basic HRIS functions, like employee recordkeeping and leave management. It also offers onboarding workflows, an ATS, leave management, and employee wellbeing surveys.
              </p>
              <p className="text-black mb-4">
                But despite BambooHR's focus on small businesses, it only earned a 2.63 for pricing since it's quite costly to start. For comparison, if you have fewer than 15 employees, you can purchase Gusto Plus and access everything in BambooHR Core plus payroll, benefits administration, and time-tracking modules and pay less. This makes BambooHR a better choice for well-established small businesses with limited long-term growth goals.
              </p>
            </>
          ),
        },
      },
    },
    "Rippling": {
      title: "Rippling: Best for midsize businesses",
      logo: "/images/rippling.jpeg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User scores", score: "4.64/5" },
        { label: "Pricing", score: "4.06/5" },
        { label: "Employee relations", score: "4/5" },
        { label: "Platform and interface", score: "4.23/5" },
        { label: "HRIS and reporting", score: "4.63/5" },
        { label: "Workforce management", score: "4.56/5" },
        { label: "Payroll and benefits", score: "4.15/5" },
      ],
      pros: [
        "Employee profile translation and localization for more than 150 countries.",
        "Finance and IT management tools available.",
        "EOR, PEO, ASO, COBRA, ACA, and global payroll services available.",
        "Ability to use Excel formulas in reports for more detailed insights."
      ],
      cons: [
        "There is no free trial, and it may be too expensive for basic HR needs.",
        "Scheduling requires Time and Attendance purchase and lacks automatic schedules.",
        "Limited employee engagement and recognition features.",
        "API access is now an add-on to Rippling Platform."
      ],
      why: {
        intro: "Rippling is one of the most adaptable HR programs I've demoed, resulting in an overall score of 4.05. With customizable workflows and approvals, you don't need advanced IT training to automate most HR administrative processes in the app. This alone makes Rippling appealing to midsize businesses with a larger headcount, where HR automation is a must.",
        outro: "Rippling's global expense and inventory management also means it supports a growing company's more varied working cadences. Expense reimbursement, global payroll, and scheduling modules cover the needs of everyone, from frontline workers to remote employees and traveling professionals. Pair this with Rippling's ability to create custom data fields, and you can get as specific as you need with your HR, finance, and other work policies.",
        extras: {
          "About Rippling": (
            <>
              <p className="text-black mb-4">
                Rippling is the best option if you're a fast-growing SMB that has outgrown a simple HRIS and needs to unite HR, corporate spending, and IT under one system. It rivals major HCM platforms despite its comparatively small product library.
              </p>
              <p className="text-black">
                Ripping allows you to start moving away from the day-to-day operations of HR and to more strategic ones. It offers customizable reports that aggregate and visualize any dataset plus tactical modules like headcount planning. This allows you to create a plan, manage approval workflows, and sync with recruiting and spend modules to help you visualize and control your people costs.
              </p>
              <p className="text-black">
                Rippling also has one of the fastest new feature release schedules of any of the competitors in my roundup, which is both a strength and a limitation. Its constant innovation means you get access to new features quickly but at the expense of existing modules. (Yay finally for candidate self-scheduling now in Rippling's ATS!) Rippling also doesn't have the same level of enterprise-grade tools of titans like Workday and SAP, noticeably lacking a generative AI assistant, predictive analytics, and benchmarking tools.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Workflow automation
              </h4>
              <p className="text-black mb-4">
                Rippling is the only product on my shortlist with a workflow builder tool to create custom automation from scratch. This is unlike SAP SuccessFactors, which requires IT knowledge to develop cross-module workflows, or BambooHR, which comes with pre-defined workflows for onboarding, offboarding, and approvals.
              </p>
              <p className="text-black mb-4">
                Instead, with Rippling's Workflow Studio, you can set a trigger in one module to set off an action in another in its new blueprint-like builder. You can drag and drop actions, collaborate with others, and even add true/false conditional logic and wait times. For example, I used Workflow Studio to assign tasks to appropriate stakeholders in the event of a workplace accident, reducing the need for me to follow up on critical paperwork that could affect the injured employee's work comp benefit coverage.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Compliance assistance
              </h4>
              <p className="text-black">
                Rippling comes standard with Compliance 360, which monitors and notifies you of potential federal, state, or local labor law infractions. Although this doesn't replace training your HR teams on employment laws and taking proactive steps to stay compliant, it is a great backstop as your team grows.
              </p>
              <p className="text-black">
                For example, if you're a midsize business starting to hire employees in a new state, you might be unfamiliar with state labor laws like minimum wage or paid sick leave. Compliance 360 can notify you of these regulations during employee onboarding to ensure compliance. Or, if a law changes during the employee's tenure with you, Rippling will alert you to the change.
              </p>
            </>
          ),
          "Pricing": (
            <>
              <p className="text-black mb-4">
                Rippling Platform, Rippling's base product, starts at $40 per month plus $8 PEPM. You can choose from two subscription plans, Core and Pro, which include basic onboarding, workflow automation, and reporting functions. More advanced processes are relegated to Rippling's add-on modules, including critical HR software features like payroll and benefits administration.

                This lack of transparency around platform and implementation costs dropped Rippling's pricing score from 2.88 to 2.50. Since you have to pay more for access to functionality that comes standard in platforms like ADP Workforce Now and Gusto, Rippling is not the best choice for your first HR software. But I argue it's worth the investment if you're a small to midsize business scaling quickly and want to keep your HR processes in one place.
              </p>
            </>
          ),
        },
      },
    },
    "SAP SuccessFactors HCM": {
      title: "SAP SuccessFactors HCM: Best for large enterprises",
      logo: "/images/sap.jpg",
      button: {
        text: "Visit Website",
        link: "#",
      },
      scores: [
        { label: "User scores", score: "4.64/5" },
        { label: "Pricing", score: "4.06/5" },
        { label: "Employee relations", score: "4/5" },
        { label: "Platform and interface", score: "4.23/5" },
        { label: "HRIS and reporting", score: "4.63/5" },
        { label: "Workforce management", score: "4.56/5" },
        { label: "Payroll and benefits", score: "4.15/5" },
      ],
      pros: [
        "Intelligent text-based employee sentiment analysis.",
        "24/7 customer support via online chat, phone, or email.",
        "Accessibility support, including zoom, high contrast themes, screen reader support, and keyboard navigation.",
        "Native integration with SAP's entire product line.",
        "More than 2,000 standardized HR metrics."
      ],
      cons: [
        "Too expensive for small teams.",
        "Confusing line of product tiers and integration options.",
        "Complex user interface.",
        "Few plug-and-play integrations outside of SAP products and partners."
      ],
      why: {
        intro: "With a score of 3.81 out of 5, SAP SuccessFactors impressed me with its number of customizable features and extensibility options aimed at enterprises. In fact, by combining its HCM suite with other SAP products, like ERP, supply chain management, financial management, and customer relationship management, you can create an open flow of data across traditionally siloed business functions. This enables you to uncover process inefficiencies and areas of the business that are driving unneeded costs. It also means you can operate virtually all of your business processes in one place.",
        outro: "Understandably, SAP SuccessFactors' advanced features and complicated interface can be off-putting if you're new to HR software or want something with a more modern look. If that's the case, check out Rippling or Workday instead. But, with its advanced workforce planning tools, candidate relationship management (CRM) system, and AI for personalized HR processes, SAP SuccessFactors HCM remains my number one choice for complex, multinational corporations.",
        extras: {
          "About SAP SuccessFactors HCM": (
            <>
              <p className="text-black mb-4">
                SAP SuccessFactors Human Capital Management (HCM) is an enterprise-grade HR platform that centralizes HR administration in one place. SuccessFactors users can access SAP's entire line of products, including enterprise resource planning (ERP) solutions, to create one unified ecosystem for all business functions.
              </p>
              <p className="text-black">
                If you're a global company, SAP SuccessFactors also supports your international workforce. Although its native payroll only supports around 50 countries, it can localize employee profiles to more than 100 countries, post job openings to over 4,000 global sourcing channels across 80 countries, and facilitate international benefits enrollment.
              </p>
            </>
          ),
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Predictive analytics
              </h4>
              <p className="text-black mb-4">
                SAP SuccessFactors uses data from its various modules to inform big-picture business decisions. Besides collecting on lagging indicators, like employee retention and sentiment, SAP SuccessFactors goes one step further by predicting data trends based on past performance.
              </p>
              <h4 className="text-lg font-bold mb-2">
                AI capabilities
              </h4>
              <p className="text-black">
                SAP SuccessFactors leverages AI natural language processing to assist with workforce planning and streamline administrative HR tasks. One of my favorite use cases has been its AI writing assistant, which helps managers craft constructive feedback. If you have managers with several direct reports, this can ensure they complete performance appraisals timely.
              </p>
              <p className="text-black">
                SAP SuccessFactors is also the only platform on my shortlist to have a fully integrated generative AI assistant that operates much in the same way as ChatGPT. Its assistant, Joule, learns from the way you work and prior conversations you have to complete transactional, informational, and navigational tasks. For example, you can ask Joule to send requests for feedback, assign tasks, translate text, or confirm your PTO balance.
              </p>
            </>
          ),
          "Pricing": (
            <>
              <p className="text-black mb-4">
                Like most enterprise HR software, SAP does not disclose pricing for its full SuccessFactors HCM suite so you must contact its sales team for a quote. The overall cost is based on the size of your company, the products you need, and the number of administrative users. This, plus the fact most products require a three-month to one-year minimum contract, resulted in a score of 2.50 for pricing.

                However, SAP does reveal starting prices for several standalone products that comprise the HCM suite, which you can view in the chart below. I'll also note that, since SAP uses a product and module-based pricing system, you typically have negotiating power during sales calls. Be sure to bring quotes from competitors and ask about discounts when bundling any of its products and services.
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
    ...value
  }));

  const faqData = [
    {
      question: "How do you choose the best HR software?",
      answer: "When selecting HR software, consider your business size, budget, day-to-day HR processes, and company goals. It's crucial to have software that can manage compliance obligations, such as payroll and benefits administration. This software often comes with pre-built safeguards that limit labor law violations and prevent data entry errors, making it a must-have for your business. That doesn't mean HR processes like recruitment, retention, and employee performance and development are less important. Your organization should still have procedures to support these key areas. As your business grows, you'll like add HR software to cover these functions to improve process efficiency and access data insights that aid in effective workforce planning."
    },
    {
      question: "What are the benefits of HR software?",
      answer: "HR software solutions offer businesses a number of advantages, including increased efficiency, consistent compliance, and deeper reporting capabilities."
    },
    {
      question: "How much does HR software cost?",
      answer: "Human resources software costs depend on multiple factors, including HR feature needs, deployment requirements, and employee headcount. The type of HR software is also a key factor, with all-in-one software typically more expensive than standalone options."
    }
  ];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = "Best HR Software (Updated for April 2025)";

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
      "_blank"
    );
  };

  const evaluationCriteria = [
    { criteria: "User scores", weight: "5%" },
    { criteria: "Pricing", weight: "8%" },
    { criteria: "Employee relations", weight: "10.5%" },
    { criteria: "Platform and interface", weight: "10.5%" },
    { criteria: "HRIS and reporting", weight: "10%" },
    { criteria: "Workforce management", weight: "10%" },
    { criteria: "Payroll and benefits", weight: "10%" },
  ];

  return (
    <>
      <Head>
        <title>
          Best HR Software (Updated for April 2025)
        </title>
        <meta
          name="description"
          content="Comprehensive guide to choosing the best HR software for your business needs."
        />
        <meta property="og:title" content="Best HR Software (Updated for April 2025)" />
        <meta property="og:description" content="Comprehensive guide to choosing the best HR software for your business needs." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best HR Software (Updated for April 2025)" />
        <meta name="twitter:description" content="Comprehensive guide to choosing the best HR software for your business needs." />
      </Head>

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
                Best HR Software (Updated for April 2025)
              </span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
              Best Human Resources Software 
              <span className="block mt-2 sm:mt-4">(Updated for April 2025)</span>
            </h1>
          </div>

          {/* Author and Reviewer Section */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mb-8 sm:mb-12 lg:mb-16">
            {/* Author */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/images/project1.png"
                  alt="Kara Sherrer - Author"
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
                  Robie Ann Ferrer
                </p>
              </div>
            </div>

            {/* Reviewer */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="text-sm sm:text-base lg:text-lg text-white/80 hidden sm:block">
                Reviewed by
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image
                    src="/images/project2.png"
                    alt="Web Webster - Reviewer"
                    fill
                    sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 sm:hidden mb-1">
                    Reviewed by
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-medium">
                    Jessica Dennis
                  </p>
                </div>
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
                  is able to offer our services for free because some vendors may pay us for web traffic or other sales opportunities. Our mission is to help technology buyers make better purchasing decisions, so we provide you with information for all vendors — even those that don't pay us.
                </p>
              </div>
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
    </>
  );
}