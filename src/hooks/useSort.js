import { useState } from "react";

const useSort = (data) => {
    const [sortkey, setSortkey] = useState("")
    const [ direction, setDirection] = useState("asc")
    
    const sortedData = [...data].sort((a,b) => {
        if (!sortkey) return data;

        const valueA = a[sortkey];
        const valueB = b[sortkey];
        
        if(valueA < valueB) return direction === "asc" ? -1 : 1;
        if(valueA > valueB) return direction === "asc" ? 1 : -1;
        return 0;

    });

    const sort = (key) => {
        const newDirection = sortkey === key && direction === "asc" ? "desc" : "asc";
        setSortkey(key);
        setDirection(newDirection);
    };

    return{ sortedData, sort, sortkey, direction};
    
};

 export default useSort;