/*
    Written by: Phoebe Atuchina
    Date: 2026-10-27

    This is the footer shown at the bottom of the screen. It contains the school name and other important information about
    the school. The school email can also be clicked to quickly send a message (only in theory; in practice, it is a placeholder).
*/

const footerStyle: React.CSSProperties = {
  position: "fixed",
  left: "0",
  bottom: "0",
  display: 'block',
  width: '100%',
}

const Footer = () => {
    return (
        <footer className="bg-white border-t border-orange-200" style={footerStyle}>
            <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
                <p className="text-sm text-olive-800 px-2">
                    New Generation High School
                </p>
                <p className="text-sm text-olive-400 px-2">308 Negra Arroyo Lane, Albuquerque, New Mexico</p>
                <p className="text-sm text-olive-400 px-2">+1 (570) 234-00-03</p>
                <a className="text-sm font-medium text-orange-500 px-2
                hover:text-orange-800"
                href="mailto:example@email.com">
                contact@learn.nghs.ca
                </a>
            </div>
        </footer>
    );
};

export default Footer;