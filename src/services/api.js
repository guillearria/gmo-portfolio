export const fetchOzymandias = async () => {
    try {
        const response = await fetch("https://poetrydb.org/title/Ozymandias/lines.json");
        if (!response.ok) throw new Error(`Failed to fetch results: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching results: ${error}`);
        return null;
    }
};

// Fetch list of PoetryDB authors
export const fetchAuthors = async () => {
    try {
        const response = await fetch("https://poetrydb.org/author");
        if (!response.ok) throw new Error(`Failed to fetch results: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching results: ${error}`);
        return null;
    }
};

// Fetch list of PoetryDB authors
export const fetchTitles = async (author) => {
    try {
        const response = await fetch(`https://poetrydb.org/${author}/title`);
        if (!response.ok) throw new Error(`Failed to fetch results: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching results: ${error}`);
        return null;
    }
};