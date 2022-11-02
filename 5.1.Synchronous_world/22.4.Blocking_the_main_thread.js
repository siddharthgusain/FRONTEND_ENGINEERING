function longer() {
    while (1);
}

longer(); // callstack is always accoupied with this function

console.log("I will not get printed to console as main thread where JS engine is running gets blocked")