import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() title: string;

  @Output() clickEmitter = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  clickEmit() {
    this.clickEmitter.emit();
  }
}
