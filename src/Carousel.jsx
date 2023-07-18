import { shortList, list, longList } from './data';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Carousel = () => {
    const [ personList, setPersonList ] = useState(list);
    const [ currentPerson, setCurrentPerson ] = useState(0);

    const nextBtnHandler = () => {
        const nextPerson = (currentPerson + 1) % personList.length;
        setCurrentPerson(nextPerson);
    }

    const prevBtnHandler = () => {
        const len = personList.length
        const prevPerson = ((currentPerson - 1) % len + len) % len;
        console.log('prev-person : ', prevPerson);
        setCurrentPerson(prevPerson);
    }


    //setInterval(nextBtnHandler, 3000);




    return (
        <div className="w-9/12 mx-auto h-96 flex flex-row items-center justify-between">
            <button type='button' onClick={prevBtnHandler}>
                <FaArrowLeft size='30px' className='fill-violet-500 z-10'/>
            </button>
            <div className='relative w-full h-full top-0 overflow-hidden'>
                {personList.map((item)=>{
                    const {id, image, name, title, quote } = item;
                    const translateAmount = 100*((id-1) - currentPerson);
                    console.log('translateamount: ', translateAmount)
                    const translateString = `translateX(${translateAmount}%)`
                    return (
                        <div key={id} style={{transform: `${translateString}`}} className={`flex flex-col items-center w-full mx-auto absolute z-0`}>
                            <img className='w-48 h-48 rounded-full object-cover border-4 border-violet-200 shadow-lg shadow-slate-900/5 mb-4' src={image} alt={name}/>
                            <h3 className='uppercase text-violet-500 text-xl tracking-wide'>{name}</h3>
                            <h5 className='mb-8 capitalize'>{title}</h5>
                            <p className='text-center text-slate-500'>{quote}</p>
                        </div>
                    );
                })}
            </div>
            <button type='button' onClick={prevBtnHandler} className='fill-violet-500'>
                <FaArrowRight size='30px' className='fill-violet-500 z-10' onClick={nextBtnHandler}/>
            </button>
        </div>
    );
}

export default Carousel;