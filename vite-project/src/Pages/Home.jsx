import React from 'react'
import Hero from '../assets/img/Hero.svg'
import Hero2 from '../assets/img/herodesk.svg'
import Hero3 from '../assets/img/sr.svg'
import Chiken1 from '../assets/img/gril.mobile.svg'
import Star from '../assets/img/Star.svg'

import Foot1 from '../assets/img/Food1.svg'
import Foot2 from '../assets/img/Food2.svg'
import Foot3 from '../assets/img/Food3.svg'
import Like from '../assets/img/like.svg'
import Btn from '../assets/img/Btn.svg'
import Drr from '../assets/img/drr.svg'
import Btn1 from '../assets/img/Btn1.svg'
import Drr2 from '../assets/img/drr2.svg'
import Customer from '../components/customer/Customer'
import Footer from '../components/Footer'

// import Man from '../assets/img/man.png'
// import Stars from '../assets/img2/Stars.png'
// import Form from '../components/Form/Form'




const Home = () => {
  return (
    <>
        <header className='mt-[150px]'>
          <div className="container flex justify-center">
           <div className='flex w-full justify-between flex-col items-center sm:flex-row sm:items-start'>
           <div className='w-full flex flex-col items-center gap-[5px] mt-[57px] sm:items-start sm:w-[403.91px] xl:w-[568px]'>
              <div className='w-full flex justify-center items-center gap-[12.33px] sm:justify-start sm:text-[#c4c2c2]'>
                <span className='w-[33.29px] h-0 border border-[#201F1F] sm:border-[#c4c2c2]'></span>
                <p className=' font-semibold text-[9.25px] leading-[11.1px] xl:text-[15px] xl:leading-[18px] xl:text-[#201F1F33 ]'>OVER 1000 USERS</p>
              </div>
              <div className=' w-full flex flex-col gap-[15.7px] items-center sm:items-start'>
                <h1 className=' sm:hidden text-[46.24px] text-center font-semibold leading-[55.5px] sm:text-start'>
                Enjoy Foods <br /> Over <span className='text-[#6C5FBC]'>World</span>
                </h1>
                <h1 className='hidden sm:block text-[48.24px] xl:text-[70px] xl:leading-[90px] text-center font-semibold leading-[55.5px] sm:text-start'>
                Enjoy Foods All Over The <span className='text-[#6C5FBC]'>World</span>
                </h1>
                <p className=' roundxl:leading-[28px] xl:text-[18px] leading-[28px]  font-light xl:font-medium pp text-center text-[11.1px]  text-[#676767] sm:text-start sm:w-[354.84px] xl:w-[499px] sm:text-[12.8px]'>
                Eatly help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span className='text-[#6155AE]'>$20 bonus</span>.
                </p>
              </div>
              <button className='mt-[36.3px] w-[125px] h-[47.24px] rounded-[9.94px] text-white font-medium text-[13.03px] bg-[#6C5FBC] xl:w-[159px]'>Get Started</button>
            </div>
            <img className=' inline-block w-[286.37px] h-[256.6px] sm:w-[429px] sm:h-[384.41px] xl:hidden mt-[119.34px] sm:mt-0' src={Hero} alt="alt" />
            <img className='hidden xl:inline-block' src={Hero2} alt="alt" />
           </div>
          </div>
        </header>
        <main>
          <section id='first' className='w-full pt-[99px] pb-[54.7px] mt-[91.81px] lg:mt-[147.47px]'>
            <div className="container">
            <div className='flex  flex-col items-center sm:flex-row w-full pl-[9px] pr-[9px] gap-[60px] sm:justify-around'>
              <div className='text-center' >
                  <h2 className='text-[43.2px] leading-[54px] font-bold text-white mb-[10.8px]'>10K+</h2>
                  <p className='text-[14.4px] leading-[21.6px] font-medium text-[#C5BFED]'>Satisfied Costumers <br />
All Great Over The World </p>
              </div>
              <span className='w-full border border-[#C5C5C5] sm:h-[123px] sm:w-0'></span>
              <div className='text-center' >
                  <h2 className='text-[43.2px] leading-[54px] font-bold text-white mb-[10.8px]'>4M</h2>
                  <p className='text-[14.4px] leading-[21.6px] font-medium text-[#C5BFED]'>Healthy Dishes Sold <br />
                  Including Milk Shakes Smooth </p>
              </div>
              <span className='w-full border border-[#C5C5C5] sm:h-[123px] sm:w-0 '></span>
              <div className='text-center' >
                  <h2 className='text-[43.2px] leading-[54px] font-bold text-white mb-[10.8px]'>99.99%</h2>
                  <p className='text-[14.4px] leading-[21.6px] font-medium text-[#C5BFED]'>Reliable Customer Support <br />
                  We Provide Great Experiences </p>
              </div>
            </div>
            </div>
          </section>
          <section className='w-full flex justify-center mt-[67px] border-b'>
            <div className="container">
              <div className='w-full flex flex-col items-center md:items-center md:flex-row md:justify-between'>
                  <div className=' order-1 md:order-2 md:w-[398.23px] lg:items-start lg:w-[559.71px]'>
                    <p className='text-[30px] text-center font-semibold leading-[34.23px] mb-[37px] lg:text-start lg:text-[50.92px] lg:leading-[58.2px]'>Premium <span className='text-[#6C5FBC]'>Quality</span> <br /> For Your Health</p>
                    <div className='flex mb-[16px]'>
                      <li className='lorem text-[#676767]'></li>
                      <p className='text-[11.96px] font-normal text-[#676767] leading-[17.94px] lg:text-[20.33px] lg:leading-[30.5px]'>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</p>
                    </div>
                    <div className='flex'>
                      <li className='lorem text-[#676767]'></li>
                      <p className='text-[11.96px] font-normal text-[#676767] leading-[17.94px] lg:text-[20.33px] lg:leading-[30.5px]'>These foods promote overall wellness by support healthy digestion and boosting immunity</p>
                    </div>
                    <div className='w-full flex justify-center lg:justify-start mt-[35px]'>
                    <button className='w-[121.77px] flex items-center justify-center gap-[8.99px] text-[11.82px] font-medium leading-[14.78px] h-[41.24px] rounded-[9.61px] bg-[#6C5FBC] text-white lg:w-[186px] lg:h-[63px] lg:rounded-[14.68px] lg:text-[18.06px]'>Download <i class='bx bx-right-arrow-alt'></i></button>
                    </div>
                  </div>
                  <div className='w-full pb-[39px] md:w-[216.18px] md:h-[433.07px] lg:w-[304px] lg:h-[609px] flex justify-center mt-[109.74px] order-2 md:order-1'>
                    <img src={Hero3} alt="alt" />
                  </div>
              </div>
            </div>
            
          </section>

          <section className='sect border-b mb-[57.27px] lg:pt-[132px]'>
            <div className='container'>
              <img className='w-full' src={Chiken1} alt="alt" />
              <div className=' flex flex-col '>
                        <button className='lg:hidden w-[52.4px] h-[19.76px] rounded-[4.3px] bg-[#F7EDD0] text-[#DAA31A] text-[10.16px] font-normal leading-[15.24px]'>Healthy</button>
                        <div  className='shad p-[20px] w-full flex items-end justify-between  lg:pt-[30px] lg:pb-[35px]'>
                          <div className='lg:flex lg:gap-[170px]'>
                            <p className='text-[20.51px] font-semibold leading-[33.33px] text-[#323142] lg:text-[40px]'>The Chicken King</p>
                            <div className='flex items-center gap-x-[10px]'>
                              <p className='text-[15.38px] font-normal leading-[20.51px] lg:text-[26.98px] text-[#8E97A6]'>
                              24min •
                              </p>
                              <img className=' w-[34.98px]' src={Star} alt="alt" />
                              <p className='text-[15.38px] lg:text-[26.98px] font-normal  leading-[20.51px] text-[#8E97A6]'>
                                4.8
                              </p>
                            </div>
                          </div>
                          <button className='w-[31.89px] h-[31.89px] lg:w-[61.78px] lg:h-[61.78px] rounded-full bg-[#DBD9EE] '>
                          
                        
                          </button>
                        </div>
                    </div>
            </div>
          </section>
          <section>

     <div className=''>
     <div className='container  md: flex flex-wrap gap-4 md:pb-[10px] '>
                <h2 className=' text-center font-semibold w-full  text-[30px] leading-[36px]'>Our Top <br /> <span className=' text-[#6C5FBC]'>Dishes</span></h2>
              
             <div className='flex gap-12 md:pb-[25px] md:pl-[25px]'>



             <div className='cardshad w-[146.93px] h-[255.33px] mt-[61px] bg-[#F9F9F9]'>
                <img className='w-[131.56px] pt-[17.02px]' src={Foot1} alt="Foot" />
                <img className='bx' src={Like} alt="like" />                <button className=' text-[7.47px] font-normal lg:hidden leading-[11.21px] ml-[10px]  rounded-[1px] w-[40px] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
                        <div  className=''>
                          <div className=' w-full pl-[10px] '>
                            <p className=' font-semibold text-[15.28px] leading-[24.5px]'>Chicken Hell</p>
                            <div className=' flex '>
                              <p className='text-[11.31px] font-normal leading-[24.5px]'>
                              24min •
                              </p>
                              <img className=' w-[22.05px]' src={Star} alt="alt" />
                              <p className='text-[11.31px] font-normal leading-[24.5px]'>
                                4.8
                              </p>
                             </div>
                       <div className=' w-[130px] flex  gap-12'>
                       <p>$12.99</p> 
                          <button className=' incr '>+</button>
                       </div>
                   
                        
                          </div>
                       
                        </div>
              </div>
              <div className='cardshad w-[146.93px] h-[255.33px] mt-[61px] bg-[#F9F9F9]'>
                <img className='w-[131.56px] pt-[17.02px]' src={Foot1} alt="Foot" />
                <img className='bx' src={Like} alt="like" />
                <button className=' text-[7.47px] font-normal lg:hidden leading-[11.21px] ml-[10px]  rounded-[1px] w-[40px] text-[#FB471D] bg-[#F7EDD0]'>Trending</button>
                        <div  className=''>
                          <div className=' w-full pl-[10px] '>
                            <p className=' font-semibold text-[15.28px] leading-[24.5px]'>Swe Dish</p>
                            <div className=' flex '>
                              <p className='text-[11.31px] font-normal leading-[24.5px]'>
                              34min •                              </p>
                              <img className=' w-[22.05px]' src={Star} alt="alt" />
                              <p className='text-[11.31px] font-normal leading-[24.5px]'>
                                4.8
                              </p>
                             </div>
                       <div className=' w-[130px] flex  gap-12 '>
                       <p>$19.99</p> 
                          <button className=' incr '>+</button>
                          </div> 
                       </div>
                    </div>
                  </div>
              </div>


             <div className='flex gap-12  md:pl-[35px] md:mt-[18px]'>
<div className='cardshad w-[146.93px] h-[255.33px] mt-[41px] bg-[#F9F9F9]'>
   <img className='w-[131.56px] pt-[17.02px]' src={Foot1} alt="Foot" />
  <img className='bx' src={Like} alt="like" />
   <button className=' text-[7.47px] font-normal lg:hidden leading-[11.21px] ml-[10px]  rounded-[1px] w-[40px] text-[#309D5B] bg-[#F7EDD0]'>Supreme</button>
           <div  className=''>
             <div className=' w-full pl-[10px] '>
               <p className=' font-semibold text-[15.28px] leading-[24.5px]'>Chicken Hell</p>
               <div className=' flex '>
                 <p className='text-[11.31px] font-normal leading-[24.5px]'>
                 34min •
                 </p>
                 <img className=' w-[22.05px]' src={Star} alt="alt" />
                 <p className='text-[11.31px] font-normal leading-[24.5px]'>
                   4.8
                 </p>
                </div>
          <div className=' w-[130px] flex  gap-12'>
          <p>$19.99</p> 
             <button className=' incr '>+</button>
          </div>
      
           
             </div>
          
           </div>
 </div>
 <div className='cardshad w-[146.93px] h-[255.33px] mt-[41px] bg-[#F9F9F9] mb-[72px]'>
   <img className='w-[131.56px] pt-[17.02px]' src={Foot1} alt="Foot" />
  <img className='bx' src={Like} alt="like" />
   <button className=' text-[7.47px] font-normal lg:hidden leading-[11.21px] ml-[10px]  rounded-[1px] w-[40px] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
           <div  className=''>
             <div className=' w-full pl-[10px] '>
               <p className=' font-semibold text-[15.28px] leading-[24.5px]'>Chicken Hell</p>
               <div className=' flex '>
                 <p className='text-[11.31px] font-normal leading-[24.5px]'>
                 24min •
                 </p>
                 <img className=' w-[22.05px]' src={Star} alt="alt" />
                 <p className='text-[11.31px] font-normal leading-[24.5px]'>
                   4.8
                 </p>
                </div>
          <div className=' w-[130px] flex  gap-12'>
          <p>$12.99</p> 
             <button className=' incr '>+</button>
              </div>
             </div>
           </div>
         </div>
       </div>
       <div className='hidden gap-12  md:pl-[35px] md:mt-[18px] lg:flex'>
<div className='cardshad w-[146.93px] h-[255.33px] mt-[41px] bg-[#F9F9F9]'>
   <img className='w-[131.56px] pt-[17.02px]' src={Foot1} alt="Foot" />
  <img className='bx' src={Like} alt="like" />
   <button className=' text-[7.47px] font-normal lg:hidden leading-[11.21px] ml-[10px]  rounded-[1px] w-[40px] text-[#309D5B] bg-[#F7EDD0]'>Supreme</button>
           <div  className=''>
             <div className=' w-full pl-[10px] '>
               <p className=' font-semibold text-[15.28px] leading-[24.5px]'>Chicken Hell</p>
               <div className=' flex '>
                 <p className='text-[11.31px] font-normal leading-[24.5px]'>
                 34min •
                 </p>
                 <img className=' w-[22.05px]' src={Star} alt="alt" />
                 <p className='text-[11.31px] font-normal leading-[24.5px]'>
                   4.8
                 </p>
                </div>
          <div className=' w-[130px] flex  gap-12'>
          <p>$19.99</p> 
             <button className=' incr '>+</button>
          </div>
      
           
             </div>
          
           </div>
 </div>
 <div className='cardshad w-[146.93px] h-[255.33px] mt-[41px] bg-[#F9F9F9] mb-[72px]'>
   <img className='w-[131.56px] pt-[17.02px]' src={Foot1} alt="Foot" />
  <img className='bx' src={Like} alt="like" />
   <button className=' text-[7.47px] font-normal lg:hidden leading-[11.21px] ml-[10px]  rounded-[1px] w-[40px] text-[#DAA31A] bg-[#F7EDD0]'>Healthy</button>
           <div  className=''>
             <div className=' w-full pl-[10px] '>
               <p className=' font-semibold text-[15.28px] leading-[24.5px]'>Chicken Hell</p>
               <div className=' flex '>
                 <p className='text-[11.31px] font-normal leading-[24.5px]'>
                 24min •
                 </p>
                 <img className=' w-[22.05px]' src={Star} alt="alt" />
                 <p className='text-[11.31px] font-normal leading-[24.5px]'>
                   4.8
                 </p>
                </div>
          <div className=' w-[130px] flex  gap-12'>
          <p>$12.99</p> 
             <button className=' incr '>+</button>
              </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <hr />   

   </div>


          </section>


          <section className='tush border-b pb-[105.68px]'>
            <div className="container">
                    <div className='w-full flex flex-wrap justify-between gap-y-[100.6px]'>
                    <div className='flex flex-col items-start lg:w-[570.71px]'>
                        <p className='text-[#18181B] text-[30px] lg:text-[50.92px] lg:leading-[58.2px] leading-[34.22px] font-bold mb-[26.54px]'>
                        Control <span className='text-[#6C5FBC]'>Purchases</span> <br /> Via Dashboard
                        </p>
                       <div iv className='w-[228px] lg:pb-[10.01px] lg:w-[345.17px] flex flex-col gap-y-[9.94px] bb rounded-[7.95px] mb-[9.94px]'>
                          <div className='flex gap-[28.03px]'>
                            <div className='flex items-center w-[143.62px]  justify-between pl-[11.27px] lg:w-[217px]'>
                              <img className='w-[51.03px] h-[52.89px] lg:w-[77.26px] lg:h-[80.08px]' src={Foot1} alt="alt" />
                              <div>
                                <p className='text-[12.59px] text-[#323142] font-semibold lg:text-[19.06px] lean-[17.63px] mb-[2.55px]'>Chicken Hell</p>
                                <p className='text-[7.95px] font-medium leading-[11.13px] lg:text-[12.04px]'>On The Way</p>
                              </div>
                            </div>
                            <div className='flex items-end'><p className='text-[8.62px] text-[#ACADB9] leading-[12.06px] font-medium lg:text-[13.04px] '>3:09 PM</p></div>
                          </div>
                        </div>
                        <div iv className='w-[228px] lg:pb-[10.01px] lg:w-[345.17px]  flex flex-col gap-y-[9.94px] bb rounded-[7.95px] mb-[9.94px]'>
                          <div className='flex gap-[28.03px]'>
                            <div className='flex items-center w-[143.62px]  gap-x-[2.89px] pl-[11.27px] lg:w-[217px]'>
                              <img className='w-[51.03px] h-[52.89px] lg:w-[77.26px] lg:h-[80.08px]' src={Foot2} alt="alt" />
                              <div>
                                <p className='text-[12.59px] text-[#323142] font-semibold lg:text-[19.06px] lean-[17.63px] mb-[2.55px]'>Swe Dish</p>
                                <p className='text-[7.95px] font-medium leading-[11.13px] lg:text-[12.04px]'>Delivered</p>
                              </div>
                            </div>
                            <div className='flex items-end'><p className='text-[8.62px] text-[#ACADB9] leading-[12.06px] font-medium  lg:text-[13.04px]'>Yesterday</p></div>
                          </div>
                        </div>
                        <div iv className='w-[228px] lg:pb-[10.01px] lg:w-[345.17px]  flex flex-col gap-y-[9.94px] bb  rounded-[7.95px] mb-[9.94px]'>
                          <div className='flex gap-[28.03px]'>
                            <div className='flex items-center w-[143.62px]  justify-between pl-[11.27px] lg:w-[217px]'>
                              <img className='w-[51.03px] h-[52.89px] lg:w-[77.26px] lg:h-[80.08px]' src={Foot3} alt="alt" />
                              <div>
                                <p className='text-[12.59px] text-[#323142] font-semibold lg:text-[19.06px] lean-[17.63px] mb-[2.55px]'>Fish Hell Veg</p>
                                <p className='text-[7.95px] font-medium leading-[11.13px] text-[#F1534E] lg:text-[12.04px]'>Cancelled</p>
                              </div>
                            </div>
                            <div className='flex items-end'><p className='text-[8.62px] text-[#ACADB9] leading-[12.06px] font-medium  lg:text-[13.04px]'>Yesterday</p></div>
                          </div>
                        </div>
                    </div>
                    <div className='aa md:w-[379.73px] lg:w-[534px] lg:h-[466.46px] w-full p-[22.33px] h-[331.71px] rounded-[17.87px] pt-[32.39px] flex flex-col items-center'>
                        <div className='flex w-full justify-between  mb-[22.33px]'>
                          <p className='text-[20.1px] leading-[27.14px] font-extrabold'>Purchases</p>
                          <p className='flex items-center'>This month <i class='bx bx-chevron-down'></i></p>
                        </div>
                        <div className='w-full rounded-[11.16px] pb-[14.59px] border pt-[16.43px] items-center mb-[13.03px]'>
                          <div className='flex items-center w-full pl-[14.89px] pr-[14.89px] mb-[13.64px] justify-between'>
                            <div className='flex items-center'>
                              <img className='w-[29.77px] h-[29.77px] mr-[11.16px]' src={Btn} alt="alt" />
                              <div>
                                <p className='text-[11.16px] leading-[16.75px] font-extrabold'>Expense</p>
                                <p className='text-[9.3px] leading-[13.96px] font-medium text-[#A0AEC0]'>Increased By 10%</p>
                              </div>
                            </div>
                            <p className='text-[13.03px] font-extrabold leading-[19.54px]'>$409.00</p>
                          </div>
                          <div className='w-full pl-[14.89px] pr-[14.89px]'>
                            <img className='w-full' src={Drr} alt="alt" />
                          </div>
                        </div>
                        <div className='w-full rounded-[11.16px] pb-[14.59px] border pt-[16.43px] items-center'>
                          <div className='flex items-center w-full pl-[14.89px] pr-[14.89px] mb-[13.64px] justify-between'>
                            <div className='flex items-center'>
                              <img className='w-[29.77px] h-[29.77px] mr-[11.16px]' src={Btn1     } alt="alt" />
                              <div>
                                <p className='text-[11.16px] leading-[16.75px] font-extrabold'>Vocher Usage</p>
                                <p className='text-[9.3px] leading-[13.96px] font-medium text-[#A0AEC0]'>Increased By 5%</p>
                              </div>
                            </div>
                            <p className='text-[13.03px] font-extrabold leading-[19.54px]'>$45.78</p>
                          </div>
                          <div className='w-full pl-[14.89px] pr-[14.89px]'>
                            <img className='w-full' src={Drr2} alt="alt" />
                          </div>
                        </div>
                    </div>
                  </div>
            </div>
          </section>
          <section className='mt-[57px]'>
            <div className="container">
              <div className='w-full flex flex-col items-center'>
                        <h2 className=' text-center text-[30px] leading-[36px] font-semibold mb-[55px]'> <span className='text-[#6C5FBC]'>Customer</span> <br className='md:hidden' /> Say</h2>
                        <div className='rer w-full rounded-[10px] p-[22.64px]'>
                          


         < Customer/>
       
                 </div>
              </div>
            </div>
          </section>
          <section className='b mt-[115px] w-full'>
                      <div className="container ">
                        <div className='inpdiv  rounded-[15px] pt-[35.96px] w-full h-[256.97px] relative flex flex-col items-center gap-y-[15.92px]'>
                            <p className='md:text-[49px] md:pr-[439.38px] lg:pr-[850px] text-[41.45px] font-extrabold text-[#FFFFFF]'>
                            GET 50%
                            </p>
                            <div className='md:w-[312px] md:right-[169.38px] lg:absolute lg:top-[110px] lg:left-[90px] w-[260.29px] h-[48.08px] rounded-[9.26px] relative '>
                              <input type="email" className=' text-[10.58px] w-full h-full pl-[14.15px]  rounded-[9.26px]' placeholder='Email Address' />
                              <button className='text-[#F7F8FA] uppercase left-[170px] sm:left-[210.76px] top-[7.2px] absolute w-[86.09px] h-[34.76px] rounded-[7.32px] text-[9.59px] leading-[14.39px] font-medium bg-[#6C5FBC]'>
                              subscribe
                              </button>
                            </div>
                            <div className='w-full top-[189px] absolute flex justify-center'>
                                <img className=' sm:absolute sm:top-[-50px] lg:left-[200px] sm:left-[500px] lg:ml-[700px] md: w-[169.45px] h-[170.66px]' src={Foot1} alt="alt" />
                            </div>
                        </div>
                      </div>
          </section>
        </main>
       <Footer/>
    </>
  )
}

export default Home