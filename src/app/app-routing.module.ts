import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/ -> AboutComponent
// http://localhost:4200/ -> PostsComponent
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'posts', component: PostsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
