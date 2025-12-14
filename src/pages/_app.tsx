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
        canonical={`https://aiden.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
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
          url: `https://aiden.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "dotscant",
          description: "Dot's personal site",
          images: [
            {
              url: "/pfp.jpg",
              alt: "dotscant",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
