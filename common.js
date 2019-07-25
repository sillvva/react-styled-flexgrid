export const breakpoints = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1199px"
};

export const px = value => {
    if (value) {
        if (value.xs || value.sm || value.md || value.lg || value.xl) {
            const output = { ...value };
            if (output.xs) output.xs = px(output.xs);
            if (output.sm) output.sm = px(output.sm);
            if (output.md) output.md = px(output.md);
            if (output.lg) output.lg = px(output.lg);
            if (output.xl) output.xl = px(output.xl);
            return output;
        }
        return typeof value === "number" ? value + "px" : value && value.length > 0 ? value : null;
    }
};

export const fr = n => (typeof n === "number" ? `repeat(${n}, 1fr)` : n);

export const breakpointWrapper = (name, value, func) => {
    if (!value) return null;
    let output = "";
    if (value.xs || value.sm || value.md || value.lg || value.xl) {
        if (value.xs && !(func && !func.call(null, value.xs))) output += `${name}: ${func ? func.call(null, value.xs) : value.xs};`;
        output += Object.keys(breakpoints)
            .map(
                bp =>
                    value[bp] &&
                    !(func && !func.call(null, value[bp])) &&
                    `@media (min-width: ${breakpoints[bp]}) {
                        ${name}: ${func ? func.call(null, value[bp]) : value[bp]};
                    }`
            )
            .join("\n");
    }
    else {
        if (func && !func.call(null, value)) return null;
        output += `${name}: ${func ? func.call(null, value) : value};`;
    }
    return output;
};
