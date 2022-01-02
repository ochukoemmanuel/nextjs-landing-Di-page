import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <div className='flex justify-between md:justify-items-start text-center md:text-left items-center align-middle mt-60 md:mt-20 xl:mt-16'>
        <div className='px-11 sm:px-0 md:px:0 flex-1'>
          <div className='text-high_dark text-4xl md:text-5xl font-bold leading-snug mb-6 md:mb-6 -mt-32'>
            Save Money On <span className='text-primary'>Everyday</span>{' '}
            Payments
          </div>
          <div className='font-normal text-lg leading-7 mb-7'>
            Direcharge rewards you with cashbacks when you make payments for
            services and utilities.
          </div>
          <div className='flex justify-center md:justify-start items-center align-middle space-x-4 md:space-x-8'>
            <Link href='/'>
              <img
                className='w-32 md:w-40 cursor-pointer'
                src='./images/google_play.png'
                alt='Googleplay'
              />
            </Link>
            <Link href='/'>
              <img
                className='w-32 md:w-40 cursor-pointer'
                src='./images/apple_store.png'
                alt='Applestore'
              />
            </Link>
          </div>
        </div>

        <div className='flex-1 hidden sm:hidden md:block lg:-mr- 2xl:-mr-16 pl-20'>
          <img className='w-102' src='./images/phone.png' alt='phone' />
        </div>
      </div>
      <div>
        <img
          className='w-6 md:w-12 mt-14 xl:mt-0 mx-auto cursor-pointer animate-bounce duration-800 ease-in-out pb-9'
          src='./images/down_arrow.png'
          alt='down_arrow'
        />
      </div>
    </div>
  );
};

export default Hero;
