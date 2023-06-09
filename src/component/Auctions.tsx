import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'


const Auctions = () => {


  const auction = useSelector((state:any)=> state.Auction.auctions)
  return (
    <div className='flex gap-6 m-5 flex-wrap'>
      {auction.map((product: any,index:number)=>{
        // const {_id, title, description, photo, date, initialBid, duration, status, highestBid} = product
        return(
          <ProductCard key={index}  {...product }/>
        )
      })}
      {/* <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
  
      <ProductCard/> */}
    </div>
  )
}

export default Auctions
