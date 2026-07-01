const ninja = document.querySelector("ninja-keys");

ninja.data = [
  {
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },
  {
    id: "nav-blog",
    title: "blog",
    section: "Navigation",
    handler: () => {
      window.location.href = "/blog/";
    },
  },
  {
    id: "nav-publications",
    title: "publications",
    section: "Navigation",
    handler: () => {
      window.location.href = "/publications/";
    },
  },
  {
    id: "nav-cv",
    title: "curriculum vitae",
    section: "Navigation",
    handler: () => {
      window.location.href = "/cv/";
    },
  },
  {
    id: "project-learning-communication-skills",
    title: "Learning Communication Skills in Multi-task Multi-agent Deep Reinforcement Learning",
    description: "Project page for the 2025 paper.",
    section: "Projects",
    handler: () => {
      window.location.href = "/projects/1_project/";
    },
  },
  {
    id: "post-notes-on-claude-agent-tools",
    title: "Notes on Claude Agent Tools",
    description: "Notes on web search, code execution, skills, MCP, context management, and managed agents.",
    section: "Posts",
    handler: () => {
      window.location.href = "/blog/2026/agent-tools-notes/";
    },
  },
  {
    id: "post-notes-for-cs336-assignment-1",
    title: "Notes for CS336 Assignment 1",
    description: "Notes for assignment 1 in CS336",
    section: "Posts",
    handler: () => {
      window.location.href = "/blog/2025/cs336_ass1/";
    },
  },
  {
    id: "tag-notes",
    title: "notes",
    section: "Tags",
    handler: () => {
      window.location.href = "/blog/tag/notes/";
    },
  },
  {
    id: "feed",
    title: "feed",
    section: "Navigation",
    handler: () => {
      window.open("/feed.xml", "_blank");
    },
  },
];
