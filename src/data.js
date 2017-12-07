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
	"description":"A 100 year old, three story home, 111 Brown Street is Brown's smallest residence hall, housing only 13 students. Offering all the perks of living in a house, the building has a small but complete kitchen, a spacious living room, as well as a small backyard. 111 Brown Street is designated as a sophomore-only residence hall and is popular amongst students wanting easy access to a kitchen or to live in a close knit community.",
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
	"description":"Built in 1904 and originally part of Bryant College, Barbour Hall is named in honor of Brown's tenth president, Clarence Barbour. The singles and doubles in Barbour Hall are some of the largest on campus, with each room having a sink, toilet, and shower in an adjoining room. Additionally, there is a walk-in closet in each each room.",
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
	"description":"Buxton was named for Colonel G. Edward Buxton, Jr., '02, who was second in command of the OSS during World War II, a former Treasurer of the Providence Journal Company, and Chairman of the Housing and Development Campaign for Wriston Quadrangle.",
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
	"description":"Caswell is restricted entirely to sophomores. One of the older dorms on campus (built in 1903), Caswell Hall features spacious rooms, many of which have non-functioning fireplaces and window seats. Caswell is divided into three sections - North, Middle, and South - which connect only in the basement. Each section contains 15 doubles and tends to become tight-knit.",
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
	"description":"Chapin House is named for Dr. Charles V. Chapin, 1876, Professor of Physiology at Brown and nationally known authority on public health. Chapin spent 48 years as Superintendent of Health in Providence, and originated modern methods of treating infectious diseases in the Providence City Hospital.",
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
	"description":"Diman House is named for Jeremiah Lewis Diman, class of 1851, and professor of History at Brown for 17 years.",
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
	"description":"Goddard House is named for William Giles Goddard, a member of the class of 1812, professor of Moral Philosophy and Metaphysics for 17 years, and Trustee and Fellow of the University.",
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
	"description":"Built in 1968, the Graduate Center consists of four residential towers connected by bridge walkways to a common building., which houses the Bear's Lair Student Center (with pinball, video games, projection TV, and exercise room) as well as the Brown University Faculty and Graduate School Club and the Office of Summer and Continuing Studies. There are three entrances to the towers - two on Thayer Street with spiral staircases leading to the terrace and one on Charlesfield Street. The suites in the Graduate Center vary in size between four and six singles per suite, with the majority containing five. Each suite shares a common hallway and a bathroom. Each bedroom has its own phone line. The rooms are fairly large, carpeted, and contain generous closet space. Each floor of a Tower contains four suites, one on each corner of the building, connected by common corridors and two staircases.",
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
	"description":"Renamed in honor of Brown's 16th president, Vartan Gregorian Quad opened in September 1991 as the Thayer Street Quadrangle. More affectionately known as New Dorm, Gregorian Quad is divided into two L-shaped wings with a grassy quadrangle in the middle. The Quad is also home to Josiah's snack bar, named after famed Professor of Psychoceramics Josiah S. Carberry. The fourth floor of each building houses a number of singles and doubles, while the lower floors consist of suites. Every suite is carpeted and consists of a living room, furnished with couches, tables and a sink, surrounded by single bedrooms. There are closets in the bedrooms and in the hallway. Suites on the second and third floors feature 8' bay windows in the living room.",
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
	"description":"Harkness House is named for Professor Albert Harkness, a member of the class of 1842 and professor of Classics at Brown from 1855 to 1892. Harkness was also a founder of the American Philological Association and the American School of Classical Studies in Athens, and a Fellow of the University from 1904 to 1907.",
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
	"description":"Built in 1822 and named after Hope Brown Ives, Hope College is the oldest residence hall on campus. In 1959, Hope College was reconstructed into the building that stands today. A four story brick building on the Main Green, the building's location is often considered amongst the best of all the residence halls. Hope College is currently used as a second-year building.",
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
	"description":"Acquired in 1969 when Brown purchased the building from Bryant College, King House was originally named Taft and was used as Bryant's administration building. In 1974, the building was renamed King House in honor of Lida Shaw King, former dean of Pembroke College. King House is now home to St. Anthony Hall, one of Brown's program houses.",
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
	"description":"Built in 1925, Littlefield Hall adjoins Maxcy Hall (once a residence hall and now home to the Sociology Department) and his named for George L. Littlefield, president of the First National Bank of Providence. The hall is composed of primarily doubles designated for sophomore-year housing.",
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
	"description": "Built in 1912, Machado House (formerly Ellen Dexter Sharp House) is a two and a half story, brick, Elizabethan Revival style house. Brown purchased the house in 1955 from the Rhode Island School of Design and in 1975 constructed an addition at the rear of the building. It was dedicated in 1989 as Antonio Machado House (in honor of the Spanish poet).",
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
	"description":"Marcy House is named after a member of the class of 1808 William L. Marcy, Comptroller of the State of New York, U.S. Senator, Governor of New York for three terms, Secretary of War, and U.S. Secretary of State. The highest peak in the Adirondacks, Mount Marcy, near Lake Placid, also bears his name.",
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
	"description":"Formerly a hotel and then a Johnson & Wales University residence hall, Minden Hall underwent extensive renovation in 2002 and now houses Brown students. Minden is unique in its configuration of having many rooms organized into singles, doubles, and four-person suites that contain a private bathroom. Not all bedroom doors in suites are lockable because of the bathroom configuration and some suites do not contain showers and instead rely upon shower rooms off the hall. Minden has a kitchen on its first floor containing two ovens but has no stove tops.",
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
	"description":"New Pembroke is a four-building complex on the corner of Bowen and Thayer Streets designed by Donlyn Lyndon, Professor and Chairman of the architecture department at M.I.T., an architect with the firm Moore, Lyndon and Tumbull of Boston and New Haven, and Chairman of the Board of Lyndon Associates, Inc. The buildings were designed to blend well into an area occupied by small stores and large 19th century homes. The architects were so successful in achieving this objective that the design was awarded first place from among 670 entries in an annual nationwide competition sponsored by the magazine Progressive Architecture.",
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
	"description":"Built in 1960, Perkins Hall was originally constructed by Bryant College and named Gardner Hall. Brown bought the building in 1969, when Bryant moved to Smithfield, Rhode Island. In 1974, the building was renamed as Perkins Hall in honor of Judge Fred B. Perkins '19. Today, the building houses near entirely second-year students, with the only singles in the building used to house Counselors.",
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
	"description":"Originally used as a study center and a place to stay overnight for commuter students, Plantations House now serves as one of the smallest residence halls on campus, housing 16 students total. The house, located at 219 Bowen Street, features ample common space on the first floor as well as a full sized kitchen with pantry.",
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
	"description":"Sears is named for Barnas Sears, a member of the class of 1825, and President of the University following President Francis Wayland during the years 1855 to 1867.",
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
	"description":"West House, a three story house located on the corner of Brown and Meeting Streets is home to Environmental House, one of Brown's program houses.",
	"brownMap":"https://www.brown.edu/Facilities/Facilities_Management/maps/#building/WESTHSE/PICTURES",
	"location": "91 Brown St, Providence, RI 02906"
}

]

export {buildings};