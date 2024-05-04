import axios from 'axios';
import  { useEffect, useState } from 'react';
import Service from './service';

const Services = () => {
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        axios.get('/services.json')
        .then(data=>setDatas(data.data))
        .catch(error=>{
            console.log(error)
        })

    },[])
    console.log(datas)
    return (
        <div className='flex flex-col items-center'>
            <div className='text-center space-y-5'>
                <h1 className="font-bold text-xl text-primary ">Service</h1>
                <h1 className="text-5xl font-bold ">Our Service Area</h1>

                <p className="grow">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            </div>
            <div className='grid grid-cols-3 gap-6 my-[50px]'>
                {datas.map(data=><Service key={data._id} data={data}></Service>)}
            </div>
            <button className="btn border-2 w-[170px] border-primary bg-transparent text-primary hover:bg-primary hover:border-primary hover:text-white duration-300">More Services</button>

        </div>
    );
};

export default Services;