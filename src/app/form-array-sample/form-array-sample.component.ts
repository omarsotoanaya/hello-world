import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array-sample',
  templateUrl: './form-array-sample.component.html',
  styleUrls: ['./form-array-sample.component.css']
})
export class FormArraySampleComponent {

  form = new FormGroup({
    topics: new FormArray([])
  });

  get topics(){
    // Explicit cast the topics property to a formArray in order to contain the formgroup.
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl){

    // Get the index of the list.
    let index = this.topics.controls.indexOf(topic);

    // Remove the got index from the list.
    this.topics.removeAt(index);

  }

}
