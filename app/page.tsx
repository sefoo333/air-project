"use client"
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineBedroomChild } from "react-icons/md";
import { IoAirplaneOutline } from "react-icons/io5";
import { TbAirBalloon } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import { LuUser } from "react-icons/lu";
import { MdOutlineWhatsapp , MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

export default function Home() {
  let re:any = useRef(null)
  let re2:any = useRef(null)
  let re3:any = useRef(null)
  let re4:any = useRef(null)
  return (
 <div className="parent">

<nav className="flex flex-col items-center justify-center py-[20px] bg-[#003143] max-xl:bg-[#e9f6f8] max-xl:text-black text-white">
        <div className="container flex justify-between max-xl:justify-center max-xl:flex-col px-[140px] max-xl:px-[25px]">
      <div className="image max-xl:w-full max-xl:flex max-xl:justify-center">
      <Image src={"/logo.jpg"} width={60} height={60} alt="" />
      </div>
    <ul className="flex items-start text-[14px] gap-[20px] max-xl:hidden">
      <li>SAR</li>
      <li>العربية</li>
      <li>Retire My booking</li>
      <li className="flex items-center gap-2"><FaWhatsapp size={20} /> 01110343035</li>
      <li>
      <a
  className="inline-block rounded-sm border border-white-600 px-12 py-2 h-fit text-sm font-medium text-white hover:bg-white-600 hover:text-gray-600 focus:ring-3 focus:outline-hidden"
  href="#"
>
  Sign in
</a>
      </li>
    </ul>
    <div className="landing_phone xl:hidden">
  <div className="user flex justify-between items-center my-[20px]">
   <div className="group flex gap-3 items-center">
   <LuUser size={30} />
<div className="welcome">
  <h1 className="font-semibold">Hi there</h1>
  <p>We Are Happy for you</p>
</div>
   </div>
   <h1 className="text-green-600 font-semibold text-sm">Sign In</h1>
  </div>
  <div className="services flex gap-4 h-[80px]">
    <div className="ser basis-1/2">
      <Image src={"/icon1.svg"} alt="" width={40} height={100} />
      <h1>Flights</h1>
    </div>
    <div className="ser basis-1/2">
      <Image src={"/icon1.svg"} alt="" width={40} height={100} />
      <h1>Flights</h1>
    </div>
  </div>
</div>
      </div>
      <div className="container flex gap-[20px] mt-4 px-[140px]  max-xl:hidden">
      <div className="active_stay relative stay flex items-center pt-1 gap-[10px] text-[16px] max-xl:px-[25px] max-xl:py-[15px] max-xl:bg-white max-xl:flex-col max-xl:border max-xl:border-[#ccc] max-xl:text-black max-xl:rounded-md">
<MdOutlineBedroomChild />
<span>stays</span>
   </div>
   <div className="stay flex items-center gap-[10px] text-[16px] max-xl:px-[25px] max-xl:py-[15px] max-xl:bg-white max-xl:flex-col max-xl:border max-xl:border-[#ccc] max-xl:text-black max-xl:rounded-md">
   <IoAirplaneOutline />
<span>Flights</span>
   </div>
   <div className="stay flex items-center gap-[10px] text-[16px] max-xl:px-[25px] max-xl:py-[15px] max-xl:bg-white max-xl:flex-col max-xl:border max-xl:border-[#ccc] max-xl:text-black max-xl:rounded-md">
   <TbAirBalloon  />
<span>Activites</span>
   </div>
      </div>
          </nav>

<div className="landing flex justify-center h-[300px]  relative max-xl:hidden" >
<Image src={"/landing.jpg"} className="w-full h-[300px] object-cover absolute z-[-20]" width={1000} height={700} alt="" />
<div className="container text-3xl text-white flex flex-col gap-2 px-[140px] justify-center ">
<h1 className="font-bold text-4xl ">Let’s book your trip!</h1>
<p className=" text-[19px]">Choose from over 1.5 million hotels worldwide!</p>
</div>
<div className="wrapper absolute flex justify-center  bg-[#0031436e] w-full bottom-0 py-4  ">
 <div className="container flex justify-center gap-3 items-center  px-[100px]">
 <div className="search">
  <label htmlFor="Email">

  <div className="relative flex flex-row-reverse">
    <span className="absolute inset-y-0 left-0 grid w-8 place-content-center text-gray-700">
    <CiLocationOn size={20} />
    </span>
    <input
      type="email"
      id="Email"
      placeholder="Search For properties or places"
      className="mt-0.5 w-[300px] px-8 rounded font-medium  border-gray-300 pl-8 py-3 text-xl bg-white pe-8 shadow-sm sm:text-sm"
    />

  </div>
</label>
  </div>
 <div className="date">
  <label htmlFor="date">

  <div className="relative flex flex-row-reverse">
    <span className="absolute inset-y-0 left-0 grid w-8 place-content-center text-gray-700">
    <CiLocationOn size={20} />
    </span>
    <input
      type="date"
      id="date"
      placeholder="13-5-2025"
      value={"13/05/2025"}
      className="mt-0.5 w-[200px] px-8 rounded font-medium  border-gray-300 pl-8 py-3 text-xl bg-white pe-8 shadow-sm sm:text-sm"
    />

  </div>
</label>
  </div>
 <div className="date">
  <label htmlFor="date">

  <div className="relative flex flex-row-reverse">
    <span className="absolute inset-y-0 left-0 grid w-8 place-content-center text-gray-700">
    <CiLocationOn size={20} />
    </span>
    <input
      type="date"
      id="date"
      placeholder="13-5-2025"
      value={"13/05/2025"}
      className="mt-0.5 w-[200px] px-8 rounded font-medium  border-gray-300 pl-8 py-3 text-xl bg-white pe-8 shadow-sm sm:text-sm"
    />

  </div>
</label>
  </div>
  <div       className="selector relative flex items-center mt-0.5 w-[300px]  px-8 rounded font-medium  border-gray-300 pl-8 py-3 text-2xl bg-white pe-8 shadow-sm sm:text-sm "  >
    <MdPerson size={25} className="absolute left-1"/>
  <select
      name="Headline"
      id="Headline"
      className="w-full"
    >
      <option value="">Please select</option>
      <option value="JM">1 Room, 2 Adults, 0 Children</option>
      <option value="SRV">Stevie Ray Vaughn</option>
      <option value="JH">Jimi Hendrix</option>
      <option value="BBK">B.B King</option>
      <option value="AK">Albert King</option>
      <option value="BG">Buddy Guy</option>
      <option value="EC">Eric Clapton</option>
    </select>
  </div>
    <a
  className="inline-flex items-start gap-2 rounded-sm  bg-[#ef4050] px-8 py-3 text-white   focus:ring-3 focus:outline-hidden"
  href="#"
>
  <IoMdSearch size={25} />
  <span className="text-md font-semibold"> Search Stays </span>

 
</a>
 </div>
</div>
</div>



<div className="services max-xl:hidden flex gap-2 my-4 justify-center px-[140px] ">
  <div className="container px-[140px]">
    
  <div className="servis  flex gap-2 my-4 justify-center *:text-sm  pb-[17px] border-b-2 border-b-[#ccc]">
  <div className="service text-center p-2 flex items-center flex-col px-15 justify-center  font-semibold max-xl:border max-xl:border-[#ccc] max-xl:rounded-xl max-xl:w-[25%] max-xl:justify-center">
    <Image className="mb-2" src={"/icon1.svg"} alt="" width={45} height={40} />
    <h3>Car Intel</h3>
  </div>
  <div className="service text-center p-2 flex items-center flex-col px-15 justify-center  max-xl:px-2 font-semibold max-xl:border max-xl:border-[#ccc] max-xl:rounded-xl max-xl:w-[25%] max-xl:justify-center">
    <Image className="mb-2" src={"/icon2.svg"} alt="" width={45} height={50} />
    <h3>Domestic packages</h3>
  </div>
  <div className="service text-center p-2 flex items-center flex-col px-15 justify-center  max-xl:px-2  font-semibold max-xl:hidden">
    <Image className="mb-2" src={"/icon3.svg"} alt="" width={45} height={50} />
    <h3>Packages</h3>
  </div>
  <div className="service text-center p-2 flex items-center flex-col px-15  justify-center max-xl:px-2  font-semibold max-xl:hidden">
    <Image className="mb-2" src={"/icon4.svg"} alt="" width={45} height={50} />
    <h3>Cruise packages</h3>
  </div>
  <div className="service text-center p-2 flex items-center flex-col px-15 justify-center max-xl:px-2  font-semibold max-xl:hidden">
    <Image className="mb-2" src={"/icon5.svg"} alt="" width={45} height={50} />
    <h3>Sports packages</h3>
  </div>
  <div className="service text-center p-2 flex items-center flex-col px-15 justify-center  font-semibold max-xl:border max-xl:border-[#ccc] max-xl:rounded-xl max-xl:w-[25%] max-xl:justify-center">
    <Image className="mb-2" src={"/icon6.svg"} alt="" width={45} height={50} />
    <h3>Language course packages</h3>
  </div>
  <div className="service text-center p-2 flex items-center flex-col px-15 justify-center max-xl:px-2 font-semibold max-xl:border max-xl:border-[#ccc] max-xl:rounded-xl max-xl:w-[25%] max-xl:justify-center">
    <Image className="mb-2 h-full" src={"/icon7.svg"} alt="" width={45} height={50} />
    <h3>More services</h3>
  </div>
  </div>
  </div>

</div>
<div className="special flex justify-center max-xl:mt-[30px]">
<div className="container  w-full px-[140px]  max-xl:px-[20px]">
<div className="main flex items-center justify-between">
    <h1 className="font-medium text-2xl">Special deals for you    </h1>
    <a href="#" className="font-semibold text-[#02647a]">View ALL</a>
  </div>
  <div className="wrapper relative ">
    <div onClick={() => {
      re.current.scrollBy(300,0)
    }} className="icon absolute right-[-20px] bg-white top-1/2 z-9 translate-y-[-50%] flex justify-center items-center p-2 cursor-pointer border border-[#ccc]  text-black w-fit rounded-full text-xl">
      <IoIosArrowForward />
    </div>
  <div ref={re} className="wrapper overflow-x-hidden" style={{scrollBehavior:"smooth"}}>
  <div className="cards mt-7 flex gap-4 w-[2000px]">
    <div className="card border max-xl:h-fit border-[#ccc] rounded-xl w-fit">
      <Image src={"/card_special.png"} className="max-xl:w-[300px]" alt="" width={400} height={200} />
      <div className="text p-[20px]">
        <h1 className="font-semibold text-xl">Pay Special Day!</h1>
        <p>Enjoy up to 12% OFF</p>
      </div>

    </div>
    <div className="card border max-xl:h-fit border-[#ccc] rounded-xl w-fit">
    <Image src={"/card_special.png"} className="max-xl:w-[300px]" alt="" width={400} height={200} />
    <div className="text p-[20px]">
        <h1 className="font-semibold text-xl">Pay Special Day!</h1>
        <p>Enjoy up to 12% OFF</p>
      </div>

    </div>
    <div className="card border max-xl:h-fit border-[#ccc] rounded-xl w-fit">
    <Image src={"/card_special.png"} className="max-xl:w-[300px]" alt="" width={400} height={200} />
    <div className="text p-[20px]">
        <h1 className="font-semibold text-xl">Pay Special Day!</h1>
        <p>Enjoy up to 12% OFF</p>
      </div>

    </div>
    <div className="card border max-xl:h-fit border-[#ccc] rounded-xl w-fit">
    <Image src={"/card_special.png"} className="max-xl:w-[300px]" alt="" width={400} height={200} />
    <div className="text p-[20px]">
        <h1 className="font-semibold text-xl">Pay Special Day!</h1>
        <p>Enjoy up to 12% OFF</p>
      </div>

    </div>
    <div className="card border max-xl:h-fit border-[#ccc] rounded-xl w-fit">
    <Image src={"/card_special.png"} className="max-xl:w-[300px]" alt="" width={400} height={200} />
    <div className="text p-[20px]">
        <h1 className="font-semibold text-xl">Pay Special Day!</h1>
        <p>Enjoy up to 12% OFF</p>
      </div>

    </div>
  </div>
  </div>
  <div onClick={() => {
      re.current.scrollBy(-300 ,0)
    }} className="icon absolute left-[-20px] bg-white top-1/2 z-9 translate-y-[-50%] flex justify-center items-center p-2 cursor-pointer border border-[#ccc]  text-black w-fit rounded-full text-xl">
  <IoIosArrowBack />
    </div>
  </div>
</div>
</div>

<div className="top  flex justify-center my-20">
<div className="container w-full px-[140px]  max-xl:px-[20px]">
<div className="main text-start mb-6">
    <h1 className="font-medium text-2xl">Top international hotels!    </h1>
    <p className="text-[19px] text-gray-600 max-xl:hidden">Check out popular hotels across top destinations</p>
  </div>
  <div className="wrapper relative " >
    <div onClick={() => {
      re2.current.scrollBy(300,0)
    }} className="icon absolute right-[-20px] bg-white top-1/2 z-9 translate-y-[-50%] flex justify-center items-center p-2 cursor-pointer border border-[#ccc]  text-black w-fit rounded-full text-xl">
      <IoIosArrowForward />
    </div>
  <div ref={re2} className="wrapper overflow-x-hidden" style={{scrollBehavior:"smooth"}}>
  <div className="cards mt-7 flex gap-6 w-[2000px]">
  <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
  <Image className="absolute w-full h-full object-cover rounded-xl z-[-1]" src={"/section_two.png"} alt="" width={600} height={600} />
  <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
  <h1 className="font-semibold text-xl">Paris</h1>
      <p>Disneyland® Hotel (Including Park Access)</p>
    </div>
   </div>
   <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
   <Image className="absolute w-full h-full object-cover rounded-xl z-[-1] object-center" src={"/dupi.png"} alt="" width={600} height={600} />
   <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
   <h1 className="font-semibold text-xl">Dubai</h1>
      <p>Paramount Hotel Dubai</p>
    </div>
   </div>
   <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
   <Image className="absolute w-full h-full object-cover rounded-xl z-[-1]" src={"/hong_kong.png"} alt="" width={600} height={600} />
    <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
      <h1 className="font-semibold text-xl">Hong Kong</h1>
      <p>The Ritz-Carlton, Hong Kong</p>
    </div>
   </div>
   <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
   <Image className="absolute w-full h-full object-cover rounded-xl z-[-1]" src={"/section_two.png"} alt="" width={600} height={600} />
   <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
   <h1 className="font-semibold text-xl"> Paris</h1>
      <p>Disneyland® Hotel (Including Park Access)</p>
    </div>
   </div>
   <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
   <Image className="absolute w-full h-full object-cover rounded-xl z-[-1]" src={"/section_two.png"} alt="" width={600} height={600} />
   <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
   <h1 className="font-semibold text-xl">Paris</h1>
      <p>Disneyland® Hotel (Including Park Access)</p>
    </div>
   </div>
  </div>
  </div>
  <div onClick={() => {
      re2.current.scrollBy(-300 ,0)
    }} className="icon absolute left-[-20px] bg-white top-1/2 z-9 translate-y-[-50%] flex justify-center items-center p-2 cursor-pointer border border-[#ccc]  text-black w-fit rounded-full text-xl">
  <IoIosArrowBack />
    </div>
  </div>
</div>
</div>
<div className="top flex justify-center my-20 ">
<div className="container px-[140px]  w-full  max-xl:px-[20px]">
<div className="main text-start mb-6">
    <h1 className="font-medium text-2xl">Saudi's most popular hotels    </h1>
    <p className="text-[19px] text-gray-600 max-xl:hidden">Check out top hotels across great domestic destinations</p>
  </div>
  <div className="wrapper relative ">
    <div onClick={() => {
      re3.current.scrollBy(300,0)
    }} className="icon absolute right-[-20px] bg-white top-1/2 z-9 translate-y-[-50%] flex justify-center items-center p-2 cursor-pointer border border-[#ccc]  text-black w-fit rounded-full text-xl">
      <IoIosArrowForward />
    </div>
  <div ref={re3} className="wrapper overflow-x-hidden" style={{scrollBehavior:"smooth"}}>
  <div className="cards mt-7 flex gap-6 w-[2000px]">
  <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
  <Image className="absolute w-full h-full object-cover rounded-xl z-[-1]" src={"/im1.png"} alt="" width={600} height={600} />
   <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
   <h1 className="font-semibold text-xl">Makkah</h1>
      <p>voco Makkah, an IHG Hotel</p>
    </div>
   </div>
   <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
   <Image className="absolute w-full h-full object-cover rounded-xl z-[-1] object-center" src={"/im2.png"} alt="" width={600} height={600} />
   <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
   <h1 className="font-semibold text-xl">Jeddah</h1>
      <p>voco Makkah, an IHG Hotel</p>
    </div>
   </div>
   <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
   <Image className="absolute w-full h-full object-cover rounded-xl z-[-1]" src={"/im3.png"} alt="" width={600} height={600} />
   <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
   <h1 className="font-semibold text-xl">Riyadh</h1>
      <p>The Ritz-Carlton, Hong Kong</p>
    </div>
   </div>
   <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
   <Image className="absolute w-full h-full object-cover rounded-xl z-[-1]" src={"/im4.png"} alt="" width={600} height={600} />
   <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
   <h1 className="font-semibold text-xl">Al Khobr</h1>
      <p>Disneyland® Hotel (Including Park Access)</p>
    </div>
   </div>
   <div className="card relative h-[450px] w-[300px] max-xl:h-[236px] flex items-end justify-center max-xl:justify-start">
   <Image className="absolute w-full h-full object-cover rounded-xl z-[-1]" src={"/section_two.png"} alt="" width={600} height={600} />
   <div className="text p-[20px] text-center max-xl:text-start text-white bg-[#4a494914]">
   <h1 className="font-semibold text-xl">Paris</h1>
      <p>Disneyland® Hotel (Including Park Access)</p>
    </div>
   </div>
  </div>
  </div>
  <div onClick={() => {
      re3.current.scrollBy(-300 ,0)
    }} className="icon absolute left-[-20px] bg-white top-1/2 z-9 translate-y-[-50%] flex justify-center items-center p-2 cursor-pointer border border-[#ccc]  text-black w-fit rounded-full text-xl">
  <IoIosArrowBack />
    </div>
  </div>
</div>
</div>

<div className="top  flex justify-center my-20 max-xl:hidden">
 <div className="container px-[140px] flex justify-center">
<div className="specials flex justify-around gap-[40px]">
<div className="special ">
 <Image src={"/special1.svg"} className="h-13" alt="" width={45} height={45} />
 <h1 className="font-semibold my-[25px] text-[16px]">Choose from Over 1 Million Stays  </h1>
 <p className="text-[14px]">
  Book stays with Almosafer, from affordable stays to luxury accommodations! Compare rates and choose from over 1 million properties around the world with Almosafer.
  </p>
 </div>
<div className="special">
 <Image src={"/special2.svg"} className="h-13" alt="" width={45} height={45} />
 <h1 className="font-semibold my-[25px] text-[16px]">Quick and Easy Stay Search
 </h1>
 <p className="text-[14px]">
 Booking stays online in any destination is easy with Almosafer. Compare prices, amenities, and star rating and pick your favourite based on location,convenience, dining options and more.
</p>
 </div>
<div className="special">
 <Image src={"/special3.svg"} className="h-13" alt="" width={45} height={45} />
  <h1 className="font-semibold my-[25px] text-[16px]">Exclusive Choice of Stays at Affordable Prices
  </h1>
  <p className="text-[14px]">
  Browse affordable stays, compare rates and get the best deals with Almosafer.Book properties online and choose from affordable rates with special discounts at budget-friendly prices.

</p>
 </div>
<div className="special">
 <Image src={"/special4.svg"} className="h-13" alt="" width={45} height={45} />
 <h1 className="font-semibold my-[25px] text-[16px]">Book Stays at Your Own Comfort With Almosafer App
 </h1>
 <p className="text-[14px]">
 Download the Almosafer app for free on Google Play and the App Store and get access to the best stay deals right at your fingertips. Choose and book stays on the app in a few simple steps.

</p>
 </div>
</div>
 </div>
</div>

<div className="adv mt-[60px] flex justify-center  max-xl:hidden mb-0 ">
 <div className="container px-[140px] ">
 <div className="elements flex justify-around gap-[80px] p-[35px] px-0 pb-[0px]">
 <div className="title basis-[30%]">
    <h1 className="font-bold text-[36px] uppercase leading-[40px] mb-3">
    <span className="block">Get The</span> Almosafer app!
    </h1>
    <p>Our app has all your hotel needs covered: Secure payment channels, easy 4-step booking process, and sleek user designs. What more could you ask for?</p>
  </div>
  <div className="group flex gap-8 ">
  <div className="download text-center text-[23px] font-semibold">
    <h1>
    Available now
    </h1>
    <div className="apps mt-3">
      <Image src={"/appstore-icon.svg"} className="w-[120px]" alt="" width={30} height={30} />
      <Image src={"/google-play-icon.svg"} className="w-[120px] mt-3" alt="" width={30} height={30} />
    </div>
  </div>
  <div className="qr flex items-center">
  <Image src={"/qr.svg"} className="w-[120px]" alt="" width={30} height={30} />
  </div>
  </div>
  <div className="mobile relative z-[2]">
  <Image src={"/mob.svg"} className="w-[250px]" alt="" width={30} height={30} />
  </div>
 </div>
 </div>
</div>

<div className="look flex justify-center w-full py-[25px] max-xl:hidden">
<div className="container flex justify-center px-[100px] gap-[100px]">
  <div className="main">
    <h1 className="font-bold text-2xl">Looking for help ?</h1>
    <p className=" text-sm text-gray-800">Our team is available 24/7</p>
  </div>
  <div className="calls flex">
 <div className="call service flex gap-4 px-[40px]">
 <div className="icon">
      <Image src="call.svg" alt="" width={50} height={70} />
      </div>
     <div className="text">
     <h1 className="font-medium text-sm text-gray-600">Call us at:</h1>
     <h1 className="font-semibold text-xl">+966112199500    </h1>
     </div>
 </div>
 <div className="call service flex gap-4 px-[40px]">
 <div className="icon">
      <Image src="email.svg" alt="" width={50} height={70} />
      </div>
     <div className="text">
     <h1 className="font-medium text-sm text-gray-600">Or you can email us at::</h1>
     <h1 className="font-semibold text-xl">Support@gmail.com    </h1>
     </div>
 </div>
 <div className="call service flex gap-4 px-[40px]">
 <div className="icon">
      <Image src="whatsapp.svg" alt="" width={50} height={70} />
      </div>
     <div className="text">
     <h1 className="font-medium text-sm text-gray-600">Get support via WhatsApp:</h1>
     <h1 className="font-semibold text-xl">+966112199500    </h1>
     </div>
 </div>
  </div>
</div>
</div>

<div className="look_phone px-[20px] hidden max-xl:block my-7">
  <h1 className="text-2xl font-semibold mb-3">Need help</h1>
  <div className="socials">
  <div className="scoial_box gap-4 flex  items-center">
  <div className="icon">
<MdOutlineWhatsapp size={30} />
    </div>
   <div className="group border-b border-b-[#ccc] mb-3 flex gap-3 items-center justify-between w-full  px-[5px] py-[15px] ">
   <div className="text">
    <h1 className="text-[15px]">Whatsapp</h1>
    <p className="text-[14px] text-gray-600">01110343035</p>
    </div>
    <div className="next">
      <IoIosArrowForward color="#62becc" size={25} />

    </div>
   </div>
  </div>
  <div className="scoial_box gap-4 flex  items-center">
  <div className="icon">
<MdOutlineEmail size={30} />
    </div>
   <div className="group border-b border-b-[#ccc] mb-3 flex gap-3 items-center justify-between w-full  px-[5px] py-[15px] ">
   <div className="text">
    <h1 className="text-[15px]">Whatsapp</h1>
    <p className="text-[14px] text-gray-600">Support@gmail.com</p>
    </div>
    <div className="next">
      <IoIosArrowForward color="#62becc" size={25} />

    </div>
   </div>
  </div>
  <div className="scoial_box gap-4 flex  items-center">
  <div className="icon">
<CiPhone size={30} />
    </div>
   <div className="group border-b border-b-[#ccc] mb-3 flex gap-3 items-center justify-between w-full  px-[5px] py-[15px] ">
   <div className="text">
    <h1 className="text-[15px]">Whatsapp</h1>
    <p className="text-[14px] text-gray-600">01110343035</p>
    </div>
    <div className="next">
      <IoIosArrowForward color="#62becc" size={25} />

    </div>
   </div>
  </div>
  </div>
</div>

<div className="adv_phone hidden bg-[#E9F6F8]">
<Image src={"/logo.jpg"} alt="" width={120} height={120} className="rounded-md" />
<h1>Create an account and get exclusive benfits</h1>
<a
  className="inline-block rounded-full border border-[#0c9ab0] bg-[#0c9ab0] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:ring-3 focus:outline-hidden"
  href="#"
>
  Download
</a>
  <Image src={"/adv_phone.png"} alt="" width={120} height={120} className="rounded-md" />
</div>
<footer className="bg-white">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="text-teal-600">
          <Image src={"/logo.jpg"} alt="" width={120} height={120} className="rounded-md" />
        </div>

       
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Legal</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75">
                Hiring-3 Statistics
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p className="text-xs text-gray-500">&copy; 2025. Seifeldeen ALi. All rights reserved.</p>
  </div>
</footer>
 </div>
  );
}
