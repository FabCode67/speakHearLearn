import NavBar from '../components/NavBar';
import vid3 from '../assets/vid3.mp4';
import vid4 from '../assets/vid4.mp4';
// import vid5 from '../assets/vid5.mp4';
// import vid6 from '../assets/vid6.mp4';

const Resources = () => {
  return (
    <>
      <NavBar />
      <div className='flex justify-center text-center m-auto bg-blue-500 items-center min-h-screen h-fit flex-col'>
        <div className='flex justify-center laptop:flex-row desktop:flex-row flex-col w-full text-center m-auto bg-blue-500 items-center min-h-screen h-fit'>
          <div className='laptop:w-1/2 desktop:w-1/2 w-full flex h-screen'>
        <video controls>
          <source src={vid3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className='laptop:w-1/2 desktop:w-1/2 w-full flex bg-orange-100 h-screen'>
        <video controls className='w-full object-fill'>
          <source src={vid4} type="video/mp4" className='w-full' />
          Your browser does not support the video tag.
        </video>
</div>
        </div>
        <div className='flex justify-center text-center flex-col m-auto bg-blue-500 items-center min-h-screen h-fit w-full'>
        <div className='grid laptop:grid-cols-3 desktop:grid-cols-3 grid-cols-1 p-3 gap-3 justify-center text-center m-auto bg-gray-400 items-center min-h-screen h-fit w-full'>
          <div className='h-full  object-fill flex'>
            <img src='https://www.market.unicefusa.org/blog/wp-content/uploads/2016/06/getting-every-child-to-school-2.jpg'></img>
          </div>
          <div className='h-full  object-fill flex'>
            <img src='https://www.unicef.org/esa/sites/unicef.org.esa/files/styles/hero_mobile/public/2018-09/UN0145547_bluewash.png?itok=99pUk1x-'></img>
          </div>
          <div className='h-full '>
          <img src='https://img.freepik.com/free-photo/african-kids-paying-attention-class_23-2148892527.jpg'></img>

          </div>
          <div className='h-full '>
          {/* <video controls className='w-full object-fill'>
          <source src={vid5} type="video/mp4" className='w-full' />
          Your browser does not support the video tag.
        </video> */}
          </div>
          <div className='h-full '>
          {/* <video controls className='w-full object-fill'>
          <source src={vid6} type="video/mp4" className='w-full' />
          Your browser does not support the video tag.
        </video> */}
          </div>
          <div className='h-full  flex flex-col p-3 space-y-3'>

           <div className='h-28 w-full bg-gray-400 flex justify-center text-center items-center '>
            <h1 className='bb font-bold'>Other resources</h1>
           </div>
           {/* <div className='h-28 w-full bg-gray-400 text-center flex flex-col my-auto p-3'>
           <h1 className='bb font-bold flex '>ITETERO</h1>
           <a href='https://rw.goodinternet.org/rw/' target='blank' className='u underline text-blue-900 flex '>ITerer</a>
           </div> */}
           {/* <div className='h-28 w-full bg-gray-400 text-center flex flex-col my-auto p-3'>
           <h1 className='bb font-bold flex '>Global digitla kid's library</h1>
           <a href='https://digitallibrary.io/topic/early-math/?gclid=CjwKCAjw6eWnBhAKEiwADpnw9vzY1mhXQFbKfJpZaQbRQcpjTE-ZuJp3qswkCyLFAnWyEopBn5OnmBoCm9kQAvD_BwE' target='blank' className='u underline text-blue-900 flex '>Global digitla kid's library</a>
           </div>
           <div className='h-28 w-full bg-gray-400 text-center flex flex-col my-auto p-3'>
           <h1 className='bb font-bold flex '>Books for kids</h1>
           <a href='https://www.made-in-china.com/cs/hot-china-products/Child_Book.html?acc=9865948786&cpn=14050959044-130873752648&tgt=kwd-684237920092&net=g&dev=c-&gid=CjwKCAjw6eWnBhAKEiwADpnw9vNndF7sMOunl3jNWcLxPriEP2XI8KBl9PJ1zzOahO_kzi9NTSd14BoCFREQAvD_BwE&kwd=child%20book&mtp=p&gclid=CjwKCAjw6eWnBhAKEiwADpnw9vNndF7sMOunl3jNWcLxPriEP2XI8KBl9PJ1zzOahO_kzi9NTSd14BoCFREQAvD_BwE' className='u underline text-blue-900 flex '>Books for kids</a>
           </div>
           <div className='h-28 w-full bg-gray-400 text-center flex flex-col my-auto p-3'>
           <h1 className='bb font-bold flex '>Education for kids</h1>
           <a href='iteihttps://www.education.com/?gclid=CjwKCAjw6eWnBhAKEiwADpnw9iNVU7l3Fi65N0BGmmEXrPaGzlfg1_vD7yKQtqrsYrRxj3xhUqyjOxoCTbIQAvD_BwEte' className='u underline text-blue-900 flex '>Education for kids</a>
           </div>
           <div className='h-28 w-full bg-gray-400 text-center flex flex-col my-auto p-3'>
           <h1 className='bb font-bold flex '>Bed time stories</h1>
           <a href='https://www.storyberries.com/' className='u underline text-blue-900 flex '>Bed time stories</a>
           </div> */}
          </div>
</div>
          </div>
      </div>
    </>
  );
};

export default Resources;
