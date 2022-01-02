import Head from 'next/head';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='container mx-auto bg-light  px-6 xl:px-40'>
      <Head>
        <title>
          Direcharge | Buy Airtime and Data for MTN, Glo, Etisalat, Airtel. Make
          payment for DSTV, GOTV, PHCN other services
        </title>
        <link rel='icon' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Hero />
    </div>
  );
}
