//inspired by http://davidwalsh.name/javascript-polling
// just a promise instead of defer version.
// The polling function
export default function poll(fn, interval = 1000, timeout = Number.MAX_SAFE_INTEGER) {
    const endTime = +new Date() + timeout;
    return new Promise(function p(resolve, reject) {
        if(fn()) {
            resolve();
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if ( +new Date() < endTime) {
            setTimeout(p, interval);
        }
        // Didn't match and too much time, reject!
        else {
            reject(new Error('timed out for ' + fn + ': ' + arguments));
        }
    });
}
