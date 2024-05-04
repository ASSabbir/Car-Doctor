// https://i.ibb.co/xMStq9C/parts.jpg
// https://i.ibb.co/1JGKNJk/person.jpg

const AboutUs = () => {
    return (
        <div className="hero h-auto ">
            <div className="hero-content p-0 flex-col lg:flex-row">
                <div className="flex-1 items-center relative  flex">
                    <div className="bg-[url(https://i.ibb.co/1JGKNJk/person.jpg)] rounded-lg w-[350px]  sm:w-[460px] h-[470px] bg-center bg-no-repeat bg-cover">

                        <div className="bg-[url(https://i.ibb.co/xMStq9C/parts.jpg)] bg-cover bg-no-repeat bg-center lg:h-[332px] lg:w-[327px] absolute md:right-[61px] border-[10px] border-white -bottom-[80px] rounded-lg ">

                        </div>
                    </div>
                </div>
                <div className="flex-1 p-6 justify-start space-y-[40px]">
                    <h1 className="font-bold text-xl text-primary ">About Us</h1>
                    <h1 className="text-5xl font-bold ">We are qualified<br></br> & of experience <br /> in this field</h1>
                    
                        <p className="grow">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    
                    <button className="btn  bg-primary border-primary text-white hover:bg-transparent hover:border-primary hover:text-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;