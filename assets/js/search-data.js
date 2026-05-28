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
