import logo from './logo.svg';
import React ,{useEffect,useState}
 from "react";
import './App.css';

import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,

} from "react-icons/ai";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import Usetheme from './hooks/Usetheme'


function App() {
  const {darkmode,handlecheckchange}=Usetheme();
  const [isShown, setIsShown] = useState(false);
  

  
  return (
    <div className={ darkmode&&"dark"}>

    <div className='text-slate-400 pb-8 dark:text-slate-300 dark:bg-darkbg-dark'>
      {/*header*/}
      <div className="bg-bg pb-40 dark:bg-darkbg">

        <div className='container py-9 flex justify-between items-center'>
          <div>

            <h1 className='text-slate-800 dark:text-white  font-bold text-3xl'>Social Media Dashboard</h1>
            <span className='text-sm'>
              your Followers :12.3456
            </span>
          </div>
          <div>
            <label htmlFor='Checkbox ' className='mr-2' > Dark Mode</label>
            <span>
              <input id="checkbox" type="checkbox" onChange={handlecheckchange} />
            </span>
          </div>
        </div>

      </div>
      <div className="container -mt-40">


        {/*MAINCARDs*/}
        <div className=' grid grid-cols-1  md:grid-cols-4 gap-8 '>
          {/*card*/}

          <div className="card before:bg-sky-500 " >
            <div className="flex items-center justify-center gap-1 font-bold pb-6">
              <span className="text-facebook">
                <AiFillFacebook size={22} />
              </span>
              <span>abcd</span>
            </div>
            <h2 className="text-slate-800 dark:text-white text-6xl font-bold">1987</h2>
            <p className="font-medium uppercase tracking-[0.3em]">Followers</p>
            <div className=" flex items-center justify-center gap-1 pt-6 text-maingreen">
              <span>

                <  RiArrowUpSFill />

              </span>
              <span>Today</span>
            </div>
          </div>
          
          {/*card*/}
          <div className="card before:bg-sky-500">
            <div className="flex items-center justify-center gap-1 font-bold pb-6">
              <span className="text-facebook">
                <AiOutlineTwitter size={22} />
              </span>
              <span>abcd</span>
            </div>
            <h2 className="text-slate-800 dark:text-white text-6xl font-bold">1987</h2>
            <p className="font-medium uppercase tracking-[0.3em]">Followers</p>
            <div className=" flex items-center justify-center gap-1 pt-6 text-maingreen">
              <span>

                <  RiArrowUpSFill />

              </span>
              <span>Today</span>
            </div>
          </div> {/*card*/}
          <div className="card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500">
            <div className="flex items-center justify-center gap-1 font-bold pb-6">
              <span className="text-fuchsia-600">
                <AiFillInstagram size={22} />
              </span>
              <span>abcd</span>
            </div>
            <h2 className="text-slate-800 dark:text-white text-6xl font-bold">1987</h2>
            <p className="font-medium uppercase tracking-[0.3em]">Followers</p>
            <div className=" flex items-center justify-center gap-1 pt-6 text-maingreen">
              <span>

                <  RiArrowUpSFill />

              </span>
              <span>Today</span>
            </div>
          </div> {/*card*/}
          <div className="card before:bg-rose-700">
            <div className="flex items-center justify-center gap-1 font-bold pb-6">
              <span className="text-rose-700">
                <AiFillYoutube size={22} />
              </span>
              <span>abcd</span>
            </div>
            <h2 className="text-slate-800 dark:text-white text-6xl font-bold">1987</h2>
            <p className="font-medium uppercase tracking-[0.3em]">Followers</p>
            <div className=" flex items-center justify-center gap-1 pt-6 text-rose-700">
              <span>

                <  RiArrowUpSFill />

              </span>
              <span>Today</span>
            </div>
          </div>
        </div>
        {/*smallcard*/}
        <div className="mt-12">
          <h2 className="text-2xl font-bold">
            Overview -Today
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {/*card*/}
            {Array(8).fill(" ").map((el) => (
              <div className="card-sm">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold">
                    Pages Views
                  </h4>
                  <AiFillFacebook className="text-facebook" size={22} />
                </div>
                <div className=" flex items-center justify-between mt-8">
                  <h3 className="font-black text-2xl text-slate-800 dark:text-white"> {" "}101

                  </h3>
                  <div className=" flex items-center gap-1 text-maingreen text-sm">
                    <span>
                      <RiArrowUpSFill />
                    </span>
                    <span>
                      300%
                    </span>
                  </div>
                </div>
              </div>




            ))}

          </div>

        </div>
      </div>

    </div>
    
    </div>

  );
}

export default App;
