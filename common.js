export const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1199
};

export const px = value => {
    if (value) {
        return typeof value === "number" ? value + "px" : value.length > 0 ? value : null;
    }
};

export const fr = n => (typeof n === "number" ? `repeat(${n}, 1fr)` : n);

export const breakpointWrapper = (name, value, func) => {
    if (!value) return null;
    let output = "";
    if (value.xs || value.sm || value.md || value.lg || value.xl) {
        if (value.xs && !(func && !func.call(null, value.xs))) {
            output += `${name}: ${func ? func.call(null, value.xs) : value.xs};`;
        }
        output += Object.keys(breakpoints)
            .map(
                bp =>
                    value[bp] &&
                    !(func && !func.call(null, value[bp])) &&
                    `@media (min-width: ${breakpoints[bp]}px) {
                        ${name}: ${func ? func.call(null, value[bp]) : value[bp]};
                    }`
            )
            .join("\n");
    } else {
        if (func && !func.call(null, value)) return null;
        output += `${name}: ${func ? func.call(null, value) : value};`;
    }
    return output;
};
