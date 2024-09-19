import { INotes } from './../../core/interfaces/inotes';
import {  Component, inject, OnInit} from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { BlankserviceService } from '../../services/blankservice.service';
import { NgFor } from '@angular/common';
declare var $:any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent,ReactiveFormsModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly _FormBuilder= inject(FormBuilder);
  private readonly _BlankserviceService= inject(BlankserviceService);

  noteList:INotes[] =[];


  ngOnInit(): void {
      this.getNotes()
  }

  addNoteForm:FormGroup = this._FormBuilder.group({
    title  :[null ,[Validators.required]],
    content:[null ,[Validators.required]]
  })

  
  updateNoteForm:FormGroup = this._FormBuilder.group({
    _id:[null],
    title  :[null ,[Validators.required]],
    content:[null ,[Validators.required]]
  })
  

  addNote():void
  {
    this._BlankserviceService.addNote(this.addNoteForm.value).subscribe
    ({
      next:(res)=>
        {
          console.log(res);
          
          this.addNoteForm.reset();
          $('#exampleModal').modal('hide')
          this.getNotes()
          this.getUserNote()
        },
      error:(err)=>{console.log(err);
      }
    })
  }
  getNotes():void
  {
    this._BlankserviceService.getNotes().subscribe
    (
      {
        next:(res)=>{this.noteList=res.notes},
        error:(err)=>{console.log(err);
          this.noteList=[];//law fe error fadeholy 34an law baky wahda by3ml error w m4 by7zf
        }
      }
    )
  }
  deleteNote(id:string):void
  {
    this._BlankserviceService.deleteNotes(id).subscribe
    (
      {
        next:(res)=>{
          console.log(res);
          this.getNotes();
        },
        error:(err)=>{console.log(err);
          if (err.error.msg == "not notes found") {
            this.noteList=[];
          }
        }
      }
    )
  }
  

  updateData():void
  {
    const {_id , title ,content}=this.updateNoteForm.value
    this._BlankserviceService.updateNote(_id,{title,content}).subscribe
    (
      {
        next:(res)=>{console.log(res);
          this.getUserNote();
          $('#updatemodal').modal('hide') 
        },
        error:(err)=>{console.log(err);
        }
      }
    )
  }
  getUpdateModal(note: any): void {
    $('#updatemodal').modal('show');
    this.updateNoteForm.patchValue(note);
  }
  
  getUserNote():void
  {
    this._BlankserviceService.getUserNotes().subscribe
    (
      {
        next:(res)=>{res},
        error:(err)=>{console.log(err);
        }
      }
    )
  }

}
