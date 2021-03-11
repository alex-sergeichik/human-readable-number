module.exports = function toReadable(n) {
    const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

    if (n < 20) {
        return num[n];
    }

    const digit = n % 10;

    if (n < 100) {
        const ten = tens[Math.floor(n / 10) - 2];
        const unit = digit ? ` ${num[digit]}` : "";

        return `${ten}${unit}`;
    }

    const hundreds = num[Math.floor(n / 100)];
    const rest = n % 100 ? ` ${toReadable(n % 100)}` : "";

    return `${hundreds} hundred${rest}`;
}
