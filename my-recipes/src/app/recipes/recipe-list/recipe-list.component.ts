import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('test ricetta','testo semplice','https://www.cucchiaio.it/content/cucchiaio/it/ricette/2019/12/spaghetti-al-pomodoro/jcr:content/header-par/image-single.img10.jpg/1576681061599.jpg'),
    new Recipe('','','')
  ];
  constructor(private dataStorageServide: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageServide.sendGetRequest('recipes').subscribe((data:any[])=>{
      console.log(data);
      this.recipes=data;
    })
  }

}
