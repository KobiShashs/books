import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <a href="/about">About</a>
            <a href="/search">Search</a>
            <a href="/history">History</a>
        </div>
    );
}

export default Menu;
