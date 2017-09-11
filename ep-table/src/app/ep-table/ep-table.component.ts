import { Component, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { createData } from './helpers';

@Component({
	selector: 'app-ep-table',
	templateUrl: './ep-table.component.html',
  styleUrls: ['./ep-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpTableComponent implements OnInit, AfterViewInit {

	@ViewChild('grid') grid;

		gridView: GridDataResult = {
			data: [],
			total: 0
		};

		data: {
			fields: string[];
			data: any[];
		};

		kendoGridState: State = {
			take: 30,
			skip: 0,
			sort: [],
			group: [],
			filter: null
		}

		constructor(
			private detector: ChangeDetectorRef
		) {}

		ngOnInit() {
			this.data = createData(5000, 30);
			this.renderData(false);
		}

		ngAfterViewInit() {
			this.grid
				.dataStateChange
				.asObservable()
				.subscribe(state => {
					//this.setKendoGridState(state);
				});
		}

		isLockedColumn(index: number) {
			if (this.data.fields.length < 5)
				return false;

			return index < 5;
		}

		setKendoGridState(state) {
      this.kendoGridState = state;
      this.renderData();
		}

		renderData(detect = true) {
      this.gridView = process(this.data.data, this.kendoGridState);
      detect && this.detector.markForCheck();
		}

		get minWidthTableContainer() {
			const fullWidth = window.innerWidth - 80,
				sumColumnsWidth = this.data.fields
					.map(column => 100)
					.reduce((prev, curr) => prev += curr);

			return sumColumnsWidth > fullWidth ? fullWidth : sumColumnsWidth;

		}

}
