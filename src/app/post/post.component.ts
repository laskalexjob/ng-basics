import { Post } from './../posts.service';
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //this.post = this.route.snapshot.data.post
    this.route.data.subscribe(data => {
      this.post = data.post
    })
    // this.route.params.subscribe((params: Params) => {
    //   console.log('Params', params);
    //   this.post = this.postsService.getById(+params.id)
    // })
  }

  loadPosts() {
    this.router.navigate(['/posts', 44])
  }
}
