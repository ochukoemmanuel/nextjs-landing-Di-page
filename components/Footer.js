import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-primary text-white flex flex-col justify-between py-11 px-32 space-y-9'>
      <div className='flex flex-col justify-between items-center space-y-9'>
        <img
          className='w-32'
          src='./images/logo_light.png'
          alt='direcharge_logo'
        />

        <div className=''>
          <ul className='flex justify-between items-center align-middle font-medium text-2xs space-x-9'>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              <Link href='/'>Testimonials</Link>
            </li>
            <li>
              <Link href='/'>Contact Us</Link>
            </li>
          </ul>
        </div>

        <hr className='w-full' />
      </div>

      <div>
        <p className='text-left font-thin'>
          © 2022 Direcharge. All rights reserved
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
