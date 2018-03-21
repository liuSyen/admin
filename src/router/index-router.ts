import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IntelligentAnalysisComponent} from '../app/intelligent-analysis/intelligent-analysis.component';
import {IntelligentFeedbackComponent} from '../app/intelligent-feedback/intelligent-feedback.component';
import {IntelligentDecisionComponent} from '../app/intelligent-decision/intelligent-decision.component';

const routes: Routes = [
  {path: '', component: IntelligentAnalysisComponent},
  {path: 'intelligent-feedback', component: IntelligentFeedbackComponent},
  {path: 'intelligent-decision', component: IntelligentDecisionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IndexRouter {
}



