import { useState, useEffect } from "react";
import { fetchAuthors } from "../services/api";

function PoemAuthorList({ onSelectAuthor }) {
    const [authorList, setAuthorList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAuthors();
            if (data) {
                setAuthorList(data);
            } else {
                setError('Failed to load results');
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading authors...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Select your favorite author:</h2>
            <ul>
                {authorList.authors.map((authorName, index) => (
                    <li key={index}>
                        <button onClick={() => onSelectAuthor(authorName)}>
                            {authorName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PoemAuthorList;