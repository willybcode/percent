import {React, useState, useEffect} from 'react'
import QuesSvg from '../parts/QuesSvg'
import InputField from '../parts/InputField'
import Result from '../parts/Result'
import Formula from '../parts/Formula'

function Mode7() {

    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [res, setRes] = useState("")

    const formula = 'A / (B / 100)'
    const [tip, setTip] = useState(false)
    const [frm, setFrm] = useState(null)
    let temp_res = ''

    function calc(ga, gb) {
        const A = ga
        const B = gb
        let R = ''
        R = parseFloat((A / (B / 100)).toFixed(10))
        if (isNaN(R) || !isFinite(R)) 
            R = ''
        return R

    }

    useEffect(() => {
        temp_res = calc(a, b)
        setRes(temp_res)
        if (!(temp_res === '')) {
            let fm = '' + a + '/(' + b + '/100)=' + temp_res
            setFrm(fm)
        } else {
            setFrm(null)
        }
    }, [a, b])

    return (
        <div
            className='bg-gray-900/70  hover:bg-sky-900/70 hover:ring-2 transition-all duration-1000  rounded-xl relative h-52 w-80 p-3 text-slate-100 font-semibold m-2 overflow-hidden'>
            <div onClick={() => setTip(!tip)} className=' absolute z-10'>
                <QuesSvg/>
            </div>
            <div
                className={`  absolute inset-0 text-white ${ !tip && ' -translate-x-96 translate-y-96 '}  transition-all duration-1000 hover:bg-slate-950  bg-slate-600 p-3  flex justify-center    rounded-xl`}>
                <span className='flex items-center'>
                    <span className='flex flex-col items-center'>
                        <span className='mx-2'>Formula :
                        </span><Formula frm={formula}/>
                    </span>
                    <span className={`${ !frm && 'hidden'} ml-5 flex flex-col items-center`}>

                        <span className='mx-2 '>Result :
                        </span><Formula frm={frm}/>
                    </span>
                </span>
            </div>
            <div className='flex flex-col h-5/6 mt-6 justify-between'>

                <span className='flex  space-x-4 items-center justify-center mt-6 mb-5 '>

                    <InputField
                        ch={(e) => {
                            setA(parseFloat(e.target.value))
                        }}
                        ph='A'/>
                    <span>/
                    </span>
                    <span className='mr-4'><InputField
                        ch={(e) => {
                setB(parseFloat(e.target.value))
            }}
                        ph='B'/>
                        %
                    </span>
                </span>
                <span className='flex flex-row w-full'>
                    <span className='mr-3 inline-block'>Answer:</span>
                    <Result res={res}/>
                </span>
            </div>

        </div>
    )
}

export default Mode7