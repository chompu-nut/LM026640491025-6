export default function AppMenu() {
    return (
        <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">ร้านยาสนุมไพร</a>
                </li>
                <li>
                    <a href="createCard" className="text-gray-900 dark:text-white hover:underline">หน้าเเรก</a>
                </li>
                <li>
                    <a href="/cards/MyCards" className="text-gray-900 dark:text-white hover:underline">เพิ่มข้อมูลยาสนุมไพร</a>
                </li>
                <li>
                    <a href="myScluptureList" className="text-gray-900 dark:text-white hover:underline">ข้อมูลยาสมุนไพร</a>

                </li>
            </ul>
        </div>
    </div>
</nav>
    )
}

