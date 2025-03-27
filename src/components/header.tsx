import { Link } from "react-router-dom";

const Header = () => {
  return <header>
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2">
        <Link to={"/"}>
            <img src="/logo.png" alt="Klimate Logo" className="h-14" />
        </Link>
    </div>

    <div>
        {/* search */}
        {/* theme toggle */}
    </div>
  </header>
}

export default Header;