import Head from "next/head";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp</title>
        <meta name="description" content="Social media app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar/>
    </div>
  );
}
