import Social from "../../Shared/Social/Social";
import "./Footer.css";

function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
            <p>All rights reserved to Kobi {year} &copy;</p>
            <Social/>
        </div>
    );
}

export default Footer;
