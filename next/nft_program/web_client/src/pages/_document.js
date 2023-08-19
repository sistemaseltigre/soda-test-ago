import Document, { Html, Head, Main, NextScript } from "next/document";
import Examples from './examples'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="nft_program"
          />
          <link rel="icon" href="/favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body className="bg-gray-900 max-w-screen mx-auto overflow-x-hidden">
          <Main />
          <NextScript />
          <Examples/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;