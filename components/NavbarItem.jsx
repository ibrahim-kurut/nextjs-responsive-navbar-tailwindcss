import Link from 'next/link';

const NavbarItem = () => {
    const items = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Browse",
            url: "/browse"
        },
        {
            name: "Details",
            url: "/details"
        },
        {
            name: "Streams",
            url: "/streams"
        },
        {
            name: "profile",
            url: "/profile"
        }
    ]
    return (
        <div>
            {
                items.map((item, i) => {
                    return (
                        <Link key={i} href={item.url} className="block lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 py-2">
                            {item.name}
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default NavbarItem




