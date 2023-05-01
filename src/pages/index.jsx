import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/Layout.jsx";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>kangabbad.com</title>
        <meta name="description" content="Welcome to kangabbad.com!" />
      </Head>
      <main className="flex items-center min-h-screen w-full text-dark dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src="/images/profile/developer-pic-1.png"
                alt="kangabbad"
                height="0"
                width="0"
                sizes="100vw"
                className="w-full h-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="font-medium text-base my-4">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/my-cv.pdf"
                  target="_blank"
                  download
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light border-2 border-solid border-transparent hover:border-dark"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:naufalabbad9@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src="/images/svgs/miscellaneous_icons_1.svg"
            alt="Bulb"
            height="0"
            width="0"
            sizes="100vw"
            className="w-full h-full"
          />
        </div>
      </main>
    </>
  );
}
