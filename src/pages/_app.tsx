import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"dotscant"}
        description={"Dot's personal site"}
        canonical={`https://dotscant.vercel.app${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/pfp.jpg",
            type: "image/jpeg",
          },
          {
            rel: "shortcut icon",
            href: "/pfp.jpg",
            type: "image/jpeg",
          },
        ]}
        openGraph={{
          url: `https://dotscant.vercel.app${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "dotscant",
          description: "Dot's personal site",
          siteName: "dotscant",
          images: [
            {
              url: "https://dotscant.vercel.app/pfp.jpg",
              alt: "dotscant",
              width: 1200,
              height: 1200,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@dotscant",
          title: "dotscant",
          description: "Dot's personal site",
          image: "https://dotscant.vercel.app/pfp.jpg",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
