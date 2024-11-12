/**
The primary objective of this code is to optimize performance by 
reducing the number of calls to a function when it's invoked with 
the same arguments multiple times.
*/
/**
 * @param {Function} fn - The function to be memoized.
 * @return {Function} - Returns a memoized version of `fn`.
 */
function memoize(fn) {
    // `cache` object to store previously computed results of `fn`
    let cache = {}

    // Return a new function that wraps the original function `fn`
    return function(...args) {
        // Convert the `args` array to a string to use as a cache key
        let n = JSON.stringify(args)

        // If the key exists in cache, return the cached result
        if (n in cache) {
            return cache[n]
        } else {
            // Otherwise, compute the result, store it in cache, and return the result
            let result = fn.apply(this, args)
            cache[n] = result
            return result
        }
    }
}
