interface ITestElementAttributes extends Record<string, unknown> {
    style?: Partial<CSSStyleDeclaration>;
    id?: string;
    className?: string;
}

function renderTestElement({ style = {}, id = 'test', className = '' }: ITestElementAttributes = {}) {
    const testElement = document.createElement('div');
    testElement.id = id;
    testElement.classList.add(className);

    for (const [rule, value] of Object.entries(style)) {
        testElement.style.setProperty(rule, value);
    }

    document.body.appendChild(testElement);

    return testElement;
}
