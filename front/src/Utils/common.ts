export const range = (min: number, max: number): number[] =>
    Array(max - min + 1)
        .fill(0)
        .map((_, i) => min + i);

export const chunk = <T,>(arr: T[], size: number): T[][] => (
    arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), [] as T[][])
);