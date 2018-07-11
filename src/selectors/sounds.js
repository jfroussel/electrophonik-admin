// getVisibleBooks
export default (sounds, { text, sortBy, startYear, endYear }) => {
    return sounds.filter(sound => {
        const textMatch =
            sound.title.toLowerCase().includes(text.toLowerCase()) ||
            sound.description.toLowerCase().includes(text.toLowerCase());

        const startYearMatch = typeof startYear !== 'number' || startYear <= sound.published;
        const endYearMatch = typeof endYear !== 'number' || sound.published <= endYear;

        return textMatch && startYearMatch && endYearMatch;
    }).sort((sound1, sound2) => {
        if (sortBy === 'title') {
            return sound1.title.localeCompare(sound2.title);
        } else if (sortBy === 'published') {
            return sound1.published < sound2.published ? -1 : 1;
        } else {
            return true
        }
    });
}