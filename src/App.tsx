import NavBar from "./NavBar";
import { FaSearch } from "react-icons/fa";
import Frame from './assets/Frame.png'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App w-full flex flex-col snap-x scroll-smooth">
      <div className="bg-slate-900 w-full">
        <NavBar />
      </div>
      <div className="w-full flex flex-col mt-[6%] scroll-smooth snap-x">
        <div className="w-full min-h-screen h-fit  p-3">
          <div className="flex flex-col w-full h-full ">
            <div className="w-full py-3 mt-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-3 rounded-lg pr-10 float-right border border-blue-600 laptop:w-[25%] desktop:w-[25%] w-full"
                />
                <div className="absolute inset-y-6 justify-center text-center m-auto h-full right-0 flex items-center pr-3 pointer-events-none">
                  <FaSearch />
                </div>
              </div>
            </div>
            <div className="w-full basis-full bg-blue-500 flex flex-col-reverse laptop:flex-row desktop:flex-row rounded-md">
              <div className=" laptop:w-[60%] desktop:w-[60%] w-full h-fit  p-3">
                <h1 className="fon font-serif font-extrabold laptop:text-6xl desktop:text-6xl text-5xl text-white mb-12">SPEAK HEAR LEARN</h1>
                <h1 className="f font-bold font-sans laptop:text-5xl desktop:text-5xl text-4xl mb-5">WELCOME!</h1>
                <p className="te laptop:text-3xl desktop:text-3xl text-xl">
                We invite you to explore foundational information and find dynamic ideas from the field. This site is designed for teachers, families, and others interested in literacy for children and youth with visual impairments, including those who are deafblind and/or have multiple disabilities. Browse these practical activities and resources, and join our community!
                </p>
                <div className="flex animate-bounce laptop:flex-row tablet:flex-row flex-col laptop:space-x-5 tablet:space-x-5 mt-16 mx-auto laptop:mx-0 w-full space-y-4 laptop:space-y-0 tablet:space-y-0">
              <button className="hover:bg-white hover:text-black text-white px-10 py-3 border-2 border-white animate-fade-in">START WITH US</button>
              <button className="hover:bg-white hover:text-black text-white px-10 py-3 border-2 border-white animate-fade-in">LEARN MORE</button>
            </div>
                </div>
              <div className="laptop:w-[40%] desktop:w-[40%] w-full h-fit p-3">
                <img src={Frame} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
