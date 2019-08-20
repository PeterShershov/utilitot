export function isColor(color: string) {
    const option = new Option().style
    option.color = color
    return option.color === color
}
