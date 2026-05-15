const CTAsection = () => {
    return (
        <div className="font-bricolage my-32">
            <div className="text-center">
                <p className="text-green text-[54px] leading-14">Academic success isn't just about <br /> attending classes.</p>
                <p className="text-gray-500 text-5xl">It's about passing exams.</p>
            </div>
            <div className="flex gap-4 justify-self-center my-8">
                <div className='bg-green w-fit px-4 text-center h-11 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer'>
                    <p className='text-white'>Start learning today</p>
                </div>
                <div className='border border-gray-300 w-fit px-4 text-center h-11 flex items-center justify-center rounded-3xl shadow-md transition-all hover:-mt-1 cursor-pointer'>
                    <p className='text-green'>Become a tutor</p>
                </div>
            </div>
        </div>
    );
}

export default CTAsection;