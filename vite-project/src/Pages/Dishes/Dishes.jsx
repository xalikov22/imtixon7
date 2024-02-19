import React, { useEffect } from 'react'

import Footer from '../../components/Footer'
import { FaStar } from 'react-icons/fa6'
import { FaPlusCircle } from 'react-icons/fa'
import useProduct from '../../app/zustan'

function Dishes() {
    const {loading, product, error, getProduct} = useProduct()

    useEffect(() => {
        getProduct()
    },[])
  return (

    <div>
        {
        loading ? <h1>Loading...</h1> : null
      }
      {
        error ? <h1>{error}</h1> : null
      }

      

        {product.length > 0 ? (
                  <div className="container">
                    <ul className='dishes__list flex flex-wrap w-full gap-5'>
                    {product.map((product,i) => (
                      <li key={i} className='dishes__itemm'>
                            
                            <div className='box dishes__item'>
                            <img src={product.avatar} alt="" />
                            <h2 className='text-[30px] desc'>{product.title}</h2>
                            <p className='flex gap-3 text'>{product.min} <FaStar className='iconnn'/> 4.9</p>
                            <div className='flex gap-[100px] items-center'>
                                <p className='text-[25px]'>{product.price}</p>
                                <FaPlusCircle className='plus__icon' />
                            </div>
                        </div>
                            
                      </li>
                    ))}
                  </ul>
                  </div>
                ) : null}

    </div>
  )
}

export default Dishes