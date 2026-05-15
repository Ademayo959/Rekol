import logo from './assets/reekol-logo-bg.png'

const Navbar = () => {
    return (
        <div className='font-bricolage border-b border-gray-100'>
            <div className='max-w-7xl m-auto py-4 flex items-center justify-between'>
                <div className='cursor-pointer'>
                    <img src={logo} alt="logo" className='w-35' />
                </div>
                <div className='flex gap-6 text-gray-600'>
                    <p className='cursor-pointer'>Products</p>
                    <p className='cursor-pointer'>Solutions</p>
                    <p className='cursor-pointer'>Resources</p>
                </div>
                <div className='flex gap-4'>
                    <div className='border border-green-900 w-fit px-4 text-center h-9 flex items-center justify-center rounded-2xl cursor-pointer'>
                        <p className='text-green'>Log In</p>
                    </div>
                    <div className='bg-green w-fit px-4 text-center h-9 flex items-center justify-center rounded-2xl cursor-pointer'>
                        <p className='text-white'>Sign Up</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;