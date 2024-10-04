import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: 'PON_TU_APIKEY', // Reemplaza con tu clave API
      dangerouslyAllowBrowser: true, // Habilita el uso en navegador
    });
  }

    async getRecipe(ingredients: string): Promise<string> {
      const prompt = `Crea recetas usando estos ingredientes: ${ingredients}`;

      try {
        const response = await this.openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
        });

        console.log(response);
        const content = response.choices[0].message.content;
        if (content) {
          return content; // Retorna las opciones de recetas
        } else {
          throw new Error('No se obtuvo contenido de la respuesta.');
        }
      } catch (error) {
        console.error('Error al obtener la receta:', error);
        throw error;
      }
    }
  }
