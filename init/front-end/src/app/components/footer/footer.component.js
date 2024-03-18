import template from "./footer.component.html";
import "./footer.component.css";

export class FooterComponent extends HTMLElement{
    // gather parameters from URL
    constructor() {
        super();
        this.innerHTML = template;
    }
}







