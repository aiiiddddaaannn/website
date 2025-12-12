import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/jpeg" href="/pfp.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/pfp.jpg" />
        <link rel="apple-touch-icon" href="/pfp.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
