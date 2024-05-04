// https://i.ibb.co/bK4Tw2J/1.jpg
// https://i.ibb.co/KXsGSKy/2.jpg
// https://i.ibb.co/80kdGBS/3.jpg
// https://i.ibb.co/ccXxk0g/4.jpg
// https://i.ibb.co/3k9zqSQ/5.jpg
// https://i.ibb.co/yy4pCcJ/6.jpg

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className='carousel-item bg-cover bg-center h-[600px] relative w-full bg-[url(https://i.ibb.co/3k9zqSQ/5.jpg)]'>

                <div className=" text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="w-full lg:w-1/2 p-3 md:p-[100px] space-y-8">
                        <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                        <p className="text-lg font-normal">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn  bg-primary border-primary text-white hover:bg-transparent hover:border-primary hover:text-primary">Discover More</button>
                            <button className="btn boder-2 border-white bg-transparent text-white hover:bg-primary hover:border-primary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute   flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-3 gap-2">
                        <a href="#slide4" className="btn btn-circle bg-white bg-opacity-30 border-none text-white hover:bg-primary text-xl">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-white bg-opacity-30 border-none text-white hover:bg-primary text-xl">❯</a>
                    </div>
                </div>
            </div>
            {/* slide 2  */}
            <div id="slide2" className='carousel-item bg-cover bg-center h-[600px] relative w-full bg-[url(https://i.ibb.co/ccXxk0g/4.jpg)]'>

                <div className=" text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="w-full lg:w-1/2 p-3 md:p-[100px] space-y-8">
                        <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                        <p className="text-lg font-normal">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn  bg-primary border-primary text-white hover:bg-transparent hover:border-primary hover:text-primary">Discover More</button>
                            <button className="btn boder-2 border-white bg-transparent text-white hover:bg-primary hover:border-primary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute   flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-3 gap-2">
                        <a href="#slide1" className="btn btn-circle bg-white bg-opacity-30 border-none text-white hover:bg-primary text-xl">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-white bg-opacity-30 border-none text-white hover:bg-primary text-xl">❯</a>
                    </div>
                </div>
            </div>
            {/* slide 3  */}
            <div id="slide3" className='carousel-item bg-cover bg-center h-[600px] relative w-full bg-[url(https://i.ibb.co/80kdGBS/3.jpg)]'>

                <div className=" text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="w-full lg:w-1/2 p-3 md:p-[100px] space-y-8">
                        <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                        <p className="text-lg font-normal">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn  bg-primary border-primary text-white hover:bg-transparent hover:border-primary hover:text-primary">Discover More</button>
                            <button className="btn boder-2 border-white bg-transparent text-white hover:bg-primary hover:border-primary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute   flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-3 gap-2">
                        <a href="#slide2" className="btn btn-circle bg-white bg-opacity-30 border-none text-white hover:bg-primary text-xl">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-white bg-opacity-30 border-none text-white hover:bg-primary text-xl">❯</a>
                    </div>
                </div>
            </div>
            {/* slide 4  */}
            <div id="slide4" className='carousel-item bg-cover bg-center h-[600px] relative w-full bg-[url(https://i.ibb.co/yy4pCcJ/6.jpg)]'>

                <div className=" text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="w-full lg:w-1/2 p-3 md:p-[100px] space-y-8">
                        <h1 className="text-6xl font-bold">Affordable Price For Car Servicing</h1>
                        <p className="text-lg font-normal">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn  bg-primary border-primary text-white hover:bg-transparent hover:border-primary hover:text-primary">Discover More</button>
                            <button className="btn boder-2 border-white bg-transparent text-white hover:bg-primary hover:border-primary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute   flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-3 gap-2">
                        <a href="#slide3" className="btn btn-circle bg-white bg-opacity-30 border-none text-white hover:bg-primary text-xl">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-white bg-opacity-30 border-none text-white hover:bg-primary text-xl">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;