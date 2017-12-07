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
		"navLink":"https://goo.gl/maps/d1feMnFYU4U2",
		"location": "41.826134, -71.400644"
	},
	{
		"name":"Buxton House",
		"built":1951,
		"roomType":[1,2],
		"accessible":true,
		"numRooms": "Rooms not granted through Housing Lottery",
		"kitchens": "General (1)",
		"bathrooms": "Two per floor",
		"program": "International House",
		"img":"buxton.jpg",
		"description":"Residents feel on top of the world (if the world were a dining hall). This year, the Harvest Fest in the basement didn't have chicken pot pie.",
		"navLink":"https://goo.gl/maps/M4zpGo4Cwp82",
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
		"navLink":"https://goo.gl/maps/CKczionqspj",
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
		"program": "Theta Delta Chi Fraternity & Haram	bee House",
		"img":"chapin.jpg",
		"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
		"navLink":"https://goo.gl/maps/CKczionqspj",
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
		"navLink":"https://goo.gl/maps/CKczionqspj",
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
		"navLink":"https://goo.gl/maps/CKczionqspj",
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
		"navLink":"https://goo.gl/maps/CKczionqspj",
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
		"navLink":"https://goo.gl/maps/CKczionqspj",
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
		"navLink":"https://goo.gl/maps/CKczionqspj",
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
		"navLink":"https://goo.gl/maps/CKczionqspj",
		"location":"41.824878, -71.401378"

	},

	{
		"name":"King House",
		"built":1895,
		"roomType":[1,2],
		"accessible":false,
		"numRooms": "Rooms not granted through Housing Lottery",
		"kitchens": "General (1)",
		"bathrooms": "Two per floor",
		"program": "St. Anthony Hall",
		"img":"kings.jpg",
		"description":"Named for William Marcy, class of 1808, who became the Comptroller of the State of New York. I didn't think they had computers back in 1808 but my history knowledge is fuzzy. Houses the Jewish fraternity but not many Jews.",
		"navLink":"https://goo.gl/maps/CKczionqspj",
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
		"navLink":"https://goo.gl/maps/CKczionqspj",
		"location":"41.824878, -71.401378"

	}
]

export {buildings};