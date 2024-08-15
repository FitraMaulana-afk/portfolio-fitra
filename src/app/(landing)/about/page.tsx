"use client"

import Image from "next/image"

const AboutPage = () => {
    return (
        <>
            <div className="font-poppins flex flex-col items-center justify-center lg:px-56">
                <div className="container flex items-center justify-center ">
                    <div className="w-1/2">

                        <Image
                            src="/images/myfoto/fitra.png"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                    <div className="w-1/2">

                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur iusto officia modi tempore vitae nam voluptatum doloremque earum reiciendis! Quo laudantium, quisquam nobis cumque, voluptatum dignissimos natus beatae odio ullam nam deleniti, at consectetur doloremque ipsam velit qui recusandae assumenda facere autem repellat praesentium voluptatem odit! Doloremque id aut in laborum voluptatem odio soluta repellendus vitae aliquid ex atque, alias dolorem maiores non laboriosam reprehenderit quam officiis fuga tenetur sapiente quibusdam! Explicabo recusandae maxime odit rerum quos, omnis fugiat nam obcaecati labore magnam eveniet culpa sit repudiandae soluta deleniti non esse architecto qui facere atque, quaerat, quas quidem! Dicta obcaecati sint
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage