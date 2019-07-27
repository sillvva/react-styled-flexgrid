export const breakpoints = {
    xs: 0,
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

export const breakpointWrapper = (name, value, func, ...additionalArgs) => {
    if (value == null && name !== "display") return null;
    let output = "";
    if (additionalArgs.length > 0) {
        const keys = [];
        [value, ...additionalArgs].forEach(
            v =>
                v &&
                Object.keys(v).forEach(k => {
                    if (!keys.find(key => key === k)) keys.push(k);
                })
        );
        if (keys.length > 0) {
            if (typeof value !== "object") {
                const v = value == null ? null : value;
                value = {};
                keys.forEach(k => {
                    value[k] = v;
                });
            }
            additionalArgs = additionalArgs.map(aa => {
                if (typeof aa !== "object") {
                    const v = aa;
                    aa = {};
                    keys.forEach(k => {
                        aa[k] = v;
                    });
                }
                return aa;
            });
        } else {
            if (name === "display" && value == null) {
                value = true;
            }
        }
    }
    if (value && (value.xs !== undefined || value.sm !== undefined || value.md !== undefined || value.lg !== undefined || value.xl !== undefined)) {
        output += Object.keys(breakpoints)
            .map(bp => {
                return value[bp] !== undefined && !(func && func(...[value[bp], ...additionalArgs.filter(a => a[bp])]) == null)
                    ? `${bp !== "xs" ? `@media (min-width: ${breakpoints[bp]}px) {` : ""}
                        ${name}: ${func ? func(...[value[bp], ...additionalArgs.map(a => a[bp])]) : value[bp]};
                        ${bp !== "xs" ? `}` : ""}`
                    : "";
            })
            .join("\n")
            .trim();
    } else {
        if (func && !func(...[value, ...additionalArgs.filter(a => typeof a !== "object")])) return null;
        output += `${name}: ${func ? func(...[value, ...additionalArgs.filter(a => typeof a !== "object")]) : value};`;
    }
    return output;
};