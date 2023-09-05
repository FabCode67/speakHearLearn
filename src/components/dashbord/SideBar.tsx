import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" bg z-0 bg-black border border-white text-white rounded-md p-5 w-1/5 min-h-screen">
      <ul className='flex flex-col'>
        <Link to='/activities'>
          <li className=' p-2 my-2 rounded-md'>Gashumba</li>
        </Link>
        <Link to='/activities/users'>
          <li className=' p-2 my-2 rounded-md'>Ishimwe richard</li>
        </Link>
        <Link to='/activities/help'>
          <li className=' p-2 my-2 rounded-md'>You</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
