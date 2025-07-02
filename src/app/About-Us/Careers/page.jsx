"use client";
import Link from 'next/link';

export default function CareersPage() {
  return (
    <>
      {/* Careers Section */}
      <div className="min-h-screen p-8" style={{ backgroundColor: '#0E1F1C', color: 'white' }}>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm mb-8">
            <Link href="/" className="hover:underline">Home</Link>
            <span> &gt; Careers</span>
          </div>

          {/* Main content */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Let&apos;s grow together</h1>
            
            <p className="mb-4">
              We&apos;re TechnologyAdvice - the team behind a portfolio of leading B2B
              tech publications. If you&apos;re here, it&apos;s because all of our brands share a
              common mission – and a single team driving them forward.
            </p>
            
            <p className="mb-8">
              At TechnologyAdvice, you&apos;ll work alongside a diverse group of passionate
              individuals who love growing as professionals and learning new things.
              No two days are exactly the same here, and you&apos;ll face opportunities to
              expand your skill set, step outside of your comfort zone, and contribute to
              the best group you&apos;ll ever work with.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-6 py-3 bg-white text-[#0E1F1C] font-medium rounded hover:bg-gray-200 transition">
                Subscribe to our Talent Community →
              </button>
              <button className="px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-[#0E1F1C] transition">
                Apply Now
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap gap-8 text-lg">
            <Link href="#" className="hover:underline">Culture</Link>
            <Link href="#" className="hover:underline">Opportunities</Link>
            <Link href="#" className="hover:underline">FAQs</Link>
          </div>
        </div>
      </div>

      {/* Culture Compass Section */}
      <div className="min-h-screen p-8 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          {/* Optional breadcrumb */}
          <div className="text-sm mb-8 text-gray-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span> &gt; </span>
            <Link href="/about" className="hover:underline">About</Link>
            <span> &gt; Culture Compass</span>
          </div>

          {/* Main content */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Our Culture Compass</h1>
            
            <p className="mb-4 text-lg">
              At TechnologyAdvice we believe our success starts with attracting, hiring, and developing amazing people for our team. In sharing who we are and how we work, we&apos;re giving you insight into our culture so you can make sure it&apos;s a match for you. Our Culture Compass was created to be remarkably explicit and transparent about our unique culture to give you the best opportunity to thrive in our environment and reach your full potential.
            </p>
            
            <p className="mb-8 text-lg">
              We want TA to be the place for you and hope our culture resonates with you! If not, that&apos;s okay. We believe in ensuring that everyone understands and aligns with our team&apos;s goals, fostering a collective sense of purpose that drives our actions and dedication.
            </p>
            
            {/* Questions section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">What are TA&apos;s core values?</h2>
              
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>What makes someone thrive at TA?</li>
                <li>What is TA&apos;s work environment like?</li>
                <li>Is TechnologyAdvice the company for you?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="min-h-screen p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl font-bold mb-8 text-gray-800">What our team members have to say</h1>
          
          {/* Divider */}
          <div className="border-t border-gray-300 mb-12"></div>
          
          {/* Testimonials */}
          <div className="space-y-12">
            {/* Testimonial 1 */}
            <div className="flex items-start">
              <div className="text-4xl font-bold text-gray-300 mr-4">6.6</div>
              <p className="text-lg text-gray-700">
                There are endless opportunities to explore and advance your career at TechnologyAdvice. The company invests a lot of training and time into its team members and it&apos;s apparent that you get what you put in. If you want growth, opportunity, and an exciting fast-paced environment, TA is the right place for you.
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="flex items-start">
              <div className="text-4xl font-bold text-gray-300 mr-4">6.6</div>
              <p className="text-lg text-gray-700">
                You will grow really fast at TA and learn a lot quickly. You will learn how to challenge yourself and stretch your capabilities. The organization is goal driven and focused. The team is fun and my colleagues are great to work with and people are friendly.
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="flex items-start">
              <div className="text-4xl font-bold text-gray-300 mr-4">6.6</div>
              <p className="text-lg text-gray-700">
                I have never been a part of a company that is as positive as TechnologyAdvice. TA&apos;s management lives by the 5 core values, and this trickles down throughout the entire organization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="min-h-screen p-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h1 className="text-4xl font-bold mb-12 text-gray-800">Awards</h1>
          
          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Award 1 - Inc. 5000 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Inc. 5000</h3>
              <p className="text-lg font-semibold text-gray-600">6-TIME AWARD WINNER</p>
            </div>
            
            {/* Award 2 - Inc. Best Workplaces */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Inc. Best Workplaces</h3>
              <p className="text-lg font-semibold text-gray-600">2019 WINNER</p>
            </div>
            
            {/* Award 3 - Deloitte Fast 500 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Deloitte Technology Fast 500</h3>
              <p className="text-lg font-semibold text-gray-600">2022 NORTH AMERICA</p>
            </div>
            
            {/* Award 4 - Forbes */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Forbes</h3>
              <p className="text-lg font-semibold text-gray-600">AMERICA&apos;S BEST STARTUP EMPLOYERS</p>
            </div>
            
            {/* Award 5 - Top Work Places */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Top Work Places</h3>
              <p className="text-lg font-semibold text-gray-600">2022 USA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="min-h-screen p-8" style={{ backgroundColor: '#0E1F1C' }}>
        <div className="max-w-4xl mx-auto text-white">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold mb-12">Benefits of working on our team</h1>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Career Development */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-green-300">Career development</h2>
              <p className="text-gray-200">
                Explore virtually endless career opportunities with development meetings, DE&I events, book clubs, Emerging Leaders and Leadership Academy, and more!
              </p>
            </div>
            
            {/* Health and Wellness */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-green-300">Health and wellness</h2>
              <p className="text-gray-200">
                Enjoy comprehensive health, dental, and vision benefits, plus other great additionals like Headspace and fitness reimbursements.
              </p>
            </div>
            
            {/* Learning and Development */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-green-300">Learning and development</h2>
              <p className="text-gray-200">
                Company-wide access to on-demand learning management systems and training.
              </p>
            </div>
            
            {/* Mentorship */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-green-300">Mentorship</h2>
              <p className="text-gray-200">
                Gain a mentee or mentor (or both!) as part of a formalized mentorship program.
              </p>
            </div>
            
            {/* Team Activities */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-green-300">Team activities</h2>
              <p className="text-gray-200">
                Company-wide hackathons, in-person, and virtual events.
              </p>
            </div>
            
            {/* Paid Time Off */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-3 text-green-300">Paid time off</h2>
              <p className="text-gray-200">
                Enjoy work-life balance with generous paid time off.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="min-h-screen p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold mb-12 text-gray-800">Core values</h1>
          
          {/* Values Grid */}
          <div className="space-y-12">
            
            {/* Value 1: Be Transparent */}
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Be transparent</h2>
              <p className="text-lg text-gray-600">
                As stakeholders of TA, we deserve to have honest, open, & consistent information about our business. Every employee, no matter the level on the org chart, practices transparency about their work.
              </p>
            </div>
            
            {/* Value 2: Challenge Mediocrity */}
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Challenge mediocrity</h2>
              <p className="text-lg text-gray-600">
                We attack our goals with passion & a sense of urgency. We hold each other accountable & produce results above & beyond expectations.
              </p>
            </div>
            
            {/* Value 3: Crave Knowledge */}
            <div className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Crave knowledge</h2>
              <p className="text-lg text-gray-600">
                At TechnologyAdvice we continually increase our knowledge, deepen our understanding, & invest in our personal and professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}