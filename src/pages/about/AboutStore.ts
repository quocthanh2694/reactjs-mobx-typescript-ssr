import * as React from 'react';
import { action, computed, observable } from 'mobx';
import * as $ from 'jquery';
export default class AboutStore {

    @observable count = 0;

    constructor() {
        console.log('inti about store1', this.count);
    }

    init() {
        console.log('inti aboutSstore11');

        $.get("demo_test.asp", function (data: any, status: any) {
            console.log('demo test responsed about store');
            console.log("about store Data: " + data + "\nStatus: " + status);
        });
    }

    @action
    increaseCount = () => {
        this.count++;
        console.log("AboutStore -> this.count", this.count)
    }

    // @computed
    // get fullName(): string {
    //     return `${this.firstName} ${this.lastName}`;
    // }

    // @action
    // setFirstName = (value: string) => {
    //     this.firstName = value;
    // };

}

