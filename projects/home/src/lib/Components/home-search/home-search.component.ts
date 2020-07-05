import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'lib-home-search',
    templateUrl: './home-search.component.html',
    styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent {
    @Output() search = new EventEmitter<string>();

    searchFilter(text: string): void {
        this.search.emit(text);
    }
}
