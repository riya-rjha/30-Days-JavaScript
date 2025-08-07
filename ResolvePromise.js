// Sleep
// Write an asynchronous function to resolve a promise after given seconds

/**
 * Sleep for a given number of milliseconds.
 * @param {number} millis
 * @returns {Promise<void>}
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, millis);
    });
    // await new Promise(resolve => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t)
}) // 100

