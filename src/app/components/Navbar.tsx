import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <nav className="py-16 lg:px-32 bg-gray-100 px-5 text-neutral-800  uppercase flex items-center justify-center">
                <div className="container text-center flex items-center justify-center">
                    <div>
                        {/* Header */}
                        <div>
                            <Link href={''}>       <h1 className="text-6xl transition-all ease-in-out duration-200 font-bold tracking-[15px] hover:text-cyan-600">FITRA MAULANA</h1></Link>
                            {/* <h1 className="text-6xl cursor-pointer transition-all ease-in-out duration-200 font-bold tracking-[15px] hover:text-cyan-600">FITRA MAULANA</h1> */}

                            <p className="pt-10 font-semibold tracking-[15px] text-gray-500">Web Developer</p>
                        </div>

                        {/* Navigation List */}
                        <div className="pt-10">
                            <ul className="flex justify-between items-center font-medium">
                                <li><Link href={'/home'} className="transition-all ease-in-out duration-200  hover:text-cyan-600">Home</Link></li>
                                <li><Link href={'/about'} className="transition-all ease-in-out duration-200  hover:text-cyan-600">About</Link></li>
                                <li><Link href={'/projects'} className="transition-all ease-in-out duration-200  hover:text-cyan-600">Projects</Link></li>
                                <li><Link href={'/contact'} className="transition-all ease-in-out duration-200  hover:text-cyan-600">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar