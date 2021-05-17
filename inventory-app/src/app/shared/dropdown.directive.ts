import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    private isOpen = false;

    constructor(private el: ElementRef) {

    }

    @HostListener('click') 
    private toggleOpen() {
        console.log("clicked");
        this.isOpen = !this.isOpen;
        if(this.isOpen) {
            this.el.nativeElement.classList.add('toggle')
        } else {
            this.el.nativeElement.classList.remove('toggle')
        }
    }
}