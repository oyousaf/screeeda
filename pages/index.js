import Head from "next/head";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Discord from "../components/Discord";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Twitch from "../components/Twitch";

export default function Home() {
  return (
    <div>
      <Head>
        <title>screeeda</title>
        <meta name="author" content="screeeda" />
        <meta name="description" content="Welcome to my streamer website!" />
        <meta name="generator" content="screeeda" />
        <meta
          name="keywords"
          content="SCREEEDA, TWITCH, STREAMER, PUBG, MUSIC, ALTERNATIVE MUSIC, Casual, Discord, 2022, React, Next, Next.js, Tailwind, Frontend Web Developer"
        />
        <meta name="theme-color" content="#002b36" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Welcome" message="to my streamer website!" />
      <Banner />
      <Discord />
      <Instagram />
      <Twitch />
      <Contact />
    </div>
  );
}
