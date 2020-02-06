import React from "react";

export default function StrainCard(props) {
    return (
        <section className='strains'>
            <h1>{props.item.name}</h1>
        </section>
    )
}