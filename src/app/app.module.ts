import {Router, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {Component, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";
import {DisplaynameComponent} from "./components/displayname/displayname.component";
import {CounterComponent} from "./components/counter/counter.component";
import {SimpleformComponent} from "./components/simpleform/simpleform.component";
import {UserageComponent} from "./components/userage/userage.component";
import {UsegreetingComponent} from "./components/usegreeting/usegreeting.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {TextlengthComponent} from "./components/textlength/textlength.component";
import {CurrencyconverterComponent} from "./components/currencyconverter/currencyconverter.component";
import {EvenoddcheckerComponent} from "./components/evenoddchecker/evenoddchecker.component";
import {WordrevserComponent} from "./components/wordrevser/wordrevser.component";
import {ShowdateComponent} from "./components/showdate/showdate.component";
import {ShowusernameComponent} from "./components/showusername/showusername.component";
import {MultiplicationtableComponent} from "./components/multiplicationtable/multiplicationtable.component";
import {SimpleloginComponent} from "./components/simplelogin/simplelogin.component";
import {FahrenheittocelsiusComponent} from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import {BookmarklistComponent} from "./components/bookmarklist/bookmarklist.component";
import {CharactercounterComponent} from "./components/charactercounter/charactercounter.component";
import {PalindromecheckerComponent} from "./components/palindromechecker/palindromechecker.component";
import {TemperatureconverterComponent} from "./components/temperatureconverter/temperatureconverter.component";
import {ShoppinglistComponent} from "./components/shoppinglist/shoppinglist.component";
import {TodomanagerComponent} from "./components/todomanager/todomanager.component";
import {GuessnumbergameComponent} from "./components/guessnumbergame/guessnumbergame.component";
import {WordcounterComponent} from "./components/wordcounter/wordcounter.component";
import {RandomnumbergeneratorComponent} from "./components/randomnumbergenerator/randomnumbergenerator.component";
import {MultiplicationcheckerComponent} from "./components/multiplicationchecker/multiplicationchecker.component";
import {UppercaseconverterComponent} from "./components/uppercaseconverter/uppercaseconverter.component";
import {WorldshufflerComponent} from "./components/worldshuffler/worldshuffler.component";
import {BmisolverComponent} from "./components/bmisolver/bmisolver.component";
import {UsernamevalidatorComponent} from "./components/usernamevalidator/usernamevalidator.component";
import {InterestcalculatorComponent} from "./components/interestcalculator/interestcalculator.component";
import {
  CompoundinterestcalculatorComponent
} from "./components/compoundinterestcalculator/compoundinterestcalculator.component";
import {FibonnaccigeneratorComponent} from "./components/fibonnaccigenerator/fibonnaccigenerator.component";
import {OddsumcalculatorComponent} from "./components/oddsumcalculator/oddsumcalculator.component";
import {RandomquotedisplayComponent} from "./components/randomquotedisplay/randomquotedisplay.component";
import {UppercasegreettingComponent} from "./components/uppercasegreetting/uppercasegreetting.component";
import {DivisiblecheckerComponent} from "./components/divisiblechecker/divisiblechecker.component";
import {NamegeneratorComponent} from "./components/namegenerator/namegenerator.component";
import {AgegeneratorComponent} from "./components/agegenerator/agegenerator.component";
import {SpellingcheckerComponent} from "./components/spellingchecker/spellingchecker.component";
import {EnglishcheckerComponent} from "./components/englishchecker/englishchecker.component";
import {
  WeatherWidgetComponentComponent
} from "./components/weather-widget-component/weather-widget-component.component";
import {TodolistComponent} from "./components/todolist/todolist.component";
import {InteractiveQuizComponent} from "./components/interactive-quiz/interactive-quiz.component";
import {ContactformComponent} from "./components/contactform/contactform.component";
import {DrawingBoardComponent} from "./components/drawing-board/drawing-board.component";
import {FormsModule} from "@angular/forms";


const  routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'displayhelloworld', component: DisplayhelloworldComponent},
  { path: 'showhellobutton', component: ShowhellobuttonComponent},
  { path: 'displayname', component: DisplaynameComponent},
  { path: 'counter', component: CounterComponent},
  { path: 'simpleform', component: SimpleformComponent},
  { path: 'userage', component: UserageComponent},
  { path: 'usergreeting', component: UsegreetingComponent},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'textlength', component: TextlengthComponent},
  { path: 'currencyconverter', component: CurrencyconverterComponent},
  { path: 'evenoddchecker', component: EvenoddcheckerComponent},
  { path: 'wordreverser', component: WordrevserComponent},
  { path: 'showdate', component: ShowdateComponent},
  { path: 'showusername', component: ShowusernameComponent},
  { path: 'multiplicationtable', component: MultiplicationtableComponent},
  { path: 'simplelogin', component: SimpleloginComponent},
  { path: 'bookmarklist', component: BookmarklistComponent},
  { path: 'charactercounter', component: CharactercounterComponent},
  { path: 'palindromechecker', component: PalindromecheckerComponent},
  { path: 'temperatureconverter', component: TemperatureconverterComponent},
  { path: 'shoppinglist', component: ShoppinglistComponent},
  { path: 'factorialcalculator', component: FahrenheittocelsiusComponent},
  { path: 'todomanager', component: TodomanagerComponent},
  { path: 'guessnumbergame', component: GuessnumbergameComponent},
  { path: 'wordcounter', component: WordcounterComponent},
  { path: 'randomnumbergenerator', component: RandomnumbergeneratorComponent},
  { path: 'multiplicationchecker', component: MultiplicationcheckerComponent},
  { path: 'uppercaseconverter', component: UppercaseconverterComponent},
  { path: 'wordshuffler', component: WorldshufflerComponent},
  { path: 'bmisolver', component: BmisolverComponent},
  { path: 'usernamevalidator', component: UsernamevalidatorComponent},
  { path: 'interestcalculator', component: InterestcalculatorComponent},
  { path: 'compoundinterestcalculator', component: CompoundinterestcalculatorComponent},
  { path: 'fibonaccigenerator', component: FibonnaccigeneratorComponent},
  { path: 'oddsumcalculator', component: OddsumcalculatorComponent},
  { path: 'currencyformatter', component: CurrencyconverterComponent},
  { path: 'randomquotedisplay', component: RandomquotedisplayComponent},
  { path: 'uppercasegreeting', component: UppercasegreettingComponent},
  { path: 'divisiblechecker', component: DivisiblecheckerComponent},
  { path: 'namegenerator', component: NamegeneratorComponent},
  { path: 'agegenerator', component: AgegeneratorComponent},
  { path: 'spellingchecker', component: SpellingcheckerComponent},
  { path: 'englishchecker', component: EnglishcheckerComponent},
  { path: 'weather-widger-component', component: WeatherWidgetComponentComponent},
  { path: 'chatbot', component: CharactercounterComponent},
  { path: 'todolist', component: TodolistComponent},
  { path: 'interactive-quiz', component: InteractiveQuizComponent},
  { path: 'contactform', component: ContactformComponent},
  { path: 'drawing-board', component: DrawingBoardComponent},





]
@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordrevserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    RandomnumbergeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseconverterComponent,
    WorldshufflerComponent,
    BmisolverComponent,
    UsernamevalidatorComponent,
    InterestcalculatorComponent,
    CompoundinterestcalculatorComponent,
    FibonnaccigeneratorComponent,
    OddsumcalculatorComponent,
    CurrencyconverterComponent,
    RandomquotedisplayComponent,
    UppercasegreettingComponent,
    DivisiblecheckerComponent,
    NamegeneratorComponent,
    AgegeneratorComponent,
    SpellingcheckerComponent,
    EnglishcheckerComponent,
    WeatherWidgetComponentComponent,
    CharactercounterComponent,
    TodolistComponent,
    InteractiveQuizComponent,
    ContactformComponent,
    DrawingBoardComponent,

  ],
  providers: [

  ],

  bootstrap: [
    AppComponent,

  ],

})

export class AppModule { }

