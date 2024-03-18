import template from "./navbar.component.html";
import "./navbar.component.css";

export class NavbarComponent extends HTMLElement{
    // gather parameters from URL
    constructor() {
        super();
        this.innerHTML = template;
    }
}







