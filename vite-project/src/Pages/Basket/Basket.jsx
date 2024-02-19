import React from 'react'
import useCount from '../../app/useConfige'
import './Basket.scss'
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

function Basket() {
  const { count, increment, decrement} = useCount()
  return (
    <div className='container'>


<div className='korzinka__block'>
              <div className='korzinka__left_block'>
                  <img src={Hero5} alt="img" width={90} height={100} />
                  <div>
                  <h2 className='korzinka__title'>Chicken Hell</h2>
                  <p className='korzinka__text'>$12.99</p>
                  </div>
              </div>

              <div className='korzinka__right'>
                  <button onClick={decrement} className='count__btn'><FaMinusCircle /></button>
                  <h2>{count}</h2>
                  <button onClick={increment} className='count__btn'><FaPlusCircle /></button>
              </div>
          </div>
    </div>
  )
}

export default Basket