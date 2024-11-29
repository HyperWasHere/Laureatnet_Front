import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';
import { PostCreationComponent } from './post-creation/post-creation.component';
import { OfferPostCreationComponent } from './offer-post-creation/offer-post-creation.component';
import { ScientificArticlePostCreationComponent } from './scientific-article-post-creation/scientific-article-post-creation.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'comments', component: CommentsModalComponent },
  { path: 'create', component: PostCreationComponent },
  { path: 'create-offer', component: OfferPostCreationComponent },
  { path: 'create-sc', component: ScientificArticlePostCreationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
