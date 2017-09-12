import { Directive, NgZone, ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[appOutsideEvents]'
})
export class OutsideEventsDirective
	implements OnInit, OnDestroy {

	@Input() event = 'click';
	@Output() appOutsideEvents = new EventEmitter();

	private handler: Function;

	constructor(private ngZone: NgZone, private el: ElementRef) {}

	ngOnDestroy() {
		this.el.nativeElement.removeEventListener(this.event, this.handler);
	}

	ngOnInit() {
		this.ngZone.runOutsideAngular(() => {
			this.handler = $e => this.appOutsideEvents.emit($e);
			this.el.nativeElement.addEventListener(this.event, this.handler);
		});
	}
}
