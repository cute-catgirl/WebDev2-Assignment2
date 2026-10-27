/*
    Written by: Phoebe Atuchina
    Date: 2026-10-27

    This is the navigation bar shown at the top of the screen. It contains the school name, as well as buttons that link to
    other parts of the page for easy navigation. The title is left-aligned and the buttons are right-aligned.
*/

const Navbar = () => {
    return (
        <header className="bg-white border-b border-orange-200">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-lg font-bold text-orange-950">New Generation High School</h1>
                <div>
                    <a className="text-s font-medium text-orange-500
                    hover:bg-orange-200 px-3 py-1 rounded-full hover:text-orange-800"
                    href="#overview">
                    Overview
                    </a>
                    <a className="text-s font-medium text-orange-500
                    hover:bg-orange-200 px-3 py-1 rounded-full hover:text-orange-800"
                    href="#students">
                    Students
                    </a>
                    <a className="text-s font-medium text-orange-500
                    hover:bg-orange-200 px-3 py-1 rounded-full hover:text-orange-800"
                    href="#addstudent">
                    Add a student
                    </a>
                </div>
            </div>
        </header>
    );
};
export default Navbar;