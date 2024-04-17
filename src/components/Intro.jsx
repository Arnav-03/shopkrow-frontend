import { useNavigate } from 'react-router-dom';
function Intro() {
  const navigate = useNavigate();
 
  const getstarted=()=>{
    navigate('/home');
  }
  return (
    <div className="h-screen  flex flex-col md:flex-row ">
      {/*part1 */}
      <div className="w-full bg-[#2a6a72]  flex flex-col justify-center p-4 md:p-8   
      md:w-1/2  pb-[100px] sm:text-center md:text-left
      ">
        <div className="w-full h-2/3  ">
          <div className="text-[#faf9f9] text-6xl md:text-7xl
          lg:text-8xl alfa-slab drop-shadow-2xl ">Welcome <br />To<br></br>
            <span className='text-[#c7be40] text-[90px]  lg:text-9xl oleo drop-shadow-2xl '>ShopKrow</span></div><br />
        </div>
      </div>
      {/*part2 */}

      <div className=" w-full bg-[#faf9f9] flex flex-col justify-center text-center items-center   md:w-1/2">
        <div className="pacifico text-3xl md:text-4xl lg:text-5xl ">
        <div className="text-6xl mt-2 uppercase lilita text-[#2a6a72]  md:text-7xl lg:text-8xl "> Explore,<br /> Engage,<br /> Enjoy.</div>

          Bringing Dreams To <br />  Doorsteps.
        </div>
        <button  onClick={getstarted}
        className=' m-4 w-fit p-3 my-6 rounded-3xl border-[2px] border-[#2a6a72] text-[#2a6a72]  text-3xl capitalize  tracking-[1px] hover:bg-[#2a6a72] hover:text-white getstarted  oleo '>get started</button>

      </div>

    </div>
  );
}

export default Intro;
