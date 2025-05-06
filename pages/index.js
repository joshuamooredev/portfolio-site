import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua | Front-End Developer</title>
        <meta name="description" content="Portfolio site for Joshua, a front-end web developer." />
      </Head>

      <main className="min-h-screen bg-black text-white px-8 py-12">
        <h1 className="text-4xl font-bold">Welcome to my portfolio site</h1>
        <p className="mt-4 text-lg">Let's build something awesome.</p>
      </main>
    </>
  );
}
