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

export default function ProjectManagementGuide() {
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
      id: "why-is-project-management-methodology-important",
      title: "Why is project management methodology important?",
      active: false,
    },
    {
      id: "types-of-project-management-methodologies",
      title: "Types of project management methodologies",
      active: false,
    },
 
    {
      id: "emerging-or-hybrid-project-management-methodologies",
      title: "Emerging or hybrid project management methodologies",
      active: false,
    },
    {
      id: "different-types-of-project-managers",
      title: "Different types of project managers and their roles",
      active: false,
    },
    {
      id: "choosing-a-project-management-methodology",
      title: "Choosing a project management methodology",
      active: false,
    },
    {
      id: "project-management-faqs",
      title: "Project management FAQs",
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

  const faqData = [
    {
      question: "What is the best tool for project management?",
      answer:
        "The best project management tool depends on your specific needs, team size, and project complexity. Popular options include Asana, Trello, Monday.com, Jira, and Microsoft Project. Consider factors like ease of use, collaboration features, integration capabilities, and pricing when making your choice.",
    },
    {
      question: "What is the most common project management tool?",
      answer:
        "Microsoft Project and Excel are among the most widely used project management tools in traditional corporate environments. However, cloud-based tools like Asana, Trello, and Monday.com have gained significant popularity due to their user-friendly interfaces and collaboration features.",
    },
    {
      question: "What methodology is best for small projects?",
      answer:
        "For small projects, Agile or Kanban methodologies are often ideal due to their flexibility and quick iteration cycles. Waterfall can also work well for small projects with clearly defined requirements and minimal expected changes. The key is choosing a methodology that matches your project's complexity and requirements.",
    },
  ];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Top 5 Types of Project Management Methodologies";

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
        <title>Top 5 Types of Project Management Methodologies</title>
        <meta
          name="description"
          content="Understanding the different project management systems that support top project management methodologies will help you make the right decisions for your projects."
        />
        <meta property="og:title" content="Top 5 Types of Project Management Methodologies" />
        <meta property="og:description" content="Understanding the different project management systems that support top project management methodologies will help you make the right decisions for your projects." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 5 Types of Project Management Methodologies" />
        <meta name="twitter:description" content="Understanding the different project management systems that support top project management methodologies will help you make the right decisions for your projects." />
      </Head>

      <div className="min-h-screen  bg-[#0E1F1C] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"></div>

        {/* Main content container */}
         <div className="min-h-[70vh] bg-[#0E1F1C] text-white relative overflow-hidden">
  {/* Background decorative elements - reduced size */}
  <div className="absolute top-16 right-8 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 border border-white/10 rounded-full"></div>
  <div className="absolute top-32 right-16 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border border-white/5 rounded-full"></div>
  <div className="absolute bottom-16 left-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"></div>

  {/* Main content container with adjusted padding */}
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
    {/* Breadcrumb Navigation */}
    <nav className="pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-10" aria-label="Breadcrumb">
      <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm lg:text-base">
        <Link href="/" className="text-white/80 hover:text-white transition-colors group" aria-label="Go to homepage">
          <Home className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
        </Link>
        <Link href="/" className="text-white/80 hover:text-white transition-colors cursor-pointer" aria-label="Go to homepage">
          <span>Home</span>
        </Link>
        <span className="text-white/60">›</span>
        <Link href="/blog" className="text-white/80 hover:text-white transition-colors cursor-pointer">
          <span>Blog</span>
        </Link>
        <span className="text-white/60">›</span>
        <span className="text-white font-medium">
          Top 5 Types of Project Management Methodologies
        </span>
      </div>
    </nav>

    {/* Main Heading - adjusted sizes */}
    <div className="max-w-3xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8 lg:mb-10">
        Top 5 Types of Project
        <span className="block mt-1 sm:mt-2">Management Methodologies</span>
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
        Understanding the different project management systems that support top project management methodologies will help you make the right decisions for your projects.
      </p>
    </div>

    {/* Author and Reviewer Section - adjusted spacing */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 lg:space-x-8 space-y-4 sm:space-y-0 mb-4 sm:mb-8 lg:mb-10">
      {/* Author */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden flex-shrink-0 relative">
          <Image
            src="/images/bardon.png"
            alt="Brandon Matthews - Author"
            fill
            sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div>
          <p className="text-xs sm:text-sm lg:text-base text-white/80 mb-1">
            Written by
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-semibold">
            Brandon Matthews
          </p>
          <p className="text-xs text-white/70">
            PM, Content Strategist
          </p>
        </div>
      </div>

      {/* Reviewer */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden flex-shrink-0 relative">
          <Image
            src="/images/Web-Webster.png"
            alt="Tech Reviewer"
            fill
            sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div>
          <p className="text-xs sm:text-sm lg:text-base text-white/80 mb-1">
            Reviewed by
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-semibold">
            Tech Reviewer
          </p>
        </div>
      </div>
    </div>

    {/* Disclaimer Section - adjusted padding */}
    <div className="max-w-3xl xl:max-w-4xl">
      <div className="flex items-start space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg p-3 sm:p-4 lg:p-6 border border-white/10">
        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm lg:text-base leading-relaxed text-white/90">
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

    {/* Publication Date - adjusted spacing */}
    <div className="mt-6 sm:mt-8 lg:mt-10 pb-6 sm:pb-8 lg:pb-10">
      <div className="flex items-center space-x-2 text-xs sm:text-sm lg:text-base text-white/70">
        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
        <span>Published Date: January 18, 2025</span>
      </div>
    </div>
  </div>
</div>
</div>

      {/* Main Content Section */}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Left Sidebar */}
            <div className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Why is project management methodology important? */}
              <section id="why-is-project-management-methodology-important">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
                  <header className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Why is project management methodology important?
                    </h2>
                  </header>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Without a well-defined project strategy that uses the boundaries and objectives of a project, a project management methodology gives project managers a set of guidelines and techniques to implement that strategy effectively for successful completion.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      These methodologies provide a clear framework that guides every stage of the project, from initiation to completion. While they aren't one-size-fits-all, these methodologies help project managers break down complex tasks into manageable steps, making their task by day simpler and more focused.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Choosing the right methodology can also improve team collaboration and communication. Different methodologies prioritize various aspects, such as speed, flexibility or precision. Agile, for example, focuses on iterative progress and collaboration. Waterfall emphasizes structure, following a linear progression.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Using the right project management methodology:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                      <li>Provides project managers with a roadmap to success</li>
                      <li>Improves communication and collaboration among stakeholders</li>
                      <li>Includes safeguards and milestones to track project progress</li>
                      <li>Reduces risks and better contingency planning</li>
                      <li>Increases the likelihood of meeting project goals on time and within budget</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Featured Partners Section */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Featured partners</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Advertisement</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-lg">Z</span>
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          Zoho Projects
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
                      <div className="font-medium text-gray-900">Any Company Size*</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Key Capabilities</div>
                      <div className="font-medium text-gray-900">Agile Development, Workplace Intelligence, Project SaaS & more</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Integrations</div>
                      <div className="font-medium text-gray-900">Bitbucket, GitHub, Google Calendar, and 7 more</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of project management methodologies */}
              <section id="types-of-project-management-methodologies">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
                  <header className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Types of project management methodologies
                    </h2>
                  </header>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Most project management methods offer distinct frameworks and approaches to achieving project goals. Each methodology is suited to different project types, team dynamics, project management needs, and industry standards.
                    </p>
                  </div>
                </div>
              </section>

     

 

{/* Emerging or hybrid methodologies */}
<section id="emerging-or-hybrid-project-management-methodologies">
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Emerging and Hybrid Methodologies
      </h2>
    </header>
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-700 leading-relaxed mb-6">
        As projects become more complex, many organizations are blending methodologies or adopting new approaches to meet their unique needs.
      </p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Hybrid Approaches</h3>
          <p className="text-gray-700 mt-2">
            Combining Waterfall's structure with Agile's flexibility. For example, using Waterfall for high-level planning and Agile for execution.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Lean Startup</h3>
          <p className="text-gray-700 mt-2">
            Emphasizes rapid prototyping, validated learning, and iterative product releases.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Design Thinking</h3>
          <p className="text-gray-700 mt-2">
            Human-centered approach focusing on understanding user needs through empathy.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Different types of project managers */}
<section id="different-types-of-project-managers">
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Types of Project Managers and Their Roles
      </h2>
    </header>
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-700 leading-relaxed mb-6">
        Different methodologies often require different project management approaches and skill sets.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Traditional Project Manager</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Focuses on planning and predictability</li>
            <li>Strong process orientation</li>
            <li>Excellent at risk management</li>
            <li>Common in construction and engineering</li>
          </ul>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Agile Coach/Scrum Master</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Facilitates rather than directs</li>
            <li>Removes impediments for the team</li>
            <li>Strong communication skills</li>
            <li>Common in software development</li>
          </ul>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Owner</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Represents stakeholder interests</li>
            <li>Manages the product backlog</li>
            <li>Makes priority decisions</li>
            <li>Deep understanding of customer needs</li>
          </ul>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Program Manager</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Oversees multiple related projects</li>
            <li>Strategic rather than tactical focus</li>
            <li>Aligns projects with organizational goals</li>
            <li>Strong leadership skills</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Choosing a methodology */}
<section id="choosing-a-project-management-methodology">
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Choosing a Project Management Methodology
      </h2>
    </header>
    <div className="prose prose-lg max-w-none">
      <p className="text-gray-700 leading-relaxed mb-6">
        Selecting the right methodology depends on various factors including project type, organizational culture, and team composition.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Key Considerations:</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-lg">Project Complexity</h4>
          <p className="text-gray-600 mt-2">Simple vs. complex requirements</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-lg">Team Size</h4>
          <p className="text-gray-600 mt-2">Small teams vs. large distributed teams</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-lg">Risk Tolerance</h4>
          <p className="text-gray-600 mt-2">Ability to accommodate changes</p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-lg">Industry Standards</h4>
          <p className="text-gray-600 mt-2">Regulatory or compliance requirements</p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Decision Framework:</h3>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>Assess project requirements and constraints</li>
        <li>Evaluate team skills and experience</li>
        <li>Consider organizational culture</li>
        <li>Analyze stakeholder expectations</li>
        <li>Review past project successes/failures</li>
        <li>Select and adapt methodology as needed</li>
      </ol>
    </div>
  </div>
</section>

{/* FAQs */}
<section id="project-management-faqs">
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 sm:p-8 mb-6">
    <header className="mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Project Management FAQs
      </h2>
    </header>
    
    <div className="space-y-6">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
            <div className="ml-4 flex-shrink-0">
              {openItems[index] ? (
                <Minus className="w-5 h-5 text-green-600" />
              ) : (
                <Plus className="w-5 h-5 text-green-600" />
              )}
            </div>
          </button>
          
          {openItems[index] && (
            <div className="mt-4 text-gray-700">
              {item.answer}
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