import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  @Input() display:boolean = false;

  @Output() Submitted = new EventEmitter<Post>();

  submitPost(){
    // this.Submitted.emit(this.Pos)
  }
}
