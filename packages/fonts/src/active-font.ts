export function activeFont(fontFamily: string, fontSize: string = '12px') {
    const fonts = fontFamily.split(',');

    // experimental APIs are not included
    // therefore `fonts.check` is not found on `Document` interface
    // https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/check
    return fonts.find(font => (document as any).fonts.check(`${fontSize} ${font}`));
}
