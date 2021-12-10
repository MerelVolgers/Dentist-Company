const dentists = [
  { id: 1, first_name: "Byran", last_name: "Collman", email: "bcollman0@tandartspraktijkbvt.nl", telephone: "+224 381 959 8522", isSick: false},
  { id: 2, first_name: "Anne", last_name: "Paul", email: "apaul1@tandartspraktijkbvt.nl",telephone: "+56 543 643 5973", isSick: false}, 
  { id: 3, first_name: "Arie", last_name: "Ciotti", email: "aciotti2@tandartspraktijkbvt.nl", telephone: "+30 444 144 5458", isSick: false}, 
  { id: 4, first_name: "Leonid", last_name: "Bidewel", email: "lbidewel3@tandartspraktijkbvt.nl", telephone: "+55 452 587 4608", isSick: false}
]

const assistants = [
  { id: 1, first_name: "Kara", last_name: "Morales", email: "kmorales0@tandartspraktijkbvt.nl", telephone: "+258 045 1255", isSick: false},
  { id: 2, first_name: "Mary", last_name: "Cleasen", email: "mcleasen@tandartspraktijkbvt.nl.com", telephone: "+55 452 587 8542", isSick: false}
]

const clients = [
  {id:1,first_name:"Frans",last_name:"Wisedale",email:"fwisedale0@biblegateway.com",telephone:"+86 562 547 2658","date_of_birth":"2/1/1997", isSick: false},
  {id:2,first_name:"Minnie",last_name:"Tender",email:"mtender1@de.vu",telephone:"+55 418 978 0309","date_of_birth":"7/5/2017", isSick: false},
  {id:3,first_name:"Ellissa",last_name:"Ovill",email:"eovill2@fotki.com",telephone:"+54 996 149 0997","date_of_birth":"2/7/1961"},
  {id:4,first_name:"Barthel",last_name:"Arenson",email:"barenson3@istockphoto.com",telephone:"+62 295 202 5448","date_of_birth":"12/12/1964", isSick: false},
  {d:5,first_name:"Tanitansy",last_name:"Dunkerk",email:"tdunkerk4@miibeian.gov.cn",telephone:"+55 329 629 0797","date_of_birth":"10/20/1927", isSick: false},
  {id:8,first_name:"Laurianne",last_name:"Roby",email:"lroby7@washington.edu",telephone:"+234 925 451 7351","date_of_birth":"6/27/2013", isSick: false},
  {id:6,first_name:"Misha",last_name:"Lowes",email:"mlowes5@4shared.com",telephone:"+7 547 505 8749","date_of_birth":"4/20/1952", isSick: false},
  {id:7,first_name:"Debra",last_name:"Tchir",email:"dtchir6@blog.com",telephone:"+7 230 522 0323","date_of_birth":"12/19/1988", isSick: false},
  {id:9,first_name:"Symon",last_name:"Pringer",email:"springer8@ed.gov",telephone:"+504 815 604 5166","date_of_birth":"9/10/1932", isSick: false},
  {id:10,first_name:"Alayne",last_name:"Heales",email:"aheales9@noaa.gov",telephone:"+49 777 379 9025","date_of_birth":"2/18/1967", isSick: false},
  {id:11,first_name:"Enrika",last_name:"Lorraway",email:"elorrawaya@mapy.cz",telephone:"+63 978 948 6455","date_of_birth":"12/2/2020", isSick: false},
  {id:12,first_name:"Carver",last_name:"Aukland",email:"cauklandb@exblog.jp",telephone:"+1 570 796 9346","date_of_birth":"4/5/1952", isSick: false},
  {id:13,first_name:"Ashley",last_name:"De Castri",email:"adecastric@dell.com",telephone:"+234 639 520 7801","date_of_birth":"7/11/1980", isSick: false},
  {id:14,first_name:"Danika",last_name:"Blucher",email:"dblucherd@ow.ly",telephone:"+51 978 347 6450","date_of_birth":"7/6/1960", isSick: false},
  {id:15,first_name:"Nefen",last_name:"Martensen",email:"nmartensene@discovery.com",telephone:"+48 751 496 8135","date_of_birth":"10/4/1977", isSick: false},
  {id:16,first_name:"Elvina",last_name:"Cayton",email:"ecaytonf@kickstarter.com",telephone:"+86 139 198 2670","date_of_birth":"2/11/2013", isSick: false},
  {id:17,first_name:"Rafferty",last_name:"Pallas",email:"rpallasg@bbc.co.uk",telephone:"+62 863 190 8634","date_of_birth":"4/25/1940", isSick: false},
  {id:18,first_name:"Maire",last_name:"Farrants",email:"mfarrantsh@e-recht24.de",telephone:"+86 542 642 7771","date_of_birth":"8/28/1942", isSick: false},
  {id:19,first_name:"Ernesta",last_name:"Sidsaff",email:"esidsaffi@paypal.com",telephone:"+86 931 227 0205","date_of_birth":"1/22/1934", isSick: false},
  {id:21,first_name:"Jaymee",last_name:"Gillfillan",email:"jgillfillank@photobucket.com",telephone:"+86 718 886 3087","date_of_birth":"7/22/1928", isSick: false},
  {id:22,first_name:"Rosette",last_name:"Fish",email:"rfishl@reuters.com",telephone:"+7 131 938 9518","date_of_birth":"12/16/1960", isSick: false},
  {id:23,first_name:"Xerxes",last_name:"Strathearn",email:"xstrathearnm@hc360.com",telephone:"+86 202 481 0157","date_of_birth":"8/28/1990", isSick: false},
  {id:20,first_name:"Margret",last_name:"Gonsalo",email:"mgonsaloj@tuttocitta.it",telephone:"+86 501 820 6910","date_of_birth":"3/5/2009", isSick: false},
  {id:24,first_name:"Marissa",last_name:"Bloodworth",email:"mbloodworthn@surveymonkey.com",telephone:"+1 555 553 0968","date_of_birth":"7/3/1946", isSick: false},
  {id:25,first_name:"Benita",last_name:"Mebius",email:"bmebiuso@go.com",telephone:"+385 586 139 2459","date_of_birth":"7/4/1982", isSick: false},
  {id:26,first_name:"Kevin",last_name:"Leary",email:"klearyp@squarespace.com",telephone:"+63 633 572 3156","date_of_birth":"3/24/2021", isSick: false},
  {id:27,first_name:"Pearla",last_name:"Elce",email:"pelceq@yellowpages.com",telephone:"+86 924 134 3791","date_of_birth":"9/26/1954", isSick: false},
  {id:28,first_name:"Dene",last_name:"Ladyman",email:"dladymanr@unesco.org",telephone:"+33 370 602 6753","date_of_birth":"3/23/2005", isSick: false},
  {id:29,first_name:"Ranice",last_name:"Laudham",email:"rlaudhams@nyu.edu",telephone:"+54 162 617 0589","date_of_birth":"8/19/2002", isSick: false},
  {id:30,first_name:"Wally",last_name:"Andrioli",email:"wandriolit@nifty.com",telephone:"+1 423 363 1296","date_of_birth":"2/19/1983", isSick: false},
  {id:31,first_name:"Phebe",last_name:"Colleck",email:"pcollecku@about.me",telephone:"+86 590 507 7281","date_of_birth":"11/25/1979", isSick: false},
  {id:32,first_name:"Liesa",last_name:"Doohan",email:"ldoohanv@mayoclinic.com",telephone:"+93 512 423 1088","date_of_birth":"7/24/1951", isSick: false},
  {id:33,first_name:"Nady",last_name:"Chappell",email:"nchappellw@opensource.org",telephone:"+62 868 997 8656","date_of_birth":"12/18/1992", isSick: false},
  {id:34,first_name:"Daniele",last_name:"Baike",email:"dbaikex@nhs.uk",telephone:"+63 213 288 0534","date_of_birth":"12/14/2004", isSick: false},
  {id:35,first_name:"Renaud",last_name:"Deners",email:"rdenersy@sciencedaily.com",telephone:"+86 632 276 7033","date_of_birth":"8/18/1945", isSick: false},
  {id:36,first_name:"Ely",last_name:"Stiff",email:"estiffz@wired.com",telephone:"+375 950 846 1045","date_of_birth":"2/19/1935", isSick: false},
  {id:37,first_name:"Murvyn",last_name:"Pallent",email:"mpallent10@symantec.com",telephone:"+55 704 950 5477","date_of_birth":"7/5/1978", isSick: false},
  {id:38,first_name:"Nickolaus",last_name:"Ida",email:"nida11@soundcloud.com",telephone:"+81 772 204 5905","date_of_birth":"4/25/1983", isSick: false},
  {id:39,first_name:"Claiborn",last_name:"Kornes",email:"ckornes12@skyrock.com",telephone:"+86 118 812 7631","date_of_birth":"12/17/1993", isSick: false},
  {id:40,first_name:"Inglis",last_name:"Petzolt",email:"ipetzolt13@blogspot.com",telephone:"+252 739 344 2237","date_of_birth":"4/4/2021", isSick: false},
  {id:41,first_name:"Josselyn",last_name:"Mandrier",email:"jmandrier14@businesswire.com",telephone:"+62 523 112 0998","date_of_birth":"8/9/1981", isSick: false},
  {id:42,first_name:"Artemas",last_name:"Caccavella",email:"acaccavella15@unesco.org",telephone:"+385 642 229 1233","date_of_birth":"1/23/1964", isSick: false},
  {id:43,first_name:"Christiane",last_name:"Casey",email:"ccasey16@sourceforge.net",telephone:"+62 196 289 8138","date_of_birth":"8/11/1939", isSick: false},
  {id:44,first_name:"Gerti",last_name:"Baudassi",email:"gbaudassi17@yelp.com",telephone:"+27 978 961 9097","date_of_birth":"12/31/1952", isSick: false},
  {id:45,first_name:"Minne",last_name:"Andersen",email:"mandersen18@spotify.com",telephone:"+30 793 779 4206","date_of_birth":"9/26/1983", isSick: false},
  {id:46,first_name:"Sayre",last_name:"Peet",email:"speet19@amazon.co.uk",telephone:"+1 984 172 6912","date_of_birth":"7/27/1976", isSick: false},
  {id:47,first_name:"Micaela",last_name:"Jedrzejewsky",email:"mjedrzejewsky1a@msn.com",telephone:"+86 604 452 6577","date_of_birth":"5/28/1982", isSick: false},
  {id:48,first_name:"Valaree",last_name:"Fewell",email:"vfewell1b@nymag.com",telephone:"+86 841 950 1026","date_of_birth":"11/12/2016", isSick: false},
  {id:49,first_name:"Meade",last_name:"Creboe",email:"mcreboe1c@slashdot.org",telephone:"+7 693 728 9626","date_of_birth":"6/28/1942", isSick: false},
  {id:50,first_name:"Bayard",last_name:"Davidzon",email:"bdavidzon1d@nationalgeographic.com",telephone:"+64 774 479 9363","date_of_birth":"10/10/2002", isSick: false}
]

const getRandomName = (array) => {
  const person = array[Math.floor(Math.random() * array.length)];
  return `${person.first_name} ${person.last_name}`;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomName(clients),
  dentist: getRandomName(dentists),
  assistant: getRandomName(assistants),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;
