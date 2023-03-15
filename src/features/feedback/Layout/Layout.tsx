/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import "@/pages/feedbackStyles.css";

function Layout({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      {children}
    </>
  );
}

export default Layout;
