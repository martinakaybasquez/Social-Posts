import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SinglePostComponent } from "./components/single-post/single-post.component";
import { SocialPostsComponent } from "./components/social-posts/social-posts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SinglePostComponent, SocialPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Social-Posts';
}
