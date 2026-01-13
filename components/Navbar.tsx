import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/icons/jesus-resurrected.jpg"
            alt="logo"
            width={36}
            height={36}
          />
          <p className="text-4px">Catholic Church Of Resurrection</p>
        </Link>

        <ul>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Mass</Link>
          <Link href="/">Photo Gallery</Link>
          <Link href="/">Contact us</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
