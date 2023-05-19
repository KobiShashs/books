import "./Social.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
function Social(): JSX.Element {
    return (
        <div className="Social">
            <a href="#"><FaFacebook size={36} /></a>
            <a href="#"><FaLinkedin size={36} /></a>
        </div>
    );
}

export default Social;
