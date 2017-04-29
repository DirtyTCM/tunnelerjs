/**
 * Implements parser functionality.
 */
module.exports = (Debug) => {
    const module = {};

    /**
     * Returns whether a string has only whitelisted characters.
     */
    module.isSafe = (str) => {
        try {
            // Only the following characters are allowed.
            return /^[a-zA-Z0-9.?:!;><"`',\-=@ ]+$/.test(str);
        } catch (e) {
            Debug.print('Deciding wheter a string is safe failed.', 'PARSER ERROR');
            return false;
        }
    }

    /**
     * Returns a fully trimmed string.
     */
    module.trim = (str) => {
        try {
            // Lower case and no excess spaces.
            return str.replace(/\s+/g, ' ').toLowerCase().trim();
        } catch (e) {
            Debug.print('Trimming a string failed.', 'PARSER ERROR');
            return '';
        }
    }

    return module;
};
