import Image from "next/image";
import * as img from "../app/images";
import "../app/globals.css";
import Link from "next/link";


export default function Header() {
    return (
        <>
            <header className="conteiner">
                <nav className="flex justify-between">
                    <Image
                        src={img.logo}
                        alt="Logo"
                        width={134}
                    />
                    <ul className="flex text-gray-500">
                        <li className="p-4">
                            <Link href="/">
                                Главная
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link href="/">
                                Полисы
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link href="/">
                                Происшествия
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link href="/">
                                Профиль
                            </Link>
                        </li>
                        <li className="p-4">
                            <Link href="/">
                                Семейное страхование
                            </Link>
                        </li>
                    </ul>
                    <Image src={img.sign_in} alt="Sign in" width={24}></Image>
                </nav>
            </header>
        </>
    );
}