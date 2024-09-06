import React from 'react'


export type SalesProps = {
    name: string,
    email: string,
    saleAmount: string,
}

export default function SalesCard(props: SalesProps) {
  return (
    <div className='flex justify-between flex-wrap gap-3'>
      <section className='flex justify-between gap-3'>
        <div className='h-12 w-12 bg-gray-100 p-1 rounded-full'>
          <img
            src={`https://api.dicebear.com/9.x/shapes/svg?seed=${props.name}&radius=50&backgroundColor=transparent,ffdfbf,ffd5dc,f88c49,f1f4dc,d1d4f9,c0aede,b6e3f4,69d2e7,0a5b83,1c799f&shape1[]&shape1Color[]&shape2[]&shape2Color[]&shape3[]&shape3Color[]`}
            alt="avatar"
            width={48}
            height={48}
            
          />
        </div>
        <div className='text-sm'>
          <p>{props.name}</p>
          <div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400'>
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.saleAmount}</p>
    </div>
  )
}
