import BannerImg from "../../assets/Image/banner.jpg";

const Banner = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="bg-[#9538E2] h-[450px]">
                <div className="text-center pt-10">
                    <h1 className="text-white md:text-5xl font-bold md:leading-14">
                        Upgrade Your Tech Accessorize with 
                        Gadget Heaven Accessories
                    </h1>
                    <p className="text-white md:leading-6 font-light">
                        Explore the latest gadgets that will take your experience to the next level. From smart
                        devices to <br /> the coolest accessories, we have it all!
                    </p>
                    <button className="bg-white text-[#9538E2] mt-6 rounded-3xl font-bold w-40 h-11 cursor-pointer">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="relative">
                <img 
                    src={BannerImg} 
                    alt="Banner"
                    className="w-full md:w-[950px] lg:w-[950px] mx-auto h-auto max-w-none md:relative md:bottom-32 rounded-2xl"
                />
            </div>
            <div className=" flex justify-center items-center text-4xl font-bold mb-5"><h1>Explore Cutting-Edge Gadgets</h1></div>
        </div>
    );
};

export default Banner;
