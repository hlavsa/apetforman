import { useRouter } from 'next/router';
import Head from 'next/head'
import MainPage from '../components/MainPage';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Hádej film</title>
        <meta
          name="description"
          content="Oficiální stránka Hádej film. Každý den nová výzva!"
        />
      </Head>
      <MainPage />

    </>
  );
}