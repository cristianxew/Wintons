const WelcomeFragment = `
fragment WelcomeFragment on WpPage_Welcome {
      titleSmall
      titleBig
      section1 {
        title
        content
        buttonName
        buttonLink {
          ... on WpPage {
            id
            uri
          }
        }
      }
      section2 {
        title
        content
        buttonName
        buttonLink {
          ... on WpPage {
            id
            uri
          }
        }
      }
      section3 {
        sourceUrl
        altText
      }
}
`;

module.exports.WelcomeFragment = WelcomeFragment;
