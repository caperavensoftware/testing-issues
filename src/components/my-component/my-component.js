import {bindable, customElement, useShadowDOM, inject} from 'aurelia-framework';
@customElement('my-component')
@inject(Element)
export class MyComponent {
    element = null;

    @bindable someProperty;
    
    constructor(element) {
        this.element = element;
    }
}