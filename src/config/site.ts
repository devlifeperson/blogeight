import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "GreenLife - Sustainable Living Guide",
  description:
    "Eco-friendly tips, sustainable products, and environmental awareness.",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "URL Management Tools",
    slug: "link-utilities",
    tools: [
      {
        title: "Link Analytics",
        desc: "Monitor clicks and user interactions with shortened links for valuable insights.",
        href: "https://free-url.short360s.com/stats",
      },
      {
        title: "URL Shortener",
        desc: "Turn long URLs into concise, shareable links.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "Generate QR Codes",
        desc: "Create QR codes for URLs to facilitate mobile sharing.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
    ],
  },
  {
    title: "Image & Graphic Tools",
    slug: "photo-editing-tools",
    tools: [
      {
        title: "Watermark Addition",
        desc: "Add watermarks to images to prevent unauthorized use.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Image Format Conversion",
        desc: "Switch image formats for compatibility (JPEG, PNG, WebP).",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Cloud Image Storage",
        desc: "Upload and store images on cloud platforms for easy access.",
        href: "https://review360.info/upload-image",
      },
      {
        title: "Image Cropper",
        desc: "Trim images to fit specific dimensions or aspect ratios.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Image Compression",
        desc: "Compress images to optimize page load speeds.",
        href: "https://review360.info",
      },
      {
        title: "Image Resizer",
        desc: "Resize images to meet website and social media standards.",
        href: "https://review360.info/image-resizer",
      },
    ],
  },
  {
    title: "Site & SEO Tools",
    slug: "website-seo-tools",
    tools: [
      {
        title: "Index Checker",
        desc: "Verify if your URLs are indexed by Google to improve search visibility.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Backlink Creator",
        desc: "Generate backlinks to boost SEO rankings.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "Redirect Path Checker",
        desc: "Check URL redirects to prevent broken links.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Meta Tag Optimizer",
        desc: "Analyze and refine meta tags to enhance SEO performance.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Google Cache Viewer",
        desc: "View cached versions of your site on Google for indexing accuracy.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Security Checker",
        desc: "Scan your website for security vulnerabilities and potential threats.",
        href: "https://tools360s.com/safe-browsing",
      },
    ],
  },
  {
    title: "Text Processing Utilities",
    slug: "text-tools",
    tools: [
      {
        title: "Word Counter",
        desc: "Count words, characters, and sentences in your text.",
        href: "https://tools360s.com/word-counter",
      },
      {
        title: "Text Comparison",
        desc: "Highlight differences between two texts for easier analysis.",
        href: "https://tools360s.com/text-compare",
      },
    ],
  },
  {
    title: "General Utility Tools",
    slug: "general-tools",
    tools: [
      {
        title: "Password Generator",
        desc: "Create secure passwords with mixed characters for enhanced security.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "IP Lookup",
        desc: "Identify your device’s public IP address (IPv4 or IPv6).",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Browser Version Checker",
        desc: "Check if your browser is updated for optimal security.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Invoice Generator",
        desc: "Create detailed invoices for business transactions.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Code Formatter",
        desc: "Beautify HTML, CSS, JavaScript, and JSON code for readability.",
        href: "https://tools360s.com/code-formatter",
      },
    ],
  },
];
