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

export default function Employeedisciplinary() {
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
      id: "what-is-disciplinary-action ",
      title: "What is disciplinary action (and why it matters)",
      active: false,
    },
    {
      id: "when-to-use-disciplinary-action",
      title: "When to use disciplinary action and when not to",
      active: false,
    },
    {
      id: "when-disciplinary-action-typically-applies",
      title: "When disciplinary action typically applies",
      active: false,
    },
    {
      id: "when-it’s-best-to-hold-off",
      title: "When it’s best to hold off",
      active: false,
    },
    {
      id: "disciplinary-models-and-sanctions",
      title: "Disciplinary models and sanctions",
      active: false,
    },
    { id: "common-sanctions", title: "Common sanctions", active: false },
  {
      id: "before-you-start",
      title: "Before you start: What to have in place (and what to watch for)",
      active: false,
    },
     {
      id: "disciplinary-action-form-template",
      title: "Disciplinary action form template",
      active: false,
    },
     {
      id: "employee-disciplinary-process-steps",
      title: "Employee disciplinary process steps",
      active: false,
    }, 
    {
      id: "common-mistakes-to-avoid",
      title: "Common mistakes to avoid",
      active: false,
    },
     {
      id: "employee-disciplinary-action-FAQs ",
      title: "Employee disciplinary action FAQs ",
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

//   const toolsContent = {
//    gusto: {
//     title: " Gusto: Best overall project management software",
//     logo: "/images/gusto.png",
//     button: {
//       text: "Visit Website",
//       link: "#",
//     },
//     scores: [
//       { label: "User reviews", score: "4.64/5" },
      
//       { label: "Pricing", score: "4.06/5" },

//       { label: "Customer support", score: "4/5" },
//       { label: "Platform and interface", score: "4.23/5" },
//       { label: "HRIS features", score: "4.63/5" },
//       { label: "Reporting and analytics", score: "4.56/5" },
//       { label: "Payroll features", score: "4.15/5" },
      
//     ],
//     pros: [
//       "International contractor payroll in more than 120 countries.",
// "Gusto-brokered health insurance that integrates with payroll on all plans.",
// "Customer service is available by phone, email, or chat.",
// "Native employee financial wellness tools through Gusto Wallet app and Gusto debit card.",
//     ],
//     cons: [
//       "No dedicated account manager (unless with a Premium subscription).",
// "Check delivery is currently in beta and costs $1.50 per check.",
// "The lowest price plan is only for single-state payroll.",
// "Employer of Record (EOR) services to hire and pay global workers are limited to 12 countries.",
//     ],
//     why: {
//       intro: `Gusto’s simple but modern user interface (UI) helps you quickly establish basic payroll flows and maintain compliance requirements. It offers a wide range of payroll tools and services, such as its AutoPilot feature, which automatically approves pay runs, saving you time from manually doing payroll yourself. You also don’t have to worry about payroll tax filings and remittances, Gusto will handle these for you.`,
//       bullets: [
//        " With a 4.27 out of 5 score, Gusto’s rating reflects its capability to offer accessible tools to both payroll newbies and experts while supporting their needs. In addition to full-service payroll, Gusto’s project tracking allows you to pay your contractors the right amount while providing you with data to make more accurate, competitive project bids to your clients. And if you decide to grow into an international business, Gusto can compliantly pay your global contractors and employees. It can even help you hire international employees with its EOR service—Gusto Global.",
//       ],
//       outro: `For HR features, Gusto provides basic versions of several HR processes, like performance reviews, but it’s not the best choice if you need a full-scale human capital management (HCM) system. Paycor or Rippling are better options in this scenario. Both have feature-rich HR platforms that can handle simple to complex HR processes.`,
//       extras: {
//         "About Gusto": (
//           <>
//             <p className="text-black mb-4">
//              Gusto started as an employee and contractor payments company but now supports various HR functions like benefits administration, performance management, recruitment, and global payroll. As a full-service payroll company, it offers automatic deductions, remittances, and filings of federal, state, and local taxes. It can even handle minimum wage adjustments for tip credits and child support payments in 49 states (all but South Carolina). In contrast, many standalone payroll solutions for small businesses require you to process garnishments and local taxes manually. 
//             </p>
//             <p className="text-black">
//               Gusto also supports global businesses with contractor payments in more than 120 countries. For its Gusto Global product, it partnered with Remote to offer EOR services for employers needing to hire and pay workers 
//             </p>
           
//             <p className="text-black">
//              While the coverage may be limited as of this writing, Gusto plans to expand its EOR services to other countries soon.</p>
//            <h4 className="text-lg font-bold mb-2">
//               Gusto limitations
//             </h4>
//             <p className="text-black">
//               Even if it has started offering global hiring and payroll services, Gusto is not the most scalable solution in the market. Enterprise businesses, for example, will have difficulty finding crucial pay data insights, such as pay disparities and compensation benchmarks. This is because Gusto has limited report customization capabilities and completely lacks data visualization. Instead, you’ll need to export the reports to a spreadsheet program to create customized charts and gain data insights. </p>
//             <p className="text-black">
//              Gusto also becomes tedious to use once you have more than 50 employees. Unless you upgrade to a higher tier, it still requires some manual data inputs for things like time tracking and new hire onboarding.  </p>
//           </>
//         ),
//         "Key Features": (
//           <>
//             <h4 className="text-lg font-bold mb-2">
//               Simple payroll interface
//             </h4>
//             <p className="text-black mb-4">
//              Gusto’s payroll module features a progress bar with steps and instructions at the top so you stay on track and remember what information you need for payroll finalization. If you don’t enable Gusto’s AutoPilot function, running payroll takes only three steps: enter employee earnings and actual work hours, input time off details, and review and submit.  </p>
            
//             <p className="text-black mb-4">
//              If you don’t have a native or integrated time-tracking module, Gusto makes the process somewhat less tedious than Rippling, which previously held the top spot in this list. This is because Gusto includes fields to adjust employees’ hours, earnings, deductions, and reimbursements on the same page. You only have to open the section to adjust the fields that apply to each employee. </p>
           
//             <p className="text-black mb-4">
//               This is unlike Rippling, which separates hourly and salaried employees into different steps and puts each employee’s earnings and deductions in tabs. You will need to switch tabs and do long, horizontal scrolls to find and adjust the pay codes that apply to each employee. As a result, Rippling requires significantly more clicks to finish payroll than Gusto.</p>
//             <h4 className="text-lg font-bold mb-2">
//              Payroll add-ons
//             </h4>
//             <p className="text-black">
//              Gusto offers several add-on features that benefit small businesses. It can help you save money with R&D tax credits or start a pay-as-you-go workers’ compensation policy through its partner, NEXT Insurance. If you sign up for its state tax registration add-on, Gusto will file and monitor all the paperwork needed to expand your business into new states. </p>
         
//          <p className="text-black">
//              Further, Gusto has a free bill pay module. It allows you to create an electronic roster of all your vendors, upload bills from suppliers and subcontractors, and schedule payments. However, its features aren’t extensive—you can’t attribute codes, like utilities, to payments for accounting purposes or send transactions to stakeholders for approval. You also can’t filter or export bill payment data to your accounting application. Nevertheless, if you’re switching to Gusto after doing accounting and payroll processes yourself, it is a step up from manually maintaining billing and vendor profiles.</p> </>
//         ),
//         "Pricing": (
//           <>
//             <p className="text-black mb-4">
//              Gusto’s pricing starts at $49 monthly plus $6 per employee, per month (PEPM). You can choose between three tiers: Simple, Plus, and Premium. Similar to QuickBooks Payroll, Gusto also offers a contractor-only payroll plan for $35 per month plus $6 per contractor per month*. However, it isn’t as affordable as QuickBooks Payroll, which only costs $15 monthly for up to 20 workers plus $2 for each additional contractor.</p>
           
//             <h4 className="text-lg font-bold mb-2">
//              Gusto contractor-only plan
//             </h4>
//             <ul className="list-disc pl-5 text-black mb-4">
//               <li>Monthly fee: $35 plus $6 per contractor.</li>
//               <li>Includes unlimited US contractor payments, four-day direct deposits, 1099-NECs at the end of the year, and new hire reporting, if required in your state. </li>
//             </ul>
//             <h4 className="text-lg font-bold mb-2">
//               Add-ons
//             </h4>
//             <div className="text-black mb-4">
//   <ul className="list-disc pl-5 mb-4">
//     <li><b>International contractor payments:</b> Price varies by foreign exchange rate.</li>
//     <li><b>State tax registration:</b> Prices vary by state.</li>
//     <li><b>R&D tax credits:</b> Pay 15% of identified tax credits.</li>
//     <li><b>Gusto Global:</b> $699 PEPM.</li>
//     <li><b>Health insurance broker integration:</b> $6 per month per eligible employee.</li>
//     <li><b>401(k) retirement savings:</b> Price varies by 401(k) integration.</li>
//     <li><b>Health Savings Accounts (HSAs):</b> $2.50 per month per participant.**</li>
//     <li><b>Flexible Spending Accounts (FSAs):</b> $4 per month per participant, with a $20 per month minimum.**</li>
//     <li><b>Dependent care FSAs:</b> $4 per month per participant, with a $20 per month minimum.**</li>
//     <li><b>Commuter benefits:</b> $4 per month per participant, with a $20 per month minimum.**</li>
//     <li><b>Workers’ compensation:</b> Price of premiums only.</li>
//     <li><b>Life and disability insurance:</b> Price of premiums only.</li>
//     <li><b>Next-day direct deposit:</b> $15/mo. + $3 PEPM.***</li>
//     <li><b>Time tracking:</b> $6 PEPM.***</li>
//     <li><b>Performance reviews:</b> $3 PEPM.***</li>
//     <li><b>HR resources:</b> $50/mo. + $5 PEPM (includes compliance alerts and access to HR experts and HR templates).***</li>
//     <li><b>Priority support and HR resources:</b> $8 PEPM; only available with the Plus plan.</li>
//     <li><b>Annually updated labor law posters:</b> $8.99/mo. (onsite posters); $10/mo. for up to five employees, plus $1/mo. for each additional employee (ePoster service for remote employees)</li>
//   </ul>

//   <p className="mb-2">
//     For new clients, Gusto waives the $35 monthly base fee for the first six months. This could change anytime, so please explore its website for the latest deals.
//   </p>
//   <p className="mb-2">
//     <b>**</b> Annual $200 service charge covers HSAs, FSAs, dependent care FSAs, and commuter benefits.
//   </p>
//   <p>
//     <b>***</b> Add-on only for the Simple plan; included for free with the Plus and Premium tiers.
//   </p>
// </div>

           
//           </>
//         ),
//       },
//     },
//   },
//   onpay: {
//     title: " OnPay: Best for ease of use",
//     logo: "/images/onpay.png",
//     button: {
//       text: "Visit Website",
//       link: "#",
//     },
//     scores: [
//         { label: "Overall Score", score: "4.11/5" },
//      { label: "User reviews", score: "4.07/5" },
      
//       { label: "Pricing", score: "4.5/5" },

//       { label: "Customer support", score: "3.75/5" },
//       { label: "Platform and interface", score: "3.46/5" },
//       { label: "HRIS features", score: "4.63/5" },
//       { label: "Reporting and analytics", score: "4.06/5" },
//       { label: "Payroll features", score: "4.05/5" },
//     ],
//     pros: [
//       "Free setup and data migration.",
//       "Specialized payroll services for particular industries like agriculture, churches, and nonprofits.",
//       "Employee rosters, organizational charts, leave management, and customizable onboarding included.",
//     ],
//     cons: [
//       "Does not offer native time-tracking and accounting modules.",
//       "Limited third-party integrations.",
//        "Not suitable for fast-growing companies.",
//        "No mobile app.",
//     ],
//     why: {
//       intro: `OnPay has an intuitive interface and uncomplicated payroll workflows that can accommodate multiple payroll schedules, worker types, and pay methods. Coming in with a score of 4.11 out of 5, OnPay makes running payroll easy with its simple-to-use features and automatic alerts that highlight payroll errors and discrepancies. It also comes with a suite of HR tools to meet minimum compliance requirements by state and industry, including PTO policy management, compliance audits, and an HR resource library.`,
//      outro: `OnPay’s flat-rate pricing structure makes planning for and controlling long-term business costs much easier. However, this also makes OnPay less likely to innovate and offer more modern features at the same rate as competitors. Its one-price-fits-all feature means that adding more capabilities will result in profit loss for the company unless they raise prices or offer add-on modules for additional fees. If you want a small business payroll product that improves and adapts constantly, go with Gusto instead. Over the years, the company has added more functionalities to its platform, the latest include global payroll and EOR services.`,
     
//       extras: {
//         "About OnPay": (
//           <>
//             <p className="text-black mb-4">
//              OnPay’s specialty may be payroll, but it has all the features you need to manage small business HR processes, such as time off management, benefits administration, task management, and customizable onboarding workflows. These all come standard with OnPay, unlike the other providers on my list that require you to purchase a higher subscription to get some of these features. </p>
//             <p className="text-black">
//              OnPay may not have automatic pay run features, but its interface is straightforward, requiring just as many (or fewer) clicks as Gusto to complete payroll. Like Gusto, OnPay lets you add or adjust earnings and deductions on the same screen, avoiding extra clicks and cumbersome spreadsheets. You can also adjust specific employee pay information in a sidebar window without leaving the workflow. </p>
//           <p className="text-black mb-4">
//              While it doesn’t offer a contractor-only plan like QuickBooks Payroll and Gusto, OnPay allows you to pay contractors within the same pay cycle as your regular employees. This avoids repeating the payroll process for your different worker classifications at the end of every pay period.</p>
//          <h4 className="text-lg font-bold mb-2">
//               OnPay limitations
//             </h4>
//          <p className="text-black mb-4">
//               OnPay is not the best choice if you expect to need more robust payroll features later. It supports unlimited and multi-state payroll but lacks global payroll functionality. OnPay may flag you of payroll errors as you process employee payments, but lacks in-app compliance checkers, so you’ll have to become familiar with new laws on minimum wages, PTO, and overtime in each state where your employees reside before running payroll. </p>
//             <p className="text-black mb-4">
//               One of the biggest drawbacks, especially for businesses with mostly non-exempt hourly workers, is OnPay’s lack of native time-tracking or scheduling features. It does integrate with popular options like When I Work and Deputy, but QuickBooks Payroll may be a better choice if you want easy data transfers from time tracking to payroll.  </p>
//           </>
//         ),
//         "Key Features": (
//           <>
//             <h4 className="text-lg font-bold mb-2">
//             Employee engagement and recordkeeping
//             </h4>
//             <p className="text-black mb-4">
//              OnPay offers basic staff engagement and recordkeeping features that you rarely see in standalone payroll platforms, such as employee profile bios and customizable fun fact questions. Workers can view this information and work contact numbers directly in OnPay. This is useful if you have shift workers who need to reach team members to report emergencies like tardies or other shift changes. </p>
            
//             <p className="text-black mb-4">
//              You can use its customizable forms to create documents for tracking business and staff information, such as collecting employee T-shirt sizes for an upcoming work event or tracking company equipment like computers and keys. Its e-signature capabilities also allow you to collect essential documents and obtain legal acknowledgments from employees. For instance, employees can electronically sign uniform deduction agreements to deduct the cost from their next paychecks. </p>
            
//             <p className="text-black mb-4">
//              You can even create similar flows for handbook policies, including any that impact payroll processes, such as employee bonuses, reimbursements, and other deductions. Gusto may have similar functionalities but reserves it for its higher-paying plans. </p>
//             <h4 className="text-lg font-bold mb-2">
//               Payroll reports builder
//             </h4>
//             <p className="text-black">
//              OnPay includes a payroll-specific reports dashboard, with links to important reports, like general ledger (GL) summary and payroll register, directly on the main page. Graphs also provide quick views of the number of employees paid each month and paid wages by type to track costs and turnover. </p>
//             <p className="text-black">
//              You can save custom reports and views to access the data you need as it changes with each pay run. I was also impressed with OnPay’s report designer, which lets you filter and drag-and-drop report columns to adjust your view in real time without downloading data to a spreadsheet program of choice. This saves you time from downloading reports repeatedly. In contrast, Gusto only lets you choose the columns or data fields you want. You can’t rearrange the order without running the report and selecting the columns again. If you want an easier way of viewing and filtering data fields for your reports, use OnPay.</p>
//           </>
//         ),
//         "Pricing": (
//           <>
//             <p className="text-black mb-4">
//               OnPay has the simplest pricing of all the vendors on my list. For $49 per month plus $6 PEPM, you get access to OnPay’s entire platform, including payroll and basic HR features. These include: </p>
            
            
//             <ul className="list-disc pl-5 text-black mb-4">
//               <li>Multi-state payroll.</li>
//               <li>Customized employee onboarding and task checklists.</li>
//            <li>Personnel file storage.</li>
//            <li>PTO management.</li>
//            <li>OnPay-brokered health insurance benefits.
// </li>
//            <li>Company directory and organizational charts.</li>
//            <li>HR resource library.</li>
//            <li>Customer support by phone, chat, and email.</li>

          

//             </ul>
//           <p className="text-black mb-4">
//               OnPay’s feature is comparable to Gusto’s least expensive Simple plan, but OnPay has a slightly lower monthly base software fee ($40 vs $49) and surpasses Gusto Simple’s capabilities. It includes multi-state payroll—a feature that Gusto offers in its Plus and Premium tiers. OnPay’s tax filing service is also a bit better than QuickBooks Payroll because it covers federal, state, and local taxes; whereas QuickBooks Payroll will require you to upgrade to either its Premium and Elite plans if you want it to file local tax forms for you. With its competitive one-price-fits-all model, it’s a better choice for small establishments without major growth goals. However, if you have plans to grow, consider Paycor—its all-in-one platform can handle basic to advanced payroll and HR processes.</p>
            
//           </>
//         ),
//       },
//     },
//   },
//   quickbooks: {
//     title: "QuickBooks Payroll: Best for its accounting integration",
//     logo: "/images/quickbooks.png",
//     button: {
//       text: "Visit Website",
//       link: "#",
//     },
//     scores: [
//        { label: "Overall Score", score: "4.08/5" },
//      { label: "User reviews", score: "3.99/5" },
      
//       { label: "Pricing", score: "4.13/5" },

//       { label: "Customer support", score: "3.88/5" },
//       { label: "Platform and interface", score: "4.25/5" },
//       { label: "HRIS features", score: "4.56/5" },
//       { label: "Reporting and analytics", score: "3.86/5" },
//       { label: "Payroll features", score: "4.05/5" },
//     ],
//     pros: [
//       "Online chat support available 24/7.",
//       "Tax penalty protection for any reason on its Elite subscription tier.",
//       "Next-day or same-day direct deposits (depending on subscription tier).",
//       "Direct integration with QuickBooks Time and other Intuit products.",
//       "Personal HR advisor at Elite subscription tier.",
       
//     ],
//     cons: [
//       "Local tax filings are only available in Premium and Elite plans.",
//       "Additional fees for tax filings in multiple states, unless on Elite plan.",
//       "QuickBooks time and attendance features open in a separate application.",
//     " Service capped at 150 employees.",
//     ],
//     why: {
//       intro: `QuickBooks Payroll is one of the top providers for small business payroll, with an interface, pricing, and features very similar to those of competitors like Gusto and OnPay. It earned 4.08 out of 5 and stands out for its accounting functions—even within its payroll product—and easy integration with Intuit QuickBooks products. It automatically syncs payroll data to your chart of accounts and offers data analysis tools, provided you have a QuickBooks Online subscription. You can even customize how it enters this data into your accounts to meet your business needs.`,
//       bullets: [
//         "Customizable dashboards and workflows suit different team structures",
//         "Powerful reporting provides deep insights into project performance",
//         "Time tracking and resource management help optimize team capacity",
//       ],
//       outro: `While QuickBooks Payroll is an excellent choice if you want to save money by joining your payroll and accounting processes together, it lost points for its minimal HR and employee management features. For example, it relies on partnerships with Allstate Health Solutions and Mineral for benefits offerings and HR advisory services. It also doesn’t have Gusto’s hiring and performance management tools, OnPay’s detailed employee profiles, and Paycor’s feature-rich HR platform.`,
//       extras: {
//         "About QuickBooks Payroll": (
//           <>
//             <p className="text-black mb-4">
//             As a small-business accounting giant, Intuit’s QuickBooks is highly likely one of the first software products you purchase alongside a payroll solution. If you get both QuickBooks Online and QuickBooks Payroll, you can manage accounting and payroll data from the same app so you can see a single view of your business’s cash flow. Running payroll in QuickBooks is also relatively easy. It automatically populates earnings for your salaried employees, but you’ll have to manually enter regular and overtime hours for your non-exempt hourly staff. However, upgrading to its higher subscription tiers grants you access to its native time and scheduling capabilities.</p>
//             <p className="text-black">
//              In addition to attendance monitoring and staff scheduling, you get geolocation, geofencing, and mobile time clock tools. This is helpful if you employ mostly field workers without a central base of operations. Plus, as you progress subscription tiers, you access additional project tracking features.  By comparison, Paycor and Gusto are the only alternatives on my list that offers equivalent time tracking and scheduling support—although Paycor’s are add-on modules while Gusto’s scheduling tools are limited.</p>
//            <h4 className="text-lg font-bold mb-2">
//               QuickBooks Payroll limitations
//             </h4>
//          <p className="text-black mb-4">
//               QuickBooks Payroll is ideal to use if you’re a QuickBooks user or only need a standalone payroll option for your small business. It doesn’t support third-party integration options for strategic HR functions, such as recruitment and performance management. It also lacks an organizational chart and customized onboarding workflows. </p>
//               </>
//         ),
//         "Key Features": (
//           <>
//             <h4 className="text-lg font-bold mb-2">
//             Contractor and vendor billing
//             </h4>
//             <p className="text-black mb-4">
//              If you bundle your QuickBooks Payroll subscription with QuickBooks Online, you can run payroll and vendor bill payments from the same system. QuickBooks’ is significantly more advanced than Gusto’s bill pay option. In addition to creating a list of vendors and paying them directly from the platform, it lets you set up multi-conditional approval workflows and log bills by categories to assist with expense management. This is great if you’re managing bills from multiple work locations and need certain employees to confirm bill accuracy, such as when bills exceed a certain dollar threshold.</p>
            
//             <p className="text-black mb-4">
//              If you don’t have employees, QuickBooks offers a contractor payments option with accounting features. Besides being more affordable than Gusto’s contractor-only plan, it doesn’t restrict you from following typical employee payroll schedules. Instead, you can pay contractors per any pay agreement you make or alongside your regular billing cadences. This provides you more control over your company costs, allowing you to schedule payments during periods of higher revenue.</p>
            
//              <h4 className="text-lg font-bold mb-2">
//              General ledger integration
//             </h4>
//             <p className="text-black">
//              Exporting payroll ledgers to your accounting program of choice can be tedious, especially if your payroll platform doesn’t integrate with your accounting program. However, when you use QuickBooks Payroll and QuickBooks Online together, the system automatically records applicable pay data in your chart of accounts once you finalize payroll. While it automatically assigns default accounts to map your payroll based on wages, expenses, and liabilities, you can modify these settings to your liking. </p>
//             <p className="text-black">
//              For example, you may use a particular account to monitor your contribution to payroll taxes outside of a general expense account. Besides helping you understand your tax liabilities, you can also use it to determine some of the costs associated with hiring a new employee for recruitment and headcount planning purposes.</p>
//           </>
//         ),
//         "Pricing": (
//           <>
//             <p className="text-black mb-4">
//               QuickBooks offers several different pricing plans and bundles, depending on whether you want only payroll features or payroll and accounting. If you want more information on QuickBooks payroll and accounting suites, check out its payroll and bookkeeping bundles. But if you only need small business payroll, its lowest-priced tier starts at $50 per month plus $6 PEPM. </p>
            
//             <p className="text-black mb-4">
//               Unlike the other payroll processing software on my list, it offers an affordable contractor-only plan and an option to get 50% off monthly base fees for your first three months* with QuickBooks Payroll. However, it lost points given the barebones HR features of its lowest-priced Core plan. You also need to upgrade to at least its Premium plan if you want automated local tax filings, time tracking tools, and 24/7 product support.</p>
//              <h4 className="text-lg font-bold mb-2">
//              QuickBooks contractor-only payments plan
//             </h4>
//             <ul className="list-disc pl-5 text-black mb-4">
//               <li>Monthly fee: $15 for 20 contractors plus $2 per additional worker.</li>
//               <li>Includes unlimited US contractor payments, next-day direct deposits, contractor self-setup tools, and unlimited electronic filings of 1099-MISC and 1099-NECs.</li>
           

          

//             </ul>
//           <p className="text-black mb-4">
//               Note that these terms can change anytime, so please check their website for the latest new client promotions.</p>
//           </> )  },
//     },
//   },


// paycor: {
//     title: "Paycor: Best for growing businesses",
//     logo: "/images/paycor.png",
//     button: {
//       text: "Visit Website",
//       link: "#",
//     },
//     scores: [
//        { label: "Overall Score", score: "3.77/5" },
//      { label: "User reviews", score: "4.29/5" },
      
//       { label: "Pricing", score: "1.69/5" },

//       { label: "Customer support", score: "4.25/5" },
//       { label: "Platform and interface", score: "4.38/5" },
//       { label: "HRIS features", score: "4.25/5" },
//       { label: "Reporting and analytics", score: "4.35/5" },
//       { label: "Payroll features", score: "4.18/5" },
//     ],
//     pros: [
//     "Multi-state payroll with automated local tax deductions and filings included in all plans.",
//     "Robust employee self-service features, including earned wage access, via its mobile app.",
//     "Capability to view multiple pay cycles months in advance for effective status change management.",
//     "Automatic prorated pay for mid-cycle hourly employee pay rate changes (with Paycor’s time tracking add-on)."
//   ],
//   cons: [
//     "Non-transparent pricing.",
//     "Must purchase Essential plan or higher for onboarding, analytics, and PTO management modules.",
//     "Time tracking, scheduling, and benefits administration are paid add-on modules.",
//     "Difficult to navigate UI."
//   ],
//     why: {
//       intro: `Paycor’s advanced analytics, in-app tax compliance alerts, and customizable payroll processes suit growing businesses that need more advanced and versatile pay controls. I was impressed with its pay grid for completing payroll functions, which lets me adjust how I wanted to see and complete payroll. It also allows me to do payroll faster since I don’t have to go through a set series of steps compared to competitors like Rippling and Gusto.`,
//      outro:` With a total score of 3.77 out of 5, Paycor also stands out for its wide range of HR tools that can support a small business’s growing HR needs. For example, unlike Patriot Payroll and QuickBooks Payroll, Paycor has a full-scale recruiting module that leverages artificial intelligence (AI) HR tools to source top prospects and engage passive candidates. Other features like compensation planning, pulse surveys, and career management support your long-term talent needs and align them with your company’s objectives and costs.`,
//       outro: `However, its monthly fees aren’t published on its website—you have to call Paycor to request a quote. Plus, it does not include support for businesses with international teams. But if you need a customizable payroll system or more robust modules to complete your increasingly advanced HR needs, then Paycor is a great choice.`,
//       extras: {
//         "About Paycor": (
//           <>
//             <p className="text-black mb-4">
//             Paycor is an all-in-one human resources management system (HRMS) that offers modules for critical HR functions like payroll as well as auxiliary processes like learning and development. This versatility makes Paycor best suited for growing and established companies that need direct control over their payroll processes in a unified HR tech stack. </p>
//             <p className="text-black">
//              It lets you add or modify existing payroll schedules as needed, and the system will automatically make the necessary adjustments. It has a customizable pay grid organized by rows of employees, which lets you add and remove columns for information like bonuses and commissions to fit your needs. You can even pay terminated employees without temporarily changing their employment status in the system. This is great if there was an error in the employee’s previous payroll and you need to pay them an adjustment after they’ve separated from the company.</p>
//           <p className="text-black">
//              There are also buttons to automatically adjust an employee’s gross pay so the net pay is a specified amount, like in the case of bonus checks. Plus, Paycor has alerts for shortfalls, no pay, earnings, and hours based on your company’s needs.</p>
          
//            <h4 className="text-lg font-bold mb-2">
//              Paycor limitations
//             </h4>
//          <p className="text-black mb-4">
//               Paycor’s pay grid setup may increase payroll efficiency for large teams, but it can be overwhelming for small businesses and startups that need dedicated support. Without a step-by-step guide, newbies are less likely to remember to add or adjust critical pay items. Gusto, for instance, has a separate step just for keying PTO hours—a crucial data point that’s easy to miss if you’re managing payroll on top of multiple other HR functions.</p>
//              <p className="text-black mb-4">
//               Paycor also doesn’t support payroll outside of the U.S., so it’s a better option for domestic businesses with seasoned HR or payroll specialists that need flexibility over their pay processes.</p>
             
//               </>
//         ),
//         "Key Features": (
//           <>
//             <h4 className="text-lg font-bold mb-2">
//             Multiple employee payment methods
//             </h4>
//             <p className="text-black mb-4">
//              Paycor lets you pay employees through direct deposits, paycards, or checks. It also offers on-demand pay, allowing employees to access up to 50% of their wages before payday through its mobile app. Free budgeting, financial counseling, and learning resources for employees also compete with the financial wellness resources offered by Gusto.</p>
            
//             <p className="text-black mb-4">
//             Another great feature is Paycor’s check-stuffing services to pay your unbanked employees. While most payroll platforms let you print live checks, it adds extra steps to the payroll process like ensuring you have the proper check stock paper and magnetic ink to manually print checks.</p>
            
//              <h4 className="text-lg font-bold mb-2">
//              Custom reports and analytics
//             </h4>
//             <p className="text-black">
//              Before finalizing payroll, Paycor populates charts so you can view key information about payroll runs quickly. Doughnut charts allow you to see the breakdown of employer and employee tax liabilities, while a series of quick links lets you download popular reports, like your payroll journal. It even pre-populates employee pay stubs up to three days before paydays, enabling your workers to check their expected payouts and report pay errors.</p>
//             <p className="text-black">
//             Paycor also has a report builder to craft customized reports from scratch. You can work off pre-existing reports by adding, renaming, or creating new columns for analysis. Many of the payroll reports also come with visualizations, like total compensation by month and department, to understand changes in labor costs without switching to your accounting software.</p>
//            <p className="text-black">
//             Further, Paycor’s analytics module includes an AI digital assistant to ask questions and receive answers about your employee data in natural language. Meanwhile, benchmarking and predictive analytics let you compare pay practices with industry standards and adequately plan for the future.</p>
          
//           </>
//         ),
//         "Pricing": (
//           <>
//             <p className="text-black mb-4">
//               If you have fewer than 50 employees, Paycor offers four small business plans: Basic, Essential, Core, and Complete. Paycor does not publish pricing on its website, but based on the quote I received, monthly fees start at $99 plus $6 PEPM. If you have 50 or more employees, you must contact Paycor’s sales team for a customized quote for its mid-market tier.</p>
            
//               </> )  },
//     },
//   },
   
// patriot: {
//     title: "Patriot Payroll: Best budget-friendly payroll software",
//     logo: "/images/quickbooks.png",
//     button: {
//       text: "Visit Website",
//       link: "#",
//     },
//     scores: [
//        { label: "Overall Score", score: "3.67/5" },
//      { label: "User reviews", score: "4.46/5" },
      
//       { label: "Pricing", score: "4.56/5" },

//       { label: "Customer support", score: "4/5" },
//       { label: "Platform and interface", score: "2.88/5" },
//       { label: "HRIS features", score: "1.88/5" },
//       { label: "Reporting and analytics", score: "4.13/5" },
//       { label: "Payroll features", score: "4.05/5" },
//     ],
//     pros: [
//     "Simple yet intuitive payroll platform.",
//     "Free payroll setup assistance.",
//     "Time tracking, basic HRIS, and accounting tools are available as paid add-ons.",
//     "Has an affordable full-service payroll plan and do-it-yourself (DIY) tax filing option."
//   ],
//   cons: [
//     "Only integrates with QuickBooks Desktop or QuickBooks Online.",
//     "Doesn’t file new hire reports (but can generate them).",
//     "Multi-state payroll costs extra."
//   ],
//     why: {
//       intro: `Patriot’s payroll module made my list of the best payroll software for small businesses mainly because of its affordability. For a monthly fee of $37 plus $5 PEPM, you get unlimited pay runs with tax payment and filing services. This is the lowest full-service payroll plan that I reviewed and comes with all of the essential tools you need to pay employees and contractors. If you have a limited budget and prefer to handle tax filings yourself, its basic plan only costs $17 per month plus $4 PEPM. It has all the features included in the full-service option but without tax filing services.`,
      
//       outro: `It can handle multiple pay rates—max of five—and you can add a description to each rate. This makes it easy to track and differentiate pay rates for hourly employees who may be assigned to different roles with various pay rates. I also like that it lets you change employee hourly rates while running payroll without canceling or closing the pay run page. Other online payroll services will require you to update the employee’s pay rate in the system’s HRIS module before you can process payroll.`,
//      outro:`Patriot Payroll earned an overall score of 3.67 out of 5, losing points for its limited HRIS features and third-party software integrations. It also only generates new hire reports, but you have to file these yourself. While it has over a dozen payroll report types, you need to get its HR add-on if you want employee-related reports like staff demographics and retirement plan contribution reports.`,
//       extras: {
//         "About Patriot Payroll": (
//           <>
//             <p className="text-black mb-4">
//             Similar to QuickBooks, Patriot offers software for payroll and accounting. Its platform has a simple but intuitive interface that helps streamline processes, making it easy for small businesses to learn and use its various features. With its payroll module, you get unlimited pay runs with automatic federal, state, and local tax deductions and filings—provided you sign up for its full-service plan. It offers several essential payroll features, such as multiple pay schedules and customizable money and deduction types, enabling you to create your own employee deductions and company-paid contributions and payments, such as special bonuses. </p>
//             <p className="text-black">
//              If you have a multi-location business, you can assign employees to a primary work location in the system, which also includes a work-from-home option. Patriot Payroll will then calculate the applicable payroll taxes based on the employee’s work location. Plus, you don’t need to manually search for workers assigned to specific business sites when running payroll. Patriot Patriot has a filter option that lets you choose the work location, allowing you to process and review payroll only for specific teams.</p>
//            <h4 className="text-lg font-bold mb-2">
//              Patriot Payroll limitations
//             </h4>
//          <p className="text-black mb-4">
//              Patriot Payroll may support unlimited pay runs for US-based workers, but it lacks Gusto’s global payment tools. Its contractor-only package also does not compete well with QuickBooks Payroll, which only costs $15 monthly for up to 20 workers; whereas Patriot charges $17 per month plus $4 PEPM if you’re on its basic plan. Plus, Patriot collects add-on fees for time tracking and multi-state payroll tax filings. And even if you get the HRIS add on, the features are very limited. This is unlike Gusto and OnPay, which include basic hiring tools and automated onboarding flows in their starter tiers. </p>
//              <p className="text-black mb-4">
//              While you can get two-day direct deposits with Patriot Payroll, it only offers this to qualified customers. If you don’t meet Patriot’s requirements, you will only be entitled to a four-day option. This is unlike the other providers in this guide that don’t have qualifying assessments for two-day direct deposits. However, if you require fast payouts to expedite payroll processing times and don’t need a wide range of HR tools, consider QuickBooks Payroll as it offers a next-day option in its basic plan. </p>
             
//               </>
//         ),
//         "Key Features": (
//           <>
//             <h4 className="text-lg font-bold mb-2">
//            Net to gross payroll tool
//             </h4>
//             <p className="text-black mb-4">
//              While it may be easy to notify employees that they are eligible for a specific bonus, you have to constantly remind them that the amount they see may be subject to tax. Typically, workers find it difficult to determine the applicable payroll tax deductions—intead, they prefer knowing the take-home bonus amount they stand to get. With Patriot’s net to gross payroll tool, you don’t need to do manual calculations to figure this out. You simply input the bonus amount you want employees to receive and the system will automatically gross it up for taxes. This helps you save time and ensures payroll compliance.</p>
            
//              <h4 className="text-lg font-bold mb-2">
//              Flexible payroll services
//             </h4>
//             <p className="text-black">
//              What I like about Patriot is that it provides full-service and DIY payroll options. If you have a very small team—let’s say, up to 10 employees—and are comfortable handling tax payments and filings, you can start with Patriot Payroll’s Basic plan. Once you exceed 10 workers, you can switch to its Full-service package, where Patriot will handle tax remittances and filings for you. </p>
//             <p className="text-black">
//              Patriot also offers flexible payroll setup options for new clients. If you’re familiar with using pay processing tools, you can follow its online wizard to create your Patriot Payroll account and complete setup requirements. If you need help, it also offers free payroll setup assistance. You only need to provide the necessary company and employee information and Patriot will handle the setup process for you. Plus, it provides extended weekday support. If you have questions about its features, you can contact the software support team via phone, email, or chat from Monday to Friday, 9 AM to 7 PM Eastern Time (ET).</p>
//           </>
//         ),
//         "Pricing": (
//           <>
//             <p className="text-black mb-4">
//              You can get Patriot Payroll as a standalone solution or enhance its platform by selecting paid add-ons for time tracking and an HR software, a module that contains basic HR reporting and HRIS functionalities. There are two plans: Basic Payroll and Full Service Payroll. Both have similar features, except for the payroll tax filing services and tax filing guarantee included in the Full Service plan. </p>
            
//              <h4 className="text-lg font-bold mb-2">
//              Add-ons
//             </h4>
//            <ul className="list-disc pl-5 text-black mb-4">
//   <li>
//     <b>Time and attendance:</b> $6 monthly plus $2 PEPM.  
//     Includes employee time cards, custom overtime rules, multiple job roles tracking, manager permissions, time tracking reports, and online clock ins/outs via the employee online portal or the My Patriot employee mobile app.
//   </li>
//   <li>
//     <b>HR software:</b> $6 monthly plus $2 PEPM.  
//     Includes document management, HR reports, HR manager permissions, and basic employee information management tools.
//   </li>
//   <li>
//     <b>Multi-state tax payments and filings*:</b> $12 monthly for each additional state.
//   </li>
//   <li>
//     <b>Accounting Basic plan:</b> $20 per month.  
//     Includes automatic bank imports, income and expense tracking, account reconciliation, credit card payments, financial reports, and unlimited customers, invoices, contractors, vendors, and payments.
//   </li>
//   <li>
//     <b>Accounting Premium plan:</b> $30 per month.  
//     Everything in Basic, plus recurring invoices, receipt management, send invoice payment reminders, user-based permissions, and the capability to create and send estimates.
//   </li>
//   <li>
//     <b>Bookkeeping service:</b> Starts at $100 per month plus a one-time onboarding fee (call for a quote); only available as an add-on to the Accounting Premium plan.
//   </li>
// </ul>

//           <p className="text-black mb-4">
//              This only applies to Full Service plan holders.</p>
//           </> )  },
//     },
//   },
   
// };

//    // Convert toolsContent object to array for mapping
//   const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
//     id: key,
//     ...value
//   }));


  const faqData = [
    {
      question: "Who should be involved in the disciplinary action process?",
      answer:
        "The employee’s manager usually leads the disciplinary process from start to finish. HR may also be involved to offer guidance, document meetings, or handle investigations. Typically, you will see more HR or executive team involvement as discipline steps progress, especially if you require approval from upper management for each step.",
    },
    {
      question: "How long does an employer have to take disciplinary action?",
      answer:
        "Disciplinary action should occur as soon as reasonably possible following the behavior or incident. Generally, the earlier you see and correct the employee’s behavior, the less likely it is to become a bad habit. So, you should wait no longer than a day or two after the observed behavior to confront the employee.",
    },
    
      
    {
      question: "Can I fire an employee without a written warning?",
      answer:
        "Technically, yes, as long as your employee works in an at-will state. But just because you can doesn’t mean you should. Written warnings demonstrate the reasons that led to termination, the steps you took to correct or help the employee change course, and that the employee was aware of their misconduct. They are crucial documents that can help you in the event of a lawsuit. ",
    },
    {
      question: "What if the employee refused to sign the disciplinary action form?",
      answer: 
     "You should document the refusal by writing “employee refused to sign” on the form. Add the date and have another manager present as a witness. Make sure the witness also signs the form. Then, give a copy of the form to the employee."
    ,
    },
   
    
  ];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Employee Disciplinary Action Guide + Form Template";

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

 

  return (
    <>
      <Head>
        <title>
          Employee Disciplinary Action Guide + Form Template
        </title>
        <meta
          name="description"
          content="Comprehensive guide to choosing the best payroll software for your business needs."
        />

        {/* Open Graph (Facebook + LinkedIn) */}
        <meta
          property="og:title"
          content="Best Payroll Software for Small Business"
        />
        <meta
          property="og:description"
          content="Comprehensive guide to choosing the best payroll software for your business needs."
        />
        <meta
          property="og:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:url"
          content="https://technology-advice.vercel.app/software-reviews/payroll"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Technology Advice" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Employee Disciplinary Action Guide + Form Template"
        />
        <meta
          name="twitter:description"
          content="Employee Disciplinary Action Guide + Form Template"
        />
        <meta
          name="twitter:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />

        <link
          rel="canonical"
          href="https://technology-advice.vercel.app/software-reviews/payroll"
        />
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
                Employee Disciplinary Action Guide + Form Template
              </span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
              Employee Disciplinary Action  
              <span className="block mt-2 sm:mt-4">Guide + Form Template</span>
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
                  decisions, so we provide you with information for all vendors
                  — even those that don't pay us.
                </p>
              </div>
            </div>
          </div>

          {/* Publication Date */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span>Published Date: May 26, 2025</span>
            </div>
          </div>
        </div>
      </div>

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
                <div className="mt-8 pt-6 border-t border-gray-200">
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
              <section id="what-is-disciplinary-action">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                     What is disciplinary action (and why it matters)
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                   
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Disciplinary action is a formal response to workplace behavior that violates company policies or disrupts business operations. At its best, it’s a structured way to step in early to help employees course-correct before a small issue turns into a serious one.
                     </p>  
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
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            keka
                          </span>
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          Keka HR
                          <br />
                          <span className="text-lg">Projects</span>
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
                       360 Degree Feedback, Applicant Tracking, Benefits Administration, and 10 more </div>
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
             
              <section id="when-to-use-disciplinary-action">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    When to use disciplinary action and when not to
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                   
                    <p className="text-gray-700 leading-relaxed mb-6">
                      It may be easy to reach for an employee disciplinary action form when someone misses the mark, but not every misstep warrants formal discipline. Sometimes what looks like misconduct is really a training gap, poor onboarding, unclear expectations, or a miscommunication. </p>            
                  </div>
                </div>
              </section>    

              <section id="disciplinary-models-and-sanctions">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Disciplinary models and sanctions
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                   
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Most employee disciplinary action plans take one of three models: positive, progressive, or hybrid, which is a combination of both. You should choose a model and stick to it. Inconsistency in how policies or rules are followed, especially between departments, is where most HR headaches begin. </p>            
                  </div>
                </div>
              </section>  


                    {/* Expandable Sections */}
<div className="space-y-4">
  
 
                      {/* Counseling or coaching */}
<div  div className="border border-gray-200 rounded-lg">
  <button
    onClick={() => toggleSection("Counseling")}
    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
  >
    <h3 className="text-lg font-semibold text-gray-900">Counseling or coaching</h3>
    <div className="text-green-600">
      {expandedSections["Counseling"] ? (
        <Minus className="w-5 h-5" />
      ) : (
        <Plus className="w-5 h-5" />
      )}
    </div>
  </button>

  {expandedSections["Counseling"] && (
    <div className="px-4 pb-4 border-t border-gray-200">
      <div className="pt-4 space-y-4 text-gray-700 text-sm">
        <p>
         Managers or HR representatives hold one-on-one conversations with employees to clarify expectations and correct the infraction or behavior before it worsens. This is your early-stage intervention, informal yet documented, and is typically used to address minor issues, such as incomplete work or a missed deadline.</p>

      </div>
    </div>

  )}</div></div>

  {/* verbal warning */}
  <div className="border border-gray-200 rounded-lg">
  <button
    onClick={() => toggleSection("Verbal")}
    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
  >
    <h3 className="text-lg font-semibold text-gray-900">Verbal warning</h3>
    <div className="text-green-600">
      {expandedSections["Verbal"] ? (
        <Minus className="w-5 h-5" />
      ) : (
        <Plus className="w-5 h-5" />
      )}
    </div>
  </button>

  {expandedSections["Verbal"] && (
    <div className="px-4 pb-4 border-t border-gray-200">
      <div className="pt-4 space-y-4 text-gray-700 text-sm">
        <p>
         A verbal warning is a formal part of the disciplinary process, even if it doesn’t involve written consequences yet. The process is similar to an informal counseling session. But, despite the name, managers or HR staff should document the conversation, get signatures from meeting participants, and add it to the employee’s personnel file.</p>

      </div>
    </div>

  )}
</div>


{/* //why-you-can-trust-my-advice */}
<div className="border border-gray-200 rounded-lg">
  <button
    onClick={() => toggleSection("why-you-can-trust-my-advice")}
    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
  >
    <h3 className="text-lg font-semibold text-gray-900">Why you can trust my advice</h3>
    <div className="text-green-600">
      {expandedSections["why-you-can-trust-my-advice"] ? (
        <Minus className="w-5 h-5" />
      ) : (
        <Plus className="w-5 h-5" />
      )}
    </div>
  </button>

  {expandedSections["why-you-can-trust-my-advice"] && (
    <div className="px-4 pb-4 border-t border-gray-200">
      <div className="pt-4 space-y-4 text-gray-700 text-sm">
        <p>
          My recommendations for the best payroll software for small companies are based on more than five years of experience writing about and evaluating payroll systems for small to mid-sized businesses (SMBs). I also have 10 years of expertise handling different facets of human resources, including managing HRIS, time tracking, and pay processing software. These allowed me to provide insights to help business owners determine which payroll platform best fits their needs. </p>
</div>
    </div>
  )}
</div>
                  
                
              
              

              {/* Disciplinary action form template */}
              <section id="disciplinary-action-form-template">
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                     Disciplinary action form template
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                   
                    <p className="text-gray-700 leading-relaxed mb-6">
                     Documentation is key, so it’s helpful to prepare an employee disciplinary action form and disciplinary write ups examples. Add these to your policy and employee handbook, including a guide on how to fill it out. </p>            
                  </div>
                </div>
              </section> 
     

      

              {/* Employee disciplinary process steps */}
              <section
                id="employee-disciplinary-process-steps"
                className="mt-8 max-w-7xl mx-auto"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 p-6 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                      Employee disciplinary process steps
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Each step of the disciplinary process should be documented and tied to specific policies. Here’s a breakdown of what each step typically involves:
                    </p>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                      Step 1: Identify the problem and investigate
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Before taking any action, you need a clear, fact-based understanding of the issue at hand. That’s where a workplace investigation comes in. Use it to determine what happened, when the incident occurred, who was involved, and whether any policies were violated.  </p>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                      Step 2: Have a one-on-one meeting
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Most disciplinary action plans start with a one-on-one meeting between the employee and their manager. Often called counseling or coaching sessions, this informal meeting gives the manager a chance to address minor issues early, before they turn into a serious problem.  </p>
                 
                  </div></div>
</section>
                  
  <section
                id="common-mistakes-to-avoid"
                className="mt-8 max-w-7xl mx-auto"
              >
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 p-6 sm:p-8 transition-shadow duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                      Common mistakes to avoid
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Even with a solid process in place, it’s easy to make mistakes that weaken your disciplinary action plan, or cause confusion for the employee. Here are some of the pitfalls I see most often, and how to steer clear of them.  </p>
                    
                  </div></div>
</section>
              {/* products details */}

              <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 sm:p-8 transition-shadow duration-300 overflow-hidden">
                <div className="p-6  md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/project3.jpg" // Replace with your actual logo path
                          alt="Zoho Projects Logo"
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
                      A true employee experience platform, Keka is the SME HR Tech space leader in India. It enables businesses to put to sleep mundane and tedious tasks of workplace administration. The product helps organisations in managing their HR processes from hire to retire while ensuring an awesome user experience to the employees. Keka follows an employee-first approach, making it easier for any company to make the journey from good to great. Learn More About Keka HR </p>

                    <Link
                      href="/learn-more/Keka-hr-projects"
                      className="text-sm sm:text-base md:text-lg text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 font-semibold"
                    >
                      Learn More About Keka HR
                    </Link>
                  </div>

                  {/* Visit Website Button */}
                  <div className="flex justify-end">
                    <Link
                      href="https://www.zoho.com/projects/"
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
              

            

             

              {/* FAQs */}
              <section id="payroll-faqs" className="mt-8 max-w-7xl mx-auto">
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Payroll software FAQs
                  </h1>

                  {/* FAQ Accordion */}
                  <div className="space-y-0 -mt-8">
                    {faqData.map((item, index) => (
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
          </div>
      </div>
      </div>
      
     </>
  );
}