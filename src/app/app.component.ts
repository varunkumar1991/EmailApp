import { MatChipList } from '@angular/material/chips';
import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { EmailValidator } from '@angular/forms';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';


// export interface Mail {
//   name:string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mailApp';
  public Editor = ClassicEditor;
  public config = { placeholder: 'Enter here'}

  // Recipient:string="null";
  // contactemail:any;
  // visible = true;
  // selectable = true;
  // removable = true;
  // addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // mails: Mail[] = [];

  ngOnInit()
  {
    console.log("njefbekj");
  }
  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.mails.push({name: value});
  //   }



  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // remove(onemail: Mail): void {
  //   const index = this.mails.indexOf(onemail);

  //   if (index >= 0) {
  //     this.mails.splice(index, 1);
  //   }
  // }


  // public onReady( editor:any ) {
  //   editor.ui.getEditableElement().parentElement.insertBefore(
  //       editor.ui.view.toolbar.element,
  //       editor.ui.getEditableElement()
  //   );
  // }
}
