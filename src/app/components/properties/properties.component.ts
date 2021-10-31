import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

interface property {
  title: string;
  options?: any[];
  placeholder: string;
  value: string;
  type: string;
}

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  @Output() newProperties = new EventEmitter<string>();
  fbProperties: FormGroup = this.fb.group({
    properties: this.fb.array([]),
  });

  history: any[] = [];
  historyPosition: number = -1;
  propertiesControl: any[] = [];

  properties: property[] = [
    {
      title: 'Width',
      placeholder: 'An integer or a percent(0-1)',
      value: 'w',
      type: 'input',
    },
    {
      title: 'Height',
      placeholder: 'An integer or a percent(0-1)',
      value: 'h',
      type: 'input',
    },
    {
      title: 'Flip Axis',
      placeholder: 'Valores: h, v and hv',
      value: 'flip',
      options: ['h', 'v', 'vh'],
      type: 'select',
    },
    {
      title: 'Orientation',
      placeholder: 'Valores: 0, 1, 2, 3, 4, 5, 6, 7, 8, 90, 180, or 270',
      value: 'orient',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 90, 180, 270],
      type: 'select',
    },
    {
      title: 'Rotation',
      placeholder: 'Valores: del 0 a 360',
      value: 'rot',
      type: 'input',
    },
    {
      title: 'Brightness',
      placeholder: 'Valores: del -100 a 100',
      value: 'bri',
      type: 'input',
    },
    {
      title: 'Contrast',
      placeholder: 'Valores: del -100 a 100',
      value: 'con',
      type: 'input',
    },
    {
      title: 'Exposure',
      placeholder: 'Valores: del -100 a 100',
      value: 'exp',
      type: 'input',
    },
    {
      title: 'Gamma',
      placeholder: 'Valores: del -100 a 100',
      value: 'gam',
      type: 'input',
    },
    {
      title: 'Highlight',
      placeholder: 'Valores: del -100 a 0',
      value: 'high',
      type: 'input',
    },
    {
      title: 'Hue Shift',
      placeholder: 'Valores: del 0 a 360',
      value: 'hue',
      type: 'input',
    },
    {
      title: 'Invert',
      placeholder: 'Valores: true or false',
      value: 'invert',
      options: ['true', 'false'],
      type: 'select',
    },
    {
      title: 'Saturation',
      placeholder: 'Valores: del -100 a 100',
      value: 'sat',
      type: 'input',
    },
    {
      title: 'Shadow',
      placeholder: 'Valores: del 0 a 100',
      value: 'shad',
      type: 'input',
    },
    {
      title: 'Sharpen',
      placeholder: 'Valores: del 0 a 100',
      value: 'sharp',
      type: 'input',
    },
    {
      title: 'Unsharp Mask',
      placeholder: 'Valores: del -100 a 100',
      value: 'usm',
      type: 'input',
    },
    {
      title: 'Unsharp Mask Radius',
      placeholder: 'Valores: del 0 a 500',
      value: 'usmrad',
      type: 'input',
    },
    {
      title: 'Vibrance',
      placeholder: 'Valores: del -100 a 100',
      value: 'vib',
      type: 'input',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.orderArray();
  }
  addProperty() {
    this.propertiesArr.push(this.fb.group({ property: ['bri'], value: [''] }));
    this.changeInput(0, this.propertiesArr.length - 1);
  }
  deleteProperty(i: number) {
    this.propertiesArr.removeAt(i);
    this.updateURL();
  }

  changeInput(indexOption, index) {
    this.propertiesControl[index] = this.properties[indexOption];
    this.propertiesArr.controls[index]['controls']['value'].setValue('');
    this.updateURL();
  }

  get propertiesArr() {
    return this.fbProperties.get('properties') as FormArray;
  }

  get urlFormat() {
    let url = '?';
    this.propertiesArr.value.forEach((element) => {
      url += `${element.property}=${element.value}&`;
    });
    return url;
  }

  updateURL() {
    this.history.push(this.propertiesArr.value);
    this.historyPosition = this.history.length - 1;
    this.newProperties.emit(this.urlFormat);
  }

  orderArray() {
    this.properties.sort(function (a, b) {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }

  undo() {
    this.propertiesArr.patchValue(this.history[this.historyPosition - 1]);
    this.historyPosition--;
    this.newProperties.emit(this.urlFormat);
  }
  redo() {
    this.propertiesArr.patchValue(this.history[this.historyPosition + 1]);
    this.historyPosition++;
    this.newProperties.emit(this.urlFormat);
  }
}
