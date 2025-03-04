import { useRouter } from 'next/router';
import Head from 'next/head'
import MainPage from '../components/MainPage';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Petra Formánková - Umělkyně</title>
        <meta name="description" content="Tetování, malba, ilustrace a parte od Petry Formánkové" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  );
}