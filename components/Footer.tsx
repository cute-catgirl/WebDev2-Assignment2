/*
    Written by: Phoebe Atuchina
    Date: 2026-10-27

    This is the footer shown at the bottom of the screen. It contains the school name and other important information about
    the school. The school email can also be clicked to quickly send a message (only in theory; in practice, it is a placeholder).
*/

const Footer = () => {
    return (
        <footer className="sticky bottom-0 border-t border-orange-200 bg-white">
            <div className="flex items-center justify-evenly w-[90%] mx-auto px-8 py-6">
                {/* location details */}
                <div>
                    <p className="px-2 text-sm text-olive-800">
                        New Generation High School
                    </p>
                    <p className="px-2 text-sm text-olive-400">
                        308 Negra Arroyo Lane, Albuquerque, New Mexico
                    </p>
                </div>
                {/* contact details */}
                <div>
                    <p className="px-2 text-sm text-olive-400">
                        +1 (570) 234-00-03
                    </p>
                    <a 
                        className="px-2 text-sm font-medium text-orange-500 hover:text-orange-800"
                        href="mailto:example@email.com"
                    >
                        contact@learn.nghs.ca
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;