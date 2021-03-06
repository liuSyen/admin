import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { NgHeaderComponent } from './ng-header/ng-header.component';

import { IndexRouter } from '../router/index-router';
import { IntelligentAnalysisComponent } from './intelligent-analysis/intelligent-analysis.component';
import { IntelligentDecisionComponent } from './intelligent-decision/intelligent-decision.component';
import { IntelligentFeedbackComponent } from './intelligent-feedback/intelligent-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NgHeaderComponent,
    IntelligentAnalysisComponent,
    IntelligentDecisionComponent,
    IntelligentFeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IndexRouter,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
