import { Injectable } from '@angular/core';
import { LogoService } from './logo.service';

@Injectable()
export class DataService {

    constructor(private logoService: LogoService){}

   private data: string[] = ['Apple iPhone XR', 'Samsung Galaxy S9', 'Nokia 9'];

   getData(): string[] {
       this.logoService.write('операція отримання даних');
       return this.data
   }

   addData(name: string): void {
    this.data.push(name);
    this.logoService.write('операція добавлення даних');
   }
}