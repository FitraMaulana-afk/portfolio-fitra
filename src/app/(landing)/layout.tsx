import Head from "next/head";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <html lang="en">
                <body className="font-poppins">

                    <Cursor />
                    <Navbar />
                    <main className="min-h-screen w-full bg-gray-100 font-poppins">{children}</main>
                </body>
            </html>
        </>
    )
}

export default RootLayout
