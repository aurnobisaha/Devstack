import BannerImg from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className='min-h-[400px] my-20 flex justify-center items-center'>
            <section className='container mx-auto px-27'>
                <div className='flex items-center justify-between'>
                    <div className='w-1/2'>
                    <h1 className='text-5xl font-bold'>Build Your Ideal<br />
<div className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</div></h1>
<p className='mt-4 text-[#475569]'>Explore frontend, backend, database, and tooling options,<br />
compare them side by side, and put together the stack that fits your <br />
next project.</p>
<div className='flex gap-4 mt-6'>
    <button className='btn btn-active btn-secondary bg-[linear-gradient(to_right,#FF5722,#D81B7E,#7C3AED)]'>Explore Technologies</button>
<button className='btn text-[#475569]'>Learn More</button>
</div>

</div>
<div className='w-1/2'>
<img src={BannerImg}alt="Banner"/>
</div>
                </div>
            </section>

            
        </div>
    );
};

export default Banner;