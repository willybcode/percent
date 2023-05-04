import React from 'react'

function Result(props) {
  return (
    <div className='inline-block' >
        <div  className=' text-slate-200 bg-gray-800 font-semibold px-2 py-px outline-none whitespace-nowrap rounded-md w-28 h-7 overflow-x-auto  overflow-y-hidden'>
          {props.res}
        </div>
    </div>
  )
}

export default Result