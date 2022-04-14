import Link from "next/link";

const Header = () => {
  return (
    <section className="bg-indigo-800 py-4">
      <header className="container flex justify-between text-white font-semibold font-medium">
        {/* Logo */}
        <div>
          <Link href="/">
            <h2 className="font-bold text-2xl cursor-pointer">NavLogo</h2>
          </Link>
        </div>

        <ul className="flex space-x-4 text-lg">
          <li>
            <Link href="/user">
              <a>User</a>
            </Link>
          </li>

          <li>
            <Link href="/signin">
              <a>Signin</a>
            </Link>
          </li>

          <li>
            <Link href="/signup">
              <a>Signin</a>
            </Link>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Header;
