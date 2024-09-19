import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-palindromechecker',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  inputWord: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const cleanedWord = this.inputWord.toLowerCase().replace(/[^a-z]/g, '');
    this.isPalindrome = cleanedWord === cleanedWord.split('').reverse().join('');
  }
}
