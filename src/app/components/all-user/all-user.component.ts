import { Component, OnInit } from '@angular/core';
import {AllUserService} from '../../services/all-user.service';
import {PostInterface, UserInterface} from '../../inetface';
import {FormControl, FormGroup} from '@angular/forms';
import {AllPostService} from "../../services/all-post.service";

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  form: FormGroup;
  allUsers: UserInterface[];
  aboutUser: UserInterface;
  allPostOfUser: PostInterface[];
  post: PostInterface;
  constructor(private allUserService: AllUserService, private allPostService: AllPostService) {
  }

  ngOnInit(): void {
    this.allUserService.getAllUsers().subscribe(value => this.allUsers = value);
    this.form = new FormGroup({
      choice: new FormControl(),
    });
  }

  getUser(form): void {
    this.allUserService.getUserById(form.controls.choice.value).subscribe(value => this.aboutUser = value);
  }

  postOfUser(form: FormGroup): void {
    this.allPostService.getPostOfUser(form.controls.choice.value).subscribe(value => this.allPostOfUser = value);
  }

  getPost(form: FormGroup): void {
    this.allPostService.getPostByPostId(form.controls.choice.value).subscribe(value => this.post = value);
  }
  }
