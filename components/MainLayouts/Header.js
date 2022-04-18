import Link from "next/link";

const Header = () => {
  return (
    <section className="bg-indigo-800 py-4">
      <header className="container flex justify-between text-white font-medium">
        {/* Logo */}
        <div>
          <Link passHref href="/">
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
            <Link href="/auth">
              <a>Login</a>
            </Link>
          </li>

          <li>
            <Link href="/logout">
              <a className="px-3 py-2 border border-white rounded">Logout</a>
            </Link>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Header;
