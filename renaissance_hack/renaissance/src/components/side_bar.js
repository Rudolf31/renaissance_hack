

export default function SideBar() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-5">
                Оформить полис онлайн
            </h2>
            <ul className="max-w-80 text-purple-950">
                <li>
                    <button className="flex justify-between min-w-60 text-xl font-semibold p-5 pl-14 bg-gray-100 rounded-3xl w-full mb-3">
                        ОСАГО
                        <span>ᐳ</span>
                    </button>
                </li>
                <li>
                    <button className="flex justify-between min-w-60 text-xl font-semibold p-5 pl-14 bg-gray-100 rounded-3xl w-full mb-3">
                        Каско
                        <span>ᐳ</span>
                    </button>
                </li>
                <li>
                    <button className="flex justify-between min-w-60 text-xl font-semibold p-5 pl-14 bg-gray-100 rounded-3xl w-full mb-3">
                        ДМС
                        <span>ᐳ</span>
                    </button>
                </li>
                <li>
                    <button className="flex justify-between min-w-60 text-xl font-semibold p-5 pl-14 bg-gray-100 rounded-3xl w-full mb-3">
                        Путешествие
                        <span>ᐳ</span>
                    </button>
                </li>
                <li>
                    <button className="flex justify-between min-w-60 text-xl font-semibold p-5 pl-14 bg-gray-100 rounded-3xl w-full mb-3">
                        Ипотека
                        <span>ᐳ</span>
                    </button>
                </li>
                <li>
                    <button className="flex justify-between min-w-60 text-xl font-semibold p-5 pl-14 bg-gray-100 rounded-3xl w-full mb-3">
                        Квартира
                        <span>ᐳ</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}