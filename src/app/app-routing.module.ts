import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent} from './component/about-us/about-us.component'
import { BooksComponent} from './component/books/books.component';
import { ContactUsComponent} from './component/contact-us/contact-us.component';

const routes: Routes = [
  { path: "", component: AboutUsComponent },
  // { path: "about", component: AboutUsComponent },
  { path: "books", component: BooksComponent },
  { path: "contact", component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
