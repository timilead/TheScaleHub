const MODULES = [
  // ---------- MODULE 1 ----------
  {
    id: 1,
    title: "Diagnosing the Sales Problem",
    description: "Learn to identify the root causes behind declining or stagnant sales.",
    content: `
      <h2>Understanding Why Sales Decline</h2>
      <p>Before you can fix low sales, you need to understand <strong>why</strong> your sales are low. Many business owners jump straight to tactics — running ads, offering discounts, posting on social media — without ever diagnosing the actual problem. This is like taking medicine without knowing what illness you have.</p>
      <p>Sales problems generally fall into a few key categories: you're reaching the wrong people, your offer isn't compelling, your process has leaks, or external market conditions have shifted. In this module, we'll walk through a systematic approach to figuring out which of these is causing your issue.</p>
      <h2>The 5 Core Areas to Audit</h2>
      <h3>1. Traffic & Visibility</h3>
      <p>Are enough people even seeing your product or service? If you're getting low foot traffic, low website visits, or low impressions, your first problem might simply be <em>awareness</em>. Check your analytics: How many people visit your site per month? How many see your social posts? How many walk into your store?</p>
      <h3>2. Lead Quality</h3>
      <p>Even if traffic is decent, are those visitors your ideal customers? If you're attracting people who can't afford your product, don't need it, or aren't ready to buy — your sales will suffer no matter how good your pitch is.</p>
      <h3>3. Conversion Rate</h3>
      <p>Of the people who see your offer, how many are actually buying? A low conversion rate often means your messaging, pricing, or buying process needs work. Industry benchmarks can help you see where you stand.</p>
      <h3>4. Customer Retention</h3>
      <p>Are customers buying once and never coming back? Repeat customers are typically easier and cheaper to sell to, so low retention can drag total sales down significantly.</p>
      <h3>5. External Factors</h3>
      <p>Has competition increased? Has the economy shifted? Are seasonal trends working against you? Sometimes the problem is partly external — and knowing that helps you calibrate your expectations and response.</p>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Create a simple "Sales Diagnostic Scorecard" — rate each of the 5 areas above from 1 to 5. This gives you a quick visual map of where your biggest gaps are so you can prioritize the right fixes first.</p>
      </div>
      <h2>How to Gather Diagnostic Data</h2>
      <p>You don't need expensive tools to start diagnosing. Here are free and low-cost methods:</p>
      <ul>
        <li><strong>Google Analytics</strong> — Track website visitors, bounce rate, and page views</li>
        <li><strong>Social media insights</strong> — See reach, engagement, and follower demographics</li>
        <li><strong>Customer surveys</strong> — Ask existing customers why they bought (and ask lost leads why they didn't)</li>
        <li><strong>Sales records</strong> — Look at trends over the past 6–12 months</li>
        <li><strong>Competitor analysis</strong> — See what others in your space are doing differently</li>
      </ul>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p>Sara owns a small bakery. Sales dropped 30% over three months. Instead of immediately running ads, she checked her data: foot traffic was the same, but her average order value had dropped. She discovered that after removing two popular items from the menu (to cut costs), customers were spending less per visit. The fix wasn't more marketing — it was bringing back best-sellers and bundling them into combos.</p>
      </div>
      <h2>Common Diagnostic Mistakes</h2>
      <ul>
        <li><strong>Assuming you know the problem</strong> — Always verify with data, not gut feeling</li>
        <li><strong>Fixing symptoms, not causes</strong> — A discount might boost sales temporarily, but won't fix a broken funnel</li>
        <li><strong>Ignoring customer feedback</strong> — Your customers often know exactly what's wrong</li>
        <li><strong>Comparing to the wrong benchmarks</strong> — Compare your metrics to your industry, not to unrelated businesses</li>
      </ul>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Always diagnose before you prescribe — audit all 5 core areas</li>
          <li>Use data (even simple data) to identify the real bottleneck</li>
          <li>Talk to customers and lost leads for qualitative insights</li>
          <li>Don't confuse symptoms with root causes</li>
          <li>Prioritize the area with the biggest gap first</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "What is the FIRST step you should take when experiencing low sales?",
        options: [
          "Immediately run paid advertisements",
          "Diagnose the root cause of the problem",
          "Lower all your prices by 50%",
          "Copy what competitors are doing"
        ],
        correct: 1
      },
      {
        question: "Which of the following is NOT one of the 5 core areas to audit?",
        options: [
          "Traffic & Visibility",
          "Lead Quality",
          "Employee satisfaction surveys",
          "Customer Retention"
        ],
        correct: 2
      },
      {
        question: "In the bakery example, what was the actual cause of declining sales?",
        options: [
          "Lack of marketing and advertising",
          "Too much competition nearby",
          "Removing popular menu items reduced average order value",
          "The bakery moved to a worse location"
        ],
        correct: 2
      },
      {
        question: "Why is comparing your metrics to the wrong benchmarks a mistake?",
        options: [
          "It makes your reports look bad",
          "It can lead to incorrect conclusions about performance",
          "Benchmarks are always inaccurate",
          "It takes too much time to research"
        ],
        correct: 1
      }
    ]
  },
   // ---------- MODULE 2 ----------
  {
    id: 2,
    title: "Defining the Target Audience",
    description: "Identify and understand exactly who your ideal customer is.",
    content: `
      <h2>Why Targeting Everyone Means Reaching No One</h2>
      <p>One of the most common reasons small businesses struggle with sales is that they're trying to sell to everyone. When your message tries to appeal to all people, it ends up resonating with none. Defining a clear target audience is the foundation of effective marketing and sales.</p>
      <p>Your target audience is the specific group of people most likely to buy your product or service. They share common characteristics like demographics, behaviors, pain points, and goals. The better you understand them, the more effectively you can craft offers that feel tailor-made.</p>
      <h2>Building Your Customer Avatar</h2>
      <p>A customer avatar (or buyer persona) is a detailed profile of your ideal customer. Here's what to include:</p>
      <ul>
        <li><strong>Demographics:</strong> Age, gender, location, income level, education</li>
        <li><strong>Psychographics:</strong> Values, interests, lifestyle, attitudes</li>
        <li><strong>Pain Points:</strong> What problems are they trying to solve?</li>
        <li><strong>Goals:</strong> What outcomes do they want?</li>
        <li><strong>Buying Behavior:</strong> Where do they shop? How do they research purchases?</li>
        <li><strong>Objections:</strong> What might prevent them from buying?</li>
      </ul>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Give your customer avatar a name and picture. "Marketing Mary, 35, small business owner, struggles with social media, values practical solutions over theory." This makes your avatar feel real and helps everyone on your team create consistent messaging.</p>
      </div>
      <h2>Research Methods for Finding Your Audience</h2>
      <h3>Analyze Existing Customers</h3>
      <p>Your best customers are a goldmine of data. Look at who has already bought from you — especially repeat customers and high-value buyers. What do they have in common?</p>
      <h3>Survey and Interview</h3>
      <p>Reach out to 10–20 customers and ask: Why did you choose us? What problem were you trying to solve? What almost stopped you from buying? Their answers will reveal your real value proposition.</p>
      <h3>Study Competitor Audiences</h3>
      <p>Look at who your competitors are targeting. Read their reviews, browse their social media followers, and note the language their customers use. This reveals market expectations and gaps you can fill.</p>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p>Tom runs an online fitness coaching business. He initially marketed to "anyone who wants to get fit." Sales were flat. After surveying his 12 existing clients, he discovered 10 of them were men aged 35–50 who wanted to lose weight without giving up their busy schedules. He narrowed his messaging to "Busy professionals over 35: lose 20 pounds in 90 days without living in the gym." His conversion rate tripled in two months.</p>
      </div>
      <h2>Segmenting Your Market</h2>
      <p>You may have multiple audience segments. That's fine — but each segment should get its own messaging. Common segmentation approaches:</p>
      <ul>
        <li><strong>By problem type:</strong> Different customers may have different pain points</li>
        <li><strong>By budget tier:</strong> Price-sensitive vs. premium buyers</li>
        <li><strong>By channel:</strong> Some find you through social media, others through referrals</li>
        <li><strong>By stage:</strong> Beginners vs. experienced buyers need different messages</li>
      </ul>
      <div class="tip-box tip-warning">
        <div class="tip-box-title">⚠️ Common Mistake</div>
        <p>Don't confuse "target audience" with "only audience." Defining a target doesn't mean you reject other customers — it means you focus your messaging and marketing dollars where they'll have the biggest impact.</p>
      </div>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Trying to reach everyone dilutes your message and wastes resources</li>
          <li>Build a detailed customer avatar including demographics, pain points, and goals</li>
          <li>Use real customer data and interviews — don't guess</li>
          <li>Segment your market for more precise messaging</li>
          <li>Targeting a niche makes your marketing more effective, not more limiting</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "What is a 'customer avatar'?",
        options: [
          "A profile picture for your social media",
          "A detailed profile of your ideal customer",
          "A customer service chatbot",
          "A type of marketing advertisement"
        ],
        correct: 1
      },
      {
        question: "What happened when Tom narrowed his fitness coaching audience?",
        options: [
          "He lost most of his clients",
          "His conversion rate tripled",
          "He had to raise prices significantly",
          "He needed to hire more staff"
        ],
        correct: 1
      },
      {
        question: "Which is NOT a recommended way to research your target audience?",
        options: [
          "Analyze your existing best customers",
          "Survey and interview customers",
          "Assume based on personal preferences",
          "Study competitor audiences"
        ],
        correct: 2
      },
      {
        question: "What does 'defining a target audience' NOT mean?",
        options: [
          "Focusing marketing on the most likely buyers",
          "Refusing to sell to anyone outside the target",
          "Creating messaging that resonates with specific groups",
          "Understanding your customers' pain points"
        ],
        correct: 1
      }
    ]
  },
  // ---------- MODULE 3 ----------
  {
    id: 3,
    title: "Improving Value Proposition & Messaging",
    description: "Craft a compelling offer that clearly communicates your unique value.",
    content: `
      <h2>What Is a Value Proposition?</h2>
      <p>Your value proposition is the clear statement of why a customer should buy from you instead of your competitor (or instead of doing nothing). It answers three questions: What do you offer? Who is it for? Why is it better or different?</p>
      <p>A weak value proposition is one of the top reasons businesses struggle with sales. If your customer can't immediately understand why your product matters to them, they'll move on — usually within seconds.</p>
      <h2>The Value Proposition Formula</h2>
      <p>A strong value proposition follows this pattern:</p>
      <p><strong>"We help [specific audience] achieve [specific outcome] by/through [your unique method/advantage], without [common pain point/fear]."</strong></p>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p><strong>Weak:</strong> "We sell high-quality accounting software."<br>
        <strong>Strong:</strong> "We help freelancers save 5 hours per week on bookkeeping with automated invoicing and expense tracking — no accounting degree needed."</p>
        <p>Notice how the strong version specifies who it's for, what they'll gain, and removes a common fear.</p>
      </div>
      <h2>Messaging That Converts</h2>
      <h3>Lead with Benefits, Not Features</h3>
      <p>Features describe what your product does. Benefits describe what your customer gets. Customers care about outcomes — how their life will improve. Always translate features into benefits:</p>
      <ul>
        <li><strong>Feature:</strong> "24/7 customer support" → <strong>Benefit:</strong> "Get help whenever you need it, so you never feel stuck"</li>
        <li><strong>Feature:</strong> "Made from organic materials" → <strong>Benefit:</strong> "Safe for your family and gentle on the planet"</li>
        <li><strong>Feature:</strong> "One-click checkout" → <strong>Benefit:</strong> "Buy in seconds — no long forms or hassle"</li>
      </ul>
      <h3>Use Your Customer's Language</h3>
      <p>Review customer testimonials, survey responses, and online reviews. Note the exact words and phrases they use to describe their problems and desired outcomes. Mirror that language in your marketing — it creates instant recognition and trust.</p>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Read Amazon reviews of books or products in your niche. Pay attention to 3-star reviews — these often contain the most honest and detailed feedback about what people want but aren't getting.</p>
      </div>
      <h3>Create a Clear Hierarchy of Messages</h3>
      <ul>
        <li><strong>Headline:</strong> The core promise (biggest benefit)</li>
        <li><strong>Subheadline:</strong> Who it's for + what it does</li>
        <li><strong>Supporting points:</strong> 3–4 key benefits with brief explanations</li>
        <li><strong>Social proof:</strong> Testimonials, stats, or case studies</li>
        <li><strong>Call to action:</strong> Clear next step</li>
      </ul>
      <div class="tip-box tip-success">
        <div class="tip-box-title">✅ Quick Test</div>
        <p>Show your homepage or main sales page to someone who doesn't know your business. Give them 5 seconds to look at it. Then ask: "What do we sell, who is it for, and why should you care?" If they can't answer all three, your messaging needs work.</p>
      </div>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Your value proposition must clearly answer: What? Who? Why different?</li>
          <li>Lead with benefits (outcomes), not features (specs)</li>
          <li>Use your customers' own language for instant resonance</li>
          <li>Structure your messaging in a clear hierarchy</li>
          <li>Test your messaging with the "5-second rule"</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "What three questions should a value proposition answer?",
        options: [
          "How much, when, and where to buy",
          "What you offer, who it's for, and why it's different",
          "Your company history, team size, and location",
          "Price, shipping cost, and return policy"
        ],
        correct: 1
      },
      {
        question: "Which is an example of a BENEFIT rather than a feature?",
        options: [
          "Our software has 256-bit encryption",
          "The product weighs only 2 pounds",
          "Get help whenever you need it, so you never feel stuck",
          "Available in three color options"
        ],
        correct: 2
      },
      {
        question: "Why should you read Amazon 3-star reviews in your niche?",
        options: [
          "They have the most accurate product specifications",
          "They contain honest feedback about wants and unmet needs",
          "They are the most popular reviews",
          "They usually contain discount codes"
        ],
        correct: 1
      }
    ]
  },
 // ---------- MODULE 4 ----------
  {
    id: 4,
    title: "Increasing Visibility & Marketing",
    description: "Get your business in front of more of the right people consistently.",
    content: `
      <h2>The Visibility Problem</h2>
      <p>You could have the best product in the world, but if no one knows it exists, you won't make a single sale. Visibility — being consistently seen by your target audience — is a non-negotiable requirement for growth.</p>
      <p>Many small businesses rely on just one or two channels (often word-of-mouth and occasional social posts). That's not a strategy — it's a hope. Building a multi-channel visibility system ensures a steady stream of potential customers.</p>
      <h2>Choosing the Right Marketing Channels</h2>
      <p>Not every channel works for every business. Choose based on where your audience spends time:</p>
      <ul>
        <li><strong>Search (SEO & Google Ads):</strong> Best for people actively searching for solutions</li>
        <li><strong>Social Media (organic):</strong> Best for building community and brand awareness</li>
        <li><strong>Social Media (paid):</strong> Best for targeted reach and rapid testing</li>
        <li><strong>Email Marketing:</strong> Best for nurturing leads and retaining customers</li>
        <li><strong>Content Marketing (blog/video):</strong> Best for building authority and long-term traffic</li>
        <li><strong>Partnerships & Referrals:</strong> Best for leveraging existing trust networks</li>
        <li><strong>Local/Community:</strong> Best for brick-and-mortar and local service businesses</li>
      </ul>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Start with 2–3 channels maximum. Master them before adding more. Spreading yourself too thin across 8 platforms means doing none of them well. Go deep, not wide.</p>
      </div>
      <h2>Creating a Content Strategy</h2>
      <p>Content is the fuel of modern marketing. A simple content strategy for a small business:</p>
      <ol>
        <li><strong>Pick one primary content type</strong> (blog posts, short videos, or a podcast)</li>
        <li><strong>Create once, repurpose everywhere</strong> — Turn one blog post into 5 social posts, an email, and an infographic</li>
        <li><strong>Follow the 80/20 rule:</strong> 80% helpful/educational content, 20% promotional</li>
        <li><strong>Be consistent:</strong> One post per week is better than five posts in one week and then silence for a month</li>
      </ol>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p>Priya owns a small interior design studio. She started posting one "Before & After" transformation video on Instagram every Tuesday. Each video took 20 minutes to create. Within 4 months, she had 3,200 followers and was booking 40% of her clients from Instagram DMs. The key was consistency — every single Tuesday — not viral content.</p>
      </div>
      <h2>Paid Advertising Basics</h2>
      <p>If you can afford it, paid ads accelerate visibility. Key principles:</p>
      <ul>
        <li>Start with a small daily budget ($5–$20/day) and test</li>
        <li>Target narrowly at first — specific demographics, interests, or lookalike audiences</li>
        <li>Always send ads to a specific landing page, not your homepage</li>
        <li>Track cost per lead (CPL) and cost per acquisition (CPA), not just clicks</li>
        <li>Test different ad creatives and copy — small changes can double results</li>
      </ul>
      <div class="tip-box tip-warning">
        <div class="tip-box-title">⚠️ Warning</div>
        <p>Never run paid ads without tracking. If you don't know your numbers (cost per lead, cost per sale, return on ad spend), you're guessing — and guessing with ad budgets is expensive.</p>
      </div>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Visibility requires a consistent, multi-channel approach</li>
          <li>Choose channels based on where your audience actually spends time</li>
          <li>Master 2–3 channels before expanding</li>
          <li>Consistency beats virality — show up regularly</li>
          <li>Track everything when running paid ads</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "What is the recommended approach to marketing channels?",
        options: [
          "Be active on every platform available",
          "Master 2–3 channels before adding more",
          "Only use paid advertising",
          "Focus exclusively on word-of-mouth"
        ],
        correct: 1
      },
      {
        question: "What content ratio does the 80/20 rule suggest?",
        options: [
          "80% promotional, 20% educational",
          "80% video, 20% text content",
          "80% helpful/educational, 20% promotional",
          "80% paid content, 20% organic"
        ],
        correct: 2
      },
      {
        question: "In Priya's example, what was the key to her Instagram success?",
        options: [
          "Going viral with one post",
          "Spending heavily on Instagram ads",
          "Weekly consistency every Tuesday",
          "Hiring a social media manager"
        ],
        correct: 2
      },
      {
        question: "Where should paid ads typically direct users?",
        options: [
          "Your personal social media profile",
          "Your homepage",
          "A specific landing page",
          "A competitor comparison site"
        ],
        correct: 2
      }
    ]
  },
 // ---------- MODULE 5 ----------
  {
    id: 5,
    title: "Optimizing the Sales Funnel",
    description: "Remove friction and guide prospects smoothly from interest to purchase.",
    content: `
      <h2>What Is a Sales Funnel?</h2>
      <p>A sales funnel is the journey your customer takes from first hearing about you to making a purchase. It's called a "funnel" because people drop off at each stage — many become aware, fewer show interest, fewer still consider buying, and only a portion actually purchase.</p>
      <p>Your goal is to make each stage as smooth and compelling as possible, reducing unnecessary drop-off and guiding people toward the decision to buy.</p>
      <h2>The 4 Stages of a Sales Funnel</h2>
      <h3>1. Awareness</h3>
      <p>The prospect discovers you exist. This happens through marketing, ads, referrals, or content. At this stage, you need to make a strong first impression and pique curiosity.</p>
      <h3>2. Interest</h3>
      <p>The prospect starts engaging — reading your content, following you on social media, or exploring your website. Your job here is to build trust and demonstrate expertise.</p>
      <h3>3. Decision</h3>
      <p>The prospect is evaluating whether to buy. They compare you to alternatives, look at reviews, and weigh the price against the perceived value. Strong messaging, social proof, and clear offers are critical here.</p>
      <h3>4. Action</h3>
      <p>The prospect becomes a customer. Your checkout process, payment options, and purchase experience must be seamless. Any friction here — confusing forms, hidden fees, slow loading — kills sales.</p>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Map out your current funnel on paper. For each stage, write down: what the customer experiences, what might cause them to leave, and what you could improve. This simple exercise often reveals obvious leaks you've been overlooking.</p>
      </div>
      <h2>Finding and Fixing Funnel Leaks</h2>
      <p>Common leaks and their fixes:</p>
      <ul>
        <li><strong>High bounce rate on landing pages:</strong> Improve headline, add social proof, speed up page load</li>
        <li><strong>Visitors browse but don't add to cart:</strong> Improve product descriptions, add better images, show pricing clearly</li>
        <li><strong>Cart abandonment:</strong> Simplify checkout, offer guest checkout, show trust badges, remove surprise costs</li>
        <li><strong>Leads go cold after initial contact:</strong> Implement follow-up email sequences, retargeting ads</li>
      </ul>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p>An online pet supply store had 2,000 monthly website visitors but only 15 sales. Analysis revealed that 68% of shoppers abandoned their cart at checkout. The culprit? Shipping costs were only revealed at the last step. By showing shipping costs on product pages and offering free shipping over $50, cart abandonment dropped to 31% and monthly sales rose to 52.</p>
      </div>
      <h2>Tools for Funnel Optimization</h2>
      <ul>
        <li><strong>Heatmaps (Hotjar):</strong> See where users click and scroll on your pages</li>
        <li><strong>Analytics (Google Analytics):</strong> Track user flow and identify drop-off points</li>
        <li><strong>A/B Testing:</strong> Test different versions of pages, CTAs, and offers</li>
        <li><strong>Email automation:</strong> Nurture leads who aren't ready to buy immediately</li>
      </ul>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>A sales funnel has 4 stages: Awareness, Interest, Decision, Action</li>
          <li>Map your current funnel to find leaks and drop-off points</li>
          <li>Remove friction at every stage — especially checkout</li>
          <li>Hidden costs are a top killer of conversions</li>
          <li>Use data tools to see exactly where and why people leave</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "What are the 4 stages of a sales funnel in order?",
        options: [
          "Research, Compare, Negotiate, Purchase",
          "Awareness, Interest, Decision, Action",
          "Marketing, Selling, Closing, Upselling",
          "Attract, Engage, Convert, Delight"
        ],
        correct: 1
      },
      {
        question: "In the pet supply store example, what caused high cart abandonment?",
        options: [
          "Product images were low quality",
          "The website was too slow",
          "Shipping costs were revealed only at checkout",
          "They didn't accept credit cards"
        ],
        correct: 2
      },
      {
        question: "Which tool helps you see where users click and scroll on your pages?",
        options: [
          "Google Ads",
          "Mailchimp",
          "Heatmaps (like Hotjar)",
          "WordPress"
        ],
        correct: 2
      }
    ]
  },
  // ---------- MODULE 6 ----------
  {
    id: 6,
    title: "Training Sales Processes",
    description: "Build a repeatable, professional sales process your team can follow.",
    content: `
     <h2>Why You Need a Defined Sales Process</h2>
      <p>Many small businesses treat sales as an art — relying on the owner's charm or a star employee's instincts. The problem? This doesn't scale, and it falls apart when that person is unavailable. A defined sales process turns selling from an unpredictable art into a repeatable system.</p>
      <p>A good sales process provides consistency, makes training easier, enables performance measurement, and ensures no lead falls through the cracks.</p>
      <h2>The 7-Step Sales Process</h2>
      <ol>
        <li><strong>Prospecting:</strong> Identifying potential customers through research, referrals, or inbound leads</li>
        <li><strong>Qualification:</strong> Determining if the prospect has the need, budget, and authority to buy</li>
        <li><strong>Needs Analysis:</strong> Asking questions to deeply understand the prospect's problem and goals</li>
        <li><strong>Presentation:</strong> Showing how your product/service solves their specific problem</li>
        <li><strong>Handling Objections:</strong> Addressing concerns about price, timing, competition, or trust</li>
        <li><strong>Closing:</strong> Asking for the sale with confidence and clarity</li>
        <li><strong>Follow-Up:</strong> Checking in after the sale to ensure satisfaction and encourage referrals</li>
      </ol>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Create a simple one-page "Sales Playbook" that outlines each step with specific talking points, key questions to ask, and common objections with suggested responses. Even a basic playbook dramatically improves consistency.</p>
      </div>
      <h2>Handling Common Objections</h2>
      <p>Most objections fall into 4 categories. Here's how to handle each:</p>
      <ul>
        <li><strong>"It's too expensive"</strong> → Reframe around value and ROI. "How much is this problem costing you every month?"</li>
        <li><strong>"I need to think about it"</strong> → Ask what specifically they need to think about. Often it reveals the real objection.</li>
        <li><strong>"I'm using a competitor"</strong> → Ask what they love and what they wish were different. Position your unique advantage.</li>
        <li><strong>"Not the right time"</strong> → Agree and schedule a follow-up. Ask what would make it the right time.</li>
      </ul>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p>A B2B cleaning service was closing only 1 in 10 proposals. After implementing a structured sales process with a qualification checklist and a standard follow-up sequence (call after 2 days, email after 5 days, final call after 10 days), their close rate improved to 3.5 in 10 — a 250% improvement — without changing their pricing or services.</p>
      </div>
      <h2>Sales Training for Your Team</h2>
      <ul>
        <li><strong>Role-play regularly:</strong> Practice objection handling in a safe environment</li>
        <li><strong>Record and review calls:</strong> Listen to actual conversations and coach on improvements</li>
        <li><strong>Shadow selling:</strong> Have new team members observe experienced sellers before going solo</li>
        <li><strong>Weekly reviews:</strong> Discuss wins, losses, and lessons learned as a team</li>
      </ul>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>A defined sales process creates consistency and scalability</li>
          <li>Follow the 7 steps from prospecting to follow-up</li>
          <li>Most objections fall into 4 predictable categories</li>
          <li>Create a Sales Playbook — even a simple one-page version</li>
          <li>Invest in regular training: role-plays, reviews, and coaching</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "Why is a defined sales process important?",
        options: [
          "It replaces the need for good products",
          "It creates consistency and makes selling repeatable",
          "It eliminates the need for marketing",
          "It guarantees every prospect will buy"
        ],
        correct: 1
      },
      {
        question: "What is the recommended response to 'I need to think about it'?",
        options: [
          "Offer an immediate discount",
          "Accept it and never follow up",
          "Ask what specifically they need to consider",
          "Pressure them to decide immediately"
        ],
        correct: 2
      },
      {
        question: "How much did the cleaning service improve their close rate?",
        options: [
          "50% improvement",
          "100% improvement",
          "250% improvement",
          "500% improvement"
        ],
        correct: 2
      },
      {
        question: "Which is a recommended sales training technique?",
        options: [
          "Only reading sales books",
          "Sending salespeople to work alone immediately",
          "Role-playing objection handling regularly",
          "Avoiding discussion of lost sales"
        ],
        correct: 2
      }
    ]
  },
   // ---------- MODULE 7 ----------
  {
    id: 7,
    title: "Using Social Proof",
    description: "Leverage testimonials, reviews, and trust signals to build credibility.",
    content: `
      <h2>The Psychology of Social Proof</h2>
      <p>Social proof is the psychological phenomenon where people look to others' actions and experiences to determine their own. When we see that other people have bought, used, and loved a product, we feel more confident about buying it ourselves.</p>
      <p>For small businesses, social proof is one of the most powerful (and affordable) tools available. It reduces the perceived risk of buying from a lesser-known brand and builds trust faster than any ad campaign.</p>
      <h2>Types of Social Proof</h2>
      <h3>1. Customer Testimonials</h3>
      <p>Direct quotes from happy customers. The more specific, the better. "This product changed my life" is weak. "I saved $2,400 in the first 3 months and reduced my workload by 10 hours per week" is powerful.</p>
      <h3>2. Online Reviews & Ratings</h3>
      <p>Google reviews, Yelp ratings, Amazon reviews — these are often the first thing potential customers check. A business with 50+ positive reviews has a massive advantage over one with zero.</p>
      <h3>3. Case Studies</h3>
      <p>Detailed stories of how a customer achieved results using your product or service. Great for B2B and high-ticket purchases where buyers need more evidence.</p>
      <h3>4. Numbers & Statistics</h3>
      <p>"Join 10,000+ happy customers" or "Rated 4.8/5 by 500+ users." Numbers provide quick, credible proof of popularity and satisfaction.</p>
      <h3>5. Media Mentions & Certifications</h3>
      <p>"As featured in Forbes" or professional certifications. These borrow authority from recognized institutions.</p>
      <h3>6. User-Generated Content</h3>
      <p>Photos, videos, or posts created by your customers. Unboxing videos, Instagram tags, before-and-after photos. This feels authentic because it is.</p>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Always ask for testimonials at the moment of maximum satisfaction — right after delivery, after a successful project, or after they've seen results. Make it easy: send them 2–3 specific questions instead of asking them to "write a review."</p>
      </div>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p>A local dentist had a great reputation but only 4 Google reviews. After implementing a simple post-appointment text message asking patients to leave a review (with a direct link), they collected 87 reviews in 6 months. Their Google Maps visibility improved, and new patient inquiries increased by 35%.</p>
      </div>
      <h2>Where to Display Social Proof</h2>
      <ul>
        <li>Homepage — right below the hero section</li>
        <li>Product/service pages — near the price or "Buy" button</li>
        <li>Checkout page — reduces last-minute hesitation</li>
        <li>Email campaigns — include a testimonial in every promotional email</li>
        <li>Social media — share customer stories regularly</li>
        <li>Proposals and quotes — for B2B, include relevant case studies</li>
      </ul>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Social proof reduces perceived risk and builds trust fast</li>
          <li>Use multiple types: testimonials, reviews, case studies, numbers, UGC</li>
          <li>Ask for testimonials at the moment of maximum satisfaction</li>
          <li>Display social proof at every key decision point</li>
          <li>Make leaving reviews easy with direct links and simple prompts</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "What is social proof?",
        options: [
          "Advertising on social media platforms",
          "People looking to others' actions to determine their own",
          "Proof that social media marketing works",
          "A legal requirement for online businesses"
        ],
        correct: 1
      },
      {
        question: "Which is a stronger testimonial?",
        options: [
          "This product is amazing!",
          "I saved $2,400 in 3 months and cut my workload by 10 hours",
          "5 stars, would recommend",
          "Great company, great product"
        ],
        correct: 1
      },
      {
        question: "When is the best time to ask for a testimonial?",
        options: [
          "Before the customer has used the product",
          "Six months after purchase",
          "At the moment of maximum satisfaction",
          "Only when a customer complains"
        ],
        correct: 2
      },
      {
        question: "How did the dentist increase new patient inquiries by 35%?",
        options: [
          "Ran expensive TV advertisements",
          "Collected 87 Google reviews via post-appointment texts",
          "Lowered prices significantly",
          "Moved to a bigger office"
        ],
        correct: 1
      }
    ]
  },
   // ---------- MODULE 8 ----------
  {
    id: 8,
    title: "Pricing & Offers Optimization",
    description: "Set prices that reflect value and create offers customers can't refuse.",
    content: `
      <h2>The Psychology of Pricing</h2>
      <p>Pricing isn't just math — it's psychology. The right price communicates value, positions your brand, and can dramatically influence buying decisions. Too low, and people question quality. Too high without clear justification, and they walk away.</p>
      <p>Many small business owners underprice their products out of fear. But low prices don't just mean lower revenue — they attract price-sensitive customers who tend to be the most demanding and least loyal.</p>
      <h2>Pricing Strategies</h2>
      <h3>Value-Based Pricing</h3>
      <p>Price based on the value your product delivers to the customer, not on what it costs you to produce. If your $200 service saves a business $5,000, that's a great deal — even though your cost might only be $50.</p>
      <h3>Tiered Pricing</h3>
      <p>Offer 3 tiers (e.g., Basic, Pro, Premium). The middle tier typically gets chosen most often. This also lets you serve different customer segments without diluting your brand.</p>
      <h3>Anchor Pricing</h3>
      <p>Show the premium option first. This "anchors" the customer's perception of value, making the mid-tier seem like a smart deal in comparison.</p>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Use the "10x Rule" as a gut check: your product should deliver at least 10x the value of its price. If you charge $100, the customer should feel they're getting at least $1,000 in value. If you can make this case convincingly, price resistance disappears.</p>
      </div>
      <h2>Creating Irresistible Offers</h2>
      <p>An offer is more than a price — it's the entire package. A great offer includes:</p>
      <ul>
        <li><strong>The core product or service</strong></li>
        <li><strong>Bonuses</strong> — added value that sweetens the deal</li>
        <li><strong>Guarantee</strong> — risk reversal (money-back, satisfaction guarantee)</li>
        <li><strong>Urgency/scarcity</strong> — a reason to act now (limited time, limited spots)</li>
        <li><strong>Clear ROI statement</strong> — show what they gain vs. what they pay</li>
      </ul>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p>A graphic designer was charging $300 per logo and struggling to close deals. She repackaged her offer: "$497 Brand Identity Package — includes logo, business card design, social media templates, and a brand style guide. 100% satisfaction guarantee. Only 3 spots available this month." Despite the higher price, she started closing 60% more clients because the perceived value and urgency made the offer compelling.</p>
      </div>
      <h2>Common Pricing Mistakes</h2>
      <ul>
        <li><strong>Racing to the bottom:</strong> Competing on price alone is a losing strategy for small businesses</li>
        <li><strong>Not testing prices:</strong> You won't know the optimal price without experimentation</li>
        <li><strong>Hiding the price:</strong> If you make people work to find your pricing, many will leave</li>
        <li><strong>Discounting too often:</strong> Trains customers to never pay full price</li>
      </ul>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Price based on value delivered, not cost of production</li>
          <li>Tiered pricing helps serve multiple customer segments</li>
          <li>Great offers combine the product with bonuses, guarantees, and urgency</li>
          <li>Use the 10x Rule to validate your pricing</li>
          <li>Avoid competing on price alone — it erodes your margins and brand</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "What is value-based pricing?",
        options: [
          "Pricing as low as possible to attract more customers",
          "Pricing based on the value delivered to the customer",
          "Matching competitor prices exactly",
          "Adding a fixed markup to production costs"
        ],
        correct: 1
      },
      {
        question: "What does the '10x Rule' suggest?",
        options: [
          "Charge 10 times your cost",
          "Your product should deliver at least 10x the value of its price",
          "Run 10 different pricing tests",
          "Offer a 10% discount to new customers"
        ],
        correct: 1
      },
      {
        question: "What happened when the designer raised her price from $300 to $497?",
        options: [
          "She lost all her clients",
          "She closed 60% more clients with the repackaged offer",
          "Nothing changed",
          "She had to lower it back down"
        ],
        correct: 1
      },
      {
        question: "Why is frequent discounting problematic?",
        options: [
          "It increases costs",
          "It trains customers to never pay full price",
          "It's illegal in some countries",
          "It improves brand perception"
        ],
        correct: 1
      }
    ]
  },
  // ---------- MODULE 9 ----------
  {
    id: 9,
    title: "Follow-Up Systems",
    description: "Build systematic follow-up processes to convert more leads and retain customers.",
    content: `
     <h2>Why Follow-Up Is Where the Money Lives</h2>
      <p>Studies consistently show that 80% of sales require at least 5 follow-ups, yet 44% of salespeople give up after just one. This means most businesses are leaving massive revenue on the table simply because they don't follow up enough — or at all.</p>
      <p>Follow-up isn't about being pushy. It's about being helpful, staying top of mind, and being there when the customer is ready to buy. People get busy, forget, or need more time. A good follow-up system respects that while keeping the conversation alive.</p>
      <h2>Building an Automated Follow-Up System</h2>
      <h3>Email Sequences</h3>
      <p>Set up automated email sequences that trigger when someone takes a specific action (signs up, downloads a guide, requests a quote, abandons a cart). A basic sequence:</p>
      <ol>
        <li><strong>Day 0:</strong> Welcome/thank you email with immediate value</li>
        <li><strong>Day 2:</strong> Educational content related to their interest</li>
        <li><strong>Day 5:</strong> Case study or testimonial showing results</li>
        <li><strong>Day 8:</strong> Address common objections</li>
        <li><strong>Day 12:</strong> Special offer or clear call to action</li>
      </ol>
      <h3>CRM (Customer Relationship Management)</h3>
      <p>Even a simple CRM (or even a spreadsheet to start) helps you track every lead: where they came from, what they're interested in, last contact date, and next action. Without this, leads slip through the cracks.</p>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Set "follow-up reminders" on your calendar for every open lead. A simple reminder system beats relying on memory every time. Most CRM tools automate this, but even a Google Calendar event works.</p>
      </div>
      <h2>Post-Sale Follow-Up</h2>
      <p>Follow-up doesn't end after the sale. Post-sale follow-up builds loyalty, generates referrals, and creates upsell opportunities:</p>
      <ul>
        <li><strong>Thank you message</strong> — immediately after purchase</li>
        <li><strong>Check-in</strong> — 1 week later, ask how they're finding the product</li>
        <li><strong>Request a review</strong> — 2–3 weeks later, when they've experienced value</li>
        <li><strong>Referral ask</strong> — "Know anyone else who might benefit?"</li>
        <li><strong>Upsell/cross-sell</strong> — introduce complementary products at the right time</li>
      </ul>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p>A real estate agent started sending personalized "home anniversary" emails to past clients one year after their purchase, along with a local market update and a small gift card to a local restaurant. This simple annual touchpoint generated 23 referrals over 18 months — more than any other marketing channel — and cost less than $500 total.</p>
      </div>
      <div class="tip-box tip-success">
        <div class="tip-box-title">✅ Follow-Up Golden Rules</div>
        <p>1) Always provide value in every follow-up (don't just say "checking in"). 2) Use multiple channels (email + phone + text). 3) Be persistent but not annoying — space out contacts appropriately. 4) Personalize whenever possible.</p>
      </div>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>80% of sales require 5+ follow-ups, but most give up after one</li>
          <li>Build automated email sequences for consistent follow-up</li>
          <li>Use a CRM or tracking system so no lead is forgotten</li>
          <li>Post-sale follow-up drives reviews, referrals, and repeat sales</li>
          <li>Every follow-up should provide value, not just "check in"</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "What percentage of sales require at least 5 follow-ups?",
        options: [
          "20%",
          "50%",
          "80%",
          "95%"
        ],
        correct: 2
      },
      {
        question: "What should the FIRST email in a follow-up sequence contain?",
        options: [
          "A hard sales pitch with discount",
          "Welcome/thank you with immediate value",
          "A long company history",
          "A request for referrals"
        ],
        correct: 1
      },
      {
        question: "What generated the most referrals for the real estate agent?",
        options: [
          "Facebook advertising",
          "Cold calling prospects",
          "Personalized annual 'home anniversary' emails with a gift",
          "Hosting open houses"
        ],
        correct: 2
      },
      {
        question: "What is a 'golden rule' of effective follow-up?",
        options: [
          "Send the same message repeatedly",
          "Only use email, never phone",
          "Always provide value in every follow-up",
          "Follow up only once to avoid being pushy"
        ],
        correct: 2
      }
    ]
  },
   // ---------- MODULE 10 ----------
  {
    id: 10,
    title: "Innovating Using Feedback",
    description: "Use customer feedback to continuously improve and stay ahead of the competition.",
    content: `
      <h2>Feedback Is Your Competitive Advantage</h2>
      <p>The businesses that win long-term aren't the ones with the best initial idea — they're the ones that listen, learn, and adapt fastest. Customer feedback is the most direct, honest, and affordable source of business intelligence available to you.</p>
      <p>Yet most small businesses either don't collect feedback systematically or collect it but don't act on it. This module will show you how to build a feedback loop that drives continuous improvement and innovation.</p>
      <h2>How to Collect Feedback Effectively</h2>
      <h3>1. Post-Purchase Surveys</h3>
      <p>Send a brief survey (3–5 questions max) after purchase. Key questions:</p>
      <ul>
        <li>"How would you rate your overall experience?" (1–10 scale)</li>
        <li>"What did you like most?"</li>
        <li>"What could we improve?"</li>
        <li>"How likely are you to recommend us?" (Net Promoter Score)</li>
      </ul>
      <h3>2. Direct Conversations</h3>
      <p>Pick up the phone or meet customers face-to-face. You'll learn more in one 15-minute conversation than from 50 survey responses. Ask open-ended questions and listen more than you talk.</p>
      <h3>3. Monitor Online Reviews & Social Mentions</h3>
      <p>Set up Google Alerts for your business name. Regularly check review sites. Read social media comments. This is unsolicited feedback — often the most honest kind.</p>
      <h3>4. Analyze Support Tickets & Complaints</h3>
      <p>Your customer service inbox is a goldmine. Recurring complaints reveal systemic issues. Frequent questions suggest unclear communication. Track themes, not just individual tickets.</p>
      <div class="tip-box">
        <div class="tip-box-title">💡 Pro Tip</div>
        <p>Create a "Feedback Board" — a simple shared document or Trello board where you categorize all feedback into: Product, Service, Pricing, Communication, and Process. Review it monthly with your team and pick the top 1–2 improvements to implement.</p>
      </div>
      <h2>Turning Feedback into Innovation</h2>
      <p>Feedback shouldn't just fix problems — it should inspire new ideas:</p>
      <ul>
        <li><strong>New products/services:</strong> Customers requesting things you don't yet offer</li>
        <li><strong>Feature improvements:</strong> Small tweaks that significantly improve the experience</li>
        <li><strong>New market segments:</strong> Discovering unexpected use cases or customer types</li>
        <li><strong>Partnership opportunities:</strong> Customers mentioning complementary needs you could fulfill through partners</li>
      </ul>
      <div class="example-box">
        <div class="example-box-title">📌 Real-World Example</div>
        <p>A small SaaS company noticed multiple customers asking for a way to export reports to PDF. It wasn't on their roadmap, but they built it in 2 weeks. Within a month, 40% of users were using the feature — and they highlighted it in their marketing, which became a differentiator from competitors who didn't offer it. One piece of feedback led to a feature that helped close enterprise deals.</p>
      </div>
      <h2>Closing the Feedback Loop</h2>
      <p>The most critical (and often missed) step: 
 tell customers you heard them and what you did about it. This:</p>
      <ul>
        <li>Shows you genuinely care about their input</li>
        <li>Builds loyalty and emotional connection</li>
        <li>Encourages more feedback in the future</li>
        <li>Turns customers into advocates</li>
      </ul>
      <div class="tip-box tip-success">
        <div class="tip-box-title">✅ The Innovation Cycle</div>
        <p><strong>Collect → Categorize → Prioritize → Implement → Communicate → Repeat.</strong> Make this a monthly habit and your business will evolve faster than competitors who rely on guesswork.</p>
      </div>
      <div class="takeaway-box">
        <h3>🔑 Key Takeaways</h3>
        <ul>
          <li>Systematic feedback collection is a competitive advantage</li>
          <li>Use multiple channels: surveys, conversations, reviews, support tickets</li>
          <li>Look for patterns, not just individual complaints</li>
          <li>Use feedback to inspire innovation, not just fix problems</li>
          <li>Always close the loop — tell customers what you changed because of their input</li>
        </ul>
      </div>
    `,
    quiz: [
      {
        question: "What is the most critical (and often missed) step in the feedback process?",
        options: [
          "Collecting feedback from many sources",
          "Using expensive survey tools",
          "Telling customers what you changed based on their input",
          "Hiring a dedicated feedback manager"
        ],
        correct: 2
      },
      {
        question: "What does the 'Innovation Cycle' consist of?",
        options: [
          "Plan, Build, Test, Launch",
          "Collect, Categorize, Prioritize, Implement, Communicate, Repeat",
          "Research, Design, Develop, Market",
          "Ideate, Prototype, Validate, Scale"
        ],
        correct: 1
      },
      {
        question: "In the SaaS example, what resulted from acting on customer feedback?",
        options: [
          "They had to raise prices",
          "40% of users adopted the feature and it helped close enterprise deals",
          "They lost existing customers",
          "It took a year to implement"
        ],
        correct: 1
      },
      {
        question: "Why is your customer service inbox described as a 'goldmine'?",
        options: [
          "It contains potential sales leads",
          "Recurring complaints reveal systemic issues and improvement areas",
          "It proves your business is popular",
          "It reduces the need for marketing"
        ],
        correct: 1
      }
    ]
  }
];
