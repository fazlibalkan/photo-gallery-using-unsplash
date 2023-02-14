import "./Navbar.css"
import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";
import React from "react";


function Navbar({res, setRes}) {

    let collections = [["Collections", "Collections"], ["Coronavirus COVID-19 pandemic", "9717149"], ["Watercolour", "9248817"], ["Iranians", "3493607"], ["Festive moments with friends", "9042806"]];
    let Access_Key = "u0SPlBEfged0T64-f13kbAH_Mro0BLx1hQhCkoxQqaE";

    const [searchText, setSearchText] = React.useState("İstanbul");
    const [selectedItem, setSelectedItem] = React.useState(["Collections", "Collections"]);


    const searchFunc = () => {
        console.log(searchText, selectedItem);
        fetchRequest();

    };

    const fetchRequest = async () => {
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${Access_Key}&collections=${selectedItem[1]}&per_page=18`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        setRes(result);
    };

    React.useEffect(() => {
            if (res[0]) {
                console.log(res[0]["urls"]["regular"]);
                console.log(res)

            } else {
                console.log(res)
            }
        }, [res]);

    return (
        <div className="navbar">
            <ul className="navbar-ul">

                <li className="navbar-li left"><img className="logo" src="./logo192.png" alt="image" /></li>
                <li className="navbar-li left"><Search searchText={searchText} setSearchText={setSearchText}/></li>

                <li className="navbar-li right search-button"><a onClick={searchFunc} href="#search">SEARCH</a></li>

                <li className="navbar-li right"><Dropdown collections={collections} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/></li>
            </ul>
        </div>
    );
}

export default Navbar;