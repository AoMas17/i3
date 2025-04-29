const MAX_TRAVELERS = 8;

/**
 * Checks if a traveler is a VIP.
 * A traveler is VIP if their full name contains both 'j' and 's' (case-insensitive).
 * @param {string} fullName - The full name of the traveler.
 * @returns {boolean} True if the traveler is VIP, false otherwise.
 */
function isVIP(fullName) {
    const lowerCaseName = fullName.toLowerCase();

    return lowerCaseName.includes("j") && lowerCaseName.includes("s");
}

/**
 * Adds a traveler to the list.
 * @param {string[]} travelers - The array of traveler full names.
 * @param {string} firstname - The first name of the traveler.
 * @param {string} lastname - The last name of the traveler.
 * @returns {boolean} True if the traveler was added, false otherwise.
 */
function addTraveler(travelers, firstname, lastname) {
    if (typeof firstname !== "string" || typeof lastname !== "string") {
        // console.log("Invalid name provided."); // Optional log
        return false;
    }

    const fullName = `${firstname} ${lastname}`;
    const vipStatus = isVIP(fullName);

    if (travelers.length < MAX_TRAVELERS) {
        travelers.push(fullName);
        // console.log(`Added traveler: ${fullName}`); // Optional log
        return true;
    } else if (vipStatus) {
        // Find the index of the last non-VIP traveler
        const lastNonVipIndex = travelers.findLastIndex(
            (traveler) => !isVIP(traveler),
        );

        if (lastNonVipIndex !== -1) {
            // console.log(`Removing non-VIP: ${travelers[lastNonVipIndex]} to make space for VIP: ${fullName}`); // Optional log
            travelers.splice(lastNonVipIndex, 1); // Remove the last non-VIP
            travelers.push(fullName); // Add the VIP at the end
            return true;
        } else {
            // console.log(`Cannot add VIP ${fullName}, all spots taken by VIPs.`); // Optional log
            return false; // All spots are taken by VIPs
        }
    } else {
        // console.log(`Cannot add non-VIP ${fullName}, trip is full.`); // Optional log
        return false; // Trip is full, and the new traveler is not VIP
    }
}

/**
 * Deletes the first occurrence of a traveler from the list.
 * @param {string[]} travelers - The array of traveler full names.
 * @param {string} firstname - The first name of the traveler to delete.
 * @param {string} lastname - The last name of the traveler to delete.
 * @returns {boolean} True if the traveler was deleted, false otherwise.
 */
function deleteTraveler(travelers, firstname, lastname) {
    if (typeof firstname !== "string" || typeof lastname !== "string") {
        return false;
    }

    const fullName = `${firstname} ${lastname}`;
    const indexToDelete = travelers.indexOf(fullName);

    if (indexToDelete !== -1) {
        travelers.splice(indexToDelete, 1);
        // console.log(`Deleted traveler: ${fullName}`); // Optional log
        return true;
    }

    // console.log(`Traveler not found: ${fullName}`); // Optional log
    return false;
}

module.exports = {
    addTraveler,
    deleteTraveler,
};