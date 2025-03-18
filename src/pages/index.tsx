import { NavBar } from '@/components';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Jamie's Lego Archive"}</title>
      </Head>
      <div>
        <NavBar />
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
