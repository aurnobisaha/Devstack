import Logo from "../assets/logo-text.png";

const nav = () => {
    return (
        <nav className="text-[#FFFFFF]">
        <div className="container mx-auto px-6 mt-4 flex justify-between">
            <img src={Logo} alt=""/>
            <ul className="flex gap-4 items-center">
                <li className="text-[#DB2777]">Home</li>
                <li className="text-[#475569]">Technologies</li>
                <li className="text-[#475569]">Projects</li>
                <li className="text-[#475569]">About</li>
                <li className="text-[#475569]">Contact</li>
            </ul>

            <div className="flex gap-3 items-center">
                <button className="text-[#334155]">Sign In</button>
                <button className="text-[#FFFFFF] btn btn-secondary ">Sign Up</button>

            </div>
            
            
        </div>
        </nav>
    );
};

export default nav;
