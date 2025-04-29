/**
 * Displays the destinations and their costs.
 * @param {Map<string, number>} destinations - The map of destinations.
 */
function displayDestinations(destinations) {
    if (
        !destinations ||
        !(destinations instanceof Map) ||
        destinations.size === 0
    ) {
        console.log("No destination is available.$");
        return;
    }

    destinations.forEach((cost, name) => {
        console.log(`${name}: ${cost}$`);
    });
}

/**
 * Adds a new destination to the map if valid and not already present.
 * @param {Map<string, number>} destinations - The map of destinations.
 * @param {string} name - The name of the destination.
 * @param {number} cost - The cost of the trip (must be > 0).
 * @returns {boolean} True if added, false otherwise.
 */
function addDestination(destinations, name, cost) {
    if (
        typeof name !== "string" ||
        name === null ||
        typeof cost !== "number" ||
        cost <= 0 ||
        destinations.has(name)
    ) {
        return false;
    }

    destinations.set(name, cost);
    return true;
}

/**
 * Removes a destination from the map.
 * @param {Map<string, number>} destinations - The map of destinations.
 * @param {string} name - The name of the destination to remove.
 * @returns {boolean} True if removed, false otherwise.
 */
function removeDestination(destinations, name) {
    return destinations.delete(name);
}

/**
 * Returns an array of destination names sorted by cost in ascending order.
 * @param {Map<string, number>} destinations - The map of destinations.
 * @returns {string[]} An array of destination names sorted by cost.
 */
function getDestinationsInOrder(destinations) {
    if (!destinations || !(destinations instanceof Map)) {
        return [];
    }

    const sortedEntries = Array.from(destinations.entries()).sort(
        (a, b) => a[1] - b[1],
    );

    return sortedEntries.map((entry) => entry[0]);
}

module.exports = {
    displayDestinations,
    addDestination,
    removeDestination,
    getDestinationsInOrder,
};