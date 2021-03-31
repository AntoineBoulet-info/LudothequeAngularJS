import { Component, OnInit } from '@angular/core';
import {RatingModule} from 'primeng/rating';
import {CommentService} from '../_services/comment.service';
@Component({
  selector: 'app-comment',
  template: `
    <div class="container pb-cmnt-container" >
      <div class="row" style="display: flex; justify-content: center; align-items: center; margin-top: 3%">
        <div class="col-md-6 col-md-offset-3">
          <div class="panel panel-info">
            <div class="panel-body">
              <textarea style="width: 500px" placeholder="Write your comment here!" class="pb-cmnt-textarea"></textarea>
              <p-rating [(ngModel)]="val"></p-rating>
              <form class="form-inline">
                <input class="inputVal" type="submit">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
      .pb-cmnt-container {
        font-family: Lato;
        margin-top: 100px;
      }

      .pb-cmnt-textarea {
        resize: none;
        padding: 20px;
        height: 130px;
        width: 100%;
        border: 1px solid #F2F2F2;
      }

      .inputVal {
        border: none;
        border-radius: 0;
        color: #fff !important;
        font-size: 16px;
        outline: none;
        padding: 12px 20px;
        background: #2fb8f8;
        text-decoration: none !important;
        display: inline-block;
        margin: 5px;
        border-radius: 10px;
      }

      .inputVal:hover {
        background-color: #82D0F6;
        color: white;
      }
    </style>
  `,
  styles: [
  ]
})
export class CommentComponent implements OnInit {
  val: number;

  constructor() {
  }

  ngOnInit(): void {
    // this.service.postComment(this.val,)
  }






}
