import {expect} from 'chai';
import 'aurelia-polyfills';
import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
import {MyComponent} from './../../../src/components/my-component/my-component';

describe('MyComponent Tests', function() {
    var myComponent;

    beforeEach(function() {
        // myComponent = new MyComponent ({});
        myComponent = StageComponent
            .withResources('./../../../src/components/my-component/my-component')
            .inView('<my-component some-property.bind="name"></my-component>')
            .boundTo({name: 'component1'})
    });

    afterEach(function() {
       myComponent.dispose();
    });
    
    it('constructor', function() {
        myComponent.create(bootstrap).then(() => {
            expect(myComponent.element).to.not.be.null;
        })
    });
});