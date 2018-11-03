module.exports = {
  siteMetadata: {
    title: 'Veloar',
    description: 'A Social Media Agency for your personal brand or business. We offer Social Media Optimization with great results.',
    keywords: 'social media agency, influencers, influencer, marketing agency, social media marketing, social media services, marketing services, instagram marketing, facebook marketing, linkedin marketing, social media optimization'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'k9f8fpq6e7c3',
        accessToken: 'd61abfa84bdd073cb6d96275486b91a29bee7e595f793acb26d03693babef895'
      }
    }
  ],
}
