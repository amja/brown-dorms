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
	"location": "Barbour Hall, Providence, RI 02912"
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
	"location": "Buxton House, Providence, RI"
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
	"location":"Caswell Hall, Providence, RI 02912"
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
	"location":"Chapin House, Providence, RI 02906"
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
	"location":"Diman House, Providence, RI 02906"
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
	"location":"41.824121, -71.401326"
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
	"location":"Graduate Center D, Providence, RI"

},

{
	"name":"V. Gregorian Quad A",
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
	"location":"103 Thayer St, Providence, RI 02906"

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
	"location":"Harkness House, Providence, RI"

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
	"location":"71 Waterman St, Providence, RI 02912"

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
	"location":"154 Hope St, Providence, RI 02912"

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
	"location":"41.825605, -71.402030"

},

{
	"name": "Machado House",
	"built": 1912,
	"roomType": [1,2,3],
	"accessible": true,
	"numRooms": 18,
	"kitchens": "General (3)",
	"bathrooms": "Two per floor",
	"program": "Spanish/French House & Latinx House",
	"img": "machado.jpg",
	"description": "TODO",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/MACHADO/PICTURES",
	"location": "87 Prospect St, Providence, RI 02912"
},

{
	"name": "Marcy House",
	"built": 1951,
	"roomType": [1,2,3],
	"accessible": true,
	"numRooms": 80,
	"kitchens": "General (3)",
	"bathrooms": "Two per floor",
	"program": "Beta Rho Pi Fraternity & Zeta Delta Xi Fraternity",
	"img": "marcy.jpg",
	"description":"TODO",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/MARCYHSE/PICTURES",
	"location": "Marcy House, Providence, RI"
},

{
	"name": "Minden Hall",
	"built": 1912,
	"roomType": [1,2,3,4],
	"accessible": false,
	"numRooms": 112,
	"kitchens": "General (1)",
	"bathrooms": "Two per floor",
	"program": "None",
	"img": "minden.jpg",
	"description":"TODO",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/MINDEN/PICTURES",
	"location": "123 Waterman St, Providence, RI 02906"
},



{
	"name": "New Pembroke 4",
	"built": 1974,
	"roomType": [1,2],
	"accessible":false,
	"numRooms": 81,
	"kitchens": "General (2)",
	"bathrooms": "Two per floor",
	"program": "None",
	"img": "newpembroke3.jpg",
	"description":"TODO",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/NEWPEM4/PICTURES",
	"location": "300 Thayer St, Providence, RI 02906"
},

{
	"name": "Olney House",
	"built": 1951,
	"roomType": [1,2],
	"accessible":true,
	"numRooms": 99,
	"kitchens": "General (3)",
	"bathrooms": "Two per floor",
	"program": "Sigma Chi Fraternity & Beta Omega Chi Fraternity",
	"img": "olney.jpg",
	"description":"TODO",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/OLNEY/PICTURES",
	"location": "Olney House, Providence, RI"
},


{
	"name": "Perkins Hall",
	"built": 1960,
	"roomType": [2],
	"accessible":true,
	"numRooms": 189,
	"kitchens": "General (4)",
	"bathrooms": "Two per floor",
	"program": "None",
	"img": "perkins.jpg",
	"description":"TODO",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/PERKINS/PICTURES",
	"location": "Perkins Hall, Providence, RI 02912"
},

{
	"name": "Plantation House",
	"built": 1896,
	"roomType": [1,2,3],
	"accessible":"Inaccesible",
	"numRooms": 10,
	"kitchens": 1,
	"bathrooms": "One per four doubles",
	"program": "None",
	"img": "plantation.jpg",
	"description":"TODO",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/WESTHSE/PICTURES",
	"location": "Plantations House, 219 Bowen St, Providence, RI 02912"
},

{
	"name": "Sears House",
	"built": 1951,
	"roomType": [1,2],
	"accessible":"Accessible",
	"numRooms": 79,
	"kitchens": 3,
	"bathrooms": "Two per floor",
	"program": "Alpha Chi Omega Sorority & Delta Tau Fraternity",
	"img": "sears.jpg",
	"description":"TODO",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/SEARS/PICTURES",
	"location": "Sears House, Providence, RI"
},


{
	"name": "West House",
	"built": 1885,
	"roomType": [1,2],
	"accessible":"Inaccessible",
	"numRooms": -1,
	"kitchens": 1,
	"bathrooms": "One per four doubles",
	"program": "Environmental Program House",
	"img": "west.jpg",
	"description":"TODO",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/WESTHSE/PICTURES",
	"location": "91 Brown St, Providence, RI 02906"
}

]

export {buildings};