import React from 'react'

function Formula(props) {
  return (
    <div className='inline-block' >
        <div  className=' text-slate-200 bg-gray-800 font-semibold px-2 py-px outline-none whitespace-nowrap rounded-md max-w-[150px] h-7 overflow-x-auto overflow-y-hidden'>
          {props.frm}
        </div>
    </div>
  )
}

export default Formula