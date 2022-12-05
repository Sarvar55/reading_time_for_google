const containers = [...document.querySelectorAll("article,section")];

const headings = containers.map((container) => [
    ...document.querySelectorAll(":scope h1, h2, h3, h4, h5, h6"),
]);

const uniqueHeadings = new Set(headings);
const paragraphs = containers
    .map((container) => [...container.querySelectorAll(":scope p")])
    .flat();
const uniqueParagraphs = new Set(paragraphs);

const others = containers
    .map((container) => [...container.querySelectorAll(":scope code")])
    .flat();
const uniqueOthers = new Set(others);

const elements = [...uniqueHeadings, ...uniqueParagraphs, ...uniqueOthers];

if (elements) {
    const wordMatchRegExp = /[^\s]+/g;
    let wordsCount = 0;

    elements.forEach((element) => {
        const text = element.textContent;
        const words = text.matchAll(wordMatchRegExp);
        wordsCount += [...words].length;
    });
    console.log("🧮 Words count: ", wordsCount);

    const readingTimeInMinutes = Math.round(wordsCount / 250);
    const unit = readingTimeInMinutes > 1 ? "minutes" : "minute";
    console.log(`⏱️ ${readingTimeInMinutes} ${unit} read`);
}