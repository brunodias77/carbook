import Image from "next/image";
import DogsFooter from "../../public/assets/logo3.svg";

const Footer = () => {
    return (
        <footer className="bg-gray-900 p-12 h-40 text-center text-white">
            <Image src={DogsFooter} alt="Descrição da imagem" className="mx-auto" color="black" height={50} width={50} />
            <p className="mt-4">Carbook, alguns direitos reservados</p>
        </footer>
    );
};

export default Footer;