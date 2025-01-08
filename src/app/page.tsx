import Details from '@/components/details/Details';
import Homepage from '@/components/Homepage/Homepage'

const Page: React.FC = () => {
  return (
    <div className='w-full h-screen overflow-visible bg-gray-50 '>
      <Homepage/>
      <Details/>
    </div>
  )
}

export default Page;
