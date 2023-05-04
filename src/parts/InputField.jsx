import React from 'react'

function InputField(props) {
  return (
    <div className='inline-block mx-1'>
        <input type='number' min={0} value={props.val} placeholder={props.ph}  onChange={props.ch} className='bg-slate-200 text-center text-gray-800 font-semibold md:pl-2 py-2 outline-none rounded-md w-20 focus:ring-2  focus:ring-blue-500'/>
    </div>
  )
}

export default InputField