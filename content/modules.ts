import type { Module, BuilderSkill } from "@/lib/types";

// Single source of truth for the curriculum. During Phase 0 every module is
// scaffolded as "coming-soon" with full metadata but no lesson body — the site
// deploys as a complete shell. Content is filled in one module per session.
export const modules: Module[] = [
  // ─────────────── Level 1 — Foundations ───────────────
  {
    id: 1,
    slug: "you-can-build-software-now",
    title: "You Can Build Software Now",
    level: "foundations",
    audience: "both",
    skills: ["planning"],
    topics: [
      "The old world and the new one",
      "What “vibe-coding” and “agentic coding” mean",
      "You are not alone in this — the map nobody handed you",
      "Real tools educators and librarians have built",
      "The three builds ahead: quiz app, flashcard site, course portal",
      "What you don't need",
      "Building responsibly, not letting the AI run wild",
    ],
    objectives: [
      "Understand what vibe-coding is",
      "See real examples of tools educators and librarians have built",
      "Know what this course will make you able to do",
      "Let go of “I'm not a tech person”",
    ],
    estimatedMinutes: 20,
    status: "published",
    description:
      "Until recently, building software meant years of study or hiring a developer. That changed. In this opening module you'll see what vibe-coding is — you describe what you want in plain language, AI writes the code, you check it and ask for changes — and meet real tools faculty and academic librarians have already built for their own courses and libraries. You'll also write down the one tool you wish existed, which becomes your capstone.",
    content: {
      intro:
        "When I began building small web tools for my own work in an academic library, I did not know how to write software, and it turned out that I did not need to. I want you to begin this course from the same place I did, not as a programmer, but as a professional who understands exactly what your students or your patrons need and is now able to build it.",
      sections: [
        {
          heading: "The old world and the new one",
          body: `Until very recently, building even a simple web tool required one of two things: years of formal study in programming, or a budget large enough to hire a developer. For example, a librarian who wanted a small interactive quiz for an information literacy session, or an instructor who wanted a study tool for a difficult unit, typically had to file a request with a campus technology office, wait for an open slot in a long queue, and accept whatever the final result happened to be, often a version of the tool that had already drifted away from the original idea by the time it was delivered. Such barriers meant that the person who understood the need most clearly, the educator or the librarian standing in front of the students, was almost never the person who built the solution.

This gap between the person with the idea and the person with the ability to build it produced a particular kind of professional resignation, in which good ideas for small, useful tools were quietly abandoned because pursuing them seemed to cost more than they were worth. For example, an academic librarian who noticed that students consistently confused two similar databases might imagine a short interactive guide to teach the distinction, and then set the idea aside indefinitely, not because the idea was weak, but because building it appeared to require skills entirely outside the librarian's own training. Such abandoned ideas represent a real and ongoing loss, one this course exists to reverse.

The situation has changed in a fundamental way. In order to build a working tool today, you no longer need to memorize a programming language; you need to describe what you want in plain, ordinary words to an artificial intelligence that writes the code for you. This shift matters because it moves the ability to build directly into the hands of the people who understand the problem, which is precisely where useful software has always needed to begin. Additionally, the change is not a modest convenience; it removes the single largest barrier that has separated a good idea from a working tool for as long as most of us have worked in higher education.`,
        },
        {
          heading: "What vibe coding and agentic coding mean",
          body: `Two terms describe the practice you are about to learn, and both are worth defining clearly at the outset. The first is **vibe coding**, a phrase introduced by the computer scientist Andrej Karpathy in February 2025 to describe a way of building in which a person states an intention in plain language, watches the AI produce the code, and refines the result through conversation rather than through syntax (Karpathy, 2025). This indicates that the essential skill is no longer typing code correctly, but describing an outcome clearly and judging whether the result matches it. The term entered common professional use so quickly that it was named Collins Dictionary's Word of the Year for 2025 (Collins Dictionary, 2025), which suggests that this is not a passing novelty but a genuine change in how software comes to exist.

It is worth noting that the definition of vibe coding has sharpened somewhat since Karpathy's original description. The software developer and writer Simon Willison, whose framing this course returns to in a later module on responsible building, distinguishes vibe coding strictly, in which a person accepts AI-generated code without reviewing or testing it, from the broader and more professional practice of AI-assisted programming, in which a person reviews, tests, and can explain what the AI has produced before relying on it (Willison, 2025). This suggests that the term you are learning describes a starting posture of trust and curiosity, and that the discipline of checking your own work, which this course builds throughout, is what turns vibe coding into dependable building.

The second term is **agentic coding**, which describes the same conversation carried out with an AI that can take actions on your behalf, such as creating files, organizing a project, and preparing it to be published, rather than only returning text for you to copy. For example, when you ask an agentic tool to build a three-page website, it can create each page, connect them, and set them up for the internet, pausing to let you approve each step. Such a tool behaves less like a search box and more like a capable assistant working alongside you. Throughout this course you will use Claude, an AI assistant built by Anthropic, in both of these ways (Anthropic, 2025), beginning with vibe coding in the artifact panel and moving toward agentic coding once you meet Claude Code later in the course.`,
        },
        {
          heading: "You are not alone: the map nobody handed you",
          body: `It is evident that many educators and librarians arrive at this moment feeling that everyone else already understands these tools and that they alone are behind. I want to address that feeling directly, because it is both extremely common and largely inaccurate. For example, in my own conversations with colleagues across academic libraries and teaching faculties, the professionals who feel least prepared are frequently the ones whose deep knowledge of their students makes them best suited to build something genuinely useful. Such self-doubt is a barrier of confidence, not a barrier of ability.

The scale of quiet, unofficial AI use across higher education supports this point with real numbers rather than only reassurance. A 2026 EDUCAUSE survey of higher education staff and faculty found that 94 percent had used AI tools for work-related tasks within the previous six months, and that 56 percent had specifically used AI tools that their own institution did not provide (EDUCAUSE, 2026). This indicates that the overwhelming majority of your colleagues are already experimenting on their own, frequently without any formal introduction to the practice, which is exactly the gap this course is built to close.

The map for this work has simply never been handed to most people in our fields, and that is the gap this course is designed to close. In order to build with confidence, you do not need a background in computer science; you need a clear problem, a willingness to describe it plainly, and the habit of checking what the AI produces. Undoubtedly you already possess the first and the most important of these, because you spend your working life identifying exactly what your students and patrons are missing. Additionally, the fact that so many of your colleagues are already quietly building or experimenting on their own means that this course is not asking you to step into unfamiliar territory alone; it is handing you the structured map for a path many around you are already walking without one.`,
        },
        {
          heading: "Real tools educators and academic librarians have built",
          body: `The most persuasive argument for this approach is not a description of what is possible in theory, but the concrete tools that professionals like you have already built. For example, a companion project to this course, the [AI for Academic Libraries](https://ai-in-academic-libraries.vercel.app) portal, is an entire multi-level curriculum that was built and published by a working librarian using exactly the tools you will learn here (Brusova, 2025). This indicates that the distance between "I have an idea" and "I have a working, published website" is far shorter than most people assume.

The tools that professionals build in this way are rarely large or complicated, and that is a strength rather than a limitation. For example, educators have built single-page study quizzes for a difficult exam unit, and academic librarians have built flashcard sites for teaching database searching and short guides that answer the questions a reference desk hears most often. Others have built simple course-progress trackers that give students a single page showing which assignments remain, or a short interactive guide walking first-year students through the difference between a scholarly article and a popular one. Such tools succeed precisely because they are small, focused, and made by the person who understands the need.

Additionally, every one of these examples can be built, changed, and published by a single person in an afternoon, without a technology request and without writing code by hand. This matters because it changes the calculation entirely: an idea that once seemed too small to justify a formal request to a campus IT department, and too large to attempt without one, now sits comfortably within an afternoon of focused, plain-language conversation. In order to see this for yourself, you will build your own first working tool in the very next module, before any doubt has the chance to talk you out of trying.`,
        },
        {
          heading: "The three builds ahead",
          body: `This course is organized around building, not around reading about building, and you will complete three real projects that grow in independence as you go. For example, the projects follow a deliberate sequence:

- **Build one, a class quiz app.** A fully guided project in which you follow each step and finish with a working, downloadable quiz.
- **Build two, a flashcard study site.** A shared-control project in which you write the plan yourself and build against checkpoints rather than step-by-step instructions.
- **Build three, a full course portal.** A project you direct from the beginning, using an agentic tool to create a multi-page site that you own and publish.

Such a progression is intentional, because each build removes a little of the guidance that the previous one provided. For example, in build one you are told what to type at each step; in build two you are given checkpoints and expected to reach them your own way; and in build three you are given only a goal, and the full range of decisions, from structure to design to deployment, is yours to make. This indicates that by the final project you will be making the decisions yourself, which is the point at which you have genuinely become a builder rather than a follower of instructions. Additionally, a fourth project belongs to you alone: the capstone, which is the specific tool you most wish existed for your own students or patrons, and which draws on every skill the three guided builds will have given you.`,
        },
        {
          heading: "What you don't need",
          body: `It is worth being equally clear about what this course does not require of you, because an accurate sense of the barrier to entry matters as much as an accurate sense of the opportunity. You do not need mathematics beyond what you already use in ordinary professional life; you do not need to take a separate coding class before or during this course; and you do not need to purchase expensive software, since every tool this course relies on has a free tier that is sufficient for everything through the first several modules.

What you do need is considerably shorter to list: curiosity about a genuine problem in your own teaching or library work, patience with a process of small corrections rather than instant perfection, and a free Claude account, which the next module walks you through creating in a few minutes. For example, a colleague who has never opened a code editor in their life and a colleague with a computer science degree begin this course from nearly the same starting line, because the skill this course teaches, describing a clear outcome and judging whether the result matches it, does not depend on prior technical training. This suggests that your hesitation, if you still feel any, is not evidence that you lack what building requires; it is simply the ordinary discomfort of beginning something new; and it will fade as soon as you complete your first build in the next module.`,
        },
        {
          heading: "Building responsibly, not letting the AI run wild",
          body: `There is no doubt that a tool powerful enough to build software on your behalf must be used with judgment, and I want to establish that principle in this very first module rather than at the end. For example, an AI will do exactly what you ask, which means that if you ask it to collect personal information from students, it will build a tool that does so, whether or not that is wise or permitted at your institution. Such compliance is a reason for care, not a reason for fear.

Simon Willison, whose distinction between vibe coding and reviewed AI-assisted programming appeared earlier in this module, offers a useful personal rule for this exact form of care: he will not commit code to a real project unless he could explain to somebody else exactly what it does (Willison, 2025). This indicates that responsible building does not require you to read every line of code the AI produces; it requires only that you could describe, in your own plain words, what the finished tool does and how a visitor experiences it, which is a standard well within reach of a non-programmer who tests carefully.

The responsible default that runs through this entire course is straightforward: collect no personal data, keep your work inside the boundaries your institution approves, and always verify what the AI produces before you rely on it. This approach protects your students, your patrons, and your own professional standing, and it costs you nothing in capability. A later module treats privacy, accessibility, and institutional policy in full; for now, it is enough to carry one sentence with you, which is that you remain responsible for what you build, and that responsibility is not something the AI can hold on your behalf.`,
        },
        {
          heading: "Your turn: the one tool you wish existed",
          body: `Before you move to the next module, I want you to complete one short exercise, because the whole course is more useful when it is aimed at a tool you actually want. For example, take a single index card or a blank note, and write down the one tool you wish already existed for your own students or patrons, described in a single plain sentence such as "a flashcard site that teaches my students how to read a call number." Such a sentence does not need to be polished or technical; it only needs to name a real need that you encounter in your work.

Keep that note somewhere you will see it, because it becomes your capstone, the tool you will build for yourself by the end of this course. In order to make the idea concrete, add two short lines beneath your sentence: who would use the tool, and what they would be able to do with it. This small act of writing turns a vague wish into a plan, and it ensures that everything you learn from this point forward is in service of something you genuinely care about building.

I want to close this module the way I opened it: I did not begin this work as a programmer, and neither do you need to. While the modules ahead will teach you specific skills, prompting well, understanding what a website is, planning before you build, none of them will matter as much as the sentence you are about to write, because it is the sentence that will keep you building past the first small frustration. Undoubtedly the professionals in our fields who go on to build the most useful tools are not the ones with the most technical background, but the ones who started with the clearest sense of exactly what their students or patrons needed.`,
        },
      ],
      summary: [
        "Explain in plain words what vibe coding and agentic coding are, and why they remove the old barriers to building software.",
        "Distinguish vibe coding from reviewed AI-assisted programming, and explain why the distinction matters for responsible building.",
        "Recognize, supported by 2026 EDUCAUSE data, that a large majority of higher-ed colleagues are already using AI at work, often without formal guidance.",
        "Name real examples of tools that educators and academic librarians have built with these methods, including a full curriculum portal.",
        "Describe the three guided builds ahead and how each one hands you more independence than the last.",
        "State plainly what this course does not require — math, a coding class, or paid software — and what it does: curiosity, patience, and a free account.",
        "State the responsible default for every build: collect no personal data, stay within institutional policy, and verify what the AI produces.",
        "Write a one-sentence description of your own capstone tool, the thing you most wish existed for your students or patrons.",
      ],
    },
    quiz: [
      {
        question: "What does “vibe coding” mean?",
        options: [
          "Writing code faster by memorizing more shortcuts",
          "Describing what you want in plain language and letting the AI write and refine the code",
          "A programming language for beginners",
          "Copying finished code from other people's websites",
        ],
        correctIndex: 1,
        explanation:
          "Vibe coding, a term introduced by Andrej Karpathy in 2025, means you state an intention in ordinary words, the AI produces the code, and you refine it through conversation. The key skill is describing an outcome clearly, not typing code.",
      },
      {
        question:
          "How is agentic coding different from simply chatting with an AI?",
        options: [
          "It only works for professional developers",
          "It requires you to learn a programming language first",
          "The AI can take actions for you, such as creating files and preparing a project to be published",
          "It removes your ability to approve what happens",
        ],
        correctIndex: 2,
        explanation:
          "An agentic tool behaves like a capable assistant that can create and organize files and set a project up for the internet, pausing to let you approve each step, rather than only returning text for you to copy.",
      },
      {
        question:
          "According to this module, why are educators and academic librarians well suited to build their own tools?",
        options: [
          "Because they already know how to program",
          "Because their institutions require it",
          "Because they understand exactly what their students and patrons need",
          "Because the tools they need are very large and complex",
        ],
        correctIndex: 2,
        explanation:
          "Useful software begins with a clear understanding of the problem. The educator or librarian standing in front of the students understands the need most clearly, which is exactly where a good tool needs to begin.",
      },
      {
        question:
          "What is the responsible default this course asks you to follow on every build?",
        options: [
          "Collect as much data as possible to improve the tool",
          "Collect no personal data, stay within institutional policy, and verify what the AI produces",
          "Publish everything publicly without checking it",
          "Avoid using AI for anything that touches students",
        ],
        correctIndex: 1,
        explanation:
          "An AI does exactly what you ask, so the safe default is to collect no personal data, keep your work inside institution-approved boundaries, and always verify the AI's output. You remain responsible for what you build.",
      },
      {
        question: "What is the hands-on exercise at the end of this module?",
        options: [
          "Install a programming environment on your computer",
          "Build a complete website before the next module",
          "Write a one-sentence description of the one tool you wish existed for your students or patrons",
          "Memorize the definitions of vibe coding and agentic coding",
        ],
        correctIndex: 2,
        explanation:
          "You write down, in one plain sentence, the tool you most wish existed, plus who would use it and what they could do. That note becomes your capstone, the tool you build for yourself by the end of the course.",
      },
    ],
    relatedModules: ["meet-your-ai-builder", "plan-before-you-build"],
  },
  {
    id: 2,
    slug: "meet-your-ai-builder",
    title: "Meet Your AI Builder",
    level: "foundations",
    audience: "both",
    skills: ["building"],
    topics: [
      "Getting your Claude account",
      "The chat window and what an “artifact” is",
      "Your first build — a one-page site, right now",
      "Changing it with words: the describe → look → describe loop",
      "Saving your work as an .html file",
      "When something looks wrong",
    ],
    objectives: [
      "Create a Claude account",
      "Understand the chat interface and artifacts",
      "Build a first working page in about ten minutes",
    ],
    estimatedMinutes: 30,
    status: "published",
    description:
      "Hands-on from the first minute. You'll create a free Claude account, tour the chat window, and use a guided prompt to build a real one-page site for a class or library program you run — watching it appear live in an artifact panel. Then you'll change it with plain-language requests and download the finished .html file to your own computer.",
    content: {
      intro:
        "In the previous module you named the tool you most wish existed. In this one you will build something real, and you will do it within the next ten or fifteen minutes, before any part of you has the chance to conclude that building is meant for other people.",
      sections: [
        {
          heading: "Getting your Claude account",
          body: `The only tool you need for your first several builds is a free account with Claude, the AI assistant built by Anthropic that you will work with throughout this course (Anthropic, 2025). For example, in order to create one, you open a web browser, go to [claude.ai](https://claude.ai), and sign up with an email address or an existing Google account, in the same few steps you would use for any other website. This indicates that the barrier to beginning is genuinely small, and that no software needs to be installed on your computer for the work in this module.

The free tier of Claude is sufficient for everything in the first half of this course, and I want you to begin there rather than paying for anything. For example, the free account allows you to hold conversations and to build the small single-page tools that these early modules focus on, which is all you require until you reach the more advanced builds later. Such a starting point is deliberate, because it lets you discover whether this way of working suits you before you spend a single dollar on it. Additionally, if a campus device or network blocks the sign-up, a later module addresses that specific obstacle; for now, a personal device and an ordinary internet connection are enough.

It is worth adding one practical note before you begin: use a personal email address rather than your institutional one if you are at all uncertain whether your campus already provides an approved AI account, because some institutions maintain their own licensed access with different data terms. In order to avoid any confusion later, this small choice at signup keeps your early, exploratory learning entirely separate from anything your employer might already provide, and you can always add an institutional account once you know whether your campus offers one.`,
        },
        {
          heading: "The chat window, and what an artifact is",
          body: `Once you are signed in, the screen you see is simpler than you might expect: a single box at the bottom where you type, and a space above it where the conversation appears. For example, you type a request in ordinary language, press enter, and Claude replies in the space above, exactly as it would in any messaging application you already use. Such familiarity is intentional on the part of the designers, and it means that the interface itself requires almost nothing to learn.

The one feature that is genuinely new is the artifact, and it is worth defining clearly because the rest of this course depends on it. An artifact is a separate panel that opens beside the conversation and displays the actual thing you are building, whether that is a web page, a document, or a small tool, updating live as you ask for changes (Anthropic, 2025). This indicates that you are never left guessing at what the AI has produced, because you can see the finished result beside the words that created it. Additionally, because the artifact shows the working page rather than only its code, you can judge it the way your students or patrons eventually will, which is simply by looking at it.

Undoubtedly the artifact panel is the single feature that makes this entire course possible for a non-programmer, and it is worth pausing on why. In order to appreciate the shift, consider that before this kind of tool existed, judging a piece of software required reading its code, a skill this course deliberately does not ask you to acquire. The artifact instead lets you judge a build the same way you would judge a printed handout or a finished webpage anywhere else: by looking at it, clicking on it, and deciding whether it does what you wanted.`,
        },
        {
          heading: "Your first build, right now",
          body: `With the account created and the interface understood, you will now build a real one-page site, because the fastest way to learn what a build feels like is to run one. For example, decide on a small, genuine subject from your own work: an instructor might make a welcome page for a course, and an academic librarian might make a page announcing a workshop or a new research guide. Such a subject does not need to be important; it only needs to be real enough that you can judge whether the result is any good.

In order to produce a strong first result, type a request that says who the page is for, what it should contain, and roughly how it should look. For example, you might type: "Build a one-page welcome site for my course or library workshop. Include a friendly heading, a short paragraph describing it, the date and location, and a clean, calm design in blue tones. Keep it accessible and make it work on a phone." This indicates that even your very first prompt already follows the recipe you will practice throughout the course, which is to describe the outcome plainly rather than to specify any code. Within a few seconds the page appears in the artifact panel beside your request, and you have built something real.

Take a genuine moment here to notice what has just happened, because it is easy to move past too quickly. For example, you typed a handful of ordinary sentences, no different in kind from an email you might send a colleague, and a functioning, styled web page appeared in response. This suggests that the distance between "I have an idea for my class or library program" and "I have a page I could show someone" has just collapsed from what might once have taken days or weeks down to the seconds it took you to read this paragraph.`,
        },
        {
          heading: "Changing it with words: the describe, look, describe loop",
          body: `Your first result is a starting point rather than a finished product, and the genuine skill you are learning is the loop of improving it through conversation. For example, you look at the page in the artifact, decide on one thing you would like to change, and describe that single change in plain words, such as "make the heading larger" or "add a section listing what people should bring." This iterative way of working, in which you shape a result through a series of small exchanges rather than a single perfect request, is a foundational practice in working well with AI (Dakan & Feller, 2025). This suggests that the loop you are learning here is not a beginner's shortcut but the same method that experienced builders rely on.

![The describe, look, describe loop: describe a change in plain words, look at the result in the artifact panel, then describe the next change — repeating one change at a time.](/describe-look-describe.svg)

The single most useful habit in this loop is to request one change at a time rather than many at once. For example, if you ask for five changes in one message and one of them is not what you intended, it becomes difficult to tell which request caused the problem; if you ask for one change and dislike the result, you simply describe the correction and continue. Such restraint keeps you in control of the build at every step. Additionally, if a change ever makes the page worse, you can simply ask Claude to undo it, because the conversation remembers what came before.

In order to build real comfort with this loop before moving on, try it now with three separate, small requests on your own page: ask for the title to be made larger, ask for a placeholder photo section to be added, and ask for the color scheme to change to blue. For example, running through these three specific changes gives you direct experience of the loop working three times in a row, which does more to build confidence than reading any description of it could.`,
        },
        {
          heading: "Saving your work as an .html file",
          body: `A build that lives only inside a conversation is not yet yours to keep, and the final step of this module is to save your page as a file on your own computer. For example, the artifact panel includes an option to copy or download the result, and choosing to download it produces a single file whose name ends in .html, which is the standard format that every web browser can open. This indicates that your work now exists independently of the conversation that created it, and that you could open it, share it, or later put it on the internet.

I want you to save this file somewhere deliberate rather than lose it in a downloads folder, because it is the first of many you will keep. For example, you might create a single folder named for this course and place every build you make inside it, so that your growing collection of tools stays in one findable place. Such a small habit of organization costs nothing now and saves considerable frustration later, particularly once you have built several tools. Additionally, this single .html file is exactly the kind of file that a later module will teach you to publish to a live web address, so keeping it safe is the first step toward putting it online.

Once the file is saved, find it in your folder and double-click it, and notice that it opens directly in your default web browser, showing exactly the page you saw in the artifact panel a moment ago. This indicates that an .html file is not a special or fragile format; it is simply a text file your browser already knows how to read and draw, in the same way a .docx file opens in a word processor. Such an unremarkable fact is, in a real sense, the entire foundation this course is built on.`,
        },
        {
          heading: "When something looks wrong",
          body: `Occasionally your first build will not look quite right, a section may be missing, the colors may not match what you pictured, or the layout may look cramped on your screen, and it is worth knowing before this happens that none of this signals a mistake on your part. In order to fix a build that looks wrong, simply describe what you see and what you wanted instead, in the same plain language you have used throughout this module, such as "the fun-fact section did not appear — please add it back" or "this looks too crowded, please add more space between sections."

Such corrections are a completely ordinary part of building, not a sign that something has gone badly, and the describe, look, describe loop you practiced in the previous section is exactly the tool for resolving them. This suggests that your job in this course is never to produce a flawless first attempt; it is to notice clearly what does not yet match what you wanted and to say so, which is a skill you already use constantly in your teaching or library work whenever you give feedback on a draft.`,
        },
        {
          heading: "Your turn: build and save your own page",
          body: `Before moving on, complete the full sequence yourself, from empty screen to saved file, because this module is only valuable if you actually run it. For example, create your free account, build a one-page site for a real course or library program you run, make at least two improvements to it one at a time, and download the finished .html file to a folder you have chosen. Such a complete pass, however small the page, means you have already done the thing that this entire course is about.

In order to make the exercise genuinely useful, choose a page you might actually want, rather than a throwaway example, because a real subject teaches you more than an invented one. For example, a page you would be willing to show a colleague forces you to judge the result honestly, which is exactly the skill that separates a builder from a person who has merely watched a demonstration. When you have a saved .html file that you are reasonably pleased with, you have completed this module and are ready to learn why your plain-language requests work as well as they do.`,
        },
      ],
      summary: [
        "Create a free Claude account and reach the chat window in a few minutes, with no software to install.",
        "Explain what an artifact is: a live panel that shows the actual page you are building beside the conversation.",
        "Run a first build by describing who a page is for, what it should contain, and how it should look.",
        "Use the describe, look, describe loop, changing one thing at a time to stay in control of the build.",
        "Download your finished work as a single .html file and store it in a deliberate place.",
        "Recognize that a build looking wrong is ordinary, and fix it with the same describe, look, describe loop.",
        "Recognize that you have completed a full build, from idea to saved file, which is the core of everything ahead.",
      ],
    },
    quiz: [
      {
        question: "What is an “artifact” in Claude?",
        options: [
          "A saved password",
          "A live panel beside the conversation that shows the actual page you are building",
          "A type of file format you have to buy",
          "A folder on your computer",
        ],
        correctIndex: 1,
        explanation:
          "An artifact is the panel that opens beside the chat and displays the working page, document, or tool live, updating as you ask for changes, so you can judge the result simply by looking at it.",
      },
      {
        question: "Which account do you need to start building in this module?",
        options: [
          "A paid developer account",
          "A free Claude account",
          "A GitHub account",
          "A campus IT account",
        ],
        correctIndex: 1,
        explanation:
          "The free tier of Claude is enough for the single-page builds in the first half of the course. You begin there before paying for anything.",
      },
      {
        question:
          "What is the best habit inside the “describe, look, describe” loop?",
        options: [
          "Ask for as many changes as possible in one message",
          "Request one change at a time",
          "Avoid changing anything after the first result",
          "Edit the code directly yourself",
        ],
        correctIndex: 1,
        explanation:
          "Requesting one change at a time keeps you in control: if a single change is wrong, you know exactly which request caused it and can correct just that one thing.",
      },
      {
        question: "When you download your build, what kind of file do you get?",
        options: [
          "A .pdf",
          "A single file whose name ends in .html",
          "A .zip of raw code",
          "Nothing is saved",
        ],
        correctIndex: 1,
        explanation:
          "The artifact downloads as one .html file, the standard format every browser can open. Your work then exists independently of the conversation that created it.",
      },
      {
        question: "What should a strong first build prompt include?",
        options: [
          "Only the exact code to write",
          "Who the page is for, what it should contain, and roughly how it should look",
          "A long list of programming terms",
          "Nothing, so the AI can guess",
        ],
        correctIndex: 1,
        explanation:
          "Even your first prompt should describe the outcome: who it is for, what it contains, and how it looks, rather than specifying code. Describing the result plainly is the whole skill.",
      },
    ],
    relatedModules: ["you-can-build-software-now", "what-is-a-website"],
  },
  {
    id: 3,
    slug: "talking-to-ai-prompting",
    title: "How to Talk to AI: Prompting for Builders",
    level: "foundations",
    audience: "both",
    skills: ["prompting"],
    topics: [
      "The AI knows nothing about you — specificity is kindness",
      "The recipe: WHO, WHAT, HOW, and one EXAMPLE",
      "Iterating beats perfecting: small changes, one at a time",
      "A copy-paste phrasebook that works",
      "“Ask for it safe” — the security habit from day one",
      "When it goes wrong: the reset move",
    ],
    objectives: [
      "Write clear, specific build requests",
      "Give examples and constraints",
      "Iterate through conversation instead of starting over",
      "Recognize why vague prompts produce disappointing results",
    ],
    estimatedMinutes: 30,
    status: "published",
    description:
      "Good building starts with good asking. This module teaches the recipe of a strong build prompt — who it's for, what it should do, how it should look, and one example — and shows a weak prompt rewritten into a good one. You'll pick up a phrasebook of requests that work, the one-change-at-a-time habit, and a plain “keep it safe” line to add to every prompt.",
    content: {
      intro:
        "In the previous module you built and saved a working page within a matter of minutes, and I want you to hold onto the memory of how that page came to exist: not from code you wrote, but from words you typed. In this module we examine those words closely, because the sentence you type into the chat window is the entire instrument of your building, and a professional who learns to phrase it well will consistently receive better results than one who does not.",
      sections: [
        {
          heading: "The AI knows nothing about you — specificity is kindness",
          body: `Claude is, in a genuine sense, a brilliant new colleague who has just walked into your department for the first time, and it is worth taking that image seriously before you type your next request. For example, a new colleague does not know which course you teach, which students you serve, or what "make it look professional" means to you specifically, and Claude does not know these things either, no matter how capable it otherwise is. This indicates that a vague instruction does not fail because the AI is limited, but because no reader, human or artificial, can produce a specific result from an unspecific request.

It follows that specificity is not a technical requirement so much as an act of consideration toward the assistant you are working with. For example, "make a study tool" leaves Claude to guess your subject, your students' level, and your sense of a good design, while "make a flashcard tool for twenty vocabulary terms in an introductory biology course, with a clean and calm design" leaves nothing to guess. Such a small shift in wording changes the entire quality of what comes back. Additionally, the habit of specificity you build here in a prompt is the same habit you already practice when you write a clear assignment or a clear reference-desk answer, so you are not learning a foreign skill; you are applying a familiar one to a new setting.

I want to be direct about what this means for how you should feel about a disappointing first result. When a build does not match what you pictured, the instinctive reaction is often to wonder whether the AI has misunderstood you or whether you have simply asked for something too difficult. In order to interpret a disappointing result correctly, check your original request against the four parts of the recipe covered in the next section before concluding either of those things, because in the overwhelming majority of cases, a missing part of the request, not a limit of the tool, explains the gap.`,
        },
        {
          heading: "The recipe of a good build prompt: WHO, WHAT, HOW, and one EXAMPLE",
          body: `A strong build prompt follows a recipe of four parts, and once you know the recipe you no longer have to wonder what to type. In order to write a strong prompt, state WHO the tool is for, WHAT it should do, HOW it should look or feel, and one concrete EXAMPLE of the content inside it. For example, "build a flashcard tool for my students studying for a citation-style quiz, showing one term at a time with a button to flip to the definition, in a clean design with my library's blue and white colors, starting with the term 'primary source'" satisfies all four parts in a single sentence.

Consider the weak version of this same request beside its rewrite, because the contrast makes the recipe concrete. A weak prompt, "make a study thing for my students," names none of the four parts and leaves Claude to invent an audience, a feature set, a look, and a subject on its own; the strong rewrite above names all four and leaves almost nothing to invention. This suggests that the gap between a disappointing build and a useful one is rarely a gap in the AI's ability, but a gap in what the prompt actually specified. Additionally, you do not need to write beautifully to follow this recipe; you need only cover the four parts, in any order, in language as plain as you would use with a colleague.

A second comparison makes the pattern even clearer, because a single example can look like an exception rather than a rule. Consider "make something for orientation week" beside its rewrite: "build a one-page welcome guide for new students during orientation week, showing the library's hours, three services new students use most, and a map link, in a warm, welcoming design, starting with the line 'Welcome to your library.'" The weak version leaves every one of the four questions unanswered, while the rewrite answers all four in a single breath, and the difference in what each produces is not subtle.`,
        },
        {
          heading: "Iterating beats perfecting: small changes, one at a time",
          body: `A common mistake among new builders is the belief that the first prompt must be perfect, and I want to correct that belief directly, because it produces hesitation rather than good results. In order to build well, you write a decent first prompt using the recipe above, look at what comes back, and then improve it through a short series of small, separate requests rather than one long, flawless instruction written in advance. For example, after your flashcard tool appears, you might notice that the text is too small, and you simply say so, rather than trying to have anticipated font size in your original prompt.

The habit that makes this loop work is requesting one change at a time. For example, if you ask Claude to enlarge the text, add a progress counter, and change the color scheme in a single message, and the result disappoints you, it becomes difficult to know which of the three requests caused the problem; if you ask for one change and see its effect before asking for the next, you always know exactly what produced what. Such restraint is not slower in any meaningful sense, because each small exchange takes only seconds, and it keeps you, rather than the AI, in charge of the direction of the build.

This principle scales naturally as your builds grow more ambitious later in the course. For example, the discipline of one change at a time in a simple one-page site is precisely the same discipline that will keep a multi-page course portal manageable in Module 12, when far more could plausibly go wrong at once. This suggests that the habit you are forming now with small, low-stakes builds is not a beginner's crutch you will outgrow, but the exact practice that experienced builders continue to rely on as their projects grow larger.`,
        },
        {
          heading: "A copy-paste phrasebook that works",
          body: `It is useful to keep a small set of dependable phrases on hand, because a builder who is not sure how to say what they want often falls silent rather than asking. For example, "keep everything the same but change ___" lets you isolate a single change without risking the rest of the page; "that's not what I meant — here's what I see versus what I want" gives Claude the comparison it needs to correct course precisely; and "explain what you changed, in simple words" lets you understand a fix without needing to read any code.

These phrases work because each one gives Claude a clear, bounded task rather than an open-ended feeling of dissatisfaction. For example, saying only "I don't like it" gives the AI nothing to act on, while "keep everything the same but make the heading larger" gives it exactly one instruction to carry out. Such phrasing is worth memorizing, or better, worth saving somewhere you can return to, because you will reach for it in nearly every build in this course. Additionally, these same phrases work regardless of what you are building, whether it is a quiz, a flashcard site, or the course portal you assemble near the end of this course.

A fourth phrase worth adding to the list handles a situation you will eventually encounter: "go back to how it was before the last change." For example, when a requested change makes a page worse rather than better, this single sentence relies on the fact that the conversation remembers everything that came before, letting you retreat to a known-good version instantly rather than trying to describe your way back to it. Such a phrase costs nothing to keep in reserve, and it removes any hesitation about experimenting freely, since no change is ever truly permanent until you are satisfied with it.`,
        },
        {
          heading: "“Ask for it safe” — the security habit from day one",
          body: `I want you to adopt one additional habit sentence starting now, because it costs nothing to include and it measurably changes the safety of what you receive. In order to build safely from the beginning, add a line such as "keep it safe: no passwords or secret keys in the code, and check anything a user types" to your build prompts, particularly once a tool begins collecting information from other people. For example, this single sentence tells Claude to avoid the two most common beginner security mistakes, hardcoding sensitive values directly into a file and trusting user input without checking it.

This is not a habit I am asking you to take on faith. Research examining prompting techniques for secure code generation found that explicit security instructions included in a prompt measurably reduce the security weaknesses present in the resulting code, compared with prompts that omit such instructions (Tony et al., 2025). This indicates that asking plainly for safety is not a superstition but an evidence-based habit, and it costs you only a single added sentence. Undoubtedly you will not remember every possible security concern as a non-programmer, and you do not need to; you need only the habit of asking, every time, for the tool to be built safely.

The habit matters more, not less, as your builds begin to interact with other people. For example, a one-page welcome poster carries little risk, but the moment a tool of yours collects a name, an email address, or a quiz score from a visitor, the "keep it safe" line moves from a good habit to an essential one. Such a distinction is worth remembering as you move toward the later modules of this course, where your builds begin to hold real information rather than only display it.`,
        },
        {
          heading: "When it goes wrong: the reset move",
          body: `Occasionally a build enters a state where each new request seems to make things worse rather than better, and it is worth knowing in advance what to do when that happens, so that frustration does not take over. In order to recover, describe the problem freshly, in one clear paragraph, rather than arguing back and forth over what went wrong in the previous few messages. For example, instead of continuing to say "no, still not right, try again," you might write, "here is the page as it currently looks and here is exactly what I want instead," starting the correction from a plain, current description rather than from an accumulated argument.

If a fresh, clear description does not resolve the problem, the more decisive move is to start an entirely new conversation, carrying over only the working parts of your build. This suggests that a stuck conversation is not a failure on your part, but simply a normal occurrence that a new start easily resolves, in the same way that closing and reopening a stubborn document sometimes resolves more than continuing to fight with it. Additionally, keeping a downloaded copy of each version of your build, a habit you already practiced in the previous module, means that a reset never costs you the work you have already completed.

It is worth naming the emotional side of this moment as well, because frustration with a stuck build is genuinely common and not a sign that you are unsuited to this work. For example, even an experienced builder occasionally reaches a point where a conversation has accumulated so many small corrections that starting fresh is faster than continuing to untangle it. Recognizing this pattern early, rather than pushing through mounting frustration, is itself part of the skill this module teaches.`,
        },
        {
          heading: "Your turn: rewrite a weak prompt",
          body: `Before moving on, take the weak prompt named earlier in this module, "make a study thing for my students," and rewrite it yourself using the recipe: WHO it is for, WHAT it should do, HOW it should look, and one EXAMPLE of the content inside it. For example, choose a real subject from your own teaching or library work, so that the exercise produces something you might genuinely use, rather than an invented placeholder.

Once you have written your rewrite, run both prompts in Claude, the original weak version and your specific rewrite, and compare the two results side by side. In order to complete this module fully, notice concretely where the two results differ, whether in the accuracy of the subject, the usefulness of the layout, or simply how close the second result lands to what you actually pictured. Such a direct comparison is the clearest evidence you will encounter that the recipe in this module is not an academic exercise but a habit worth carrying into every prompt you write from here forward.

Once you have completed the comparison, add the "ask for it safe" sentence to your specific rewrite and run it a third time, so that you leave this module having practiced the entire skill set in a single exercise: the four-part recipe, the security habit, and the discipline of judging a result honestly against what you actually wanted.`,
        },
      ],
      summary: [
        "Explain why Claude, like any new colleague, cannot guess what you mean, and why specificity is a form of kindness to the assistant you are working with.",
        "Write a build prompt using the four-part recipe: WHO it is for, WHAT it should do, HOW it should look, and one EXAMPLE.",
        "Iterate through a series of small, separate requests instead of trying to write one perfect prompt in advance.",
        "Use a small phrasebook of dependable requests to isolate changes and get plain-language explanations.",
        "Add the “keep it safe” habit sentence to build prompts, understanding that explicit security instructions measurably reduce vulnerabilities.",
        "Recover from a stuck build by describing the problem freshly or starting a new conversation, rather than arguing with the AI.",
      ],
    },
    quiz: [
      {
        question: "What are the four parts of a strong build prompt?",
        options: [
          "Length, tone, grammar, and punctuation",
          "WHO it is for, WHAT it should do, HOW it should look, and one EXAMPLE",
          "A title, a date, a budget, and a deadline",
          "Only the exact code you want written",
        ],
        correctIndex: 1,
        explanation:
          "The recipe covers who the tool is for, what it should do, how it should look or feel, and one concrete example of the content inside it. Covering all four leaves little for the AI to guess.",
      },
      {
        question: "Why does a prompt like “make it better” usually produce a disappointing result?",
        options: [
          "Because Claude cannot process short sentences",
          "Because it does not specify what “better” means, leaving Claude to guess",
          "Because it is grammatically incorrect",
          "Because the free tier does not allow short prompts",
        ],
        correctIndex: 1,
        explanation:
          "A vague request like “make it better” gives no specific direction, so Claude has to guess what you want changed. Naming the exact change gets a far more useful result.",
      },
      {
        question: "What is the benefit of requesting one change at a time?",
        options: [
          "It is required by Claude's free tier",
          "If the result disappoints you, you know exactly which request caused it",
          "It makes the build take longer overall",
          "It prevents you from downloading the file",
        ],
        correctIndex: 1,
        explanation:
          "Asking for several changes at once makes it hard to tell which request caused a problem. One change at a time keeps you in control of the build at every step.",
      },
      {
        question: "What does the “ask for it safe” habit sentence actually do?",
        options: [
          "It slows down the build for no benefit",
          "It is only useful for large software companies",
          "It tells Claude to avoid hardcoded secrets and check user input, and research shows explicit security prompts measurably reduce vulnerabilities",
          "It replaces the need to test the tool yourself",
        ],
        correctIndex: 2,
        explanation:
          "Research on prompting techniques for secure code generation found that explicit security instructions in a prompt measurably reduce weaknesses in the resulting code, so a single habit sentence has a real, evidenced effect.",
      },
      {
        question:
          "Which of these four prompts best follows the WHO, WHAT, HOW, EXAMPLE recipe?",
        options: [
          "“Make something for my class.”",
          "“Build a quiz.”",
          "“Build a ten-question quiz for my introductory chemistry students on lab safety terms, in a clean, calm design, starting with the term 'fume hood.'”",
          "“Make it look nicer.”",
        ],
        correctIndex: 2,
        explanation:
          "This prompt names the audience, the feature, the look, and a concrete example term, satisfying all four parts of the recipe. The other three each omit most or all of it.",
      },
    ],
    relatedModules: ["meet-your-ai-builder", "build-quiz-app"],
  },
  {
    id: 4,
    slug: "what-is-a-website",
    title: "What Is a Website, Really?",
    level: "foundations",
    audience: "both",
    skills: ["building"],
    topics: [
      "A website is a document the browser draws",
      "HTML is the skeleton, CSS the clothing, JavaScript the muscles",
      "The single-file idea",
      "Where websites live: your computer vs. online",
      "A plain-language mini-glossary",
      "Websites everyone can use — accessibility in plain words",
    ],
    objectives: [
      "Understand in plain words what HTML, CSS, and JavaScript each do",
      "Know what a “single-file app” means and what a browser does",
      "Learn enough vocabulary to follow along when Claude explains things",
    ],
    estimatedMinutes: 25,
    status: "published",
    description:
      "Enough plain-words vocabulary to never feel lost — no code memorization. You'll learn the skeleton/clothing/muscles analogy for HTML, CSS, and JavaScript, peek inside your downloaded file to see it's just readable text, and meet the single-file idea that makes one .html file easy to save, share, and put online. It closes with a first, gentle introduction to accessibility and one magic prompt to make any build usable by everyone.",
    content: {
      intro:
        "You have now built two pages and rewritten a prompt using a clear recipe, and it is a reasonable moment to ask what, precisely, you have been making. In this module I do not ask you to memorize any code; I ask only that you come away with enough plain-language vocabulary to follow along comfortably when Claude explains what it has built, in the same way that you do not need to know automotive engineering to understand a mechanic who tells you what is wrong with your car.",
      sections: [
        {
          heading: "A website is a document the browser draws",
          body: `A website, however elaborate it appears, is at its foundation a document, and the browser on your computer is the program that reads that document and draws it onto your screen. For example, when you open the .html file you saved in Module 2, your browser reads through it from top to bottom and renders a heading, a paragraph, and a button in the positions and colors the document describes, in much the same way that a person reading a musical score produces sound from written notation. This indicates that nothing mysterious happens between your saved file and the page you see; a program simply reads instructions and displays the result.

It follows that every website you visit, however large, is fundamentally the same kind of object as your own small page, differing only in scale and complexity. For example, a university library's catalog and your one-page workshop announcement are both documents that a browser reads and draws, and the library's is simply built from many more such documents working together. Such a realization is worth sitting with, because it means the gap between what you have already built and what a professional web team builds is a gap of scale, not a gap of kind.

This has a practical consequence for how you approach every build ahead in this course: you are never asking the AI to do something categorically different from what it has already done for your poster and your rewritten prompt, only more of it. In order to keep this in view, it helps to remember that a course portal with fourteen linked pages, which you will build near the end of this course, is at its foundation the same kind of document your browser draws, just with more of them connected together.`,
        },
        {
          heading: "HTML is the skeleton, CSS the clothing, JavaScript the muscles",
          body: `Three technologies do nearly all of the work inside the file you downloaded, and a simple analogy makes their roles clear without requiring you to read a line of any of them. In order to picture the analogy, think of HTML as the skeleton of the page, the plain structure of headings, paragraphs, and buttons that determines what exists and in what order; CSS as the clothing, the colors, spacing, and fonts that determine how that structure looks; and JavaScript as the muscles, the instructions that make something happen when a visitor clicks, types, or scrolls.

This division of labor explains a great deal about how Claude describes its own work to you. For example, when Claude says it "changed the styling," it is working in CSS, the clothing, and the underlying content has not moved; when it says it "added a click handler," it is working in JavaScript, the muscles, giving the page a new behavior. Such vocabulary lets you follow a conversation about your own build without needing to read the code itself, which is precisely the goal of this module. Additionally, all three exist together, side by side, inside the single file you have already been downloading.

Consider how this analogy applies directly to the quiz app you will build in Module 7: the questions and answer choices are the skeleton, the calm color scheme and readable spacing are the clothing, and the logic that checks an answer and updates a running score is the muscles. This suggests that once you can name which of the three a feature belongs to, a request like "the score isn't updating" becomes a request about the muscles specifically, which helps you describe the problem to Claude with more precision than "it's broken."`,
        },
        {
          heading: "The single-file idea",
          body: `A remarkable feature of the pages you have built so far is that the skeleton, the clothing, and the muscles all live inside one file, an approach commonly called a single-file app. For example, your Module 2 poster is not three separate files that must travel together and stay carefully organized; it is one file whose name ends in .html, and every part of the page it produces is contained inside it. This indicates that the single-file approach removes an entire category of beginner mistakes, such as a page breaking because one of several linked files went missing.

This structure is well suited to a beginning builder for reasons that go beyond simplicity. For example, a single file is easy to save to a folder, easy to attach to an email or share on a flash drive, and, as a later module will show, easy to put online, because there is only ever one thing to move or upload. Such convenience is not an accident of this course; it is a deliberate choice, and every project you build here, from the quiz app onward, will follow the same single-file approach for exactly this reason.

It is worth noting that larger, professionally built websites usually split their skeleton, clothing, and muscles across many separate files for reasons of organization at a scale you are unlikely to reach in this course. This suggests that the single-file approach is not a simplified toy version of "real" building, but a genuine, professional pattern that is simply best matched to projects of the size you will be making, and it remains a perfectly legitimate way to build even once you no longer think of yourself as a beginner.`,
        },
        {
          heading: "Where websites live: your computer vs. online",
          body: `The .html file sitting in your folder right now exists only on your own computer, and only you can open it, which is different from being "on the internet" in the sense that anyone with a link can visit it. For example, your file becomes visible to the world only once it is placed on a hosting service, which is simply another computer, one that stays turned on and connected at all times, unlike your laptop, which you close and carry away. This indicates that "putting a site online" is not a mysterious transformation of the file itself, but a matter of moving an identical copy of it onto a computer that never sleeps.

Once your file sits on such a service, it receives a URL, an address other people can type or click to reach it, in the same way that a physical address lets a letter find your office. This suggests that the entire path from a page on your computer to a page the public can visit involves only two ideas: a computer that stays on, and an address that points to it. A later module in this course walks through that exact process for the tools you build here, so for now it is enough to hold the distinction between "on my computer" and "online" clearly in mind.

I want to underline one implication of this distinction that often surprises new builders: your file on your own computer is entirely private by default, visible to no one but you, and it stays that way until you deliberately choose to deploy it. For example, this means you can experiment, make mistakes, and rebuild a page as many times as you like on your own machine without any risk of a half-finished draft being seen by students or patrons, which frees you to treat early attempts as genuinely low-stakes practice.`,
        },
        {
          heading: "The words you will hear: a plain-language mini-glossary",
          body: `A short, plain-language glossary will keep you oriented as Claude uses these terms in conversation, and none of them require more than a single sentence to understand. A *file* is one saved piece of work, such as your .html page; a *folder* is a container that holds files, the way a physical folder holds papers; a *browser* is the program, such as Chrome or Safari, that reads a file and draws the page you see. A *URL* is the address that points to a page online; to *deploy* means to move your finished file onto a hosting service so that its URL becomes reachable by others; a *host* is the always-on computer that stores your file and serves it up when someone visits its URL; and a *repository* is an organized, tracked folder, often on a service called GitHub, that keeps a history of every version of your project as you build it.

For example, when a later module tells you to "deploy your site" or says your file now "lives in a repository," these are the precise, ordinary meanings behind the words, and you can return to this short list any time a term feels unfamiliar. This indicates that the vocabulary of building is small and learnable in a single sitting, not a vast technical language that takes years to acquire. Undoubtedly you will hear each of these seven words repeatedly across the rest of this course, and by the time you reach the final module they will feel as ordinary to you as any term from your own field.`,
        },
        {
          heading: "Websites everyone can use — accessibility in plain words",
          body: `A website that only some visitors can use is, in a real sense, an incomplete one, and it is worth introducing this idea now, before you build anything more elaborate than a poster. In order to build an accessible page, keep the text at a readable size, choose colors with enough contrast that text stands out clearly from its background, make sure every feature works for a visitor using only a keyboard rather than a mouse, and describe images in words for visitors who use a screen reader. For example, a research guide with pale gray text on a white background may look elegant to you and be nearly unreadable to a patron with low vision, which is exactly the kind of gap that accessible design closes.

This is not only a matter of courtesy; for public colleges and universities, it is increasingly a matter of law. The United States Department of Justice issued a rule under Title II of the Americans with Disabilities Act requiring state and local government entities, including public institutions of higher education, to make their web content and mobile applications conform to established accessibility guidelines, with compliance required by April 2027 for larger entities (U.S. Department of Justice, 2024). This indicates that the habit you build here is not merely good practice but is becoming an enforceable expectation for institutions like the one you may work for.

Fortunately, the fix requires only one more habit sentence in your prompts: "make this accessible: good contrast, readable text, works without a mouse." Add it to every build from here forward, the same way you added "keep it safe" in the previous module. In order to see the effect for yourself, try adding this sentence to a request on your own poster page and notice which specific changes come back, since seeing accessibility translated into concrete adjustments, larger touch targets, darker text, an alt description on an image, does more to build the habit than any definition could.`,
        },
        {
          heading: "Your turn: peek inside and ask Claude to explain",
          body: `Before moving on, open the .html file you saved in Module 2 using a plain text editor, such as TextEdit on a Mac or Notepad on Windows, rather than double-clicking it to open it in a browser. For example, once it is open, spend about sixty seconds looking through it, and try to find the name of your class or program somewhere in the visible text. You do not need to understand the surrounding lines to do this; you need only confirm that what you are looking at is ordinary, readable text rather than something incomprehensible, and then close the file without saving any changes.

Once you have looked, return to Claude and ask a direct question: "explain what the first ten lines of an HTML file do, like I'm not a programmer." In order to get the most from this exercise, read the explanation slowly and notice how many of the words in it, skeleton, clothing, file, browser, you now already recognize from this module. Such a moment, seeing a plain-language explanation land as genuinely understandable rather than intimidating, is exactly the shift in confidence this module is built to produce.`,
        },
      ],
      summary: [
        "Explain that a website is a document a browser reads and draws, no different in kind from the pages you have already built, only larger in scale.",
        "Use the skeleton, clothing, and muscles analogy to describe what HTML, CSS, and JavaScript each do.",
        "Explain what a single-file app is and why it suits a beginning builder.",
        "Distinguish a file on your own computer from a page that is “online,” and know what a URL and a host are.",
        "Use a short, plain-language glossary — file, folder, browser, URL, deploy, host, repository — to follow builder conversations without getting lost.",
        "Describe what makes a page accessible, why it increasingly matters as a matter of law for public institutions, and add the accessibility habit sentence to a build prompt.",
      ],
    },
    quiz: [
      {
        question:
          "Which analogy correctly matches HTML, CSS, and JavaScript to their roles?",
        options: [
          "HTML is the clothing, CSS is the muscles, JavaScript is the skeleton",
          "HTML is the skeleton (structure), CSS is the clothing (look), JavaScript is the muscles (behavior)",
          "HTML is the muscles, CSS is the skeleton, JavaScript is the clothing",
          "All three do exactly the same job",
        ],
        correctIndex: 1,
        explanation:
          "HTML provides the structure of a page (the skeleton), CSS controls how it looks (the clothing), and JavaScript makes it do things when a visitor interacts with it (the muscles).",
      },
      {
        question: "What is a “single-file app”?",
        options: [
          "A program that only opens once",
          "A website whose structure, look, and behavior all live inside one .html file",
          "A file that can only be viewed by one person",
          "A type of hosting service",
        ],
        correctIndex: 1,
        explanation:
          "A single-file app keeps the HTML, CSS, and JavaScript together in one file, which is easy to save, share, and later put online, and avoids the problem of linked files going missing.",
      },
      {
        question: "What does it mean to “deploy” a site?",
        options: [
          "To delete the file from your computer",
          "To move your finished file onto a hosting service so its URL becomes reachable by others",
          "To rename the file",
          "To open it in a text editor",
        ],
        correctIndex: 1,
        explanation:
          "Deploying means placing your file on a host, an always-on computer, so that anyone with its URL can visit the page, rather than only you on your own computer.",
      },
      {
        question: "What is a URL?",
        options: [
          "A type of file extension",
          "The address that points to a page online",
          "A programming language",
          "A password used to protect a website",
        ],
        correctIndex: 1,
        explanation:
          "A URL is the address other people can type or click to reach your page online, similar to a street address pointing to a physical location.",
      },
      {
        question:
          "True or false: to build with Claude, you must understand every line of code it produces.",
        options: [
          "True — you cannot build responsibly otherwise",
          "False — you need only enough plain-language vocabulary to follow along and judge the result",
          "True, but only for JavaScript",
          "False, because code does not matter at all",
        ],
        correctIndex: 1,
        explanation:
          "This course does not ask you to memorize code. Plain-language vocabulary, of the kind covered in this module, is enough to follow Claude's explanations and judge whether a result matches what you asked for.",
      },
    ],
    relatedModules: ["meet-your-ai-builder", "building-responsibly"],
  },
  {
    id: 5,
    slug: "plan-before-you-build",
    title: "Plan Before You Build",
    level: "foundations",
    audience: "both",
    skills: ["planning"],
    topics: [
      "Why “just start building” backfires",
      "The one-page spec: four questions",
      "Start embarrassingly small — version 1 does one thing well",
      "Worked example: an academic librarian's research-guide page",
      "A second worked example: an instructor's exam-review tool",
      "Let Claude improve your plan",
    ],
    objectives: [
      "Turn a fuzzy idea into a clear one-page spec",
      "Prioritize a small first version",
      "Understand why planning saves hours of frustration",
    ],
    estimatedMinutes: 30,
    status: "published",
    description:
      "The AI builds exactly what you ask — so knowing what you want is the whole game. This module gives you a one-page spec built from four questions (who uses it, what they see first, what they can do, what “done” looks like) and the discipline of an embarrassingly small version 1. You'll write the spec for your capstone idea and let Claude poke holes in it before you build.",
    content: {
      intro:
        "You now know how to describe a change clearly, and it is tempting to conclude that the whole of building is simply talking to Claude well, one prompt at a time. It is not. A prompt describes one step, while a plan describes the destination, and this module teaches you to write the second before you spend much effort on the first, because the professionals who skip this step are the ones who end up building three different tools by accident on the way to building one.",
      sections: [
        {
          heading: "Why “just start building” backfires",
          body: `Claude builds exactly what you ask it to build, which is a genuine strength of the tool and, in the absence of a plan, also its central risk. For example, if you sit down and simply start describing features as they occur to you, a login screen here, a leaderboard there, a second color scheme because the first one no longer feels right, Claude will faithfully build every one of these things, because it has no way of knowing which of them you actually need. This indicates that the AI cannot supply the clarity you failed to bring to the conversation; it can only execute the clarity, or the confusion, that you hand it.

It follows that the hours lost to a frustrating build are rarely the AI's fault, and are almost always the cost of skipping a plan. For example, a builder who starts typing with only a fuzzy sense of "something to help my students study" often ends up rebuilding the same tool three or four times as the real requirements slowly reveal themselves through trial and error. Such a process is exhausting and entirely avoidable. Additionally, the fifteen minutes spent writing a plan before you open the chat window will typically save you far more than fifteen minutes once you are inside it.

I want to be clear that this is not an argument against the describe, look, describe loop you learned in Module 2, which remains exactly the right way to refine a build once it exists. In order to reconcile the two, think of the plan as fixing your destination and the loop as the way you travel toward it; a plan without any iteration afterward would be needlessly rigid, but iteration without a plan is simply wandering, however pleasant each individual step feels.`,
        },
        {
          heading: "The one-page spec: four questions",
          body: `A complete plan for a small tool fits comfortably on one page and requires answering only four questions in plain language. In order to write a one-page spec, answer: who uses it, what do they see first, what can they do, listed as three to five specific things, and what does "done" look like, meaning the concrete sign that the first version is finished and ready to use. For example, "who uses it: my students studying for the midterm; what they see first: a start button and the number of questions; what they can do: answer a question, see if it was right, see their score at the end; done: I can go through all ten questions and see a final score" answers all four in a few short lines.

This structure works because it forces the kind of specificity that Module 3 taught you a strong prompt requires, but applied to the whole tool rather than to a single message. For example, once you can answer all four questions plainly, your first build prompt nearly writes itself, because you have already decided who it is for, what it does, and what it looks like when it is working. Such a spec costs you a few minutes of quiet thought, and it is the single habit most likely to keep a build project small, focused, and finished.

Notice, too, that the fourth question, what does "done" look like, is the one new builders skip most often, and it is arguably the most valuable of the four. In order to see why, consider that without a clear finish line, a build can continue absorbing small tweaks indefinitely, never quite feeling complete enough to use. A concrete answer, such as "I can go through all ten questions and see a final score," gives you a specific, checkable moment at which you are permitted to stop and call the first version done.`,
        },
        {
          heading: "Start embarrassingly small: version 1 does one thing well",
          body: `The most common planning mistake among new builders is not vagueness but ambition, and I want you to resist it directly. In order to plan a first version well, choose one thing for it to do, and do that one thing completely, rather than sketching out every feature you can eventually imagine. For example, version 1 of a quiz app is five questions and a score at the end; it is not user accounts, not a grade book that tracks every student over a semester, and not a leaderboard comparing classes against each other.

Such restraint is not a failure of imagination but a discipline that protects your first success. For example, a version 1 that does one thing well is something you can finish in an afternoon and actually use next week, while a version 1 that tries to do everything is something you may still be building, unfinished, a month from now. This suggests that every feature beyond the single core purpose belongs on a separate list for later, not inside your first spec. Additionally, once version 1 exists and works, adding a second feature to a tool that already runs is a far easier task than building five features at once from nothing.

I encourage you to keep a running "someday list" for each project, a short note where every extra idea that occurs to you mid-build gets written down and set aside rather than added on the spot. For example, if you think of a leaderboard while building your quiz app's version 1, writing "leaderboard — someday" costs you five seconds and lets you return fully to the one thing you are actually building, rather than either losing the idea entirely or letting it derail your focus.`,
        },
        {
          heading: "Worked example: an academic librarian's research-guide page",
          body: `Consider a concrete pass through the four questions, because seeing the recipe applied removes any remaining uncertainty about how to use it. An academic librarian wants a self-owned alternative to a LibGuides research page for a course-integrated instruction session, and answers the four questions as follows: who uses it: students in ENGL 102 doing their first research paper; what they see first: the course name and a short welcome line; what they can do: browse three to five recommended databases with one-line descriptions, see a short list of search terms to try, and click through to a citation-help section; done: a student can find a relevant database and a citation example without asking a question at the reference desk.

Notice what this spec deliberately leaves out, because the omission is as instructive as the content. For example, it does not include a live chat widget, a login for saving favorite sources, or an analytics dashboard showing which links students clicked, all of which are reasonable ideas for a later version but none of which belong inside a first, embarrassingly small build. This indicates that a strong spec is defined as much by what it excludes as by what it includes.`,
        },
        {
          heading: "A second worked example: an instructor's exam-review tool",
          body: `Because this course serves both academic librarians and college instructors, a second worked example grounded in the classroom is worth walking through as well. A biology instructor wants a short review tool for the week before a midterm, and answers the same four questions: who uses it: students in Introductory Biology preparing for the unit two exam; what they see first: the exam date and a start button; what they can do: answer fifteen multiple-choice review questions pulled from lecture material, see immediately whether each answer was correct, and see a final score with the topics they missed grouped together; done: a student can complete all fifteen questions in one sitting and leave knowing which topics need more review.

Compare this spec against the librarian's research-guide example, and notice that despite serving a different audience and a different purpose, both specs share the identical four-question shape. This suggests that the one-page spec is genuinely a general-purpose planning tool, not a technique tailored narrowly to one kind of project, and it is exactly the tool you will reach for regardless of which of the three builds ahead, or which capstone idea, you are planning next.`,
        },
        {
          heading: "Let Claude improve your plan",
          body: `Once your one-page spec is written, the AI itself is a useful second reader before you build anything, and I want you to use it that way rather than moving straight into building. In order to stress-test a plan, paste your spec into a fresh conversation with Claude and ask two direct questions: "What questions do you have before building this?" and "What should I cut from version 1?" For example, Claude may point out that your spec never says what happens when a student gets an answer wrong, or that one of your five features is really two features wearing one name.

This kind of collaborative refinement, in which you supply the judgment about what matters and the AI supplies a second set of eyes on the plan itself, is a natural extension of the working relationship described in Anthropic's own framework for effective AI collaboration (Dakan & Feller, 2025). This suggests that asking Claude to critique your plan before you build is not a workaround but a genuinely good use of the tool, and it typically takes only a minute or two to reveal a gap you had not noticed on your own. Additionally, treating the AI as a second reader at the planning stage, rather than only as a builder once you begin typing your first prompt, is a habit that will serve you increasingly well as your projects grow larger than a single page.`,
        },
        {
          heading: "Your turn: write and refine your capstone spec",
          body: `Before moving on, return to the one tool you wrote down in Module 1 as the thing you most wish existed, and write its one-page spec using the four questions: who uses it, what they see first, what they can do, and what "done" looks like. For example, keep your list of things it can do to three or five items, deliberately choosing the smallest version of the idea that would still be genuinely useful to you.

Once your spec is written, paste it into Claude and ask the two questions from the previous section, then revise your spec based on what comes back. In order to complete this module fully, save the final version of your spec somewhere you will find it again, in the same deliberate folder habit you built in Module 2, because this is the exact document you will hand to Claude when you build this capstone tool later in the course.

With this spec saved, you have now completed Level 1 of this course. You have built two working pages, learned to write a clear build prompt, learned enough plain-language vocabulary to follow along with the AI's explanations, and written a spec for the tool you genuinely want to build. Level 2 begins with the toolbox, GitHub and Vercel, that turns a saved .html file into a live address the whole world can visit.`,
        },
      ],
      summary: [
        "Explain why Claude builds exactly what you ask, and why a vague or missing plan, not the AI, is the usual source of a frustrating build.",
        "Write a one-page spec by answering four questions: who uses it, what they see first, what they can do, and what “done” looks like.",
        "Keep a version 1 small enough to do one thing completely, saving every additional idea for a later version or a “someday list.”",
        "Read worked specs for both a research-guide page and a classroom exam-review tool, and see that the same four-question shape fits both.",
        "Use Claude as a second reader on a plan, asking what questions it has and what to cut, before building anything.",
        "Write, refine, and save the one-page spec for your own capstone idea, completing Level 1 of the course.",
      ],
    },
    quiz: [
      {
        question: "What are the four questions in a one-page spec?",
        options: [
          "Budget, timeline, staff, and software license",
          "Who uses it, what do they see first, what can they do, and what does “done” look like",
          "Title, author, date, and word count",
          "Color scheme, font, logo, and slogan",
        ],
        correctIndex: 1,
        explanation:
          "A complete one-page spec answers who the tool is for, what they see first, what they can do (3–5 specific things), and what finished looks like.",
      },
      {
        question:
          "Which of these belongs in version 1 of a quiz app, and which should wait?",
        options: [
          "Five questions and a final score belong in v1; user accounts and a leaderboard should wait",
          "A leaderboard belongs in v1; questions can be added later",
          "User accounts belong in v1; a score does not matter",
          "All features should be built at once so nothing is missing",
        ],
        correctIndex: 0,
        explanation:
          "Version 1 does one thing well: showing questions and a score. Accounts, grade books, and leaderboards are reasonable later ideas, not part of an embarrassingly small first version.",
      },
      {
        question: "Why do vague plans typically fail?",
        options: [
          "Because Claude refuses to build without a formal document",
          "Because the AI builds exactly what you ask, and it cannot supply clarity you never provided",
          "Because vague plans take longer to type",
          "Because Claude only accepts plans written in bullet points",
        ],
        correctIndex: 1,
        explanation:
          "The AI executes what it is told. If a plan is vague, the build reflects that vagueness, often producing several rebuilt versions before the real requirements become clear.",
      },
      {
        question:
          "A colleague's version-1 plan includes a quiz, a login system, a grade book, a leaderboard, and a chat widget. What is the problem?",
        options: [
          "There is no problem — more features are always better",
          "It is oversized for a version 1; it should be cut down to the one core feature the tool needs first",
          "The plan is missing a color scheme",
          "The plan should have five questions, not five features",
        ],
        correctIndex: 1,
        explanation:
          "This spec tries to do everything at once instead of doing one thing well. A strong version 1 keeps only the core feature and saves the rest for later.",
      },
      {
        question: "What should you do with your spec before you start building?",
        options: [
          "Delete it, since specs are just for planning",
          "Paste it into Claude and ask what questions it has and what to cut from version 1",
          "Keep it private so the AI cannot see it",
          "Translate it into code yourself first",
        ],
        correctIndex: 1,
        explanation:
          "Asking Claude to critique the spec before building, what questions it has and what to cut, surfaces gaps and oversized features in a minute or two, before any building time is spent.",
      },
    ],
    relatedModules: ["you-can-build-software-now", "build-quiz-app"],
  },

  // ─────────────── Level 2 — Applied ───────────────
  {
    id: 6,
    slug: "your-toolbox",
    title: "Your Toolbox: Claude, GitHub, Vercel",
    level: "applied",
    audience: "both",
    skills: ["shipping"],
    topics: [
      "The three tools and their jobs: build, store, publish",
      "GitHub account, step by step — and what a “repository” is",
      "Vercel account, step by step — sign up with GitHub",
      "Connecting them: update GitHub, live site updates itself",
      "Trouble spots, including campus firewall / SSO-only rules",
    ],
    objectives: [
      "Create GitHub and Vercel accounts",
      "Understand what each service is for in one sentence",
      "Connect Vercel to GitHub",
    ],
    estimatedMinutes: 35,
    status: "published",
    description:
      "A pure, numbered setup module. Claude builds it, GitHub stores it, Vercel puts it online — workshop, filing cabinet, storefront. You'll create both free accounts (signing into Vercel with GitHub to save passwords), authorize the connection so every GitHub update redeploys your live site in about thirty seconds, and learn what to do if a campus device or network blocks the sign-ups.",
    content: {
      intro:
        "You have completed Level 1 with a saved page, a clear prompting recipe, enough vocabulary to follow along, and a written spec for your capstone. This module is different from every one before it: it asks nothing of your judgment and nothing of your creativity. It asks only that you follow a short numbered sequence of clicks, because the goal of this module is entirely mechanical, to open the two accounts that turn a file on your computer into a website the whole world can visit.",
      sections: [
        {
          heading: "The three tools and their jobs: build, store, publish",
          body: `Before opening a single new account, it is worth understanding why you need three separate tools rather than one, because the reason clarifies what each one is actually for. In order to hold the three roles clearly in mind, picture a workshop, a filing cabinet, and a storefront: Claude is the workshop, where you describe a tool and watch it get built; GitHub is the filing cabinet, where every version of your project is stored and tracked so nothing is ever truly lost; and Vercel is the storefront, the always-on location where the finished product is displayed to the public with its own address.

Each tool does its one job well, and none of the three tries to do the others' work. For example, Claude does not keep a long-term, organized history of every change you have ever made to a project, which is exactly what GitHub is built for; and GitHub does not display your project as a live, visitable website, which is exactly what Vercel is built for. This indicates that the three-tool setup is not added complexity for its own sake, but a division of labor in which each piece specializes in the one thing it does best. Additionally, all three of these tools offer a free tier that covers everything this course, and very likely everything your capstone project, will ever need.

It is worth pausing on why this particular combination, rather than some single all-in-one service, is what you are about to learn. For example, a single tool that tried to build, store, and publish all at once would either be far more complicated to learn or far more limited in what it could do, while three specialized tools connected together let each one improve independently without disturbing the others. Undoubtedly this pattern, small, focused tools working together rather than one large tool trying to do everything, is one you will recognize again once you reach Module 12 and begin assembling your full course portal from several working pieces.`,
        },
        {
          heading: "GitHub account, step by step",
          body: `A GitHub account is free, and creating one takes only a few minutes entirely through the website, with no separate program to install. In order to sign up, go to [github.com](https://github.com), choose a username you would be comfortable using professionally, since it will appear in the address of your projects, provide an email address, and confirm it when GitHub sends a verification message. This indicates that the process is identical in spirit to creating any other web account you already use, requiring nothing technical beyond a working email inbox.

Once you are signed in, the one new idea worth understanding is the repository, often shortened to "repo," which is simply a project folder that GitHub remembers every version of. For example, when you place your quiz app inside a repository, GitHub keeps a complete history of every change you make to it from that point forward, meaning that if a future edit goes badly, an earlier, working version is never more than a few clicks away. Such a safety net is one of the most valuable things GitHub offers a beginning builder, and you do not need to understand how it works internally to benefit from it; you only need to know it is there.

You do not need to create a repository yet, and I want to be explicit about that, because the next module walks you through creating your first one at the exact moment you have a real project to put inside it. For example, an empty repository created too early is simply one more unused account artifact to keep track of; waiting until Module 7, when your quiz app exists and is ready to be stored, keeps this setup module focused purely on the two accounts themselves.`,
        },
        {
          heading: "Vercel account, step by step",
          body: `A Vercel account is also free, and the fastest way to create one is to sign up using the GitHub account you just made, rather than creating yet another separate password to remember. In order to sign up this way, go to [vercel.com](https://vercel.com), choose "continue with GitHub," and approve the connection when GitHub asks whether Vercel may access your account. This indicates that a single click accomplishes two things at once: it creates your Vercel account, and it begins the exact connection the next section relies on.

The free plan Vercel offers is considerably more generous than most new builders expect, and it is worth saying plainly that you are unlikely to outgrow it during this entire course. For example, the free tier includes enough bandwidth and enough separate projects to host every build you make here, the quiz app, the flashcard site, the course portal, and your capstone, all at once, without any cost and without any prompt to upgrade. Such generosity is deliberate on Vercel's part, since it is designed to let individual builders like you ship real, working sites at no cost.

Once your account exists, take a moment to look around the Vercel dashboard, even though it will be empty of projects for now. For example, notice the button or link labeled "Add New" or "Import Project," because this is precisely where the next module will begin, and having already seen this screen once removes any hesitation about where to click when you are ready to publish your first real build.`,
        },
        {
          heading: "Connecting them: update GitHub, live site updates itself",
          body: `With both accounts created and Vercel already linked to GitHub from the previous step, the final piece of setup is authorizing Vercel to see the specific repositories you want it to publish. For example, inside Vercel you will be offered a screen labeled "Import Git Repository," and selecting a repository there tells Vercel to watch that project and publish whatever it finds inside. This indicates that from this point forward, Vercel is not something you need to operate manually each time you want to update your site; it simply watches for changes.

The practical result of this connection is the single most satisfying moment in this module, and it is worth anticipating clearly before you experience it yourself. For example, once a repository is connected, updating a file inside it on GitHub causes your live website to rebuild and update itself automatically, typically within about thirty seconds, with no separate publishing step on your part. This suggests that "deploying a site," a phrase that once implied a technical, manual process, becomes for you simply the act of saving a change, which is a task you have already been doing since Module 2.

This automatic rebuilding is worth naming explicitly, because it is the mechanism behind nearly every deploy instruction for the rest of this course. For example, when a later module tells you to "commit and push" a change, it means exactly this: save the updated file to your GitHub repository, and let the connection you set up here carry the update to your live site without any further action from you. Such a simple, repeatable pattern is what allows you to focus entirely on what you are building rather than on how it gets published each time.`,
        },
        {
          heading: "Trouble spots",
          body: `A short list of common snags is worth having in advance, so that a small hiccup does not feel like a sign you have done something wrong. For example, an email verification message can occasionally land in a spam folder rather than an inbox, a chosen username may already be taken and require a small variation, and the exact screens described here can shift slightly over time as GitHub and Vercel update their own designs. In order to handle any of these calmly, remember that the underlying ideas, a repository, a deployment, a connection between the two, remain stable even when a button has moved or been renamed; if a screen looks different from what this module describes, ask Claude to describe what you are currently looking at and it will orient you.

One trouble spot deserves a more direct warning: some college and university networks or work laptops block personal sign-ups to services like GitHub and Vercel, whether through firewall rules, IT policy, or a requirement that you sign in only through an institutional single-sign-on system. For example, if a sign-up page fails to load or refuses to complete on a campus device or campus wifi, do not assume the fault lies with you or with the service; try a personal device on a home network instead, or ask your campus IT office whether an approved path for this kind of account already exists. This indicates that persistence against a campus firewall is rarely the right response; a different network is almost always the faster fix.

It is worth adding that none of these trouble spots reflect a flaw in the plan this course is asking you to follow. For example, thousands of individual builders create GitHub and Vercel accounts on personal devices and home networks every day without incident, and the campus-specific obstacles named here affect a minority of readers, not the typical path through this module. Such reassurance is worth holding onto if you do hit a snag, since a blocked signup says something about your institution's network policy, not about your own aptitude for this work.`,
        },
        {
          heading: "Your turn: complete the connection",
          body: `Before moving to the next module, complete all three pieces of this setup in order: create your GitHub account, create your Vercel account by signing in with GitHub, and confirm the connection between them by reaching the "Import Git Repository" screen inside Vercel. For example, you do not need to import a real project yet, since that step arrives naturally in the next module when you build and publish your quiz app; you need only confirm that the screen is there and that Vercel recognizes your GitHub account.

Your success check for this module is simple and requires no judgment call: you can log into all three tools, Claude, GitHub, and Vercel, and Vercel's dashboard offers you the option to import a Git repository. Once you can confirm that, your toolbox is complete, and the next module puts every piece of it to work at once, building, storing, and publishing your first real, shared tool.

Take a moment, once your three accounts are open side by side, to notice that you have just done something a beginning builder several years ago genuinely could not have done in an afternoon: assembled the complete infrastructure a professional software team would use to ship a real, live product. In order to appreciate the scale of that, remember that this exact toolbox, Claude for building, GitHub for storing, Vercel for publishing, is the same toolbox working developers use every day; you are not using a simplified, beginner-only version of it.`,
        },
      ],
      summary: [
        "Explain the job of each tool using the workshop, filing cabinet, and storefront analogy: Claude builds, GitHub stores, Vercel publishes.",
        "Create a free GitHub account and understand what a repository is: a project folder that remembers every version.",
        "Create a free Vercel account by signing in with GitHub, and know that its free plan covers everything this course needs.",
        "Connect Vercel to GitHub so that updating a file causes the live site to rebuild itself in about thirty seconds.",
        "Recognize common setup snags, including campus firewalls and SSO-only networks, and know to try a different device or network rather than fighting them.",
        "Confirm all three accounts work together by reaching Vercel's “Import Git Repository” screen.",
      ],
    },
    quiz: [
      {
        question: "Which tool does which job in the workshop, filing cabinet, storefront analogy?",
        options: [
          "GitHub builds, Claude stores, Vercel publishes",
          "Claude builds it, GitHub stores every version of it, Vercel publishes it live",
          "Vercel builds it, Claude stores it, GitHub publishes it",
          "All three do the exact same job as a backup for each other",
        ],
        correctIndex: 1,
        explanation:
          "Claude is the workshop where you build, GitHub is the filing cabinet that stores and tracks every version, and Vercel is the storefront that publishes the finished result live.",
      },
      {
        question: "What is a “repository” on GitHub?",
        options: [
          "A paid subscription tier",
          "A project folder that GitHub remembers every version of",
          "A type of website design template",
          "A password manager",
        ],
        correctIndex: 1,
        explanation:
          "A repository, or “repo,” is a project folder whose complete history GitHub tracks, so an earlier working version is always recoverable if a later change goes wrong.",
      },
      {
        question: "Why sign up for Vercel using your GitHub account?",
        options: [
          "It is required and there is no other way to sign up",
          "It creates the account and begins the GitHub connection in a single click, avoiding an extra password",
          "It makes the free plan more generous",
          "It is only necessary for paid accounts",
        ],
        correctIndex: 1,
        explanation:
          "Signing up for Vercel with GitHub accomplishes two things at once: creating your Vercel account and starting the exact connection needed to publish your projects, with one password instead of two.",
      },
      {
        question:
          "Once GitHub and Vercel are connected, what happens about thirty seconds after you update a file on GitHub?",
        options: [
          "Nothing, until you manually click “publish”",
          "Your live website automatically rebuilds and updates itself",
          "GitHub deletes the old version",
          "You must re-enter your password",
        ],
        correctIndex: 1,
        explanation:
          "Once a repository is connected, Vercel watches it for changes and automatically rebuilds and updates your live site roughly thirty seconds after a change is saved on GitHub, with no manual publishing step.",
      },
      {
        question:
          "Is the free plan on GitHub and Vercel enough for the projects in this course?",
        options: [
          "No, a paid plan is required after Module 7",
          "Yes, the free plans comfortably cover every build in this course, including the capstone",
          "Only GitHub's free plan is enough; Vercel always requires payment",
          "It depends on how many students are in your class",
        ],
        correctIndex: 1,
        explanation:
          "Both GitHub's and Vercel's free tiers are generous enough to host every project you will build in this course, including your capstone, at no cost.",
      },
    ],
    relatedModules: ["build-quiz-app", "getting-it-online"],
  },
  {
    id: 7,
    slug: "build-quiz-app",
    title: "Build #1: A Class Quiz App",
    level: "applied",
    audience: "both",
    skills: ["prompting", "building"],
    topics: [
      "The spec (done for you this time)",
      "The build prompt, dissected",
      "Filling in your own questions",
      "The improvement round: one change at a time",
      "Test like a student — get one answer wrong on purpose",
      "Look under the hood for 60 seconds",
    ],
    objectives: [
      "Complete a full guided build in claude.ai",
      "Practice the spec → build → iterate loop on something real",
      "End with a downloaded, working quiz app",
    ],
    estimatedMinutes: 45,
    status: "coming-soon",
    description:
      "The training-wheels build: the whole module is one guided project. Using a spec that's done for you, you'll run an annotated build prompt, hand Claude your own ten questions, make a couple of improvements one at a time, and test the quiz like a student — including getting an answer wrong on purpose. Faculty build a class-topic quiz; academic librarians build an information-literacy quiz. You finish with a working quiz.html on your computer.",
    relatedModules: ["talking-to-ai-prompting", "getting-it-online"],
  },
  {
    id: 8,
    slug: "getting-it-online",
    title: "Getting It Online",
    level: "applied",
    audience: "both",
    skills: ["shipping"],
    topics: [
      "Create your first repository",
      "Upload the file and rename it to index.html — the “front door”",
      "Import to Vercel and get a live URL",
      "Your update cycle: change → download → upload → redeploy",
      "Share it — and open it on your phone",
    ],
    objectives: [
      "Upload the quiz app to GitHub via the web interface",
      "Import it to Vercel and share a real URL",
      "Understand the update cycle",
    ],
    estimatedMinutes: 35,
    status: "coming-soon",
    description:
      "Take the quiz from your computer to the internet — no commands, all through the web. You'll create a GitHub repository, upload your file and rename it index.html (the front-door name hosts look for), import it to Vercel, and watch a live URL appear. Then you'll learn the update loop and text the link to a colleague, opening it on your phone as the success check.",
    relatedModules: ["build-quiz-app", "your-toolbox"],
  },
  {
    id: 9,
    slug: "fixing-and-changing",
    title: "Fixing and Changing Things",
    level: "applied",
    audience: "both",
    skills: ["debugging"],
    topics: [
      "Bugs are normal, not failure",
      "The bug report recipe: did / expected / happened",
      "Reopening a build — the file is the memory",
      "When a fix makes it worse: keep a safety copy",
      "Change requests vs. bug fixes",
      "“It looks like it works” — the trap, with real cautionary tales",
    ],
    objectives: [
      "Describe bugs so AI can fix them",
      "Use screenshots and exact quotes",
      "Handle “it broke worse” moments and build maintenance confidence",
    ],
    estimatedMinutes: 35,
    status: "coming-soon",
    description:
      "Every builder's tools break — the skill is describing what you see calmly and precisely. This module gives you a three-part bug report (what I did, what I expected, what happened), the move for reopening an old build by pasting the file into a fresh chat, and how to keep a safety copy before a risky change. It closes with the classic “it looks like it works” trap and why you don't build real logins yet.",
    relatedModules: ["getting-it-online", "building-responsibly"],
  },
  {
    id: 10,
    slug: "build-flashcard-site",
    title: "Build #2: A Flashcard Study Site",
    level: "applied",
    audience: "both",
    skills: ["planning", "building", "shipping"],
    topics: [
      "Your mission — you write the spec this time",
      "Build checkpoints, not step-by-step instructions",
      "The phone check",
      "Deploy solo from memory",
      "Reflection: the gap is your new skill",
    ],
    objectives: [
      "Run the full spec → build → iterate → deploy cycle with less hand-holding",
      "Make independent decisions",
      "Finish with a second live URL",
    ],
    estimatedMinutes: 45,
    status: "coming-soon",
    description:
      "The shared-control build: checkpoints, not steps. You'll write your own spec for a flashcard site — cards that flip, “know it / still learning” sorting, a progress counter — build it against four checkpoints, make sure it works on a phone, and deploy it yourself from memory. Faculty build class-topic cards; academic librarians build research-skills or “know your library” cards. The reflection names exactly what you did without instructions.",
    relatedModules: ["plan-before-you-build", "getting-it-online"],
  },

  // ─────────────── Level 3 — Advanced ───────────────
  {
    id: 11,
    slug: "meet-claude-code",
    title: "Meet Claude Code",
    level: "advanced",
    audience: "both",
    skills: ["building"],
    topics: [
      "Why upgrade from claude.ai for bigger projects",
      "The terminal without fear — about five commands, ever",
      "Installing, step by step",
      "Your first session: it acts, you approve",
      "When to use which tool",
    ],
    objectives: [
      "Understand what Claude Code is and why it beats copy-paste for bigger projects",
      "Install it and lose the fear of the terminal",
      "Run a first session",
    ],
    estimatedMinutes: 40,
    status: "coming-soon",
    description:
      "Artifacts are perfect for one file; Claude Code works directly on your computer's files, handles many of them, and does the GitHub steps for you — a contractor working in your house rather than mailing you furniture. This module demystifies the terminal (a handful of commands, all provided), walks through installing and logging in, and runs a first session where Claude Code creates files itself while you approve each step.",
    relatedModules: ["build-course-portal", "meet-your-ai-builder"],
  },
  {
    id: 12,
    slug: "build-course-portal",
    title: "Build #3: A Full Course Portal",
    level: "advanced",
    audience: "both",
    skills: ["building", "shipping"],
    topics: [
      "The project: a multi-page portal you run",
      "Directing a bigger build — you're the architect",
      "The three magic words: add, commit, push",
      "Connect to Vercel once",
      "The professional loop you now own",
    ],
    objectives: [
      "Build a multi-page site with Claude Code",
      "Learn the three git words (add, commit, push) as “save and publish”",
      "Establish the professional deploy loop",
    ],
    estimatedMinutes: 60,
    status: "coming-soon",
    description:
      "The you-drive build: your spec, your decisions, Claude Code as the crew. You'll build a multi-page portal for a course or program you run — home page, several lesson pages, a resources page, shared navigation — hand Claude Code the whole spec and review its plan, and learn git add/commit/push as “gather, label, publish.” Faculty build a course portal; academic librarians build a self-owned research-guide or program portal. You end owning the same deploy loop professionals use.",
    relatedModules: ["meet-claude-code", "getting-it-online"],
  },
  {
    id: 13,
    slug: "building-responsibly",
    title: "Building Responsibly: Data, Privacy, Accessibility, Ownership & Policy",
    level: "advanced",
    audience: "both",
    skills: ["building", "debugging"],
    topics: [
      "Data is just organized lists — CSV and JSON in plain words",
      "Feeding data to your builds",
      "The bright red line: student records and FERPA",
      "Everyone must be able to use it — accessibility law with teeth",
      "Does this need IRB review? A 30-second gate",
      "Who owns what you build? The IP self-check",
      "Play by your institution's rules — the golden path",
      "Public vs. private repositories",
      "Practical patterns: question banks, reading lists, calendars",
    ],
    objectives: [
      "Understand CSV and JSON in plain words and feed data into your tools",
      "Know what must never go into AI tools or public sites (student records)",
      "Know the rules for higher-ed builders: FERPA, accessibility, IRB, IP ownership, and campus AI policy",
      "Adopt the golden default: collect no personal data, build inside the approved path",
    ],
    estimatedMinutes: 50,
    status: "coming-soon",
    description:
      "The compliance-spine module and the course's real moat. In plain words: CSV and JSON are just organized lists you can feed into your builds; student records are the bright red line (FERPA); public college and university web content must meet accessibility standards (ADA Title II / Section 504); research-facing tools may need IRB review; and your institution may own software you build on its time and systems. The golden default runs through all of it — collect no personal data, and build inside your campus's approved path. Not legal advice.",
    relatedModules: ["what-is-a-website", "habits-costs-capstone"],
  },
  {
    id: 14,
    slug: "habits-costs-capstone",
    title: "Good Habits, Costs & Your Capstone",
    level: "advanced",
    audience: "both",
    skills: ["shipping", "planning"],
    topics: [
      "What this hobby costs — free tiers and honest numbers",
      "Habits of people whose stuff doesn't break",
      "Knowing your limits (and that's fine)",
      "The capstone and its ship checklist",
      "Where to go from here",
      "Look back — a short reflection",
    ],
    objectives: [
      "Understand subscription and API costs in plain words",
      "Build sustainable habits: backups, versions, testing",
      "Complete and ship the capstone, and know where to go next",
    ],
    estimatedMinutes: 45,
    status: "coming-soon",
    description:
      "The finish line. You'll get honest monthly cost numbers (the free tiers are genuinely enough), the habits of people whose projects don't break, and a clear-eyed look at the limits where a real developer is warranted. Then you build and ship your capstone — the tool from your Module 1 index card — against a ship checklist: no personal data, accessibility checked, no secrets, tested with odd input, and the IRB and ownership gates cleared. A closing reflection names what you can now do that you couldn't before.",
    relatedModules: ["plan-before-you-build", "building-responsibly"],
  },
];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export const levelMeta = {
  foundations: {
    label: "Level 1: Foundations",
    shortLabel: "Foundations",
    description:
      "What vibe-coding is and the mindset behind it: meet your AI builder, learn to prompt and plan, and get just enough plain-words vocabulary to never feel lost.",
    color: "found",
    number: 1,
    slug: "foundations",
    audience: "Faculty & academic librarians",
  },
  applied: {
    label: "Level 2: Applied",
    shortLabel: "Applied",
    description:
      "Build your first real tools: set up your toolbox, ship a class quiz app and a flashcard study site to live URLs, and learn to fix and change what you've built.",
    color: "applied",
    number: 2,
    slug: "applied",
    audience: "Faculty & academic librarians",
  },
  advanced: {
    label: "Level 3: Advanced",
    shortLabel: "Advanced",
    description:
      "Become a builder: move up to Claude Code, ship a full multi-page course portal, build responsibly (data, privacy, accessibility, ownership, policy), and complete your capstone.",
    color: "advanced",
    number: 3,
    slug: "advanced",
    audience: "Faculty & academic librarians",
  },
} as const;

export const skillMeta: Record<
  BuilderSkill,
  { label: string; short: string }
> = {
  prompting: { label: "Prompting", short: "Prompting" },
  planning: { label: "Planning", short: "Planning" },
  building: { label: "Building", short: "Building" },
  debugging: { label: "Debugging", short: "Debugging" },
  shipping: { label: "Shipping", short: "Shipping" },
};
