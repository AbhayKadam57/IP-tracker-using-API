const ip = document.getElementById("ip-address")

const mylocation = document.getElementById("location")

const pincode = document.getElementById("pincode")


const time = document.getElementById("timezone")

const isp = document.getElementById("isp")

const search = document.getElementById("search")


const btnSearch = document.querySelector(".button")

const entered_ip = document.getElementById("search")


const Sheet3=  [
  {
      "Region": "Africa/Abidjan",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Accra",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Addis Ababa",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Africa/Algiers",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Asmara",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Africa/Bamako",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Bangui",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Banjul",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Bissau",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Blantyre",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Brazzaville",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Bujumbura",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Cairo",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Casablanca",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Ceuta",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Conakry",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Dakar",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Dar es Salaam",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Africa/Djibouti",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Africa/Douala",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/El Aaiun",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Freetown",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Gaborone",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Harare",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Johannesburg",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Juba",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Kampala",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Africa/Khartoum",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Kigali",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Kinshasa",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Lagos",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Libreville",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Lome",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Luanda",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Lubumbashi",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Lusaka",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Malabo",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Maputo",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Maseru",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Mbabane",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Mogadishu",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Africa/Monrovia",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Nairobi",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Africa/Ndjamena",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Niamey",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Nouakchott",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Ouagadougou",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Porto-Novo",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Sao Tome",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Africa/Tripoli",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Africa/Tunis",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Africa/Windhoek",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "America",
      "currenttimezone": "America"
  },
  {
      "Region": "America/Adak",
      "currenttimezone": "GMT -09:00"
  },
  {
      "Region": "America/Anchorage",
      "currenttimezone": "GMT -08:00"
  },
  {
      "Region": "America/Anguilla",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Antigua",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Araguaina",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/Buenos Aires",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/Catamarca",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/Cordoba",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/Jujuy",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/La Rioja",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/Mendoza",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/Rio Gallegos",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/Salta",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/San Juan",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/San Luis",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/Tucuman",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Argentina/Ushuaia",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Aruba",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Asuncion",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Atikokan",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Bahia",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Bahia Banderas",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Barbados",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Belem",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Belize",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Blanc-Sablon",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Boa Vista",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Bogota",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Boise",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Cambridge Bay",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Campo Grande",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Cancun",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Caracas",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Cayenne",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Cayman",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Chicago",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Chihuahua",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Costa Rica",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Creston",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Cuiaba",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Curacao",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Danmarkshavn",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "America/Dawson",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Dawson Creek",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Denver",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Detroit",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Dominica",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Edmonton",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Eirunepe",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/El Salvador",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Fort Nelson",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Fortaleza",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Glace Bay",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Goose Bay",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Grand Turk",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Grenada",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Guadeloupe",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Guatemala",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Guayaquil",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Guyana",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Halifax",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Havana",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Hermosillo",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Indiana/Indianapolis",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Indiana/Knox",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Indiana/Marengo",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Indiana/Petersburg",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Indiana/Tell City",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Indiana/Vevay",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Indiana/Vincennes",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Indiana/Winamac",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Inuvik",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Iqaluit",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Jamaica",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Juneau",
      "currenttimezone": "GMT -08:00"
  },
  {
      "Region": "America/Kentucky/Louisville",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Kentucky/Monticello",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Kralendijk",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/La Paz",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Lima",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Los Angeles",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Lower Princes",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Maceio",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Managua",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Manaus",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Marigot",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Martinique",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Matamoros",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Mazatlan",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Menominee",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Merida",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Metlakatla",
      "currenttimezone": "GMT -08:00"
  },
  {
      "Region": "America/Mexico City",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Miquelon",
      "currenttimezone": "GMT -02:00"
  },
  {
      "Region": "America/Moncton",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Monterrey",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Montevideo",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Montserrat",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Nassau",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/New York",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Nipigon",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Nome",
      "currenttimezone": "GMT -08:00"
  },
  {
      "Region": "America/Noronha",
      "currenttimezone": "GMT -02:00"
  },
  {
      "Region": "America/North Dakota/Beulah",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/North Dakota/Center",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/North Dakota/New Salem",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Nuuk",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Ojinaga",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Panama",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Pangnirtung",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Paramaribo",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Phoenix",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Port-au-Prince",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Port of Spain",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Porto Velho",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Puerto Rico",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Punta Arenas",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Rainy River",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Rankin Inlet",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Recife",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Regina",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Resolute",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Rio Branco",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Santarem",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Santiago",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Santo Domingo",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Sao Paulo",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Scoresbysund",
      "currenttimezone": "GMT -01:00"
  },
  {
      "Region": "America/Sitka",
      "currenttimezone": "GMT -08:00"
  },
  {
      "Region": "America/St Barthelemy",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/St Johns",
      "currenttimezone": "GMT -02:30"
  },
  {
      "Region": "America/St Kitts",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/St Lucia",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/St Thomas",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/St Vincent",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Swift Current",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Tegucigalpa",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "America/Thule",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "America/Thunder Bay",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Tijuana",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Toronto",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Tortola",
      "currenttimezone": "GMT -04:00"
  },
  {
      "Region": "America/Vancouver",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Whitehorse",
      "currenttimezone": "GMT -07:00"
  },
  {
      "Region": "America/Winnipeg",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "America/Yakutat",
      "currenttimezone": "GMT -08:00"
  },
  {
      "Region": "America/Yellowknife",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "Antarctica",
      "currenttimezone": "Antarctica"
  },
  {
      "Region": "Antarctica/Casey",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Antarctica/Davis",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Antarctica/DumontDUrville",
      "currenttimezone": "GMT +10:00"
  },
  {
      "Region": "Antarctica/Macquarie",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Antarctica/Mawson",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Antarctica/McMurdo",
      "currenttimezone": "GMT +13:00"
  },
  {
      "Region": "Antarctica/Palmer",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "Antarctica/Rothera",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "Antarctica/Syowa",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Antarctica/Troll",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Antarctica/Vostok",
      "currenttimezone": "GMT +06:00"
  },
  {
      "Region": "Arctic",
      "currenttimezone": "Arctic"
  },
  {
      "Region": "Arctic/Longyearbyen",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Asia",
      "currenttimezone": "Asia"
  },
  {
      "Region": "Asia/Aden",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Asia/Almaty",
      "currenttimezone": "GMT +06:00"
  },
  {
      "Region": "Asia/Amman",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Asia/Anadyr",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Asia/Aqtau",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Aqtobe",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Ashgabat",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Atyrau",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Baghdad",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Asia/Bahrain",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Asia/Baku",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Asia/Bangkok",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Barnaul",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Beirut",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Asia/Bishkek",
      "currenttimezone": "GMT +06:00"
  },
  {
      "Region": "Asia/Brunei",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Chita",
      "currenttimezone": "GMT +09:00"
  },
  {
      "Region": "Asia/Choibalsan",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Colombo",
      "currenttimezone": "GMT +05:30"
  },
  {
      "Region": "Asia/Damascus",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Asia/Dhaka",
      "currenttimezone": "GMT +06:00"
  },
  {
      "Region": "Asia/Dili",
      "currenttimezone": "GMT +09:00"
  },
  {
      "Region": "Asia/Dubai",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Asia/Dushanbe",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Famagusta",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Asia/Gaza",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Asia/Hebron",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Asia/Ho Chi Minh",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Hong Kong",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Hovd",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Irkutsk",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Jakarta",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Jayapura",
      "currenttimezone": "GMT +09:00"
  },
  {
      "Region": "Asia/Jerusalem",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Asia/Kabul",
      "currenttimezone": "GMT +04:30"
  },
  {
      "Region": "Asia/Kamchatka",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Asia/Karachi",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Kathmandu",
      "currenttimezone": "GMT +05:45"
  },
  {
      "Region": "Asia/Khandyga",
      "currenttimezone": "GMT +09:00"
  },
  {
      "Region": "Asia/Kolkata",
      "currenttimezone": "GMT +05:30"
  },
  {
      "Region": "Asia/Krasnoyarsk",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Kuala Lumpur",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Kuching",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Kuwait",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Asia/Macau",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Magadan",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Asia/Makassar",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Manila",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Muscat",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Asia/Nicosia",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Asia/Novokuznetsk",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Novosibirsk",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Omsk",
      "currenttimezone": "GMT +06:00"
  },
  {
      "Region": "Asia/Oral",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Phnom Penh",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Pontianak",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Pyongyang",
      "currenttimezone": "GMT +09:00"
  },
  {
      "Region": "Asia/Qatar",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Asia/Qostanay",
      "currenttimezone": "GMT +06:00"
  },
  {
      "Region": "Asia/Qyzylorda",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Riyadh",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Asia/Sakhalin",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Asia/Samarkand",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Seoul",
      "currenttimezone": "GMT +09:00"
  },
  {
      "Region": "Asia/Shanghai",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Singapore",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Srednekolymsk",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Asia/Taipei",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Tashkent",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Tbilisi",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Asia/Tehran",
      "currenttimezone": "GMT +03:30"
  },
  {
      "Region": "Asia/Thimphu",
      "currenttimezone": "GMT +06:00"
  },
  {
      "Region": "Asia/Tokyo",
      "currenttimezone": "GMT +09:00"
  },
  {
      "Region": "Asia/Tomsk",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Ulaanbaatar",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Asia/Urumqi",
      "currenttimezone": "GMT +06:00"
  },
  {
      "Region": "Asia/Ust-Nera",
      "currenttimezone": "GMT +10:00"
  },
  {
      "Region": "Asia/Vientiane",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Asia/Vladivostok",
      "currenttimezone": "GMT +10:00"
  },
  {
      "Region": "Asia/Yakutsk",
      "currenttimezone": "GMT +09:00"
  },
  {
      "Region": "Asia/Yangon",
      "currenttimezone": "GMT +06:30"
  },
  {
      "Region": "Asia/Yekaterinburg",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Asia/Yerevan",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Atlantic",
      "currenttimezone": "Atlantic"
  },
  {
      "Region": "Atlantic/Azores",
      "currenttimezone": "GMT -01:00"
  },
  {
      "Region": "Atlantic/Bermuda",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "Atlantic/Canary",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Atlantic/Cape Verde",
      "currenttimezone": "GMT -01:00"
  },
  {
      "Region": "Atlantic/Faroe",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Atlantic/Madeira",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Atlantic/Reykjavik",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Atlantic/South Georgia",
      "currenttimezone": "GMT -02:00"
  },
  {
      "Region": "Atlantic/St Helena",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Atlantic/Stanley",
      "currenttimezone": "GMT -03:00"
  },
  {
      "Region": "Australia",
      "currenttimezone": "Australia"
  },
  {
      "Region": "Australia/Adelaide",
      "currenttimezone": "GMT +10:30"
  },
  {
      "Region": "Australia/Brisbane",
      "currenttimezone": "GMT +10:00"
  },
  {
      "Region": "Australia/Broken Hill",
      "currenttimezone": "GMT +10:30"
  },
  {
      "Region": "Australia/Darwin",
      "currenttimezone": "GMT +09:30"
  },
  {
      "Region": "Australia/Eucla",
      "currenttimezone": "GMT +08:45"
  },
  {
      "Region": "Australia/Hobart",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Australia/Lindeman",
      "currenttimezone": "GMT +10:00"
  },
  {
      "Region": "Australia/Lord Howe",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Australia/Melbourne",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Australia/Perth",
      "currenttimezone": "GMT +08:00"
  },
  {
      "Region": "Australia/Sydney",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Europe",
      "currenttimezone": "Europe"
  },
  {
      "Region": "Europe/Amsterdam",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Andorra",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Astrakhan",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Europe/Athens",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Belgrade",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Berlin",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Bratislava",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Brussels",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Bucharest",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Budapest",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Busingen",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Chisinau",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Copenhagen",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Dublin",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Europe/Gibraltar",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Guernsey",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Europe/Helsinki",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Isle of Man",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Europe/Istanbul",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Europe/Jersey",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Europe/Kaliningrad",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Kiev",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Kirov",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Europe/Lisbon",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Europe/Ljubljana",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/London",
      "currenttimezone": "GMT +00:00"
  },
  {
      "Region": "Europe/Luxembourg",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Madrid",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Malta",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Mariehamn",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Minsk",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Europe/Monaco",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Moscow",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Europe/Oslo",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Paris",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Podgorica",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Prague",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Riga",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Rome",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Samara",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Europe/San Marino",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Sarajevo",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Saratov",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Europe/Simferopol",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Europe/Skopje",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Sofia",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Stockholm",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Tallinn",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Tirane",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Ulyanovsk",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Europe/Uzhgorod",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Vaduz",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Vatican",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Vienna",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Vilnius",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Volgograd",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Europe/Warsaw",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Zagreb",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Europe/Zaporozhye",
      "currenttimezone": "GMT +02:00"
  },
  {
      "Region": "Europe/Zurich",
      "currenttimezone": "GMT +01:00"
  },
  {
      "Region": "Indian",
      "currenttimezone": "Indian"
  },
  {
      "Region": "Indian/Antananarivo",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Indian/Chagos",
      "currenttimezone": "GMT +06:00"
  },
  {
      "Region": "Indian/Christmas",
      "currenttimezone": "GMT +07:00"
  },
  {
      "Region": "Indian/Cocos",
      "currenttimezone": "GMT +06:30"
  },
  {
      "Region": "Indian/Comoro",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Indian/Kerguelen",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Indian/Mahe",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Indian/Maldives",
      "currenttimezone": "GMT +05:00"
  },
  {
      "Region": "Indian/Mauritius",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Indian/Mayotte",
      "currenttimezone": "GMT +03:00"
  },
  {
      "Region": "Indian/Reunion",
      "currenttimezone": "GMT +04:00"
  },
  {
      "Region": "Pacific",
      "currenttimezone": "Pacific"
  },
  {
      "Region": "Pacific/Apia",
      "currenttimezone": "GMT +13:00"
  },
  {
      "Region": "Pacific/Auckland",
      "currenttimezone": "GMT +13:00"
  },
  {
      "Region": "Pacific/Bougainville",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Pacific/Chatham",
      "currenttimezone": "GMT +13:45"
  },
  {
      "Region": "Pacific/Chuuk",
      "currenttimezone": "GMT +10:00"
  },
  {
      "Region": "Pacific/Easter",
      "currenttimezone": "GMT -05:00"
  },
  {
      "Region": "Pacific/Efate",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Pacific/Fakaofo",
      "currenttimezone": "GMT +13:00"
  },
  {
      "Region": "Pacific/Fiji",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Pacific/Funafuti",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Pacific/Galapagos",
      "currenttimezone": "GMT -06:00"
  },
  {
      "Region": "Pacific/Gambier",
      "currenttimezone": "GMT -09:00"
  },
  {
      "Region": "Pacific/Guadalcanal",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Pacific/Guam",
      "currenttimezone": "GMT +10:00"
  },
  {
      "Region": "Pacific/Honolulu",
      "currenttimezone": "GMT -10:00"
  },
  {
      "Region": "Pacific/Kanton",
      "currenttimezone": "GMT +13:00"
  },
  {
      "Region": "Pacific/Kiritimati",
      "currenttimezone": "GMT +14:00"
  },
  {
      "Region": "Pacific/Kosrae",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Pacific/Kwajalein",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Pacific/Majuro",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Pacific/Marquesas",
      "currenttimezone": "GMT -09:30"
  },
  {
      "Region": "Pacific/Midway",
      "currenttimezone": "GMT -11:00"
  },
  {
      "Region": "Pacific/Nauru",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Pacific/Niue",
      "currenttimezone": "GMT -11:00"
  },
  {
      "Region": "Pacific/Norfolk",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Pacific/Noumea",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Pacific/Pago Pago",
      "currenttimezone": "GMT -11:00"
  },
  {
      "Region": "Pacific/Palau",
      "currenttimezone": "GMT +09:00"
  },
  {
      "Region": "Pacific/Pitcairn",
      "currenttimezone": "GMT -08:00"
  },
  {
      "Region": "Pacific/Pohnpei",
      "currenttimezone": "GMT +11:00"
  },
  {
      "Region": "Pacific/Port Moresby",
      "currenttimezone": "GMT +10:00"
  },
  {
      "Region": "Pacific/Rarotonga",
      "currenttimezone": "GMT -10:00"
  },
  {
      "Region": "Pacific/Saipan",
      "currenttimezone": "GMT +10:00"
  },
  {
      "Region": "Pacific/Tahiti",
      "currenttimezone": "GMT -10:00"
  },
  {
      "Region": "Pacific/Tarawa",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Pacific/Tongatapu",
      "currenttimezone": "GMT +13:00"
  },
  {
      "Region": "Pacific/Wake",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "Pacific/Wallis",
      "currenttimezone": "GMT +12:00"
  },
  {
      "Region": "UTC",
      "currenttimezone": "UTC (GMT)"
  },
  {
      "Region": "UTC",
      "currenttimezone": "GMT +00:00"
  }
]


const map = L.map("map",{

    "center":[0,0],
    "zoom":0,
    "layers" :[

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          })
    ]


})

updateMarker = (update_Marker=[-33.675,45.786])=>{

    map.setView(update_Marker,13)
    L.marker(update_Marker).addTo(map)

}

getIPDetails=(default_ip)=>{

    fetch(`https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=${default_ip}&apikey=873dbe322aea47f89dcf729dcc8f60e8`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
            "x-rapidapi-key": "0a58c523efmsh5fa9bfaabaf56ccp15310fjsn187501fba186"
        }
    })
    .then(response=>response.json())
    .then(data=>{

        ip.innerHTML = data.ip
        mylocation.innerHTML = data.city
        pincode.innerHTML = data.zipCode
        isp.innerHTML = data.org

        region = data.timezone

        const mytime = Sheet3.filter(function(items){

            if(items.Region===region){

                return items
            }



        })

        time.innerHTML = mytime[0]["currenttimezone"]

        updateMarker([data.latitude,data.longitude])

    })


}

document.addEventListener("load",updateMarker())


btnSearch.addEventListener("click",(e)=>{

    e.preventDefault();
    if(entered_ip.value!=="" && entered_ip.value!==null){

        getIPDetails(entered_ip.value)
        return
    }

    alert("Please enter correct ip address")


})