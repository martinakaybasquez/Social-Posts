import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostFormComponent } from '../post-form/post-form.component';
import { SinglePostComponent } from '../single-post/single-post.component';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [PostFormComponent, SinglePostComponent, SocialPostsComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
  AllPosts: Post[] = [
    {title: "LOST", thought: "???????? the more I learn, the less I know ???????? "},
    {title: "SAD", thought: "I'm sad because I'm lost"},
    {title: "HUNGRY", thought: "I didn't mukbang during lecture today *tears*"},
    {title: "MY BACK HURTS", thought: "I think I have a herniated disk because this stupid dining chair"},
  ];

}
