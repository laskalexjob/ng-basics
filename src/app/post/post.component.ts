import { Post, PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('Params', params);
      this.post = this.postsService.getById(+params.id)
    })
  }

  loadPosts() {
    this.router.navigate(['/posts', 44])
  }
}
