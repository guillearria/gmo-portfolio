export const fetchOzymandias = async () => {
    try {
        const response = await fetch("https://poetrydb.org/title/Ozymandias/lines.json");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Fetch error: ${error}`);
        return {}
    }
}