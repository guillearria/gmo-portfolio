// POETRYDB SERVICES

// Fetch list of poem authors
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

// Fetch list of poem titles
export const fetchTitles = async (authorId) => {
    try {
        const response = await fetch(`https://poetrydb.org/${authorId}/title`);
        if (!response.ok) throw new Error(`Failed to fetch results: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching results: ${error}`);
        return null;
    }
};

// Fetch list of lines from a poem
export const fetchLines = async (titleId) => {
    try {
        const response = await fetch(`https://poetrydb.org/title/${titleId}/lines.json`);
        if (!response.ok) throw new Error(`Failed to fetch results: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching results: ${error}`);
        return null;
    }
};

// Fetch one random poem
export const fetchRandomPoem = async () => {
    try {
        const response = await fetch(`https://poetrydb.org/random/1`);
        if (!response.ok) throw new Error(`Failed to fetch results: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching results: ${error}`);
        return null;
    }
};