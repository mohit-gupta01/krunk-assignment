import React from 'react';
import { RxCross2 } from "react-icons/rx";

const data = [
    "Colour", "Size", "Brand", "Material"
];

const FilterTag = ({ item }) => {
    return (
        <div style={{ backgroundColor: "#F6F9FF", padding: "2px 10px", borderRadius: "5px", color: "#737373", display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", fontSize: "13px", fontWeight: "500" }}>
            <span>{item}</span>
            <RxCross2 />
        </div>
    );
};

const Filter = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: "#949494" }}>Select filters</span>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
                    <img src="/assets/filter.png" alt="" />
                    <span style={{ fontSize: "13px", color: "#666666" }}>Filter</span>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }}>
                <div style={{ backgroundColor: "#F6F9FF", padding: "0 10px", borderRadius: "5px", border: "#4C82EF 1px solid", color: "#4C82EF", display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", fontSize: "13px", fontWeight: "500" }}>
                    <span>Strap - Long</span>
                    <RxCross2 />
                </div>
                {data.map((item, index) => (
                    <FilterTag key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Filter;