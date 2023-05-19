import { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import urlService from "../../../Services/UrlService";

function Search(): JSX.Element {

    const [text, setText] = useState<string>('');
    const [serach, setSearch] = useState<string>('');

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setText(newValue);
    }

    const onClick = () => {
        setSearch(text);
        axios.get<any>(urlService.urls.books + serach)
            .then(res => res.data)
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.post<any>('http://www.hoppahii.com/whaever?q=' + serach)
            .then(res=>res.data)
            .catch(err=>console.log(err))
    }
        , [serach]);

    return (
        <div className="Search">
            <div>
                <input
                    type="text"
                    onChange={onChange}
                    placeholder="search for books" />
                <button onClick={onClick}>GO</button>
            </div>
        </div>
    );
}

export default Search;
