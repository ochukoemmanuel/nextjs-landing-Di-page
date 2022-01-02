import Link from 'next/link';

const Navbar = ({ toggle }) => {
  return (
    <div className=' bg-light'>
      <div className='container mx-auto h-18 flex justify-between items-center  px-6 xl:px-40'>
        <div className='w-14 h-7'>
          <Link href='/'>
            <img
              className='w-full cursor-pointer'
              src='/logo.png'
              alt='direcharge_logo'
            />
          </Link>
        </div>
        <div className='hidden lg:flex'>
          <ul className='flex justify-between items-center align-middle font-medium text-2xs text-dark space-x-11'>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/'>Contact Us</Link>
            </li>
            <li>
              <Link href='/'>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className='cursor-pointer lg:hidden' onClick={toggle}>
          <svg
            className='w-6 h-6 text-dark'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
