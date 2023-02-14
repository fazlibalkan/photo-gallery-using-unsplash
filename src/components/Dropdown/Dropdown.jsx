import "./Dropdown.css";
import React from "react";

function Dropdown({collections, selectedItem, setSelectedItem}) {

    const [dropdownOpen, setDropdownOpen] = React.useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClick = (collection) => {
        console.log("id:", collection[1]);
        setSelectedItem(collection);
        toggleDropdown();
    }

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>{selectedItem[0]}</button>
            {dropdownOpen&&
            <ul className="dropdown-content">
                {
                    collections.map((collection) => <li onClick={(item) => handleClick(collection)} className="dropdown-item">{collection[0]}</li>)
                }
            </ul>
            }

        </div>
    );
}

export default Dropdown;