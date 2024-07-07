import TopBar from "./TopBar"

const Navbar = () => {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]
  return (
    <header>
        <TopBar />
        <nav className="flex justify-between items-center py-10 px-24">
            <div className="text-3xl">7-Hidden Layers</div>
            <div className="">
                <ul className="flex ">
                    {navItems.map((item, index) => (
                        <li key={index} className="mx-5 cursor-pointer hover:scale-110"> {item.name} </li>
                    ))}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar