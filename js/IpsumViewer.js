import Template from './Template.js';

const template = new Template(({ title, author, category, authorUrl, publishedOn, body }) => {
    return `
    <h4>${title} by: ${author}</h4>
    <ul>
        <li>Category: ${category}</li>
        <li>Author: ${author}</li>
        <li><a href="${authorUrl}">Link to Work</a></li>
        <li>Published on: ${publishedOn}</li>
    </ul>
    <p class="bodyInfo">${body}</p>
    `;
});

export default class IpsumViewer {

    update(ipsum) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }
        
        this.section.appendChild(template.render(ipsum));
    }
    render() {
        this.section = document.createElement('section');
        let spanElement = document.createElement('span');
        spanElement.textContent = 'Please Choose a Document.';
        this.section.appendChild(spanElement);
        return this.section;
    }
}