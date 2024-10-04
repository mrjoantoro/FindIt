import { Component, OnInit } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai.service';


@Component({
  selector: 'app-openai',
  templateUrl: './openai.page.html',
  styleUrls: ['./openai.page.scss'],
})
export class OpenaiPage implements OnInit {
  ingredients: string = '';
  recipes: string = '';

  constructor(private openAiService: OpenaiService) {}

  ngOnInit() {
  }

  async getRecipes() {
    try {
      this.recipes = await this.openAiService.getRecipe(this.ingredients);
    } catch (error) {
      console.error('Error al obtener recetas:', error);
    }
  }

}
