const WorksFragment = `
fragment WorksFragment on WpPage_Works {
  titleGray
  titleBlack
  work1{
      homeSpace
      description
      buttonName
      blindType
      image {
        sourceUrl
      }
      buttonLink {
        ... on WpPage {
          uri
        }
      }
  }
  work2{
      homeSpace
      description
      buttonName
      blindType
      image {
        sourceUrl
      }
      buttonLink {
        ... on WpPage {
          uri
        }
      }
  }
  work3{
      homeSpace
      description
      buttonName
      blindType
      image {
        sourceUrl
      }
      buttonLink {
        ... on WpPage {
          uri
        }
      }
  }
  work4{
      homeSpace
      description
      buttonName
      blindType
      image {
        sourceUrl
      }
      buttonLink {
        ... on WpPage {
          uri
        }
      }
  }
}
`;

module.exports.WorksFragment = WorksFragment;
