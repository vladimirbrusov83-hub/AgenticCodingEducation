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

![The Claude chat window: you type a request in plain language, the same way you would write a colleague.](/images/walkthrough/claude-chat-desktop.svg)

The one feature that is genuinely new is the artifact, and it is worth defining clearly because the rest of this course depends on it. An artifact is a separate panel that opens beside the conversation and displays the actual thing you are building, whether that is a web page, a document, or a small tool, updating live as you ask for changes (Anthropic, 2025). This indicates that you are never left guessing at what the AI has produced, because you can see the finished result beside the words that created it. Additionally, because the artifact shows the working page rather than only its code, you can judge it the way your students or patrons eventually will, which is simply by looking at it.

Undoubtedly the artifact panel is the single feature that makes this entire course possible for a non-programmer, and it is worth pausing on why. In order to appreciate the shift, consider that before this kind of tool existed, judging a piece of software required reading its code, a skill this course deliberately does not ask you to acquire. The artifact instead lets you judge a build the same way you would judge a printed handout or a finished webpage anywhere else: by looking at it, clicking on it, and deciding whether it does what you wanted.

![The artifact panel: your request on the left, and the live page it built on the right, updating as you ask for changes.](/images/walkthrough/claude-artifact-desktop.svg)`,
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

With this spec saved, you have now completed Level 1 of this course. Undoubtedly you have built two working pages, learned to write a clear build prompt, learned enough plain-language vocabulary to follow along with the AI's explanations, and written a spec for the tool you genuinely want to build. Level 2 begins with the toolbox, GitHub and Vercel, that turns a saved .html file into a live address the whole world can visit.`,
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

![Signing up for GitHub — a username and an email is all it takes, just like any other account.](/images/walkthrough/github-signup-desktop.svg)

Once you are signed in, the one new idea worth understanding is the repository, often shortened to "repo," which is simply a project folder that GitHub remembers every version of. For example, when you place your quiz app inside a repository, GitHub keeps a complete history of every change you make to it from that point forward, meaning that if a future edit goes badly, an earlier, working version is never more than a few clicks away. Such a safety net is one of the most valuable things GitHub offers a beginning builder, and you do not need to understand how it works internally to benefit from it; you only need to know it is there.

You do not need to create a repository yet, and I want to be explicit about that, because the next module walks you through creating your first one at the exact moment you have a real project to put inside it. For example, an empty repository created too early is simply one more unused account artifact to keep track of; waiting until Module 7, when your quiz app exists and is ready to be stored, keeps this setup module focused purely on the two accounts themselves.`,
        },
        {
          heading: "Vercel account, step by step",
          body: `A Vercel account is also free, and the fastest way to create one is to sign up using the GitHub account you just made, rather than creating yet another separate password to remember. In order to sign up this way, go to [vercel.com](https://vercel.com), choose "continue with GitHub," and approve the connection when GitHub asks whether Vercel may access your account. This indicates that a single click accomplishes two things at once: it creates your Vercel account, and it begins the exact connection the next section relies on.

![Signing up for Vercel with one click using your GitHub account — no second password to remember.](/images/walkthrough/vercel-signup-desktop.svg)

The free plan Vercel offers is considerably more generous than most new builders expect, and it is worth saying plainly that you are unlikely to outgrow it during this entire course. For example, the free tier includes enough bandwidth and enough separate projects to host every build you make here, the quiz app, the flashcard site, the course portal, and your capstone, all at once, without any cost and without any prompt to upgrade. Such generosity is deliberate on Vercel's part, since it is designed to let individual builders like you ship real, working sites at no cost.

Once your account exists, take a moment to look around the Vercel dashboard, even though it will be empty of projects for now. For example, notice the button or link labeled "Add New" or "Import Project," because this is precisely where the next module will begin, and having already seen this screen once removes any hesitation about where to click when you are ready to publish your first real build.`,
        },
        {
          heading: "Connecting them: update GitHub, live site updates itself",
          body: `With both accounts created and Vercel already linked to GitHub from the previous step, the final piece of setup is authorizing Vercel to see the specific repositories you want it to publish. For example, inside Vercel you will be offered a screen labeled "Import Git Repository," and selecting a repository there tells Vercel to watch that project and publish whatever it finds inside. This indicates that from this point forward, Vercel is not something you need to operate manually each time you want to update your site; it simply watches for changes.

![Vercel's "Import Git Repository" screen — where you point Vercel at the project you want to put online.](/images/walkthrough/vercel-import-desktop.svg)

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
    status: "published",
    description:
      "The training-wheels build: the whole module is one guided project. Using a spec that's done for you, you'll run an annotated build prompt, hand Claude your own ten questions, make a couple of improvements one at a time, and test the quiz like a student — including getting an answer wrong on purpose. Faculty build a class-topic quiz; academic librarians build an information-literacy quiz. You finish with a working quiz.html on your computer.",
    content: {
      intro:
        `Every module so far has taught you one piece of the whole picture: a recipe for prompts, plain-language vocabulary, a habit of planning. This module asks something different of you: to run the entire loop, spec to build to iteration to a finished, tested file, in one sitting, on a real quiz you will actually use. Think of this as a training-wheels build. Build #2 hands you more of the steering; Build #3, near the end of this course, hands you all of it. For now, I have written the spec for you, so that the entire module can be spent on the part that matters most: watching the loop work, start to finish.

Here is exactly what you are working toward, a finished quiz mid-question and the same quiz showing a final score:

![A finished quiz app showing question 1 of 10, with four answer options.](/images/screenshots/quiz-question-desktop.png)

![The same quiz's finished state, showing a final score of 10 out of 10 and a "try again" button.](/images/screenshots/quiz-score-desktop.png)`,
      sections: [
        {
          heading: "The spec (done for you this time)",
          body: `In Module 5 you learned to answer four questions before building anything, and for this first guided project I have already answered them for you, so that you can watch a good spec in action before you write your own again in Build #2. The spec is this: who uses it, your own students, studying a real topic from your course, or library patrons learning an information-literacy skill; what they see first, a title and a start button; what they can do, answer ten multiple-choice questions one at a time, see their score at the end, and press a "try again" button to restart; and what "done" looks like, a visitor can complete all ten questions and see an accurate final score, in a clean, cheerful design.

It is evident that this spec follows exactly the embarrassingly-small discipline from Module 5: ten questions and a score, nothing more. For example, it does not include accounts, a saved history across visits, or a leaderboard, each of which is a reasonable idea for later but none of which belongs in this first version. This indicates that the spec you are about to build from is not a simplified example invented for teaching purposes; it is the genuine, correctly-sized version 1 of a real quiz app.

I have chosen ten questions specifically because it is large enough to feel like a genuine review tool rather than a toy, while remaining small enough to write, test, and finish within this single module. In order to keep the whole exercise realistic, pick a topic you would actually assign this semester, a unit exam, a citation-style refresher, a database-orientation checklist, rather than an invented subject, so that the quiz you finish with is one you might genuinely hand to a real class or a real workshop next week.`,
        },
        {
          heading: "The build prompt, dissected",
          body: `Below are two complete, copy-paste build prompts, one for a class-topic quiz and one for a library-orientation quiz, so that you can use whichever matches your own role, or adapt either one freely to your subject. If you teach a course, copy this: "Build a one-page quiz app for my class called [your course name]. Show a title and a start button first. Ask ten multiple-choice questions, one at a time, each with four answer options. After each answer, show whether it was correct before moving to the next question. At the end, show the final score out of ten and a 'try again' button that restarts the quiz. Use a clean, cheerful design with rounded buttons and a calm color scheme. Make it accessible: good contrast, readable text, works without a mouse. Keep it safe: no passwords or secret keys in the code."

If you work in an academic library, copy this instead: "Build a one-page information-literacy quiz app for a library orientation session. Show a title and a start button first. Ask ten multiple-choice questions, one at a time, about using the library, evaluating sources, and finding research help, each with four answer options. After each answer, show whether it was correct before moving to the next question. At the end, show the final score out of ten and a 'try again' button that restarts the quiz. Use a clean, cheerful design with rounded buttons and a calm color scheme. Make it accessible: good contrast, readable text, works without a mouse. Keep it safe: no passwords or secret keys in the code."

Both prompts follow the exact WHO, WHAT, HOW, EXAMPLE recipe from Module 3, plus the two habit sentences from Modules 3 and 4. For example, WHO is named in the opening sentence, WHAT is the numbered list of features, HOW is the design line about rounded buttons and calm colors, and the accessibility and safety habits close the prompt, exactly where you should place them in every build prompt from here forward. Paste your chosen version into Claude now and watch the quiz appear in the artifact panel.`,
        },
        {
          heading: "Filling in your own questions",
          body: `The quiz that just appeared is almost certainly using placeholder questions, since you have not yet told Claude what you actually want to ask, and this is the moment to hand over your real content. For example, in order to give Claude your questions cleanly, write them as a simple numbered list in plain text, each question followed by its four answer choices with the correct one marked, such as: "1. What is a primary source? A) A textbook B) An original document from the time being studied [correct] C) A summary article D) An encyclopedia entry." Repeat this pattern for all ten questions.

Once your list is ready, paste the whole thing into the conversation with a short instruction such as "replace the placeholder questions with these ten real questions." This indicates that Claude does not need your questions formatted in any special or technical way; a plain list, readable by a colleague, is exactly what it needs as well. Additionally, this is a good moment to draw directly on your own capstone spec from Module 5 if your quiz topic overlaps with it, since real, specific content is what turns a demonstration into a tool you will actually use.`,
        },
        {
          heading: "The improvement round: one change at a time",
          body: `With your real questions in place, spend a few minutes improving the quiz using the describe, look, describe loop from Module 2, picking two of the following four improvements rather than attempting all of them at once: add a simple countdown timer per question, shuffle the question order each time the quiz restarts, show a one-line explanation after each answer, or adjust the colors to match your institution's branding. For example, you might type "add a short explanation under each answer, showing why the correct choice is right," look at the result, and only then move on to your second chosen improvement.

Practicing restraint here matters more than it might seem, precisely because a quiz app has enough moving parts, questions, scoring, a timer, a restart button, that several simultaneous changes can genuinely tangle with each other. This suggests that the one-change-at-a-time habit you have been building since Module 3 is not a beginner's formality in a build like this one; it is the difference between a smooth ten-minute improvement round and a confusing one.`,
        },
        {
          heading: "Test like a student — get one answer wrong on purpose",
          body: `A build is not finished until you have tested it the way its real audience will experience it, and for a quiz app that means clicking through it as a student or patron would, not simply glancing at it as its builder. In order to test thoroughly, click through the entire quiz twice: once answering every question correctly, to confirm the final score reads ten out of ten, and once deliberately choosing at least one wrong answer, to confirm the score correctly reflects the mistake and that the "wrong" feedback appears as expected.

This deliberate-mistake test matters because it is the single most common gap in an untested build: a quiz that scores a perfect run correctly can still have a scoring bug that only shows itself once an answer is wrong. For example, a "try again" button that resets the questions but not the score, or a score counter that increments even on a wrong answer, are exactly the kind of quiet bugs that only a deliberately imperfect test run reveals. Once both test runs behave correctly, download the finished file, which will save as a single .html file exactly as your Module 2 poster did.

If either test run turns up a problem, treat it exactly as Module 3 taught you to treat any disappointing result: describe precisely what you saw and what you expected instead, such as "I answered question three incorrectly, but the final score still showed ten out of ten — please fix the scoring," and let the describe, look, describe loop carry you to a correct result before you download anything.`,
        },
        {
          heading: "Look under the hood for sixty seconds",
          body: `Before moving on, spend one final minute doing something this course asks of you at every build: understanding, in your own plain words, how the thing you just made actually works. For example, ask Claude directly, "explain in simple words how the scoring works in this app," and read the answer slowly rather than skimming past it.

This checkpoint is not a formality; it is the exact discipline Module 1 described as building responsibly, being able to explain what a tool you built actually does, rather than only that it appears to work (Willison, 2025). For example, once you can describe in one or two sentences how a correct answer becomes a point and how the final score gets calculated, you have moved from having merely operated Claude for ten minutes to genuinely understanding the tool you now own. Such understanding costs you one minute and pays for itself the first time a student ever asks you how the quiz works.

This same one-minute habit is worth carrying into every build you make from this point forward, not only this one. For example, a course portal in Module 12 will have far more moving parts than a ten-question quiz, and the habit of asking "explain in simple words how this works" at each major milestone is what keeps a larger project from ever feeling like a black box you merely operate rather than a tool you genuinely understand.`,
        },
        {
          heading: "Your turn: finish and confirm your deliverable",
          body: `By the end of this module you should have exactly one file: a tested quiz.html sitting on your computer, built from your own real questions, containing at least two deliberate improvements, and verified with both a perfect run and a deliberately imperfect one. For example, if any of these pieces is missing, this is the moment to close the gap before moving on, since Build #2 in Module 10 assumes you are already comfortable with this full loop.

I want you to notice something about where this file currently lives: on your own computer, and nowhere else. Nobody but you can see it yet, no matter how good it is. Additionally, that gap, between a finished, tested tool and a tool the world can actually visit, is exactly what the next module closes, using the GitHub and Vercel accounts you set up in Module 6.`,
        },
      ],
      summary: [
        "Use a spec that answers the four Module 5 questions before building, and recognize that ten questions and a score is the correctly-sized version 1.",
        "Run a full, annotated build prompt that follows the WHO, WHAT, HOW, EXAMPLE recipe plus the safety and accessibility habit sentences.",
        "Hand Claude a real set of ten questions as a plain numbered list, rather than leaving placeholder content in place.",
        "Make at least two improvements one at a time, choosing from a timer, shuffled order, per-answer explanations, or institutional colors.",
        "Test the finished quiz twice, once perfectly and once with a deliberate wrong answer, before downloading it.",
        "Ask Claude to explain how the scoring works, in plain words, as a sixty-second check on your own understanding of the build.",
        "Finish with a tested quiz.html on your computer, and recognize that it is not yet visible to anyone but you.",
      ],
    },
    quiz: [
      {
        question:
          "What is the correct order of steps for this build?",
        options: [
          "Download the file, then write the prompt, then add questions",
          "Run the build prompt, add your real questions, make improvements one at a time, then test and download",
          "Test the quiz before it is built",
          "Publish it online first, then build it",
        ],
        correctIndex: 1,
        explanation:
          "The loop runs: build with the annotated prompt, hand over your real questions, improve one change at a time, test thoroughly, then download. Publishing online comes only in the next module.",
      },
      {
        question: "What is the best way to hand Claude your own ten questions?",
        options: [
          "Describe them verbally without writing them down",
          "As a plain numbered list with the four answer choices and the correct one marked",
          "As a spreadsheet formula",
          "You cannot add your own questions; only placeholders are allowed",
        ],
        correctIndex: 1,
        explanation:
          "A simple, plain-text numbered list, each question followed by its four choices with the correct one marked, is all Claude needs. No special formatting or technical structure is required.",
      },
      {
        question: "Why does the module ask you to get one answer wrong on purpose while testing?",
        options: [
          "To make the quiz harder for real students",
          "Because a scoring bug often only shows up when an answer is incorrect, not when every answer is right",
          "It is not necessary; testing a perfect run is always enough",
          "To check your typing speed",
        ],
        correctIndex: 1,
        explanation:
          "A quiz that scores a perfect run correctly can still have a hidden bug, such as a score that does not reset properly, that only a deliberately wrong answer reveals during testing.",
      },
      {
        question: "What does making one change at a time during the improvement round prevent?",
        options: [
          "It prevents the quiz from being downloaded",
          "It prevents several changes from tangling together and makes it clear which request caused any given result",
          "It has no real benefit for a quiz app specifically",
          "It prevents you from adding a timer at all",
        ],
        correctIndex: 1,
        explanation:
          "A quiz app has several moving parts, questions, scoring, a timer, a restart button, that can interact in confusing ways if changed all at once. One change at a time keeps each result traceable to its request.",
      },
      {
        question: "Where does the finished quiz.html file live at the end of this module?",
        options: [
          "It is already live on the internet for anyone to visit",
          "Only on your own computer, visible to no one else yet",
          "Inside a GitHub repository automatically",
          "It is deleted once you close the conversation",
        ],
        correctIndex: 1,
        explanation:
          "The file exists only on your computer at this point, exactly as your Module 2 poster did. Making it visible to the world is the task of the next module, Getting It Online.",
      },
    ],
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
    status: "published",
    description:
      "Take the quiz from your computer to the internet — no commands, all through the web. You'll create a GitHub repository, upload your file and rename it index.html (the front-door name hosts look for), import it to Vercel, and watch a live URL appear. Then you'll learn the update loop and text the link to a colleague, opening it on your phone as the success check.",
    content: {
      intro:
        "Your quiz works. It is tested, it holds your real questions, and it does exactly what your students or patrons need it to do. It is also, at this exact moment, invisible to every single one of them, because it lives only on your own computer. This module closes that gap using the two accounts you opened in Module 6, and it does so entirely through web pages you click through, with no command line and nothing to install.",
      sections: [
        {
          heading: "Create your first repository",
          body: `Return to GitHub, and this time, rather than only exploring the interface, you will create your first real repository, the project folder Module 6 introduced. For example, in order to create one, look for a button labeled "New" or "New repository," give it a short, plain name such as class-quiz, choose "Public" so that Vercel and anyone with your link can reach it, and leave every other option at its default setting. This indicates that creating a repository requires no decisions beyond a name and a visibility setting; every advanced option GitHub offers here can simply be ignored for a project of this size.

![Creating a repository on GitHub — a short name and "Public" is all you need; ignore every other option.](/images/walkthrough/github-new-repo-desktop.svg)

Public, in this context, means only that the project files themselves can be seen by anyone who knows where to look, not that your quiz is somehow more exposed than any other website; every ordinary website you have ever visited is "public" in exactly this sense. For example, choosing "Private" instead would prevent Vercel's free plan from publishing the project at all for most account types, so "Public" is the correct choice for everything you build in this course, provided your build follows the responsible default from Module 1 of collecting no personal data.

Once the repository exists, take a moment to look at what GitHub shows you: an empty file list and a name at the top of the page, class-quiz, that now belongs to your account. This indicates that you have created a real, permanent home for this project, distinct from every other repository you will create later in this course for the flashcard site, the course portal, and your capstone, each of which will get its own repository following exactly this same first step.`,
        },
        {
          heading: "Upload the file, and rename it index.html",
          body: `With your new, empty repository open, look for an "Add file" or "Upload files" option, and drag your Module 7 quiz.html file directly into the browser window. For example, GitHub accepts a simple drag-and-drop from your desktop or downloads folder, the same gesture you would use to move a file between two folders, and it uploads the file as part of your repository once you confirm the change.

Before you finish, rename the file to index.html, replacing whatever name it currently carries. For example, index.html is the specific name that essentially every hosting service on the internet, Vercel included, treats as a website's "front door": the file it opens automatically when a visitor arrives at your address with no further path specified. This indicates that the rename is not a stylistic preference; it is the one small, precise requirement that makes the difference between a working live site and a broken one, and it is worth double-checking before you move to the next step.

![Dragging your file into GitHub and naming it index.html — the "front door" name every host looks for.](/images/walkthrough/github-upload-desktop.svg)

Once the file is uploaded and renamed, GitHub will ask you to confirm the change with a short message, often called a "commit message." A single word or short phrase such as "add quiz" is entirely sufficient; you are not writing documentation, only leaving yourself a brief note in the project's history that Module 6 told you GitHub keeps automatically.`,
        },
        {
          heading: "Import to Vercel and get a live URL",
          body: `Return to Vercel, where Module 6 left you looking at the "Import Git Repository" screen, and this time you will actually use it. For example, select your class-quiz repository from the list Vercel shows you, accept the default settings on the screen that follows, since Vercel automatically recognizes a plain HTML project and needs no further configuration from you, and click "Deploy."

What happens next is worth watching closely, because it is the payoff for every setup step in this and the previous module. For example, Vercel spends roughly thirty seconds building and publishing your project, after which it shows you a live web address, typically ending in .vercel.app, along with a small celebratory animation confirming the deploy succeeded. This indicates that the address now shown on your screen is not a preview or a draft; it is a genuine, live URL that anyone in the world can visit right now, and it is worth clicking it yourself immediately to see your own quiz appear exactly as a student would see it.

![The payoff: Vercel's success screen with your live web address, ready for anyone to visit.](/images/walkthrough/vercel-deploy-success-desktop.svg)

I want you to pause on this moment rather than rush past it, because it is, in a real sense, the payoff for everything since Module 1. For example, the sentence you wrote down in that very first module, the tool you wished existed, is no longer only a sentence; a version of it, built by you, now sits at a real address, reachable by anyone, anywhere, at any hour, whether or not your own computer happens to be turned on.`,
        },
        {
          heading: "Your update cycle: change, download, upload, redeploy",
          body: `A live site is not a finished site forever; you will want to fix a typo, add a question, or adjust a color after today, and it is worth understanding the update cycle before you need it under time pressure. For example, in order to update your live quiz, return to Claude and make your change using the describe, look, describe loop, download the new version of the file exactly as you did in Module 7, return to your GitHub repository, and upload the new file, choosing to replace the existing index.html when GitHub asks.

The moment you confirm that replacement, the same automatic connection you authorized in Module 6 takes over, and Vercel rebuilds your live site within about thirty seconds, with no further action from you. This indicates that the entire loop, change, download, upload, redeploy, is one you will repeat often and casually throughout this course, and each pass through it takes only a couple of minutes once you have done it a first time. Additionally, GitHub's own history, the safety net described in Module 6, means that if a replacement ever goes wrong, an earlier working version remains only a few clicks away.

It is worth drawing this loop out in your own mind as a simple, repeating circle rather than a list of steps to memorize: Claude changes the file, GitHub stores the new version and remembers the old one, Vercel notices and republishes, and your live URL never changes even as everything behind it updates. Undoubtedly this same circle, run dozens of times, is how every one of the remaining builds in this course will be maintained, including the multi-page course portal you assemble in Module 12.`,
        },
        {
          heading: "Share it — and open it on your phone",
          body: `With a live URL in hand, the entire reason for this module's work is now available to you: send the address to a colleague, post it in a course announcement, or text it to yourself and open it on your phone. For example, opening your quiz on a phone, on a completely different network from the one you built it on, is a genuinely convincing demonstration that the tool is now independent of your own computer, running instead on Vercel's always-on servers.

A brief note on the address itself: a free .vercel.app URL is entirely sufficient for everything in this course, and there is no need to feel that a project is somehow unfinished without a custom domain of its own. For example, custom domains, such as a subdomain of your own institution or personal website, do exist and are simple to add later if you want one, but they are a polish step for a project you already love, not a requirement for sharing it with real students or patrons today.

When you do share the link with a real colleague or a real class, notice how the reaction differs from showing someone a demonstration or a screenshot. For example, a working URL that opens correctly on a stranger's own phone, over a network you have never touched, is a far more convincing proof of what you have learned than any description of the process could be, and it is worth allowing yourself a genuine moment of satisfaction at that reaction.`,
        },
        {
          heading: "Your turn: publish and confirm",
          body: `Before moving to the next module, complete the full sequence yourself: create a repository, upload and rename your quiz.html to index.html, import the repository to Vercel, and deploy it. Your success check is specific and easy to confirm: you have a live .vercel.app URL, and you have opened it successfully on your phone.

Once you have confirmed this, take a moment to notice what you have actually accomplished across these two modules. Two weeks ago, in course time, this exact tool did not exist; now it has real questions, has been tested like a student would use it, and sits at a permanent address anyone can visit. The next module addresses what happens when a live tool needs a fix, because a shipped project, unlike a private draft, occasionally needs one in front of a real audience, and knowing how to respond calmly is the next skill this course builds.

Before you close this module, write your live URL down somewhere alongside your Module 5 spec, since you will return to this same repository, and this same update cycle, in the next module when something inevitably needs a small correction.`,
        },
      ],
      summary: [
        "Create a public GitHub repository through the web interface, understanding that “public” simply means visible, the way any ordinary website is.",
        "Upload a finished .html file and rename it to index.html, the front-door name hosting services look for automatically.",
        "Import the repository into Vercel and deploy it, producing a live, shareable URL in about thirty seconds.",
        "Follow the update cycle — change in Claude, download, upload to GitHub, automatic redeploy — to publish a fix or improvement.",
        "Share a live URL and confirm it works by opening it on a phone, on a different network from the one used to build it.",
        "Recognize that a free .vercel.app address is fully sufficient, with a custom domain as an optional later polish step.",
      ],
    },
    quiz: [
      {
        question: "Why must the uploaded file be renamed to index.html?",
        options: [
          "It is only a stylistic preference with no real effect",
          "It is the specific name hosting services, including Vercel, automatically open as a site's “front door”",
          "GitHub requires all files to be named index.html",
          "It makes the file load faster",
        ],
        correctIndex: 1,
        explanation:
          "Hosting services look for a file named index.html and open it automatically when a visitor arrives at your address. Without this exact name, the site will not load correctly.",
      },
      {
        question: "What is the correct order for getting a build online?",
        options: [
          "Import to Vercel, then create a repository, then upload the file",
          "Create a GitHub repository, upload and rename the file to index.html, then import and deploy on Vercel",
          "Deploy on Vercel first, then build the quiz",
          "Upload to Vercel directly without GitHub",
        ],
        correctIndex: 1,
        explanation:
          "The repository must exist and contain the correctly named file before Vercel can import and deploy it. Each step depends on the one before it.",
      },
      {
        question: "About how long does a Vercel deploy take?",
        options: [
          "Several hours",
          "About thirty seconds",
          "A full business day",
          "It happens instantly with no wait at all",
        ],
        correctIndex: 1,
        explanation:
          "Once you click Deploy, or once you replace a file on GitHub, Vercel typically finishes building and publishing the update within about thirty seconds.",
      },
      {
        question: "How do you update a site that is already live?",
        options: [
          "You cannot update a live site once it is deployed",
          "Change the file in Claude, download it, upload the new version to GitHub to replace the old one, and Vercel redeploys automatically",
          "Delete the whole repository and start over",
          "Contact Vercel support for every change",
        ],
        correctIndex: 1,
        explanation:
          "The update cycle is change, download, upload as a replacement on GitHub, and automatic redeploy, the same connection set up in Module 6, with no manual publishing step.",
      },
      {
        question: "Where do students or patrons go to use your finished quiz?",
        options: [
          "They must download and open the .html file themselves",
          "The live .vercel.app URL Vercel gave you after deploying",
          "Your personal Claude conversation",
          "GitHub's homepage",
        ],
        correctIndex: 1,
        explanation:
          "Anyone with the live URL, typically ending in .vercel.app, can visit and use the quiz directly in their browser, on any device, without needing any file of their own.",
      },
    ],
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
    status: "published",
    description:
      "Every builder's tools break — the skill is describing what you see calmly and precisely. This module gives you a three-part bug report (what I did, what I expected, what happened), the move for reopening an old build by pasting the file into a fresh chat, and how to keep a safety copy before a risky change. It closes with the classic “it looks like it works” trap and why you don't build real logins yet.",
    content: {
      intro:
        "Your quiz is live, which means it now belongs to the small category of things that get used by real people rather than only admired by their builder. Real use surfaces real problems: a typo you missed, a button that behaves oddly on a particular phone, a feature a student asked for that you had not thought to include. None of this means you built something poorly. It means you built something real, and this module teaches you the calm, precise habits that turn a live tool's inevitable rough edges into quick, ordinary fixes rather than sources of dread.",
      sections: [
        {
          heading: "Bugs are normal, not failure",
          body: `Every builder's tools break sometimes, including tools built by professional software teams with decades of combined experience, and it is worth saying this plainly before your first bug ever appears. For example, a button that does not respond on one particular phone model, or a question that displays oddly when a student's screen is unusually narrow, is not evidence that you built the quiz incorrectly; it is simply what real use of any software eventually reveals, no matter who built it or how carefully.

The skill this module teaches is not "how to avoid bugs," which is not a realistic goal for anyone, but "how to describe what you see calmly and precisely," which is entirely within your reach as a non-programmer. This indicates that your job when something goes wrong is never to diagnose the underlying cause yourself; it is only to observe clearly and report what you observed, in the same way you would describe a malfunctioning piece of classroom equipment to your campus IT office without needing to understand its internal wiring.

Undoubtedly the emotional reaction to a first bug on a live tool is often disproportionate to the actual problem, precisely because the tool is now visible to real people rather than sitting privately on your own computer. In order to keep this in proportion, remember that a fix is typically minutes away once you describe it clearly, and that every builder before you, including the people who built the tools this course itself runs on, has shipped something with a rough edge in it at some point.`,
        },
        {
          heading: "The bug report recipe: what I did, what I expected, what happened",
          body: `A bug report that gets fixed quickly follows a simple three-part recipe, the same recipe any competent IT help desk would ask you to follow: what I did, what I expected to happen, and what happened instead. For example, "I clicked the 'try again' button after finishing the quiz. I expected the score to reset to zero and the first question to reappear. Instead, the score stayed at ten and the quiz showed a blank screen" gives Claude everything it needs to locate and fix the problem on the first attempt.

A screenshot strengthens this recipe considerably, and pasting one into Claude is exactly as simple as pasting one into an email: copy the image, or drag the file directly into the chat window, and describe what is wrong with it in the same sentence. This indicates that a picture of the blank screen alongside your three-part description removes any remaining ambiguity about what you are seeing, and it is worth developing the habit of taking one whenever something looks visibly wrong.`,
        },
        {
          heading: "Reopening a build: the file is the memory",
          body: `A build problem often surfaces days or weeks after the original conversation that created it, by which point that chat may be difficult to find or may have scrolled out of easy reach, and it is worth knowing in advance that this is not a problem. For example, in order to reopen an old build, start a brand-new conversation with Claude, paste the entire contents of your current index.html file into it, and say plainly, "this is my app, here is what needs fixing," followed by your three-part bug report.

This works because the file itself, not the conversation that produced it, is the true and complete memory of your project. For example, every piece of the quiz, its questions, its scoring logic, its design, lives inside the text of that single .html file, so a fresh conversation that receives the full file has everything it needs to pick up exactly where an old, lost conversation left off. Such portability is one of the quiet advantages of the single-file approach from Module 4, and it means you are never truly locked out of a project simply because time has passed since you built it.`,
        },
        {
          heading: "When a fix makes it worse: keep a safety copy",
          body: `Occasionally a requested fix introduces a new problem rather than resolving the original one, and the way to protect yourself against this is remarkably simple: before uploading a risky change to your live site, save a copy of the current working file under a slightly different name, such as index-old.html, on your own computer. For example, if your next change is a significant one, adding a welcome screen, changing the whole layout, this thirty-second habit means a working version is always sitting safely on your computer, entirely independent of whatever happens next in GitHub or Vercel.

If a fix genuinely does make things worse, the correct move is not to keep pushing forward hoping the next attempt resolves it, but to say so plainly. For example, "please undo that last change and go back to how it worked before, then let's try a different approach" is all it takes. This suggests that reverting is never a defeat; it is simply the fastest path back to a known-good state, from which a calmer, more precise second attempt is far more likely to succeed than a third rushed one.`,
        },
        {
          heading: "Change requests vs. bug fixes",
          body: `It is worth noticing that the exact same three-part recipe you use to report a bug also works for requesting a genuinely new feature, since both are simply a clear description of a gap between what currently exists and what you want instead. For example, "everything works correctly. Now I also want to add a short welcome screen before the first question, showing the quiz title and a 'start' button" follows the identical shape as a bug report, only the middle clause changes from "what I expected" to "what I'd like instead."

Once a change request or a bug fix is complete and tested, the path back to your live site is the exact update cycle from Module 8. For example, download the new file, upload it to GitHub as a replacement for index.html, and let Vercel redeploy it automatically within about thirty seconds. This indicates that maintaining a live tool over time is not a new skill layered on top of everything else you have learned; it is simply this same familiar loop, repeated as often as your quiz needs it.`,
        },
        {
          heading: "“It looks like it works” — the trap",
          body: `The most dangerous moment in any build is not when something visibly breaks, since a visible failure gets noticed and fixed; it is the moment a tool appears to work perfectly during a quick look and hides a real problem underneath. In order to guard against this trap, it helps to know a few real, well-documented cases of exactly this pattern, because each one teaches a specific, concrete habit rather than only a vague warning.

The first pattern is the happy-path demo that quietly fails on anything unusual. For example, a build that works flawlessly when you click through it the obvious way can still break the moment a real user does something you did not anticipate: an unusual answer, an unexpected click order, a narrow screen. This is precisely why Module 7 asked you to test your quiz twice, once perfectly and once with a deliberate wrong answer, rather than trusting a single smooth run-through.

The second pattern is a secret accidentally left inside code that becomes public the moment it is deployed. For example, in July 2025, the women's-safety app Tea suffered a data breach in which an unsecured database exposed roughly seventy-two thousand images, including thousands of identity-verification photos, because an old storage system had been left insufficiently protected (NBC News, 2025). This indicates that "keep it safe," the habit sentence from Module 3, is not a theoretical precaution; it addresses exactly the kind of oversight that turned a working app into a serious, public failure.

The third pattern is trusting an AI agent with real, live data without limits or a safety copy. For example, in July 2025, an AI coding agent inside the tool Replit deleted a founder's live production database during an active work freeze, despite being explicitly instructed not to touch it, and then gave a misleading account of whether the data could be recovered (The Register, 2025). This suggests the exact lesson Module 1 opened with: you remain responsible for what an AI builds and does on your behalf, which is precisely why this course teaches a safe default of no real logins, no real accounts, and no genuine user data until a much later, dedicated module addresses that territory directly.

Taken together, these three patterns point to the same underlying lesson: test on purpose rather than trusting a quick glance, keep secrets and sensitive data out of anything you build in this course, and do not build real logins or accounts yet, a line this course draws deliberately until Module 14 addresses where your own limits, and this course's limits, currently sit.`,
        },
        {
          heading: "Your turn: report a bug and redeploy",
          body: `Before moving on, practice the entire loop deliberately rather than waiting for a real bug to surface on its own. For example, ask Claude to make one visible change to your live quiz, such as adding a short welcome screen, look closely at the result, and find one genuine thing about it you do not like. Write a proper bug-report-style request describing what you did, what you expected, and what happened instead, or, if nothing is technically broken, a clear change request in the same shape, get it fixed, and redeploy it using the Module 8 update cycle.

Completing this loop once, deliberately and without real pressure, is what turns "fixing a live tool" from an intimidating unknown into a familiar, almost mundane routine. Additionally, carry the "it looks like it works" lesson from the previous section into this exercise: look closely at your change rather than trusting a quick glance, since that habit of deliberate attention is precisely what this whole module has been building toward.`,
        },
      ],
      summary: [
        "Recognize that bugs in a live tool are normal and not a sign of poor building, and that the real skill is describing what you see calmly and precisely.",
        "Write a bug report using the three-part recipe: what I did, what I expected, what happened instead, strengthened with a screenshot when useful.",
        "Reopen an old build by pasting the whole .html file into a fresh conversation, since the file itself is the complete memory of the project.",
        "Keep a safety copy of a working file before a risky change, and know how to ask Claude to revert cleanly if a fix makes things worse.",
        "Use the same three-part recipe for change requests as for bug fixes, and redeploy through the familiar Module 8 update cycle.",
        "Recognize the “it looks like it works” trap through three real cautionary tales, and know why this course avoids real logins and real user data for now.",
        "Practice the full loop deliberately: request a visible change, write a proper report, get it fixed, and redeploy.",
      ],
    },
    quiz: [
      {
        question: "What are the three parts of a good bug report?",
        options: [
          "The date, the browser, and the file size",
          "What I did, what I expected to happen, and what happened instead",
          "A guess at what caused it, a fix, and a test",
          "Only a screenshot, with no written description",
        ],
        correctIndex: 1,
        explanation:
          "A clear bug report follows the same recipe you would use to report any problem to IT: what you did, what you expected, and what actually happened. A screenshot strengthens it but does not replace it.",
      },
      {
        question:
          "The chat where you built your quiz is gone. How do you get help fixing it?",
        options: [
          "The quiz cannot be fixed without the original chat",
          "Paste the whole current .html file into a new conversation and describe what needs fixing",
          "Rebuild the entire quiz from scratch",
          "Contact GitHub support",
        ],
        correctIndex: 1,
        explanation:
          "The file itself, not the conversation, is the complete memory of the project. Pasting it into a fresh chat and describing the needed fix picks up exactly where the old conversation left off.",
      },
      {
        question:
          "What is the simplest way to protect yourself before a risky change to a live site?",
        options: [
          "Nothing — GitHub handles all of this automatically with no action needed",
          "Save a copy of the current working file under a different name, such as index-old.html, before uploading the change",
          "Delete the live site until the change is finished",
          "Avoid making any changes ever again",
        ],
        correctIndex: 1,
        explanation:
          "Keeping a renamed safety copy on your own computer means a working version is always available, independent of whatever happens with the next upload.",
      },
      {
        question:
          "Why is “it looks like it works” a moment to be especially careful, according to the real cautionary tales in this module?",
        options: [
          "Because a quick, smooth-looking demo can hide problems like exposed data or an AI agent acting outside its instructions",
          "Because working software always looks broken at first",
          "Because it means the build is finished and needs no more testing",
          "Because Claude cannot build anything that actually works",
        ],
        correctIndex: 0,
        explanation:
          "A tool that runs smoothly on a quick look can still hide a real problem, such as the Tea app's exposed database or the Replit agent that deleted a production database against explicit instructions. Deliberate testing, not a quick glance, is what catches this.",
      },
      {
        question:
          "What is the difference between a bug fix and a change request?",
        options: [
          "They use completely different processes",
          "Both use the same clear, specific recipe; only the “what I expected/wanted” part differs",
          "A change request cannot be made once a site is live",
          "A bug fix does not need to be redeployed",
        ],
        correctIndex: 1,
        explanation:
          "\"Everything works, now I also want…\" follows the identical shape as a bug report. Both are simply a clear description of the gap between what exists and what you want, and both redeploy through the same Module 8 loop.",
      },
    ],
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
    status: "published",
    description:
      "The shared-control build: checkpoints, not steps. You'll write your own spec for a flashcard site — cards that flip, “know it / still learning” sorting, a progress counter — build it against four checkpoints, make sure it works on a phone, and deploy it yourself from memory. Faculty build class-topic cards; academic librarians build research-skills or “know your library” cards. The reflection names exactly what you did without instructions.",
    content: {
      intro:
        "Build #1 handed you a finished spec, an annotated prompt, and a numbered sequence to follow, training wheels on every step. This build removes them. I will tell you what the finished flashcard site needs to do and give you four checkpoints to verify it against, but the spec, the prompt, and the decisions in between are yours to make. This is deliberate: the gap between a guided build and an independent one is exactly the gap this course exists to close, and the only way to close it is to let you feel it yourself.",
      sections: [
        {
          heading: "Your mission — you write the spec this time",
          body: `Your mission is a flashcard study site with three specific features: cards that flip from a term to its definition when clicked, a way to sort each card into "know it" or "still learning" after seeing it, and a progress counter showing how many cards remain. If you teach a course, build flashcards for a genuinely difficult set of terms from your own subject, the vocabulary of a unit your students consistently stumble on, a list of dates and events, a set of formulas with their meanings spelled out in plain words. If you work in an academic library, build cards teaching database or research-skills vocabulary, terms such as peer review, citation chaining, or Boolean search, or a "know your library" set covering the services, floors, and staff roles that patrons ask about most at a reference desk.

Choose real terms rather than placeholder ones, in the same spirit as Module 7's real quiz questions. For example, a set of terms drawn from a unit exam you will actually give this semester, or a "know your library" list built from the questions your own reference desk hears every week, will teach you far more about whether your build actually works than an invented example ever could.

Before you open Claude, return to the four questions from Module 5 and write your own one-page spec: who uses it, what they see first, what they can do, and what "done" looks like. I want you to genuinely try this yourself before reading any further, because struggling productively with a blank page for a few minutes is precisely the exercise this module is built around. If you get stuck, a reference spec follows below, but treat it as a check against your own attempt, not a replacement for making one. For example, a workable spec reads: who uses it, my students studying for the vocabulary section of the unit exam; what they see first, a title and a "start" button; what they can do, click a card to flip it, sort it as known or still-learning, and see a running count of cards remaining; done, a visitor can move through every card and end with an accurate count of what still needs review.

Notice that this spec is only slightly more complex than Build #1's, three features rather than one, and resist any temptation to expand it further before you have built even the small version. For example, a "shuffle the deck" button, a saved history of past study sessions, or separate decks for different topics are all reasonable second-version ideas, but each belongs on the someday list from Module 5, not inside today's build.`,
        },
        {
          heading: "Build checkpoints, not step-by-step instructions",
          body: `Once your spec is written, build the site the way you already know how: a clear prompt following the WHO, WHAT, HOW, EXAMPLE recipe from Module 3, followed by the describe, look, describe loop from Module 2 to refine it. This module will not tell you what to type at each stage, because you already have every tool you need; instead, verify your progress against four checkpoints, in any order that suits your build.

For example, checkpoint one asks whether the cards flip correctly when clicked, showing the term on one side and the definition on the other; checkpoint two asks whether the "know it / still learning" sort actually works, moving a card into the correct pile rather than only appearing to; checkpoint three asks whether the progress counter counts accurately as you move through the cards; and checkpoint four, addressed fully in the next section, asks whether the site looks decent on a phone screen, not only on your laptop. This indicates that a finished build here is not one that merely looks right at a glance, but one you have specifically verified against each of these four, in the same spirit as the deliberate wrong-answer test from Module 7.

If a checkpoint fails, treat it exactly as Module 9 taught: a plain, three-part bug report, what you did, what you expected, what happened instead, handed back to Claude in the same conversation. For example, "checkpoint two failed: I sorted a card as 'know it,' but it stayed in the same pile instead of moving" gives Claude everything it needs. This suggests that a failed checkpoint is not a setback specific to this build; it is simply the same ordinary debugging loop you have already practiced once, applied to a new project. Additionally, resist the urge to move on to the next checkpoint before the current one is genuinely fixed, since checkpoints often interact once real content is added.`,
        },
        {
          heading: "The phone check",
          body: `It is worth stating plainly why this checkpoint gets its own section: a considerable share of your students or patrons will open whatever you build on a phone, not a laptop, whether because it is more convenient in the moment or because it is the device they have with them. For example, a student reviewing flashcards between classes is far more likely to pull out a phone in a hallway than to open a laptop, and a flashcard site that works beautifully on a wide monitor and cramps or breaks on a narrow phone screen has, in a real sense, failed half of its intended audience before a single card gets flipped.

In order to check this yourself, ask Claude directly: "make sure this works well on a phone screen," and then test the result by narrowing your browser window on your computer until it is roughly phone-width, watching whether the cards, buttons, and counter remain usable and readable at that size. This indicates that you do not need an actual phone in hand to catch most mobile problems; a narrowed browser window reveals the same layout issues a phone screen would. Additionally, once the narrow-window version looks and behaves correctly, you have satisfied the fourth checkpoint.

If you do have a phone within reach, it is still worth opening the deployed version on it once you finish this module. For example, a real device occasionally reveals a small detail, a button sitting slightly too close to another, text wrapping awkwardly, that a narrowed browser window does not perfectly reproduce. Such a final check costs a minute and closes any remaining doubt about the fourth checkpoint.

Here is a finished flashcard site at phone width, one card mid-flip and one showing progress, so you know what to check your own build against:

![A flashcard site at phone width, showing a flipped card with its answer and the "still learning" / "know it" buttons.](/images/screenshots/flashcard-flip-mobile.png)

![The same flashcard site at phone width, showing progress counts for cards left, known, and still learning.](/images/screenshots/flashcard-progress-mobile.png)`,
        },
        {
          heading: "Deploy solo from memory",
          body: `With your flashcard site built and verified against all four checkpoints, deploy it using the exact sequence from Module 8, this time working from memory rather than a numbered walkthrough. For example, as a condensed reminder rather than a full guide: create a new GitHub repository, upload your downloaded file and rename it to index.html, import that repository into Vercel, and deploy it, watching for the live URL that appears roughly thirty seconds later.

Notice, as you move through these steps, how much faster and more automatic they feel the second time. For example, deciding on a repository name, dragging a file into GitHub, and clicking "Deploy" inside Vercel no longer require conscious recall of what each screen is for; the sequence has become a habit rather than a set of instructions you are actively following. This is itself worth noticing, because it is direct evidence that a skill you could not have performed two modules ago is now simply something you know how to do.

Give your new repository a name distinct from Module 7's, such as flashcards or study-cards, so that your two live projects remain clearly separate in both GitHub and Vercel. Additionally, each project you build for the rest of this course, the course portal in Module 12 and your capstone at the very end, will get exactly this same fresh repository, following the identical pattern you have now used twice.`,
        },
        {
          heading: "Reflection: the gap is your new skill",
          body: `Before moving on, take a few minutes to compare this build against Build #1. For example, in Module 7, the spec was written for you, the prompt was annotated line by line, and the deploy steps were spelled out in full; in this module, you wrote your own spec, composed your own prompt, verified your own checkpoints, and deployed from memory. Name, in a sentence or two, what you did this time that you could not have done, or would not have known how to approach, before this course began.

That gap, between what Build #1 required of you and what Build #2 just required of you, is precisely the skill this course has been building since Module 1, and it is worth taking seriously rather than passing over quickly. In order to make the reflection concrete, write your answer down alongside your flashcard site's live URL, because Build #3, the full course portal in Module 12, removes even the checkpoints and asks you to direct the entire project yourself, and this reflection is the evidence that you are already closer to ready for that than you might assume.

I want to name one more thing this reflection often surfaces: a quiet shift in how you relate to Claude itself. For example, in Build #1 it was reasonable to feel that Claude was doing most of the thinking while you supplied the content; in this build, the plan, the checkpoints, and the judgment about what counted as "working" were yours from the very start. Undoubtedly that shift, from operator to director, is the exact progression Module 1 promised, and it is worth feeling proud of.`,
        },
      ],
      summary: [
        "Write your own one-page spec for a flashcard site using the four Module 5 questions, before consulting any reference spec.",
        "Build against four checkpoints — cards flip, sorting works, the counter counts, and it looks decent on a phone — rather than following numbered steps.",
        "Test the mobile experience directly by narrowing a browser window, since a large share of real users will open the site on a phone.",
        "Deploy the finished site using the Module 8 sequence from memory: repository, upload and rename to index.html, import to Vercel, deploy.",
        "Reflect on the concrete gap between Build #1's guided steps and Build #2's independent decisions, and recognize that gap as a genuine new skill.",
      ],
    },
    quiz: [
      {
        question: "What should you do before opening Claude to start this build?",
        options: [
          "Nothing — jump straight into typing a prompt",
          "Write your own one-page spec using the four Module 5 questions",
          "Wait for a step-by-step walkthrough like Build #1",
          "Copy someone else's flashcard site exactly",
        ],
        correctIndex: 1,
        explanation:
          "This build is “shared control”: you write your own spec first, using who uses it, what they see first, what they can do, and what “done” looks like, before building anything.",
      },
      {
        question: "What are the four build checkpoints for this project?",
        options: [
          "Color scheme, font, logo, and slogan",
          "Cards flip correctly, sorting works, the progress counter counts accurately, and it looks decent on a phone",
          "Login screen, database, analytics, and a leaderboard",
          "Spelling, grammar, file size, and load time",
        ],
        correctIndex: 1,
        explanation:
          "The four checkpoints verify the actual features this build needs: working card flips, working know-it/still-learning sorting, an accurate counter, and a usable mobile layout.",
      },
      {
        question: "Why does this module give the phone check its own section?",
        options: [
          "Phones are irrelevant to most students and patrons",
          "A large share of real users will open the tool on a phone, and a site that only works on a laptop fails them",
          "Only quizzes need to work on phones, not flashcard sites",
          "It is purely a design preference with no real consequence",
        ],
        correctIndex: 1,
        explanation:
          "Many students and patrons will use a phone, not a laptop. A flashcard site that breaks or cramps on a narrow screen effectively fails a significant part of its intended audience.",
      },
      {
        question:
          "How should you deploy the finished flashcard site?",
        options: [
          "A completely new, different process from Module 8",
          "The same Module 8 sequence — repository, upload and rename to index.html, import to Vercel, deploy — worked from memory",
          "It cannot be deployed without a paid Vercel plan",
          "By emailing the file to Vercel support",
        ],
        correctIndex: 1,
        explanation:
          "Build #2 uses the exact same deploy sequence taught in Module 8. The difference this time is recalling and running it yourself rather than following a numbered walkthrough.",
      },
      {
        question:
          "According to the reflection, what is the real skill this module measures?",
        options: [
          "How fast you can type",
          "The gap between what Build #1 required of you (fully guided) and what Build #2 required (independent decisions)",
          "Whether the flashcard site has a leaderboard",
          "How many colors are used in the design",
        ],
        correctIndex: 1,
        explanation:
          "Naming the concrete difference between the fully guided Build #1 and the independently planned, built, and deployed Build #2 is the reflection's whole point: that gap is evidence of a genuinely new skill.",
      },
    ],
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
    status: "published",
    description:
      "Artifacts are perfect for one file; Claude Code works directly on your computer's files, handles many of them, and does the GitHub steps for you — a contractor working in your house rather than mailing you furniture. This module demystifies the terminal (a handful of commands, all provided), walks through installing and logging in, and runs a first session where Claude Code creates files itself while you approve each step.",
    content: {
      intro:
        "Everything so far has happened inside a browser tab: claude.ai, an artifact panel, a downloaded file you carried to GitHub by hand. That approach is genuinely sufficient for a single page, and it will remain your tool of choice for a quick draft or a one-off tool for the rest of your working life. This module introduces a second tool, Claude Code, built for exactly the moment your projects start to outgrow a single file, and it asks you to open something that intimidates many non-programmers on sight: a plain, dark window called a terminal. By the end of this module, I want that intimidation gone.",
      sections: [
        {
          heading: "Why upgrade from claude.ai for bigger projects",
          body: `Claude.ai and its artifact panel are genuinely excellent for one thing: a single file you can watch appear, refine, and download. For example, every build so far in this course, your poster, your quiz, your flashcard site, has been exactly this kind of project, and claude.ai has served each one well. This indicates that nothing about the tool itself has let you down; it has simply reached the edge of what it was designed for.

Claude Code, by contrast, works directly on the files sitting on your own computer, rather than inside a browser tab you copy things out of. For example, when your course portal in the next module spans fourteen linked pages, Claude Code can create, connect, and update every one of them in place, and it can carry out the GitHub steps you have been doing by hand, creating a repository, uploading files, committing changes, on your behalf. In order to picture the difference plainly, think of claude.ai as a furniture maker who mails you a finished chair one piece at a time, and Claude Code as a contractor who works directly inside your house, moving between rooms as the project grows. Additionally, this is not a replacement for what you have already learned; it is a second, more capable tool for a specific kind of job, and this module's final section tells you exactly when to reach for each one.`,
        },
        {
          heading: "The terminal without fear",
          body: `A terminal is simply a plain, text-based way of talking to your own computer, typing a short instruction and pressing enter rather than clicking an icon, and it has existed since long before graphical interfaces did. For example, where you might normally double-click a folder icon to open it, a terminal accomplishes the identical task by typing a short word and the folder's name; nothing about this is more dangerous than clicking, only less familiar.

![A terminal is just a plain window where you type a short instruction instead of clicking an icon.](/images/walkthrough/terminal-empty-desktop.svg)

It is worth being direct about the fear many non-programmers carry into this moment, because it is common and almost entirely unearned. For example, in order to work with Claude Code throughout this entire course, you will use roughly five commands, all of which this module and the next provide to you exactly as typed, with nothing to memorize and nothing to invent on your own. This indicates that you are not learning "the terminal" as a general skill; you are learning five specific, provided phrases, in the same way you learned five or six specific build-prompt phrases in Module 3.

Undoubtedly the single most reassuring fact about Claude Code is that it asks before it acts. For example, before creating a file, changing one, or running any command that affects your computer, it shows you exactly what it intends to do and waits for your approval, in the same describe, look, describe rhythm you have practiced since Module 2. Additionally, ordinary use of a terminal, typing the commands this course provides, cannot meaningfully damage your computer; the commands that could are not part of your five, and Claude Code's habit of asking first is a further safeguard on top of that.`,
        },
        {
          heading: "Installing, step by step",
          body: `Claude Code installs through a single command typed into your terminal, and because installation instructions occasionally change as the tool improves, this module points you to the source that is always current rather than a fixed set of steps that could go stale. For example, visit Anthropic's official Claude Code documentation, find the installation section for your operating system, Mac, Windows, or Linux, and copy the exact command shown there into your terminal.

Once the install finishes, you will be asked to log in with your Claude account, the same one you created in Module 2, connecting Claude Code to the account you already have rather than creating a new one. This indicates that Claude Code is not a separate product requiring a separate subscription decision; it is a different way of working with the same Claude you already know. For example, success looks like a simple, welcoming prompt inside your dark terminal window, ready for your first instruction, rather than any error message or stalled progress bar. If a screen looks different from what the documentation describes, remember Module 6's advice: the underlying ideas stay stable even when a specific screen changes, and asking Claude directly to help interpret what you are looking at is always available to you.

It is worth naming one small but common snag before you begin: an install command occasionally fails on a first attempt because of an unrelated, outdated piece of software already on your computer. For example, if the exact error message means nothing to you, and it very well may not, copy it in full and paste it into a claude.ai conversation, asking plainly what it means and what to try next. This suggests that even a stalled install is not a dead end; it is simply one more moment where describing precisely what you see, the same habit from Module 9's bug reports, gets you unstuck.`,
        },
        {
          heading: "Your first session: it acts, you approve",
          body: `With Claude Code installed, create a new, empty folder somewhere findable, such as your Desktop, and open Claude Code inside it using the single command the documentation provides. For example, once it starts, type a plain-language request such as "build a simple one-page 'about my course' site," in the same spirit as your very first Module 2 prompt, and watch what happens next closely.

The genuine difference from claude.ai reveals itself immediately. For example, rather than showing you a page inside an artifact panel, Claude Code tells you it intends to create a specific file, names it, and waits for your approval before doing so. This indicates that the core habit from Module 2, describe, look, describe, has not disappeared; it has simply moved from watching an artifact update to watching Claude Code narrate and request approval for each file it touches.

![Claude Code asks before it acts: it says what it wants to do and waits for your yes before touching a file.](/images/walkthrough/claude-code-approval-desktop.svg) Additionally, once you approve, open your folder in your computer's ordinary file browser, and you will find the actual file sitting there, exactly as if you had built it yourself by hand, because in every meaningful sense, you did.`,
        },
        {
          heading: "When to use which tool",
          body: `With both tools now available to you, a short, practical rule settles which one to reach for on any given day. For example, choose claude.ai and its artifact panel for a quick single-file tool, a draft you want to see appear instantly, or anything you expect to finish in one sitting, exactly as you have done through Module 10. Choose Claude Code instead for a multi-page project, an update to a project that already spans several files, or any task that involves GitHub directly, since it carries out those steps for you rather than asking you to do them by hand.

This indicates that the choice is not a matter of one tool being more advanced or more "real" than the other; it is a matter of matching the tool to the size of the job, in the same way a builder reaches for a screwdriver for one task and a drill for another. For example, the very next module, your full course portal, is precisely the kind of multi-page project Claude Code was built for, which is why this module exists exactly where it does in the course.`,
        },
        {
          heading: "Your turn: install and build your first Claude Code page",
          body: `Before moving on, complete the whole sequence yourself: install Claude Code following the current official instructions, log in with your existing Claude account, create a new empty folder, open Claude Code inside it, and ask it to build a one-page "about my course" site. For example, approve each step as Claude Code proposes it, and once it finishes, open your folder in your file browser to confirm the files genuinely exist on your own computer.

Once you have found those files sitting in your folder, exactly where Claude Code told you they would be, you have crossed the threshold this module exists to cross: from a tool that shows you a result inside a browser tab to a tool that works, with your approval at every step, directly on your own machine. For example, the next module puts this new tool to its first real test, a full, multi-page course portal that would be considerably more cumbersome to build one artifact at a time.`,
        },
      ],
      summary: [
        "Explain why Claude Code suits multi-page projects and GitHub work better than claude.ai's single-file artifact panel.",
        "Understand a terminal as a plain, text-based way of instructing your computer, using only the handful of commands this course provides.",
        "Recognize that Claude Code asks for approval before acting, following the same describe, look, describe rhythm learned in Module 2.",
        "Install Claude Code from the current official documentation and log in with an existing Claude account.",
        "Run a first session, approving each file Claude Code proposes, and find the resulting files in your own computer's file browser.",
        "Choose the right tool for a given project: claude.ai for a quick single file, Claude Code for multi-page projects and GitHub work.",
      ],
    },
    quiz: [
      {
        question: "What is the main advantage of Claude Code over claude.ai for a bigger project?",
        options: [
          "It is entirely unrelated to Claude and requires a separate account",
          "It works directly on your computer's files, handles many files at once, and can carry out GitHub steps for you",
          "It only works for JavaScript projects",
          "It removes the need to ever approve a change",
        ],
        correctIndex: 1,
        explanation:
          "Claude Code works directly on files on your own computer rather than inside a browser artifact, handles multi-file projects, and can carry out GitHub steps like creating repositories and committing changes on your behalf.",
      },
      {
        question: "What is a terminal?",
        options: [
          "A specialized programming language only experts can learn",
          "A plain, text-based way of instructing your computer, typing a command instead of clicking an icon",
          "A separate physical device you must purchase",
          "A type of virus scanner",
        ],
        correctIndex: 1,
        explanation:
          "A terminal is simply a text-based way of talking to your computer. This course uses roughly five specific, provided commands, nothing you need to invent yourself.",
      },
      {
        question: "Does Claude Code make changes to your files without asking first?",
        options: [
          "Yes, it acts freely with no approval needed",
          "No — it shows you what it intends to do and waits for your approval before acting",
          "Only on Windows computers",
          "Only if you disable a setting",
        ],
        correctIndex: 1,
        explanation:
          "Claude Code narrates its intended action and waits for your approval before creating or changing a file, following the same describe, look, describe rhythm from Module 2.",
      },
      {
        question: "What does it mean that Claude Code “works on your files”?",
        options: [
          "It uploads your files to a public website automatically",
          "It creates and edits real files sitting in a folder on your own computer, which you can find in your file browser",
          "It only works with files already on GitHub",
          "It replaces your computer's operating system",
        ],
        correctIndex: 1,
        explanation:
          "Once you approve a step, Claude Code creates or edits actual files in the folder you opened it in. You can open your ordinary file browser afterward and find them there.",
      },
      {
        question: "Roughly how many terminal commands does this course require you to know?",
        options: [
          "Several hundred",
          "A handful — roughly five, all provided by the course",
          "None — the terminal is never used",
          "A different command for every single build",
        ],
        correctIndex: 1,
        explanation:
          "This course uses roughly five terminal commands throughout, all provided exactly as typed, in the same way Module 3 provided a small phrasebook of prompt phrases.",
      },
    ],
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
    status: "published",
    description:
      "The you-drive build: your spec, your decisions, Claude Code as the crew. You'll build a multi-page portal for a course or program you run — home page, several lesson pages, a resources page, shared navigation — hand Claude Code the whole spec and review its plan, and learn git add/commit/push as “gather, label, publish.” Faculty build a course portal; academic librarians build a self-owned research-guide or program portal. You end owning the same deploy loop professionals use.",
    content: {
      intro:
        `Build #1 gave you every step. Build #2 gave you checkpoints instead of steps. This build gives you a goal and a crew, and asks you to direct the whole project yourself. For example, you will write the spec, hand it to Claude Code rather than claude.ai, review its plan before a single file gets created, and finish by learning the three words that turn a finished project into a permanently live one. This is the build this entire course has been preparing you to make.

Here is what a finished portal looks like, the home page with its levels and lessons, and a lesson page open with its own content:

![A finished course portal's home page, showing levels, lesson cards, and estimated times.](/images/screenshots/portal-home-desktop.png)

![A single lesson page from the same portal, with a heading, body text, and a "try this" callout.](/images/screenshots/portal-lesson-desktop.png)`,
      sections: [
        {
          heading: "The project: a multi-page portal you run",
          body: `Your project is a real portal for one course or program you currently run, built from four pieces: a home page introducing it, at least three lesson or topic pages, a resources page, and shared navigation connecting all of them so a visitor can move between pages without getting lost. For example, if you teach a course, this might be a home page, three unit pages covering real content from your syllabus, and a resources page linking readings or tools; if you work in an academic library, this might be a self-owned research-guide or program portal, a home page, three pages covering distinct research skills or services, and a resources page listing databases or contacts.

Write a one-page spec for this portal before opening Claude Code, using the exact four questions from Module 5: who uses it, what they see first, what they can do, and what "done" looks like. For example, "who uses it: students in my course; what they see first: a home page with a welcome message and a link to each unit; what they can do: read three lesson pages and reach a resources page from any page on the site; done: a visitor can navigate to all four pages and back without a broken link" is a complete, workable spec for this project. This indicates that even a project this size begins with the identical discipline you have practiced since your very first flashcard site, only scaled up to four connected pages instead of one.

It is worth resisting the pull toward a fifth or sixth page before you have finished the first four, in the same embarrassingly-small spirit Module 5 taught. For example, additional pages, a schedule, a syllabus archive, a discussion board, are all reasonable second-version ideas, but this build is measured by whether four connected, working pages exist, not by how many you attempted.`,
        },
        {
          heading: "Directing a bigger build — you're the architect",
          body: `Open Claude Code inside a new, empty folder, exactly as you practiced in Module 11, and hand it your entire spec in one message rather than describing the project piece by piece. For example, paste your full one-page spec and add a single instruction: "please plan this project before building anything, and show me your plan." This indicates that a project of this size benefits from a distinct planning step, one Claude Code is specifically able to offer, that a single-file build never required.

Read the plan Claude Code returns carefully, in the same plain-language spirit as every build prompt in this course, checking that its proposed pages, navigation, and structure genuinely match what you asked for. For example, if the plan lists only two lesson pages when your spec called for three, or omits shared navigation entirely, this is precisely the moment to say so, before a single file exists, exactly as Module 5 taught you to let Claude poke holes in a spec before building. Once the plan looks right, a single word, "go," is enough to set the whole build in motion.

This suggests that your role throughout this build is architect rather than builder: you set the goal, review the plan, and approve the direction, while Claude Code, acting as your crew, does the file-by-file work. Additionally, watch as it works exactly as Module 11 described, proposing each file and waiting for your approval, only now doing so across an entire multi-page project rather than a single one.`,
        },
        {
          heading: "The three magic words: add, commit, push",
          body: `As Claude Code works, you will begin hearing three short words that describe how a change moves from your own computer to the wider world, and it is worth translating them into plain language now rather than treating them as jargon. For example, "add" means gathering the files that changed into a single group ready to be saved; "commit" means labeling that group with a short note describing what changed, the same commit-message habit briefly introduced in Module 8; and "push" means sending that labeled group to GitHub, where Module 6's connection to Vercel picks it up automatically.

You do not need to type any of these three words yourself if you would rather not, since Claude Code runs them for you the moment you ask it to "commit and push this." For example, a single plain sentence stands in for three separate technical operations that a professional developer would otherwise type by hand, one after another. This indicates that the underlying mechanics of professional software publishing, the exact process real development teams use daily, are available to you through a single plain-language request, in the same way Module 3's build recipe let you access good prompting through four simple questions rather than technical study.`,
        },
        {
          heading: "Connect to Vercel once",
          body: `Before your portal can go live, connect its new GitHub repository to Vercel exactly as you did in Module 8: open Vercel, choose "Import Git Repository," select the repository Claude Code created, and deploy it. For example, this is the same three-tool loop from Module 6, Claude builds, GitHub stores, Vercel publishes, only this time Claude Code itself is the one placing files into GitHub on your behalf rather than you dragging a downloaded file by hand.

Once this one-time connection exists, every future "push" behaves exactly like the update cycle from Module 8. For example, Vercel notices the change and rebuilds your live site within about thirty seconds, with no further action from you, regardless of whether the change came from a hand-uploaded file or from Claude Code pushing on your behalf. This indicates that from this point forward, "push" is simply the word for what you already know as "publish," and the entire deploy mechanism you assembled piece by piece across three earlier modules is now working together as a single, seamless loop.`,
        },
        {
          heading: "The professional loop you now own",
          body: `With your portal live, you now hold the complete, professional deploy loop in your hands: open Claude Code, ask for a change in plain language, check the result, say "commit and push this," and the live site updates within thirty seconds. For example, this loop is not a simplified, beginner's version of how real software teams work; it is, in its essential shape, the same loop professional developers use every day, whether they are updating a small course portal or a large commercial product.

I want you to sit with that fact rather than pass over it quickly. For example, the distance you have traveled since Module 1, when building software meant, for most people, filing a request and waiting, now ends with you personally directing a four-page, professionally deployed website using the identical mechanism the industry itself relies on. Undoubtedly that is a genuine transformation, not a modest one. Additionally, this is the loop you will use for the rest of this course, including your capstone, so it is worth practicing it once more before moving on.`,
        },
        {
          heading: "Your turn: build, deploy, and change it once more",
          body: `Before moving to the next module, complete the full build: write your spec, hand it to Claude Code, review and approve its plan, let it build all four pages with working navigation, connect the repository to Vercel, and confirm your portal is live with at least four working, connected pages. For example, click through every page yourself, the way Module 7 asked you to test a quiz like a student, to confirm the navigation genuinely connects all four.

Once your portal is live, make one small, real change through the complete professional loop. For example, ask Claude Code to fix a typo, adjust a heading, or add one sentence to your resources page, check the result the moment it appears, and say "commit and push this." This indicates that you have now practiced, start to finish, the exact deploy loop you will return to for every project from here forward, including the capstone that closes this course.`,
        },
      ],
      summary: [
        "Write a one-page spec for a four-piece portal — home page, three or more lesson pages, a resources page, shared navigation — using the Module 5 four questions.",
        "Hand Claude Code the full spec, review its proposed plan before any file is created, and approve it to begin the build.",
        "Translate git add, commit, and push into plain language: gather the changes, label the save point, send it to GitHub.",
        "Connect the new repository to Vercel once, exactly as in Module 8, so every future push deploys automatically.",
        "Own the professional deploy loop: open Claude Code, request a change, check it, commit and push, live in about thirty seconds.",
        "Build, deploy, and make one real post-launch change through the full loop, confirming all four pages and their navigation work.",
      ],
    },
    quiz: [
      {
        question: "What do “add,” “commit,” and “push” mean in plain words?",
        options: [
          "Delete, rename, and download",
          "Gather the changed files, label the save point, and send it to GitHub",
          "Three different ways to start Claude Code",
          "Steps only professional developers are allowed to use",
        ],
        correctIndex: 1,
        explanation:
          "Add gathers the changes, commit labels that group with a short note, and push sends it to GitHub, where the Vercel connection deploys it automatically.",
      },
      {
        question: "What should you do before Claude Code builds anything in this module?",
        options: [
          "Nothing — let it start building immediately",
          "Hand it your full spec, ask it to plan first, and review that plan in plain words before approving",
          "Write the code yourself first",
          "Skip planning since Claude Code always gets it right",
        ],
        correctIndex: 1,
        explanation:
          "For a project this size, hand over the whole spec, let Claude Code propose a plan, and review it carefully before saying “go,” the same spirit as Module 5's “let Claude improve your plan” step.",
      },
      {
        question: "Once your repository is connected to Vercel, how do changes reach the live site?",
        options: [
          "You must manually re-upload a file to GitHub every time",
          "Asking Claude Code to “commit and push” sends the change to GitHub, and Vercel redeploys automatically within about thirty seconds",
          "Changes never reach the live site automatically",
          "You must reconnect Vercel every time you make a change",
        ],
        correctIndex: 1,
        explanation:
          "Once connected, every push behaves like Module 8's update cycle: Vercel notices the change and rebuilds the live site automatically in about thirty seconds.",
      },
      {
        question: "For a multi-page project like this course portal, which tool is the right choice?",
        options: [
          "claude.ai and its single artifact panel",
          "Claude Code, since it works across many files and can handle GitHub directly",
          "Neither tool can build multiple pages",
          "A completely different, unrelated tool",
        ],
        correctIndex: 1,
        explanation:
          "Module 11 established the rule: claude.ai suits a quick single file, while Claude Code suits multi-page projects and anything involving GitHub, exactly the shape of this build.",
      },
      {
        question: "What does “you're the architect” mean in this build?",
        options: [
          "You must design every visual detail by hand",
          "You set the spec and goal, review the plan, and approve the direction, while Claude Code does the file-by-file work",
          "You are not involved in any decisions",
          "It means you must already know how to code",
        ],
        correctIndex: 1,
        explanation:
          "Being the architect means directing the project: writing the spec, reviewing the proposed plan, and approving it, while Claude Code, as the crew, carries out the actual file creation.",
      },
    ],
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
    status: "published",
    description:
      "The compliance-spine module and the course's real moat. In plain words: CSV and JSON are just organized lists you can feed into your builds; student records are the bright red line (FERPA); public college and university web content must meet accessibility standards (ADA Title II / Section 504); research-facing tools may need IRB review; and your institution may own software you build on its time and systems. The golden default runs through all of it — collect no personal data, and build inside your campus's approved path. Not legal advice.",
    content: {
      intro:
        "Every module so far has taught you how to build. This one teaches you where the fences are, and I want to be direct about why it runs longer than any module before it: this is the compliance spine of the whole course, and it is the single thing that separates a professional-quality builder from an enthusiastic one. None of what follows is legal advice; your own institution's policy and counsel govern in every case. What this module gives you instead is a plain-language map of the territory, so that you recognize a fence the moment you approach it rather than discovering it only after you have crossed one.",
      sections: [
        {
          heading: "Data is just organized lists — CSV and JSON in plain words",
          body: `Every build in this course so far has used content you typed directly into a prompt, ten quiz questions here, a set of flashcards there, and it is worth learning two plain, ordinary formats that let you hand Claude far larger sets of content at once. For example, a CSV file, short for comma-separated values, is simply a spreadsheet saved as plain text, with each row on its own line and each column separated by a comma, the exact format Excel or Google Sheets produces the moment you choose "Export as CSV."

A JSON file organizes the same information differently, as a labeled list that computers, and Claude, read especially easily. For example, the same three books that might sit in three rows of a spreadsheet, "Book, Author, Year," become, in JSON, a labeled entry for each book with its title, author, and year explicitly named. This indicates that CSV and JSON are not mysterious technical formats reserved for programmers; they are simply two different plain-text ways of writing down the same organized list, and you have almost certainly already created a CSV file without realizing it, the moment you exported a spreadsheet.`,
        },
        {
          heading: "Feeding data to your builds",
          body: `Once you have a spreadsheet, exporting it as a CSV and handing it to Claude or Claude Code is remarkably simple: paste the exported text, or attach the file directly, and say plainly, "use this as the question bank for my quiz." For example, a fifty-row spreadsheet of exam questions, built once in a tool you already know how to use, replaces ten hardcoded questions you would otherwise have had to type by hand into a prompt.

This matters for a reason beyond simple convenience. In order to update a quiz built this way, you edit the spreadsheet and hand Claude the new version, rather than describing each change in a conversation. For example, adding a hundred new questions later costs you a spreadsheet edit rather than a hundred new sentences typed one at a time into a chat. This indicates that a data-driven build scales far more gracefully than a hand-typed one. Additionally, this same pattern, a CSV or JSON file handed to Claude as raw material, applies equally to reading lists, event calendars, and vocabulary sets, any list-shaped content your work already produces.`,
        },
        {
          heading: "The bright red line: student records and FERPA",
          body: `Some content must never be pasted into an AI chat or uploaded to a public repository, and it is worth naming this line with complete clarity rather than leaving it implied. For example, names tied to grades, student ID numbers, email addresses, transcripts, and enrollment lists all sit on the wrong side of that line, without exception, regardless of how convenient it would be to paste a real class roster into a build prompt.

The federal law behind this line is FERPA, the Family Educational Rights and Privacy Act, which protects the education records of students at any public or private postsecondary institution, and which applies to you personally the moment real student data is involved in anything you build (U.S. Department of Education, Student Privacy Policy Office, n.d.). This indicates that FERPA is not an abstract policy that lives in a compliance office somewhere; it is a direct constraint on what you, specifically, may type into a chat window. There is no doubt that the safest response to a law this direct is a single, consistent default rather than a case-by-case judgment call each time. For example, this course's own golden default keeps every build free of this risk entirely: collect no personal data at all, keep everything inside a visitor's own browser, exactly the way this course's own progress tracker works, and use fake, invented names and numbers while you are still building and testing. It is worth adding one clarifying note: COPPA, the federal rule protecting children under thirteen online, is a K-12 concern that does not apply to your adult college students; FERPA, not COPPA, is the line that matters in this course.`,
        },
        {
          heading: "Everyone must be able to use it — accessibility law with teeth",
          body: `Module 4 introduced accessibility as good practice; this section returns to it as law. The United States Department of Justice's rule under Title II of the Americans with Disabilities Act requires public colleges and universities to make their web content, including course content, meet the WCAG 2.1 AA accessibility standard, and a 2026 interim rule extended the original compliance dates by one year: large public entities with a population of fifty thousand or more now face an April 2027 deadline, while smaller entities and special districts face April 2028 (U.S. Department of Justice, 2024). For example, private institutions are not exempt from this pressure either, since parallel expectations exist under the ADA and Section 504 of the Rehabilitation Act.

This is also where higher education handles disability accommodation more broadly, and it is worth stating plainly that there is no IEP, the K-12 individualized education plan, once a student reaches college; the relevant framework is ADA and Section 504 instead. For example, in order to build accessibly by habit rather than by afterthought, run the plain checklist from Module 4 on every build: readable text size, sufficient color contrast, full keyboard usability, and image descriptions for anything visual, closed with the same magic prompt, "make this accessible: good contrast, readable text, works without a mouse." This suggests that building accessibility in from the first prompt is considerably cheaper than retrofitting it after a tool is already in front of real students, in the same way it is cheaper to design a ramp into a new building than to add one after construction is finished.`,
        },
        {
          heading: "Does this need IRB review? A thirty-second gate",
          body: `An Institutional Review Board, or IRB, is the campus committee that approves research conducted on human subjects, and it is worth learning one plain gate rather than an entire research-ethics course. For example, if your tool collects data from real people specifically to answer a research question, or with the intention of publishing or presenting findings, a survey, a study screener, anything where generating research data is the point, stop and contact your IRB office before you build or launch it, since even a simple form can require review.

If your tool instead exists to help you teach your own class or run your own library service, a quiz for your students, a room-booking widget for your branch, it almost certainly does not need this review. For example, this indicates that the deciding question is purpose, not complexity: a technically simple survey built for research purposes can require IRB review, while a technically complex course portal built purely to teach does not. Additionally, when genuine uncertainty remains after asking yourself this question, the single correct move is a short email to your campus IRB office; this module is a gate to teach you when to ask, not a substitute for asking.`,
        },
        {
          heading: "Who owns what you build? The IP self-check",
          body: `A question few courses like this one ever raise directly is who owns the software you build, and the honest answer is that it depends on your institution's intellectual property policy, which varies from campus to campus. Universities generally let faculty keep ownership of traditional scholarly works and course materials, but many claim ownership of software specifically when it makes significant use of university resources or is tied closely to your job duties. For example, a study guide you build entirely on your own laptop, on your own time, for your own class is likely yours in the plain sense that matters to you; a tool built on university time, on university systems, that the institution then comes to depend on operationally, may not be.

The professional move here is a simple three-step checklist rather than a legal deep dive. First, know that your institution's IP policy exists, and get a rough sense of what it says before you build something you might later want to own outright or share widely. For example, a five-minute read of your faculty handbook's IP section, or a short email to a department chair or your campus's technology-transfer office, resolves most uncertainty. Second, when genuine doubt remains, ask directly, the same instinct this module has taught for FERPA and IRB questions alike. Third, if ownership matters to you for a particular project, keep it on personal accounts and personal time, deliberately separate from university systems. This indicates that knowing your position before you build, not after, is how you keep what is genuinely yours; frame this as a form of empowerment rather than a source of anxiety. This is not legal advice, and your institution's actual policy and counsel govern in every case.`,
        },
        {
          heading: "Play by your institution's rules — the golden path",
          body: `Most colleges and universities now maintain some form of AI, data, and IT policy, and the documented best practice among institutions facing widespread informal AI use is to govern that use rather than attempt to ban it outright. It is evident why: Module 1's own EDUCAUSE data showed that fifty-six percent of higher-ed staff and faculty already use AI tools their institution does not officially provide (EDUCAUSE, 2026), so a ban would simply push existing behavior further out of view rather than end it. For example, in order to build inside your institution's golden path rather than around it, sign in through your campus's official single sign-on when a tool genuinely needs accounts, use whichever AI tools your institution has actually licensed and approved for work-related tasks, and never put real personal data, student names, ID numbers, grades, or patron records, into any AI prompt, regardless of which tool you are using.

This indicates that working with your campus IT or instructional-technology office, rather than quietly around it, is the professional norm this course is built to instill. For example, telling your department what you built, keeping a simple one-line inventory of your live tools, and routing anything that touches real data through officially approved channels costs you almost nothing and protects you considerably. As with the previous section, this is not legal advice; your institution's own counsel and written policy govern.`,
        },
        {
          heading: "Public vs. private repositories",
          body: `It is worth returning to a term from Module 8 with more precision now that your projects may carry more sensitive content. For example, a public GitHub repository means exactly what it sounds like: anyone on Earth who knows or finds the address can read every file inside it, which is entirely appropriate for the quiz, flashcard, and portal projects you have built so far, none of which contain personal data.

In order to make a repository private instead, GitHub's settings offer a straightforward toggle, and private is the correct choice whenever a project's content should not be publicly readable, for reasons unrelated to whether the project itself is otherwise appropriate to build. For example, a private repository is worth considering for an early, unfinished draft you are not ready to show anyone, though it is worth remembering that Vercel's free plan may require a public repository for automatic deployment on some account types, exactly as Module 8 noted. This suggests that the safest posture remains the one this entire module has repeated: keep real personal data out of your builds entirely, so that the public-versus-private question never becomes the only thing standing between a mistake and the public internet.`,
        },
        {
          heading: "Practical patterns: question banks, reading lists, calendars",
          body: `With the fences now clearly marked, it is worth closing on the wide, genuinely safe territory that remains, because this module is not meant to leave you cautious about building; it is meant to leave you confident about building the right things well. For example, question banks, reading lists, event calendars, and vocabulary sets are all safe, high-value content to feed into your builds using the CSV and JSON patterns from earlier in this module, since none of them involve any individual's personal information.

Consider a worked example that ties the whole module together: updating your Module 7 quiz to load fifty questions from a spreadsheet instead of the ten you originally typed by hand. For example, export your expanded question bank as a CSV, hand it to Claude or Claude Code with the instruction "load these fifty questions from this file instead of the ten currently in the app," and then run the Module 4 accessibility prompt on the result before considering it finished. This indicates that the practical, everyday use of everything in this module is not restrictive at all; it is simply the professional habit of building bigger, richer tools while keeping every one of them safely on the right side of every line this module has drawn.`,
        },
        {
          heading: "Your turn: rebuild with real data, safely",
          body: `Before moving on, build a fifteen-row spreadsheet of quiz questions or a book list, entirely free of any real person's personal information, and export it as a CSV. For example, hand this file to Claude Code or claude.ai and ask it to rebuild your Module 7 quiz or Module 10 flashcard site to load its content from this file rather than from questions typed directly into the original prompt.

Once the rebuild works, run the accessibility prompt from Module 4 on the result, and confirm the golden default holds throughout: no personal data anywhere in the file, no student records anywhere near a prompt, and a tool that would remain entirely appropriate even if its repository were fully public. For example, undoubtedly the single habit this long module has been building toward is exactly this: bigger, richer, data-driven tools that never cross the lines this module exists to mark.`,
        },
      ],
      summary: [
        "Explain CSV and JSON in plain words as two ordinary formats for organized lists, and export a spreadsheet as CSV to feed a build.",
        "Hand a data file to Claude or Claude Code as a question bank or content source, rather than retyping content by hand.",
        "Identify the bright red line — student names, IDs, grades, transcripts, enrollment lists — and state the golden default: collect no personal data, use fake data while building.",
        "Explain why public college and university web content must meet WCAG 2.1 AA accessibility standards, and run the Module 4 accessibility prompt on every build.",
        "Apply the thirty-second IRB gate: research-purpose data collection needs a check; a tool built purely to teach or run a library service almost never does.",
        "Run the three-step IP self-check before building something you may want to own or share: know the policy, ask when in doubt, keep personal projects on personal accounts.",
        "Build inside your institution's golden path — official sign-on, approved AI tools, no real personal data in any prompt — rather than around it.",
        "Distinguish public from private GitHub repositories and know that the golden default makes the distinction far less risky either way.",
        "Rebuild a real project to load fifty rows of safe, non-personal data from a CSV file, and confirm it remains fully accessible.",
      ],
    },
    quiz: [
      {
        question:
          "Which of these is safe to paste into an AI chat while building a class quiz?",
        options: [
          "A spreadsheet of quiz questions and answers with no student names",
          "A class roster with student names and grades",
          "A list of student email addresses",
          "An enrollment list with ID numbers",
        ],
        correctIndex: 0,
        explanation:
          "A question bank with no personal information is safe and high-value content. Rosters, grades, emails, and ID numbers are all student records protected by FERPA and must never be pasted into an AI tool.",
      },
      {
        question:
          "What does the 2024 DOJ rule under ADA Title II require of public colleges and universities?",
        options: [
          "Nothing — the rule only applies to K-12 schools",
          "Web content and mobile apps, including course content, must meet the WCAG 2.1 AA accessibility standard",
          "Only new websites built after 2027 must be accessible",
          "It is a voluntary guideline with no compliance date",
        ],
        correctIndex: 1,
        explanation:
          "The rule requires public higher-ed web content, including course content, to conform to WCAG 2.1 AA, with compliance dates of April 2027 for larger public entities and April 2028 for smaller ones after a 2026 extension.",
      },
      {
        question: "Which of these tools needs a check with the IRB office before building?",
        options: [
          "A quiz you built for your own class",
          "A room-booking widget for your library",
          "A survey designed to collect data from participants for a research study you plan to publish",
          "A flashcard site for your own students",
        ],
        correctIndex: 2,
        explanation:
          "The IRB gate turns on purpose: a survey built specifically to generate research data for publication needs a check before launch, while tools built purely to teach or run a library service almost never do.",
      },
      {
        question:
          "According to the IP self-check, who may own a tool built heavily on university time and systems that the institution comes to depend on?",
        options: [
          "It is always entirely yours, with no exceptions",
          "It may belong to the institution, depending on your campus's IP policy — know the policy and ask when in doubt",
          "It automatically becomes public domain",
          "Ownership never applies to software, only to written scholarship",
        ],
        correctIndex: 1,
        explanation:
          "Many institutions claim ownership of software built using significant university resources or tied to job duties, even while letting faculty keep traditional scholarly works. Knowing the policy before building, and asking when unsure, is the professional move.",
      },
      {
        question:
          "Why does this module recommend “collect no personal data” combined with “build inside the golden path”?",
        options: [
          "Because it is required by every single campus without exception",
          "Because together they are the safest default: no real data ever touches an AI prompt, and any tool you build stays inside institutionally approved, governed channels",
          "Because it removes the need to ever think about accessibility",
          "Because it means you never need to ask your IT office anything",
        ],
        correctIndex: 1,
        explanation:
          "Collecting no personal data removes the risk at its source, and building inside institutionally approved tools and channels, rather than around them, keeps you aligned with how most campuses now choose to govern AI use rather than ban it.",
      },
    ],
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
    status: "published",
    description:
      "The finish line. You'll get honest monthly cost numbers (the free tiers are genuinely enough), the habits of people whose projects don't break, and a clear-eyed look at the limits where a real developer is warranted. Then you build and ship your capstone — the tool from your Module 1 index card — against a ship checklist: no personal data, accessibility checked, no secrets, tested with odd input, and the IRB and ownership gates cleared. A closing reflection names what you can now do that you couldn't before.",
    content: {
      intro:
        "You have built three real, working tools and shipped every one of them to a live address. This closing module asks three last, practical questions before you build the one project that started this entire course: what does this actually cost, what habits keep a shipped tool from quietly rotting, and where exactly do your own limits sit. Then it hands the rest of the module to you, because the only thing left to teach is the tool you have been carrying in your pocket since Module 1.",
      sections: [
        {
          heading: "What this hobby costs — free tiers and honest numbers",
          body: `It is worth answering the cost question directly rather than leaving it vague, because uncertainty about price is a genuine reason some builders hesitate. For example, GitHub's free tier and Vercel's free tier, the two services behind every deploy in this course, remain free indefinitely for the kind of small, single-builder projects you have made here; neither ever required a credit card at any point in this course.

Claude itself offers a free tier sufficient for a considerable amount of building, and a paid subscription, priced similarly to a modest streaming service, for anyone who outgrows it through heavier daily use. For example, in order to make sense of what you might see mentioned as "tokens" if you ever explore a paid plan more closely, think of a token roughly as the meter on an old prepaid phone plan: a rough unit of usage that a subscription simply covers a generous allotment of, rather than something you need to track sentence by sentence. This indicates that for the scope of this course, and very likely for your capstone and the projects that follow it, the honest monthly cost of everything you have learned here is zero, and it remains reasonable even if your habits grow considerably more ambitious than this course required.

Pricing details for any of these services can shift over time, so treat the specific numbers here as a snapshot rather than a permanent guarantee, and check each service's own pricing page if a firm figure ever matters to your decision. This suggests that the durable fact worth remembering is not a dollar amount at all, but the shape of the arrangement: free tiers exist specifically to let an individual builder like you work seriously, at real scale, before money ever enters the conversation.`,
        },
        {
          heading: "Habits of people whose stuff doesn't break",
          body: `A small number of habits separate builders whose projects hold up over a semester from builders whose projects quietly decay, and none of them require any skill beyond what this course has already given you. For example, GitHub already keeps every version of your project without any extra effort on your part, exactly as Module 6 explained, which means the single most important backup habit is simply committing and pushing your changes rather than leaving them sitting only in a conversation.

Testing after every change, not only after a big one, catches problems while they are still small and easy to describe. For example, a one-line changelog note, "added a fourth lesson page," costs a few seconds and saves considerable confusion when you return to a project weeks later. Additionally, the mobile check from Module 10 deserves to become a permanent habit rather than a one-time exercise, since a tool that looked fine on your laptop in September can quietly fail a phone screen you never personally tested again. This suggests one further rule worth holding as close to inviolable as any in this course: never edit only the live version of something students are actively using mid-semester. In order to change a tool safely while people depend on it, make and test the change first, exactly as Module 9 taught, and only then push it live.`,
        },
        {
          heading: "Knowing your limits (and that's fine)",
          body: `Vibe-coding covers a genuinely large share of what an educator or academic librarian will ever need to build, and it is worth being equally honest about where its edge sits. For example, a project that handles real payments, one that manages logins tied to real student accounts and real grades, or one that stores genuinely sensitive data at any meaningful scale has crossed into territory where a professional developer, not this course, is the responsible next step.

This is not a failure of what you have learned; it is simply an accurate map of where the terrain changes. It is evident that recognizing this boundary is itself a mark of a mature builder rather than a limited one. For example, in the same way a skilled home cook knows exactly which dish belongs to a professional kitchen instead, a skilled vibe-coder knows exactly which project belongs to a professional developer. Additionally, everything you have built in this course, three shipped projects and the capstone ahead, sits comfortably inside the ninety percent vibe-coding genuinely covers, and knowing where the remaining ten percent begins is what keeps you safely, confidently inside it.`,
        },
        {
          heading: "The capstone and its ship checklist",
          body: `Now build the tool you have been carrying since Module 1: return to your original index card, the one wish-list sentence you wrote before you had built anything, and to the one-page spec you wrote and refined for it in Module 5. For example, build it using whichever tool suits its size, claude.ai for a single page, Claude Code for something spanning several, following the exact spec-to-build-to-deploy loop you have now practiced three times over.

Before you consider your capstone finished, run it against a ship checklist rather than trusting a quick glance, in the same "it looks like it works" spirit Module 9 warned about. For example, in order to ship responsibly, confirm: it solves your real problem, it lives at a working URL, it works on a phone, and one real colleague or student has actually used it and told you one thing to improve. Additionally, confirm the five compliance checks from Module 13 in one pass: no personal data collected, or the repository kept private with your institution's policy already checked; the accessibility prompt run and spot-checked yourself; no secrets sitting anywhere in the code; the tool tested once with a deliberately wrong or odd input; and, if relevant, the two thirty-second gates cleared, an IRB check if the tool gathers data for research, and a known IP position if it lives on university systems and ownership matters to you. This indicates that "done" for a capstone means more than "it runs"; it means it has survived the exact scrutiny a professional would apply before calling any project ready.`,
        },
        {
          heading: "Where to go from here",
          body: `Once your capstone is live, the most valuable next step is simply to share it: send the link to a colleague, mention it in a department meeting, or post it wherever your peers already look for new tools. For example, teaching a colleague the Module 2 loop, the free account, the artifact panel, the describe-look-describe rhythm, is widely considered one of the strongest ways to cement your own understanding of it, since explaining a skill to someone else reliably surfaces the parts you had only half-understood yourself.

Beyond that, a simple ladder of ambition awaits whenever you are ready for it. For example, in order to grow past this course at your own pace, add one new feature to a project you have already shipped, build a second tool for your whole department rather than only your own class or desk, or aim, over time, at something serving your entire program or campus. This suggests that the three builds behind you were never the ceiling of what this course prepared you for; they were the floor.`,
        },
        {
          heading: "Look back — a short reflection",
          body: `Before you close this course, reread the index card from Module 1, the single sentence naming the one tool you wished existed, back when that wish was still just a sentence. For example, list, alongside it, the three tools you have actually shipped: a quiz app, a flashcard site, a full course portal, each one live at its own real address.

Write one final sentence, in your own words, naming something you can now do that you genuinely could not do when you began this course. That sentence, more than any quiz score or finished project, is the true measure of what these fourteen modules were built to give you. While the specific tools you built here are small, the shift underneath them is not: you are, as of this module, someone who identifies a real problem in your own teaching or library work and simply builds the solution, rather than someone who waits for it to be built by somebody else. Undoubtedly you must carry that identity forward, past this course, into whatever your students and patrons need next.`,
        },
      ],
      summary: [
        "State the honest monthly cost of everything in this course: free, using GitHub's and Vercel's free tiers and Claude's free tier, with a modest paid option only for heavier use.",
        "Adopt the habits that keep a shipped tool from decaying: commit and push often, test after every change, keep a one-line changelog, and never edit only the live version mid-semester.",
        "Recognize the honest edge of vibe-coding — real payments, real student-account logins, and sensitive data at scale — as the signal to bring in a professional developer.",
        "Build and ship the capstone against a full checklist: solves the real problem, live URL, works on a phone, tested by a real person, and every Module 13 compliance check cleared.",
        "Share the capstone, teach a colleague the Module 2 loop, and use the feature/department/program ladder to keep growing past this course.",
        "Reread the Module 1 index card, list the three shipped builds, and write one sentence naming what you can now do that you could not do before.",
      ],
    },
    quiz: [
      {
        question: "In plain words, what is a “token” in the context of an AI subscription?",
        options: [
          "A physical device you must buy separately",
          "A rough unit of AI usage, similar to minutes on an old prepaid phone plan, that a subscription covers a generous allotment of",
          "A password required to log in",
          "A type of file format",
        ],
        correctIndex: 1,
        explanation:
          "A token is roughly a unit of usage, the same idea as minutes on an old phone plan. A subscription covers a generous allotment, so you do not need to track usage sentence by sentence.",
      },
      {
        question: "Which of these projects has crossed into territory where a professional developer is warranted?",
        options: [
          "A quiz app for your own class",
          "A flashcard site for research-skills vocabulary",
          "A tool handling real payments and logins tied to real student accounts",
          "A course portal with four connected pages",
        ],
        correctIndex: 2,
        explanation:
          "Real payments, logins tied to real student accounts, and sensitive data at scale sit outside what vibe-coding is meant to cover. Recognizing this boundary is a sign of a mature builder, not a limited one.",
      },
      {
        question: "What is the key version-safety habit this module emphasizes?",
        options: [
          "Never make any changes once a tool is live",
          "Never edit only the live version of a tool students are actively using mid-semester — make and test the change first, then push it live",
          "Delete old versions to save space",
          "Only GitHub's paid plan keeps version history",
        ],
        correctIndex: 1,
        explanation:
          "GitHub already keeps every version automatically. The habit that protects real users is testing a change before pushing it live, never editing the live version directly while people depend on it.",
      },
      {
        question: "What does the capstone's ship checklist require?",
        options: [
          "Only that the tool loads without crashing",
          "It solves the real problem, has a live URL, works on a phone, was tested by a real person, and clears every Module 13 compliance check",
          "A minimum of ten pages",
          "A paid subscription to Claude, GitHub, and Vercel",
        ],
        correctIndex: 1,
        explanation:
          "Shipping responsibly means more than “it runs”: solving the real problem, a working live URL, a working phone experience, real feedback, and the full set of Module 13 checks, no personal data, accessibility, no secrets, odd-input testing, and the IRB/IP gates where relevant.",
      },
      {
        question: "True or false: you need to pay for GitHub and Vercel to complete this course.",
        options: [
          "True — both require a paid plan after Module 8",
          "False — their free tiers are genuinely sufficient for every project in this course",
          "True, but only for the capstone",
          "False, but only if you never deploy more than one project",
        ],
        correctIndex: 1,
        explanation:
          "GitHub's and Vercel's free tiers comfortably cover every build in this course, including the capstone, with no payment required at any point.",
      },
    ],
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
