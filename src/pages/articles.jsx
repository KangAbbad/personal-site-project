import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const FramerImage = motion(Image);

const MovieImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouseMove(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        alt={title}
        height="0"
        width="0"
        sizes="100vw"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        className="z-10 h-auto w-96 hidden absolute rounded-lg"
        style={{
          x,
          y,
        }}
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4"
    >
      <MovieImg img={img} link="/" title={title} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full h-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          height="0"
          width="0"
          sizes="100vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="h-auto w-full"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const ArticlesPage = () => {
  return (
    <>
      <Head>
        <title>Articles | kangabbad</title>
        <meta name="description" content="Hi it's me, Kang Abbad!" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img="/images/articles/pagination-component-in-reactjs.jpg"
              link="/"
              summary="Build A Custom Pagination Component In Reactjs From Scratch
Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              title="Words Can Change The World!"
            />
            <FeaturedArticle
              img="/images/articles/create-loading-screen in-react-js.jpg"
              link="/"
              summary="Build A Custom Pagination Component In Reactjs From Scratch
Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              title="Words Can Change The World!"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              date="April 29, 2023"
              img="/images/articles/create-loading-screen in-react-js.jpg"
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            />
            <Article
              date="April 29, 2023"
              img="/images/articles/create-loading-screen in-react-js.jpg"
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            />
            <Article
              date="April 29, 2023"
              img="/images/articles/create-loading-screen in-react-js.jpg"
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            />
            <Article
              date="April 29, 2023"
              img="/images/articles/create-loading-screen in-react-js.jpg"
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            />
            <Article
              date="April 29, 2023"
              img="/images/articles/create-loading-screen in-react-js.jpg"
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            />
            <Article
              date="April 29, 2023"
              img="/images/articles/create-loading-screen in-react-js.jpg"
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            />
            <Article
              date="April 29, 2023"
              img="/images/articles/create-loading-screen in-react-js.jpg"
              link="/"
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default ArticlesPage;
