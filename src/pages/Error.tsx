import { Navigation } from '@/components';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <Navigation />
      <div className='text-center mt-50 text-xl md:text-3xl lg:text-6xl'>
        <h1>Wrong Page</h1>
        <p>
          Please Go Back To <Link to={'/'} className='colored-text underline'>Home</Link>
        </p>
      </div>
    </>
  );
};

export default Error;
