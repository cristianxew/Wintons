import React from "react";
import { isEmpty } from "lodash";
import Layout from "../../components/layout";
import Page from "../../components/page";
import SEO from "../../components/seo";
import { getOgImage } from "../../utils/functions";

const SinglePage = (props) => {
  const {
    pageContext: { title, seo, uri },
  } = props;

  return (
    <Layout>
      {!isEmpty(props.pageContext) ? (
        <>
          <SEO
            title={title}
            seoData={seo}
            uri={uri}
            header={{ siteTitle: "Wintons The Blinds Company" }}
            openGraphImage={getOgImage(seo)}
          />
          <Page data={props.pageContext} />
        </>
      ) : (
        <div>Something went wrong</div>
      )}
    </Layout>
  );
};
export default SinglePage;
