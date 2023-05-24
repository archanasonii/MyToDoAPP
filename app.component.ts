import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'MytodoApp';
  tasks:any=[];
  newtask(content:string){
    if (content != '')
    {
      this.tasks.push({id:this.tasks.length,title:content})
      console.log(this.tasks)
    }
  }
  removetask(id:number){
    this.tasks = this.tasks.filter((item:{id:number})=>item.id !=id)
  }

  removealltasks(){
    this.tasks=[]
  }
}
