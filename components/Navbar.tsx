/*
    Written by: Phoebe Atuchina
    Date: 2026-10-27

    This is the navigation bar shown at the top of the screen. It contains the school name, as well as buttons that link to
    other parts of the page for easy navigation. The title is left-aligned and the buttons are right-aligned.
*/

const Navbar = () => {
    return (
        // <header className="bg-white border-b border-orange-200" style={headerStyle}>
        <header className="sticky top-0 w-full border-b border-orange-200 bg-white">
            <div className="flex items-center justify-between flex-wrap w-[90%] mx-auto px-6 py-4 ">
                <h1 className="text-lg font-bold text-orange-950">
                    New Generation High School
                </h1>
                <div className="flex justify-evenly w-90">
                    <a 
                        className="px-3 py-1 text-sm font-medium rounded-full text-orange-500 bg-orange-50 hover:underline hover:text-orange-800 hover:bg-orange-200 transition cursor-pointer"
                        href="#overview"
                    >
                    Overview
                    </a>
                    <a 
                        className="px-3 py-1 text-sm font-medium rounded-full text-orange-500 bg-orange-50 hover:underline hover:text-orange-800 hover:bg-orange-200 transition cursor-pointer"
                        href="#students"
                    >
                    Students
                    </a>
                    <a 
                        className="px-3 py-1 text-sm font-medium rounded-full text-orange-500 bg-orange-50 hover:underline hover:text-orange-800 hover:bg-orange-200 transition cursor-pointer"
                        href="#addstudent"
                    >
                    Add a student
                    </a>
                </div>
            </div>
        </header>
    );
};
export default Navbar;