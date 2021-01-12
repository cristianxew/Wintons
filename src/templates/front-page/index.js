import React from "react"
import { isEmpty } from "lodash"
import Layout from "../../components/layout"
import Carousel from "../../components/home/carousel"
import Welcome from "../../components/home/welcome-to-wintons"
import OurWork from "../../components/home/our-work"
import Services from "../../components/home/services"
import FeaturedProducts from "../../components/home/featured-products"
import SEO from "../../components/seo"
import { getOgImage } from "../../utils/functions"

const FrontPage = props => {
  const {
    pageContext: {
      page: { title, seo, uri, welcome, services, works },
      categoriesSlider,
      featuredProducts,
    },
  } = props

  return (
    <Layout>
      {!isEmpty(props.pageContext) ? (
        <>
          <SEO
            title={title}
            seoData={seo}
            uri={uri}
            header={{ siteTitle: "Beautifully crafted blinds for your home" }}
            openGraphImage={getOgImage(seo)}
          />
          <Carousel categories={categoriesSlider} />
          <Welcome data={welcome} />
          <FeaturedProducts products={featuredProducts} />
          <OurWork data={works} />
          <Services data={services} />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  )
}
export default FrontPage
