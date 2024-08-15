"use client"

import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaGit, FaGithub, FaHome, FaInstagram } from "react-icons/fa"

export default function HomePage() {
    return (
        <>
            <title>Home</title>

            <div className="font-poppins flex flex-col items-center justify-center lg:px-56">
                <div className="container grid grid-cols-3 items-center justify-center gap-6">
                    <Link href={''} className="flex flex-col rounded-md hover:shadow-2xl hover:p-5 hover:bg-white transition-all ease-in-out duration-300 p-4  items-center justify-center">
                        <Image
                            src="/images/icon/react.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={200}
                            height={200}
                            priority
                        />
                        <p className=" font-medium text-lg">React Js</p>
                    </Link>
                    <Link href={''} className="flex flex-col hover:shadow-2xl hover:p-5 hover:bg-white transition-all ease-in-out duration-300 items-center justify-center">
                        <Image
                            src="/images/icon/php.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={200}
                            height={200}
                            priority
                        />
                        <p className=" font-medium text-lg">Php Native</p>
                    </Link>
                    <Link href={''} className="flex flex-col hover:shadow-2xl hover:p-5 hover:bg-white transition-all ease-in-out duration-300 items-center justify-center">
                        <Image
                            src="/images/icon/js.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={200}
                            height={200}
                            priority
                        />
                        <p className=" font-medium text-lg">Java Script</p>
                    </Link>
                    <Link href={''} className="flex flex-col hover:shadow-2xl hover:p-5 hover:bg-white transition-all ease-in-out duration-300 items-center justify-center">
                        <Image
                            src="/images/icon/laravel.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={200}
                            height={200}
                            priority
                        />
                        <p className=" font-medium text-lg">Laravel</p>
                    </Link>
                </div>
                <div className="flex items-center justify-center py-20 gap-14">
                    <FaInstagram className="w-10 h-auto" />
                    <FaFacebook className="w-10 h-auto" />
                    <FaGithub className="w-10 h-auto" />
                </div>
            </div>
        </>
    )
}
