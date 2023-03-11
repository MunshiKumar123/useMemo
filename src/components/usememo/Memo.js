import React, { useMemo, useState } from 'react'

function Memo() {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    const countHandle = () => {
        setCount(count + 1)
    }
    const countHandle1 = () => {
        setCount1(count1 + 1)
    }

    const isEven = useMemo(() => {
        console.warn("......")
        let i = 0;
        while (i < 2000000000) i++
        return count % 2 === 0
    }, [count])




    return (
        <>
            <div className='container mt-5'>
                <button type="button" onClick={countHandle} > count {count} </button>
                {isEven ? "even" : "odd"}
                <button type="button" onClick={countHandle1} > count1 {count1}</button>
            </div>
        </>
    )
}

export default Memo
