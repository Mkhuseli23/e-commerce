import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'Contact Us';
  email: string = 'sphokazij@gmail.com';
  phone: string = '0987654321';
}
