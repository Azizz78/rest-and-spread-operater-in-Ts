function sum(name, ...num) {
    return {
        username: name,
        total: num.reduce((acc, val) => acc + val, 0)
    };
}
console.log(sum("aziz", 23, 234, 23, 23));
export {};
