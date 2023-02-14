import "./Grid.css";
import React from "react";

function Grid({res}) {

    return (
        <div className="grid">
            <div className="row">
                <div className="column">
                    {res.map((item, index) =>
                        index % 3 === 0 ?
                            <img src={item["urls"]["regular"]}/> :
                            null

                    )}
                </div>
                <div className="column">
                    {res.map((item, index) =>
                        index % 3 === 1 ?
                            <img src={item["urls"]["regular"]}/> :
                            null

                    )}
                </div>
                <div className="column">
                    {res.map((item, index) =>
                        index % 3 === 2  ?
                            <img src={item["urls"]["regular"]}/> :
                            null

                    )}
                </div>
            </div>
        </div>
    );
}

export default Grid;