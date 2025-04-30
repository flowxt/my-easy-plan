/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://my-easy-plan.com", // URL correcte du site
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  exclude: ["/404"],
  changefreq: "weekly",
  priority: 0.7,
};
