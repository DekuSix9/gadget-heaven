import BannerImg from "../../assets/Image/banner.jpg"

const Banner = () => {
    return (
        <div className=" max-w-[1400px] mx-auto">
           <div className=" bg-[#9538E2] h-[450px]">
            <div className=" text-center pt-10">
                <h1 className=" text-white   md:text-5xl font-bold md:leading-16">Upgrade Your Tech Accessorize with 
                     Gadget Heaven Accessories</h1>
                <p className=" text-white md:leading-6 font-light ">Explore the latest gadgets that will take your experience to the next level. From smart
                     devices to <br></br> the coolest accessories, we have it all!</p>
                     <button className=" bg-white text-[#9538E2] mt-6  rounded-3xl font-bold w-40 h-11 cursor-pointer">Shop Now</button>
            </div>
            
        </div>
        <div>
            <img src={BannerImg}></img>
        </div>
        </div>
       
    );
};

export default Banner;