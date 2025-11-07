import Details from '@/components/details/Details';
import Homepage from '@/components/Homepage/Homepage'
import Head from 'next/head';

const Page: React.FC = () => {
  return (
    <>
    <Head>
        <title>NIE VED | College Notes, DSA Sheets & Interview Prep</title>
        <meta
          name="description"
          content="NIE VED helps NIE students prepare for placements with semester notes, 107-day DSA sheet, aptitude tests, interview experiences, and more."
        />
        <meta
          name="keywords"
          content="NIE VED, NIEVED, nieved, nie ved, college notes, DSA, aptitude, interview preparation, placement resources, coding sheet"
        />
        <meta property="og:title" content="NIE VED | Study & Placement Platform" />
        <meta
          property="og:description"
          content="Access college notes, DSA problems, aptitude practice, and real interview experiences all in one platform."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nieved.vercel.app" />
        <meta property="og:image" content="/VED.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nieved.vercel.app" />
      </Head>
    <div className='w-full h-screen overflow-visible bg-gray-50 '>
      <Homepage/>
      <Details/>
    </div>
      </>

  )
}

export default Page;
