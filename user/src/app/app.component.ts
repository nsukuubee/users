import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user';
  users = [
    { userID: 1, Name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', street: 'Kulas Light', suite:'Apt. 556', city:'Gwenborough',zipcode:'92998-3874',
  lat:'-37.3159', lng:'81.1496', phone: "1-770-736-8031 x56442", website: "hildegard.org",Cname: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"},
  
  {userID: 2, Name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", street: "Victor Plains", suite: "Suite 879", city: "Wisokyburgh", zipcode: "90566-7771", lat: "-43.9509", lng: "-34.4618",
   phone: "010-692-6593 x09125", website: "anastasia.net", Cname: "Deckow-Crist", catchPhrase: "Proactive didactic contingency",bs: "synergize scalable supply-chains"},

   {userID: 3, Name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", street: "Douglas Extension", suite: "Suite 847", city: "McKenziehaven", zipcode: "59590-4157", lat: "-68.6102",lng: "-47.0653",
   phone: "1-463-123-4447", website: "ramiro.info", Cname: "Romaguera-Jacobson", catchPhrase: "Face to face bifurcated interface", bs: "e-enable strategic applications"},
   
   {userID: 4, Name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", street: "Hoeger Mall", suite: "Apt. 692", city: "South Elvis", zipcode: "53919-4257", lat: "29.4572", lng: "-164.2990", 
  phone: "493-170-9623 x156", website: "kale.biz", Cname: "Robel-Corkery", catchPhrase: "Multi-tiered zero tolerance productivity", bs: "transition cutting-edge web services"},

  {userID: 5, Name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", street: "Skiles Walks", suite: "Suite 351", city: "Roscoeview", zipcode: "33263", lat: "-31.8129", lng: "62.5342",
  phone: "(254)954-1289", website: "demarco.info", Cname: "Keebler LLC", catchPhrase: "User-centric fault-tolerant solution", bs: "revolutionize end-to-end systems"},

  {userID: 6, Name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", street: "Norberto Crossing", suite: "Apt. 950", city: "South Christy", zipcode: "23505-1337", lat: "-71.4197", lng: "71.7478",
   phone: "1-477-935-8478 x6430", website: "ola.org", Cname: "Considine-Lockman", catchPhrase: "Synchronised bottom-line interface",bs: "e-enable innovative applications"},
  
  {userID: 7,Name: "Kurtis Weissnat",username: "Elwyn.Skiles",email: "Telly.Hoeger@billy.biz",street: "Rex Trail",suite: "Suite 280",city: "Howemouth",zipcode: "58804-1099",lat: "24.8918",lng: "21.8984", phone: "210.067.6132",
  website: "elvis.io", Cname: "Johns Group",catchPhrase: "Configurable multimedia task-force",bs: "generate enterprise e-tailers"},

  {userID: 8, Name: "Nicholas Runolfsdottir V",username: "Maxime_Nienow",email: "Sherwood@rosamond.me",street: "Ellsworth Summit",suite: "Suite 729",city: "Aliyaview",zipcode: "45169",lat: "-14.3990",lng: "-120.7677",
   phone: "586.493.6943 x140",website: "jacynthe.com",Cname: "Abernathy Group",catchPhrase: "Implemented secondary concept",bs: "e-enable extensible e-tailers"},

  {userID: 9,Name: "Glenna Reichert",username: "Delphine",email: "Chaim_McDermott@dana.io",street: "Dayna Park",suite: "Suite 449",city: "Bartholomebury",zipcode: "76495-3109",lat: "24.6463",lng: "-168.8889",
   phone: "(775)976-6794 x41206",website: "conrad.com",Cname: "Yost and Sons",catchPhrase: "Switchable contextually-based project",bs: "aggregate real-time technologies"},
  
   {userID: 10, Name: "Clementina DuBuque",username: "Moriah.Stanton",email: "Rey.Padberg@karina.biz",street: "Kattie Turnpike",suite: "Suite 198",city: "Lebsackbury",zipcode: "31428-2261",lat: "-38.2386",lng: "57.2232",
   phone: "024-648-3804",website: "ambrose.net",Cname: "Hoeger LLC",catchPhrase: "Centralized empowering task-force",bs: "target end-to-end models"}   
];
}
