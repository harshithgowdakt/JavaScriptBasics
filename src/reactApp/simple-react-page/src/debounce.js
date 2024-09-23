import React, { useEffect, useState } from "react"


const Debounce = () => {
    let [searchTerm, setSearchTerm] = useState('');
    let [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);


    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);


    useEffect(() => {
        if (debounceSearchTerm) {
            performSearch(debounceSearchTerm);
        }
    }, [debounceSearchTerm]);

    const performSearch = (term) => {
        console.log(`Performing search for: ${term}`);
        // Add API call or search logic here
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}>
            </input>
        </div>
    )
}

export default Debounce;