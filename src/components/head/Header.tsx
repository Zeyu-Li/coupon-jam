import Head from "next/head";
import React from "react";
import CONSTANTS from "../constants/constants";

const Header: React.FC = () => {
  return (
    <Head>
      <title>{CONSTANTS.DEFAULT_TITLE}</title>
      <meta
        name="title"
        property="og:title"
        content={CONSTANTS.DEFAULT_TITLE}
      />
      <meta
        name="description"
        property="og:description"
        content={CONSTANTS.DEFAULT_DESCRIPTION}
      />
      <meta name="author" content={CONSTANTS.DEFAULT_AUTHOR} />
      <meta name="keywords" content={CONSTANTS.DEFAULT_KEYWORDS.join(",")} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONSTANTS.DEFAULT_SITE_NAME} />
      <meta property="og:url" content={CONSTANTS.DEFAULT_BASE_URL} />
      <meta property="og:image" content={CONSTANTS.DEFAULT_PREVIEW_IMG} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={CONSTANTS.DEFAULT_BASE_URL} />
      <meta
        property="twitter:title"
        content={CONSTANTS.DEFAULT_TWITTER_TITLE}
      />
      <meta
        property="twitter:description"
        content={CONSTANTS.DEFAULT_TWITTER_DESCRIPTION}
      />
      <meta property="twitter:image" content={CONSTANTS.DEFAULT_PREVIEW_IMG} />
      <link rel="icon" href="/favicon.ico" />

      {/* Google Analytics */}
      {CONSTANTS.DEFAULT_GOOGLE_ANALYTICS ? (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${CONSTANTS.DEFAULT_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${CONSTANTS.DEFAULT_GOOGLE_ANALYTICS}');`,
            }}
          />{" "}
        </>
      ) : null}
    </Head>
  );
};
export default Header;
