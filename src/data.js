const buildings = [

{
	"name":"111 Brown Street",
	"built":1900,
	"roomType":[1, 2],
	"accessible":"Non-accessible",
	"numRooms": 7,
	"kitchens": "General (1)",
	"bathrooms": "Two per floor",
	"program": "No",
	"img":"111.jpg",
	"description":"The wooden floors and fireplaces help you to forget that your roommate uses your toothbrush to clean his white sneakers.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/BROWN111/PICTURES",
	"location": "111 Brown St,Providence, RI 02906"
},

{
	"name":"Barbour Hall",
	"built":1904,
	"roomType":[1, 2, 5],
	"accessible":true,
	"numRooms": 46,
	"kitchens": "General (1) & In-Suite",
	"bathrooms": "One per suite",
	"program": "No",
	"img":"barbour.jpg",
	"description":"The wooden floors and fireplaces help you to forget that your roommate uses your toothbrush to clean his white sneakers.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/BARBOUR/PICTURES",
	"location": "41.826134, -71.400644"
},
{
	"name":"Buxton House",
	"built":1951,
	"roomType":[1,2],
	"accessible":true,
	"numRooms": -1,
	"kitchens": "General (1)",
	"bathrooms": "Two per floor",
	"program": "International House",
	"img":"buxton.jpg",
	"description":"Residents feel on top of the world (if the world were a dining hall). This year, the Harvest Fest in the basement didn't have chicken pot pie.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/BUXTON/PICTURES",
	"location": "41.830443, -71.402504"
},
{
	"name":"Caswell Hall",
	"built":1903,
	"roomType":[2],
	"accessible":false,
	"numRooms": 45,
	"kitchens": "General (1)",
	"bathrooms": "1 per four doubles",
	"program": "No",
	"img":"caswell.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/CASWELL/PICTURES",
	"location":"41.824878, -71.401378"
},

{
	"name":"Chapin House",
	"built":1951,
	"roomType":[1,2],
	"accessible":true,
	"numRooms": 58,
	"kitchens": "General (3)",
	"bathrooms": "2 per floor",
	"program": "Theta Delta Chi Fraternity & Harambee House",
	"img":"chapin.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/CHAPIN/PICTURES",
	"location":"41.824878, -71.401378"
},

{
	"name":"Diman House",
	"built":1951,
	"roomType":[1,2,3],
	"accessible":true,
	"numRooms": 44,
	"kitchens": "General (3)",
	"bathrooms": "2 per floor",
	"program": "Kappa Alpha Theta Sorority & Social Action House",
	"img":"diman.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/DIMAN/PICTURES",
	"location":"41.824878, -71.401378"
},

{
	"name":"Goddard House",
	"built":1951,
	"roomType":[1,2],
	"accessible":true,
	"numRooms": 91,
	"kitchens": "General (3)",
	"bathrooms": "2 per floor",
	"program": "Alpha Delta Phi Fraternity",
	"img":"goddard.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/GODDARD/PICTURES",
	"location":"41.824878, -71.401378"
},

{
	"name":"Graduate Center D",
	"built":1968,
	"roomType":[1],
	"accessible":false,
	"numRooms": 102,
	"kitchens": "General (2)",
	"bathrooms": "1 per 5 singles",
	"program": "No",
	"img":"gradcenter.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/GRADCTRD/PICTURES",
	"location":"41.824878, -71.401378"

},

{
	"name":"Gregorian Quad A",
	"built":1991,
	"roomType":[1,2],
	"accessible":true,
	"numRooms": 44,
	"kitchens": "General (3)",
	"bathrooms": "1 per double",
	"program": "No",
	"img":"newdorm.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/VGQUADA/PICTURES",
	"location":"41.824878, -71.401378"

},

{
	"name":"Harkness House",
	"built":1951,
	"roomType":[1,2],
	"accessible":true,
	"numRooms": 32,
	"kitchens": "General (3)",
	"bathrooms": "Two per floor",
	"program": "Kappa Delta Sorority & Technology House",
	"img":"harkness.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/HARKNESS/PICTURES",
	"location":"41.824878, -71.401378"

},

{
	"name":"Hope College",
	"built":1822,
	"roomType":[1,2],
	"accessible":false,
	"numRooms": 46,
	"kitchens": "General (1)",
	"bathrooms": "Two per floor",
	"program": "No",
	"img":"hopecollege.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/HOPECOLL/PICTURES",
	"location":"41.824878, -71.401378"

},

{
	"name":"King House",
	"built":1895,
	"roomType":[1,2],
	"accessible":false,
	"numRooms": -1,
	"kitchens": "General (1)",
	"bathrooms": "Two per floor",
	"program": "St. Anthony Hall",
	"img":"kings.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/KINGHSE/PICTURES",
	"location":"41.824878, -71.401378"

},

{
	"name":"Littlefield Hall",
	"built":1926,
	"roomType":[2],
	"accessible":false,
	"numRooms": 34,
	"kitchens": "General (1)",
	"bathrooms": "Two per floor",
	"program": "No",
	"img":"littlefield.jpg",
	"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/LITTLEFLD/PICTURES",
	"location":"41.824878, -71.401378"

},

{
	"name": "Machado House",
	"Built": 1912,
	"roomType": [1,2,3],
	"accessible": true,
	"numRooms": 18,
	"kitchens": "General (3)",
	"program": "Spanish/French House & Latinx House",
	"img": "machado.jpg",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/MACHADO/PICTURES",
	"location": "41.826134, -71.400644"
},

{
	"name": "Marcy House",
	"Built": 1951,
	"roomType": [1,2,3],
	"accessible": true,
	"numRooms": 80,
	"kitchens": "General (3)",
	"program": "Beta Rho Pi Fraternity & Zeta Delta Xi Fraternity",
	"img": "marcy.jpg",
	"description":"fuck",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/MARCYHSE/PICTURES",
	"location": "41.826134, -71.400644"
},

{
	"name": "Minden Hall",
	"Built": 1912,
	"roomType": [1,2,3,4],
	"accessible": false,
	"numRooms": 112,
	"kitchens": "General (1)",
	"program": "None",
	"img": "minden.jpg",
	"description":"fuck",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/MINDEN/PICTURES",
	"location": "41.826134, -71.400644"
},



{
	"name": "New Pembroke 4",
	"Built": 1974,
	"roomType": [1,2],
	"accessible":false,
	"numRooms": 81,
	"kitchens": "General (2)",
	"program": "None",
	"img": "newpembroke3.jpg",
	"description":"fuck",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/NEWPEM4/PICTURES",
	"location": "41.826134, -71.400644"
},

{
	"name": "Olney House",
	"Built": 1951,
	"roomType": [1,2],
	"accessible":true,
	"numRooms": 99,
	"kitchens": "General (3)",
	"program": "Sigma Chi Fraternity & Beta Omega Chi Fraternity",
	"img": "olney.jpg",
	"description":"fuck",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/OLNEY/PICTURES",
	"location": "41.826134, -71.400644"
},


{
	"name": "Perkins Hall",
	"Built": 1960,
	"roomType": [2],
	"accessible":true,
	"numRooms": 189,
	"kitchens": "General (4)",
	"program": "None",
	"img": "perkins.jpg",
	"description":"fuck",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/PERKINS/PICTURES",
	"location": "41.826134, -71.400644"
},

{
	"name": "Plantation House",
	"Built": 1896,
	"roomType": [1,2,3],
	"accessible":"Inaccesible",
	"numRooms": 10,
	"kitchens": 1,
	"program": "None",
	"img": "plantation.jpg",
	"description":"fuck",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/WESTHSE/PICTURES",
	"location": "41.826134, -71.400644"
},

{
	"name": "Sears House",
	"Built": 1951,
	"roomType": [1,2],
	"accessible":"Accessible",
	"numRooms": 79,
	"kitchens": 3,
	"program": "Alpha Chi Omega sorority, Delta Tau fraternity",
	"img": "sears.jpg",
	"description":"fuck",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/SEARS/PICTURES",
	"location": "41.826134, -71.400644"
},


{
	"name": "West House",
	"Built": 1885,
	"roomType": [1,2],
	"accessible":"Inaccessible",
	"numRooms": -1,
	"kitchens": 1,
	"program": "Environmental Program House",
	"img": "west.jpg",
	"description":"fuck",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/WESTHSE/PICTURES",
	"location": "41.826134, -71.400644"
}

]

export {buildings};