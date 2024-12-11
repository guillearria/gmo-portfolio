import { useState, useEffect } from "react";
import { fetchOzymandias } from "../services/api";

function Poetry() {
    const [poem, setPoem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchOzymandias();
            if (data) {
                setPoem(data);
            } else {
                setError('A poem refuses to take flight. Lost in the ether, out of sight.')
            }
            setIsLoading(false);
        };

        fetchData();
    }, []); // Empty dependency array == runs once component mounts

    if (isLoading) {
        return <div>A poem stirs...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {poem[0].lines.map((line, index) => (
                <div key={index} className="poem-lines">
                    {line}
                </div>
            ))}
        </div>
    );
}

export default Poetry;