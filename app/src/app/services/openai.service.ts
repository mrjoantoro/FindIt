import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAI;
  private apiKey : string = '';

  constructor() {
    this.openai = new OpenAI({
      apiKey: this.apiKey, // Reemplaza con tu clave API
      dangerouslyAllowBrowser: true, // Habilita el uso en navegador
    });
  }

    async getRecipe(ingredients: string): Promise<string> {
      const prompt = `Crea recetas usando estos ingredientes: ${ingredients}`;

      try {
        const completion = await this.openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "Eres un experto chef profesional." },
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        console.log(completion.choices[0].message);
        //const content = response.choices[0].message.content;
        let content = completion.choices[0].message.content;

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
