import { AboutExtraComponent } from './about-extra/about-extra.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/posts -> PostsComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts/extra -> AboutComponent
const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'about', component: AboutComponent, children: [
            { path: 'extra', component: AboutExtraComponent }
        ]
    },
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: PostComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
