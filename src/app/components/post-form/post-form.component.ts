import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  @Input() display:boolean = false;

  @Output() Submitted = new EventEmitter<Post>();

  canadianBacon:Post = {} as Post;

  submitPost(){
    let result:Post = {...this.canadianBacon}
    this.Submitted.emit(result)
  }
}
