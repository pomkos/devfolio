module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://cv.peti.work/`,
    // Your Name
    name: 'Peter Gates',
    // Main Site Title
    title: `Peter Gates | Data Scientist`,
    // Description that goes under your name in main bio
    description: `Graduate student seeking a data scientist position in the biomedical and health fields.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/pomkos`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/peter-gates-430807191/`,
    // Content of the About Me section
    about: `Modeling outcomes for Dr. Ridgel's dynamic bike using previously collected data.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Dance Entropy Calculator',
        description:
          'Calculates the entropies from raw output of a Noraxon recording in JupyterLab.',
        link: 'https://github.com/pomkos/dancing',
      },
      {
        name: 'Dynamic Bike Extractor',
        description:
          'Converts raw output files to a format that can be read by a Matlab entropy script.',
        link: 'https://github.com/pomkos/biking',
      },
      {
        name: 'Tremor Entropy Calculator',
        description:
          "Calculates the entropies from raw output of a Parkinson's tremor device, with GUI.",
        link: 'https://github.com/pomkos/entropy_tremor',
      },
      {
        name: 'Twitch Chat Analyzer',
        description:
          "Algorithm building to analyze the chat record of Twitch streams, for Pillar.",
        link: 'https://github.com/pomkos/twitch_chat_analysis',
      },
      {
        name: 'Venmo Requester',
        description:
          "Automatically splits bills from DoorDash, UberEats receipts or custom input.",
        link: 'https://github.com/pomkos/payme',
      },
      {
        name: 'Covid Dash',
        description:
          "Tracks covid numbers worldwide, and allows for users to create their own charts using the latest data.",
        link: 'https://github.com/pomkos/covid_dash',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Packages',
        description:
          'Python, R, scikit, statsmodels, pandas, tidyverse',
      },
      {
        name: 'Databases',
        description: 'SQLite, PostreSQL, MySQL',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
