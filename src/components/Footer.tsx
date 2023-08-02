import shl from '../assets/shl.png'

function Footer() {
  const today = new Date();
  return (
    <footer className="footer bg-slate-900  bottom-0 w-full h-[10rem] flex  py-4">
      <div className="flex flex-col px-4 justify-center items-center basis-full">
        <div className="flex space-x-10 justify-center items-center basis-full">
          <div className="logo flex flex-row justify-center items-center">
            <img
              src={shl}
              alt="logo"
              className="w-16 h-16 rounded-full "
            />
          </div>
          <p>
          copylights &copy; {today.getFullYear()} SPEAK HEAR LEARN
          </p>
          <a href='' className='text-xs font-bold'>all right reserved</a>
        </div>
        <div className='powerdby flex flex-row justify-center items-center'>
          <p className='text-xs font-bold'>powered by</p>
          <a href="https://fabcode67.github.io/my-brand-fabrice" target="_blank" rel="noreferrer">
           <p className='text-xs ml-2'>fabrice.mwanafunzi@karisimbi.rw</p>
          </a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;