import { useRouter } from 'next/router';
import Head from 'next/head'
import MainPage from '../components/MainPage';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Petra Formánková - Tetování, malba, ilustrace a parte</title>
        <meta name="description" content="Originální tetování, malba, ilustrace nebo parte od Petry Formánkové. Zaměřuji se na precizní detaily a originální design a osobní přístup." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
        name="keywords"
        content="teplice, ústecký kraj, tetování, malba, ilustrace, parte, abstraktní tetování, pomalá tvorba, petra formánková, ruční ilustrace, vlastní návrhy, umělecké tetování"
        />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Petra Formánková – Tetování, malba a ilustrace" />
        <meta
          property="og:description"
          content="Originální tetování, malba, ilustrace nebo parte od Petry Formánkové. Zaměřuji se na precizní detaily a originální design a osobní přístup."
        />
        <meta
          property="og:image"
          content="https://www.petforman.art/images/petra.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.petforman.art/" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </>
  );
}