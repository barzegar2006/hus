import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count1, setCount1] = useState(0)
    const targetNumber1 = 120

    useEffect(() => {
        const interval = setInterval(() => {
            setCount1(prevCount => {
                if (prevCount < targetNumber1) {
                    return prevCount + 1
                } else {
                    clearInterval(interval)
                    return prevCount
                }
            });
        }, 45);

        return () => clearInterval(interval)
    }, [targetNumber1])


    const [count2, setCount2] = useState(0)
    const targetNumber2 = 500

    useEffect(() => {
        const interval = setInterval(() => {
            setCount2(prevCount => {
                if (prevCount < targetNumber2) {
                    return prevCount + 1
                } else {
                    clearInterval(interval)
                    return prevCount
                }
            });
        }, 10);

        return () => clearInterval(interval)
    }, [targetNumber2])

    return (
        <div className='d-flex py-5 counter'>
            <div className='border py-2 px-4 boxCounter'>
                <span className='text-danger fs-4 fw-bold px-2'>{count1}</span>
                <span className='text-secondary'>Buildings</span>
            </div>
            <div className='border py-2 px-4 mx-3 boxCounter' >
                <span className='text-danger fs-4 fw-bold px-2'>{count2}+</span>
                <span className='text-secondary'>Clients</span>
            </div>
        </div>
    );
};

export default Counter;
