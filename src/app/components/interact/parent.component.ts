import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <h3>Count = {{ count }}</h3>
            <app-child (onIncrease)="count = count + 1"></app-child>
        </div>
    `
})

export class ParentComponent {
    count = 0;
}
