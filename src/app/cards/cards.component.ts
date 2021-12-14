import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  animals = [
    {name: "Linux", animal: "Penguin", img:"data:image/jpeg;base64,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", desc: "Penguins are the only living flightless birds adapted to wing-propelled diving."},
    {name: "Makoa", animal: "Aligator snapping turtle", img:"https://www.gannett-cdn.com/presto/2020/07/14/PJAM/355af7a3-0460-445d-afd0-c9aa70a4a6ef-000146AST.jpg", desc: "The alligator snapping turtle (Macrochelys temminckii) is a species of turtle in the family Chelydridae. The species is native to freshwater habitats in the United States."},
    {name: "Simba", animal: "Lion", img:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Cecil_the_lion_at_Hwange_National_Park_%284516560206%29.jpg", desc: "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, ..."},
    {name: "Crocodile", animal: "Crocodile", img:"https://ichef.bbci.co.uk/news/640/cpsprodpb/12C4E/production/_108387867_055871894-1.jpg", desc: "The crocodile is one of the largest reptiles. The marine crocodile and the Nile crocodile reach or exceed 7 meters in length."},
    {name: "Shiba Inu", animal: "Dog Breed", img:"https://material.angular.io/assets/img/examples/shiba2.jpg", desc: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."},

]
  ngOnInit(): void {
  }

}
