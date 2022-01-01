import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
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
    </div>
  );
}
