import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  members: any = [];
  constructor(private apiService : ApiService) {
    this.readMembers();
  }

  ngOnInit(): void {
  }
  readMembers(){
    this.apiService.getMembers().subscribe((data) => {
      for(var key in data){
        var tmp = data[key]
        tmp['entry'] = key
        this.members.push(tmp)
      }
    })
  }

}
