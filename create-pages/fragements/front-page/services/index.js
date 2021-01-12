const ServicesFragment = `
fragment ServicesFragment on WpPage_Services {
  serviceTitleSmall
  serviceTitleBig
  service1 {
    content
    title
    icon {
      sourceUrl
      altText
    }
  }
  service2 {
    content
    title
    icon {
      sourceUrl
      altText
    }
  }
  service3 {
    content
    title
    icon {
      sourceUrl
      altText
    }
  }
  servicesFooterButtons {
    button1 {
      buttonName
      buttonLink {
        ... on WpPage {
          uri
        }
      }
    }
    button2 {
      buttonName
      buttonLink {
        ... on WpPage {
          uri
        }
      }
    }
  }
}
`;
module.exports.ServicesFragment = ServicesFragment;
