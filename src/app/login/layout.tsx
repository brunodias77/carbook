import Image from "next/image";
import LoginImg from "../../../public/assets/01.jpg";


export default async function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-2 min-h-screen gap-8">
            <div className="bg-[url('/assets/01.jpg')] bg-cover bg-center bg-no-repeat" />
            <div className="p-4">{children}</div>
        </div>
    );
}