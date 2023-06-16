import React from "react";
import Card from "./Card";

const Cards = ({ cities, onClose }) => {

    return (
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
            {
                cities.length ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                        {
                            cities.map((c) => <Card 
                                key={c.id}
                                max={c.max}
                                min={c.min}
                                name={c.name}
                                img={c.img}
                                onClose={() => onClose(c.id)}
                                id={c.id}
                            /> )
                        }
                    </div>
                ) : (
                    <div>
                        <p></p>
                    </div>
                )
            }
        </div>
    )
};

export default Cards;