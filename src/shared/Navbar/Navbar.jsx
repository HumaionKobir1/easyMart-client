import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import NavbarItems from "./NavbarItems";

const Navber = () => {
    return (
        <div className="fixed w-full bg-[#77153db2] z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <div className="container mx-auto">
                    <div className="flex flex-row items-center justify-between gap-3">
                        <Logo></Logo>
                        <NavbarItems></NavbarItems>
                        <MenuDropdown></MenuDropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;