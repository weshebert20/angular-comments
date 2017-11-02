import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	editMode = false;

	newComment = {
		text: '',
		author: '',
		editMode: false
	};


  comments = [
      	{
      	text: 'first comment!',
      	author: 'Wes',
      	editMode: false
  		},
  		{
      	text: 'nice work!',
      	author: 'Brad',
      	editMode: false
  		},
  		{
      	text: 'I would also like to congratulate you!',
      	author: 'Kelly',
      	editMode: false
  		},
  ]

 addComment() {
 	this.comments.push(this.newComment);
 	this.newComment = {
 		text: '',
		author: '',
		editMode: false
 	}    
  }

  deleteComment(comment){
  	for(let i=0; i < this.comments.length; i++){
  		if(this.comments[i].text === comment.text){
  			this.comments.splice(i, 1);
  		}
  	}
  }

  editComment(comment){
  		comment.editMode = true;
  }

  cancelComment(comment){
  		comment.editMode = false;
  }

  editNow(comment){
  	console.log(comment);
  	for (let i =0; i < this.comments.length; i++){
  		if (this.comments[i].text === comment.text){
  			this.comments[i].text === comment.text;
  			this.comments[i].author === comment.author;
  		}
  	}
  	comment.editMode = false;
  }






}

