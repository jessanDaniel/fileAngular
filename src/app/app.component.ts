import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileApp';
  file:any;
  filename:any;
  fileform:any;
  constructor(private http:HttpClient){}
  catcher:any;
  onFileSubmit(event:any){
    this.catcher=event;
    try{
      this.file=event.target.files[0];
      console.log(event);
      if(this.file){
        this.filename=this.file.name;
        this.fileform=new FormData();
        this.fileform.append('file',this.file);
      }
      
    }
    catch(error){
      console.log('upload a file')
    }

  }
  
  onUpload(){
    if(this.file){
      let url='http://localhost:5000/file_upload';
    this.http.post(url,this.fileform).subscribe((resp)=>{
      console.log(resp);
    });
    }
  }

  delete(){
    this.file=null;
    this.filename=null;
    this.fileform=null;
  }
}
