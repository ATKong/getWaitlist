'use strict';
var gw_font_color,
	gw_background_color,
	gw_button_font_color,
	gw_button_color,
	gw_border_color,
	gw_waitlist_name,
	gw_signup_button_title,
	gw_title,
	gw_success_title,
	gw_waitlist_obj,
	gw_waiter_obj,
	gw_leaderboard,
	gw_heartbeat_uuid,
	gw_country_codes = [
		{
			name: 'United States',
			value: '+1',
			code: 'US',
			label: 'United States +1',
			numeric: 1,
		},
		{
			name: 'Afghanistan',
			value: '+93',
			code: 'AF',
			label: 'Afghanistan +93',
			numeric: 93,
		},
		{
			name: 'Aland Islands',
			value: '+358',
			code: 'AX',
			label: 'Aland Islands +358',
			numeric: 358,
		},
		{
			name: 'Albania',
			value: '+355',
			code: 'AL',
			label: 'Albania +355',
			numeric: 355,
		},
		{
			name: 'Algeria',
			value: '+213',
			code: 'DZ',
			label: 'Algeria +213',
			numeric: 213,
		},
		{
			name: 'AmericanSamoa',
			value: '+1684',
			code: 'AS',
			label: 'AmericanSamoa +1684',
			numeric: 1684,
		},
		{
			name: 'Andorra',
			value: '+376',
			code: 'AD',
			label: 'Andorra +376',
			numeric: 376,
		},
		{
			name: 'Angola',
			value: '+244',
			code: 'AO',
			label: 'Angola +244',
			numeric: 244,
		},
		{
			name: 'Anguilla',
			value: '+1264',
			code: 'AI',
			label: 'Anguilla +1264',
			numeric: 1264,
		},
		{
			name: 'Antarctica',
			value: '+672',
			code: 'AQ',
			label: 'Antarctica +672',
			numeric: 672,
		},
		{
			name: 'Antigua and Barbuda',
			value: '+1268',
			code: 'AG',
			label: 'Antigua and Barbuda +1268',
			numeric: 1268,
		},
		{
			name: 'Argentina',
			value: '+54',
			code: 'AR',
			label: 'Argentina +54',
			numeric: 54,
		},
		{
			name: 'Armenia',
			value: '+374',
			code: 'AM',
			label: 'Armenia +374',
			numeric: 374,
		},
		{
			name: 'Aruba',
			value: '+297',
			code: 'AW',
			label: 'Aruba +297',
			numeric: 297,
		},
		{
			name: 'Australia',
			value: '+61',
			code: 'AU',
			label: 'Australia +61',
			numeric: 61,
		},
		{
			name: 'Austria',
			value: '+43',
			code: 'AT',
			label: 'Austria +43',
			numeric: 43,
		},
		{
			name: 'Azerbaijan',
			value: '+994',
			code: 'AZ',
			label: 'Azerbaijan +994',
			numeric: 994,
		},
		{
			name: 'Bahamas',
			value: '+1242',
			code: 'BS',
			label: 'Bahamas +1242',
			numeric: 1242,
		},
		{
			name: 'Bahrain',
			value: '+973',
			code: 'BH',
			label: 'Bahrain +973',
			numeric: 973,
		},
		{
			name: 'Bangladesh',
			value: '+880',
			code: 'BD',
			label: 'Bangladesh +880',
			numeric: 880,
		},
		{
			name: 'Barbados',
			value: '+1246',
			code: 'BB',
			label: 'Barbados +1246',
			numeric: 1246,
		},
		{
			name: 'Belarus',
			value: '+375',
			code: 'BY',
			label: 'Belarus +375',
			numeric: 375,
		},
		{
			name: 'Belgium',
			value: '+32',
			code: 'BE',
			label: 'Belgium +32',
			numeric: 32,
		},
		{
			name: 'Belize',
			value: '+501',
			code: 'BZ',
			label: 'Belize +501',
			numeric: 501,
		},
		{
			name: 'Benin',
			value: '+229',
			code: 'BJ',
			label: 'Benin +229',
			numeric: 229,
		},
		{
			name: 'Bermuda',
			value: '+1441',
			code: 'BM',
			label: 'Bermuda +1441',
			numeric: 1441,
		},
		{
			name: 'Bhutan',
			value: '+975',
			code: 'BT',
			label: 'Bhutan +975',
			numeric: 975,
		},
		{
			name: 'Bolivia, Plurinational State of',
			value: '+591',
			code: 'BO',
			label: 'Bolivia, Plurinational State of +591',
			numeric: 591,
		},
		{
			name: 'Bosnia and Herzegovina',
			value: '+387',
			code: 'BA',
			label: 'Bosnia and Herzegovina +387',
			numeric: 387,
		},
		{
			name: 'Botswana',
			value: '+267',
			code: 'BW',
			label: 'Botswana +267',
			numeric: 267,
		},
		{
			name: 'Brazil',
			value: '+55',
			code: 'BR',
			label: 'Brazil +55',
			numeric: 55,
		},
		{
			name: 'British Indian Ocean Territory',
			value: '+246',
			code: 'IO',
			label: 'British Indian Ocean Territory +246',
			numeric: 246,
		},
		{
			name: 'Brunei Darussalam',
			value: '+673',
			code: 'BN',
			label: 'Brunei Darussalam +673',
			numeric: 673,
		},
		{
			name: 'Bulgaria',
			value: '+359',
			code: 'BG',
			label: 'Bulgaria +359',
			numeric: 359,
		},
		{
			name: 'Burkina Faso',
			value: '+226',
			code: 'BF',
			label: 'Burkina Faso +226',
			numeric: 226,
		},
		{
			name: 'Burundi',
			value: '+257',
			code: 'BI',
			label: 'Burundi +257',
			numeric: 257,
		},
		{
			name: 'Cambodia',
			value: '+855',
			code: 'KH',
			label: 'Cambodia +855',
			numeric: 855,
		},
		{
			name: 'Cameroon',
			value: '+237',
			code: 'CM',
			label: 'Cameroon +237',
			numeric: 237,
		},
		{ name: 'Canada', value: '+1', code: 'CA', label: 'Canada +1', numeric: 1 },
		{
			name: 'Cape Verde',
			value: '+238',
			code: 'CV',
			label: 'Cape Verde +238',
			numeric: 238,
		},
		{
			name: 'Cayman Islands',
			value: '+ 345',
			code: 'KY',
			label: 'Cayman Islands + 345',
			numeric: 345,
		},
		{
			name: 'Central African Republic',
			value: '+236',
			code: 'CF',
			label: 'Central African Republic +236',
			numeric: 236,
		},
		{
			name: 'Chad',
			value: '+235',
			code: 'TD',
			label: 'Chad +235',
			numeric: 235,
		},
		{
			name: 'Chile',
			value: '+56',
			code: 'CL',
			label: 'Chile +56',
			numeric: 56,
		},
		{
			name: 'China',
			value: '+86',
			code: 'CN',
			label: 'China +86',
			numeric: 86,
		},
		{
			name: 'Christmas Island',
			value: '+61',
			code: 'CX',
			label: 'Christmas Island +61',
			numeric: 61,
		},
		{
			name: 'Cocos (Keeling) Islands',
			value: '+61',
			code: 'CC',
			label: 'Cocos (Keeling) Islands +61',
			numeric: 61,
		},
		{
			name: 'Colombia',
			value: '+57',
			code: 'CO',
			label: 'Colombia +57',
			numeric: 57,
		},
		{
			name: 'Comoros',
			value: '+269',
			code: 'KM',
			label: 'Comoros +269',
			numeric: 269,
		},
		{
			name: 'Congo',
			value: '+242',
			code: 'CG',
			label: 'Congo +242',
			numeric: 242,
		},
		{
			name: 'Congo, The Democratic Republic of the Congo',
			value: '+243',
			code: 'CD',
			label: 'Congo, The Democratic Republic of the Congo +243',
			numeric: 243,
		},
		{
			name: 'Cook Islands',
			value: '+682',
			code: 'CK',
			label: 'Cook Islands +682',
			numeric: 682,
		},
		{
			name: 'Costa Rica',
			value: '+506',
			code: 'CR',
			label: 'Costa Rica +506',
			numeric: 506,
		},
		{
			name: "Cote d'Ivoire",
			value: '+225',
			code: 'CI',
			label: "Cote d'Ivoire +225",
			numeric: 225,
		},
		{
			name: 'Croatia',
			value: '+385',
			code: 'HR',
			label: 'Croatia +385',
			numeric: 385,
		},
		{ name: 'Cuba', value: '+53', code: 'CU', label: 'Cuba +53', numeric: 53 },
		{
			name: 'Cyprus',
			value: '+357',
			code: 'CY',
			label: 'Cyprus +357',
			numeric: 357,
		},
		{
			name: 'Czech Republic',
			value: '+420',
			code: 'CZ',
			label: 'Czech Republic +420',
			numeric: 420,
		},
		{
			name: 'Denmark',
			value: '+45',
			code: 'DK',
			label: 'Denmark +45',
			numeric: 45,
		},
		{
			name: 'Djibouti',
			value: '+253',
			code: 'DJ',
			label: 'Djibouti +253',
			numeric: 253,
		},
		{
			name: 'Dominica',
			value: '+1767',
			code: 'DM',
			label: 'Dominica +1767',
			numeric: 1767,
		},
		{
			name: 'Dominican Republic',
			value: '+1849',
			code: 'DO',
			label: 'Dominican Republic +1849',
			numeric: 1849,
		},
		{
			name: 'Ecuador',
			value: '+593',
			code: 'EC',
			label: 'Ecuador +593',
			numeric: 593,
		},
		{
			name: 'Egypt',
			value: '+20',
			code: 'EG',
			label: 'Egypt +20',
			numeric: 20,
		},
		{
			name: 'El Salvador',
			value: '+503',
			code: 'SV',
			label: 'El Salvador +503',
			numeric: 503,
		},
		{
			name: 'Equatorial Guinea',
			value: '+240',
			code: 'GQ',
			label: 'Equatorial Guinea +240',
			numeric: 240,
		},
		{
			name: 'Eritrea',
			value: '+291',
			code: 'ER',
			label: 'Eritrea +291',
			numeric: 291,
		},
		{
			name: 'Estonia',
			value: '+372',
			code: 'EE',
			label: 'Estonia +372',
			numeric: 372,
		},
		{
			name: 'Ethiopia',
			value: '+251',
			code: 'ET',
			label: 'Ethiopia +251',
			numeric: 251,
		},
		{
			name: 'Falkland Islands (Malvinas)',
			value: '+500',
			code: 'FK',
			label: 'Falkland Islands (Malvinas) +500',
			numeric: 500,
		},
		{
			name: 'Faroe Islands',
			value: '+298',
			code: 'FO',
			label: 'Faroe Islands +298',
			numeric: 298,
		},
		{
			name: 'Fiji',
			value: '+679',
			code: 'FJ',
			label: 'Fiji +679',
			numeric: 679,
		},
		{
			name: 'Finland',
			value: '+358',
			code: 'FI',
			label: 'Finland +358',
			numeric: 358,
		},
		{
			name: 'France',
			value: '+33',
			code: 'FR',
			label: 'France +33',
			numeric: 33,
		},
		{
			name: 'French Guiana',
			value: '+594',
			code: 'GF',
			label: 'French Guiana +594',
			numeric: 594,
		},
		{
			name: 'French Polynesia',
			value: '+689',
			code: 'PF',
			label: 'French Polynesia +689',
			numeric: 689,
		},
		{
			name: 'Gabon',
			value: '+241',
			code: 'GA',
			label: 'Gabon +241',
			numeric: 241,
		},
		{
			name: 'Gambia',
			value: '+220',
			code: 'GM',
			label: 'Gambia +220',
			numeric: 220,
		},
		{
			name: 'Georgia',
			value: '+995',
			code: 'GE',
			label: 'Georgia +995',
			numeric: 995,
		},
		{
			name: 'Germany',
			value: '+49',
			code: 'DE',
			label: 'Germany +49',
			numeric: 49,
		},
		{
			name: 'Ghana',
			value: '+233',
			code: 'GH',
			label: 'Ghana +233',
			numeric: 233,
		},
		{
			name: 'Gibraltar',
			value: '+350',
			code: 'GI',
			label: 'Gibraltar +350',
			numeric: 350,
		},
		{
			name: 'Greece',
			value: '+30',
			code: 'GR',
			label: 'Greece +30',
			numeric: 30,
		},
		{
			name: 'Greenland',
			value: '+299',
			code: 'GL',
			label: 'Greenland +299',
			numeric: 299,
		},
		{
			name: 'Grenada',
			value: '+1473',
			code: 'GD',
			label: 'Grenada +1473',
			numeric: 1473,
		},
		{
			name: 'Guadeloupe',
			value: '+590',
			code: 'GP',
			label: 'Guadeloupe +590',
			numeric: 590,
		},
		{
			name: 'Guam',
			value: '+1671',
			code: 'GU',
			label: 'Guam +1671',
			numeric: 1671,
		},
		{
			name: 'Guatemala',
			value: '+502',
			code: 'GT',
			label: 'Guatemala +502',
			numeric: 502,
		},
		{
			name: 'Guernsey',
			value: '+44',
			code: 'GG',
			label: 'Guernsey +44',
			numeric: 44,
		},
		{
			name: 'Guinea',
			value: '+224',
			code: 'GN',
			label: 'Guinea +224',
			numeric: 224,
		},
		{
			name: 'Guinea-Bissau',
			value: '+245',
			code: 'GW',
			label: 'Guinea-Bissau +245',
			numeric: 245,
		},
		{
			name: 'Guyana',
			value: '+595',
			code: 'GY',
			label: 'Guyana +595',
			numeric: 595,
		},
		{
			name: 'Haiti',
			value: '+509',
			code: 'HT',
			label: 'Haiti +509',
			numeric: 509,
		},
		{
			name: 'Holy See (Vatican City State)',
			value: '+379',
			code: 'VA',
			label: 'Holy See (Vatican City State) +379',
			numeric: 379,
		},
		{
			name: 'Honduras',
			value: '+504',
			code: 'HN',
			label: 'Honduras +504',
			numeric: 504,
		},
		{
			name: 'Hong Kong',
			value: '+852',
			code: 'HK',
			label: 'Hong Kong +852',
			numeric: 852,
		},
		{
			name: 'Hungary',
			value: '+36',
			code: 'HU',
			label: 'Hungary +36',
			numeric: 36,
		},
		{
			name: 'Iceland',
			value: '+354',
			code: 'IS',
			label: 'Iceland +354',
			numeric: 354,
		},
		{
			name: 'India',
			value: '+91',
			code: 'IN',
			label: 'India +91',
			numeric: 91,
		},
		{
			name: 'Indonesia',
			value: '+62',
			code: 'ID',
			label: 'Indonesia +62',
			numeric: 62,
		},
		{
			name: 'Iran, Islamic Republic of Persian Gulf',
			value: '+98',
			code: 'IR',
			label: 'Iran, Islamic Republic of Persian Gulf +98',
			numeric: 98,
		},
		{
			name: 'Iraq',
			value: '+964',
			code: 'IQ',
			label: 'Iraq +964',
			numeric: 964,
		},
		{
			name: 'Ireland',
			value: '+353',
			code: 'IE',
			label: 'Ireland +353',
			numeric: 353,
		},
		{
			name: 'Isle of Man',
			value: '+44',
			code: 'IM',
			label: 'Isle of Man +44',
			numeric: 44,
		},
		{
			name: 'Israel',
			value: '+972',
			code: 'IL',
			label: 'Israel +972',
			numeric: 972,
		},
		{
			name: 'Italy',
			value: '+39',
			code: 'IT',
			label: 'Italy +39',
			numeric: 39,
		},
		{
			name: 'Jamaica',
			value: '+1876',
			code: 'JM',
			label: 'Jamaica +1876',
			numeric: 1876,
		},
		{
			name: 'Japan',
			value: '+81',
			code: 'JP',
			label: 'Japan +81',
			numeric: 81,
		},
		{
			name: 'Jersey',
			value: '+44',
			code: 'JE',
			label: 'Jersey +44',
			numeric: 44,
		},
		{
			name: 'Jordan',
			value: '+962',
			code: 'JO',
			label: 'Jordan +962',
			numeric: 962,
		},
		{
			name: 'Kazakhstan',
			value: '+77',
			code: 'KZ',
			label: 'Kazakhstan +77',
			numeric: 77,
		},
		{
			name: 'Kenya',
			value: '+254',
			code: 'KE',
			label: 'Kenya +254',
			numeric: 254,
		},
		{
			name: 'Kiribati',
			value: '+686',
			code: 'KI',
			label: 'Kiribati +686',
			numeric: 686,
		},
		{
			name: "Korea, Democratic People's Republic of Korea",
			value: '+850',
			code: 'KP',
			label: "Korea, Democratic People's Republic of Korea +850",
			numeric: 850,
		},
		{
			name: 'Korea, Republic of South Korea',
			value: '+82',
			code: 'KR',
			label: 'Korea, Republic of South Korea +82',
			numeric: 82,
		},
		{
			name: 'Kuwait',
			value: '+965',
			code: 'KW',
			label: 'Kuwait +965',
			numeric: 965,
		},
		{
			name: 'Kyrgyzstan',
			value: '+996',
			code: 'KG',
			label: 'Kyrgyzstan +996',
			numeric: 996,
		},
		{
			name: 'Laos',
			value: '+856',
			code: 'LA',
			label: 'Laos +856',
			numeric: 856,
		},
		{
			name: 'Latvia',
			value: '+371',
			code: 'LV',
			label: 'Latvia +371',
			numeric: 371,
		},
		{
			name: 'Lebanon',
			value: '+961',
			code: 'LB',
			label: 'Lebanon +961',
			numeric: 961,
		},
		{
			name: 'Lesotho',
			value: '+266',
			code: 'LS',
			label: 'Lesotho +266',
			numeric: 266,
		},
		{
			name: 'Liberia',
			value: '+231',
			code: 'LR',
			label: 'Liberia +231',
			numeric: 231,
		},
		{
			name: 'Libyan Arab Jamahiriya',
			value: '+218',
			code: 'LY',
			label: 'Libyan Arab Jamahiriya +218',
			numeric: 218,
		},
		{
			name: 'Liechtenstein',
			value: '+423',
			code: 'LI',
			label: 'Liechtenstein +423',
			numeric: 423,
		},
		{
			name: 'Lithuania',
			value: '+370',
			code: 'LT',
			label: 'Lithuania +370',
			numeric: 370,
		},
		{
			name: 'Luxembourg',
			value: '+352',
			code: 'LU',
			label: 'Luxembourg +352',
			numeric: 352,
		},
		{
			name: 'Macao',
			value: '+853',
			code: 'MO',
			label: 'Macao +853',
			numeric: 853,
		},
		{
			name: 'Macedonia',
			value: '+389',
			code: 'MK',
			label: 'Macedonia +389',
			numeric: 389,
		},
		{
			name: 'Madagascar',
			value: '+261',
			code: 'MG',
			label: 'Madagascar +261',
			numeric: 261,
		},
		{
			name: 'Malawi',
			value: '+265',
			code: 'MW',
			label: 'Malawi +265',
			numeric: 265,
		},
		{
			name: 'Malaysia',
			value: '+60',
			code: 'MY',
			label: 'Malaysia +60',
			numeric: 60,
		},
		{
			name: 'Maldives',
			value: '+960',
			code: 'MV',
			label: 'Maldives +960',
			numeric: 960,
		},
		{
			name: 'Mali',
			value: '+223',
			code: 'ML',
			label: 'Mali +223',
			numeric: 223,
		},
		{
			name: 'Malta',
			value: '+356',
			code: 'MT',
			label: 'Malta +356',
			numeric: 356,
		},
		{
			name: 'Marshall Islands',
			value: '+692',
			code: 'MH',
			label: 'Marshall Islands +692',
			numeric: 692,
		},
		{
			name: 'Martinique',
			value: '+596',
			code: 'MQ',
			label: 'Martinique +596',
			numeric: 596,
		},
		{
			name: 'Mauritania',
			value: '+222',
			code: 'MR',
			label: 'Mauritania +222',
			numeric: 222,
		},
		{
			name: 'Mauritius',
			value: '+230',
			code: 'MU',
			label: 'Mauritius +230',
			numeric: 230,
		},
		{
			name: 'Mayotte',
			value: '+262',
			code: 'YT',
			label: 'Mayotte +262',
			numeric: 262,
		},
		{
			name: 'Mexico',
			value: '+52',
			code: 'MX',
			label: 'Mexico +52',
			numeric: 52,
		},
		{
			name: 'Micronesia, Federated States of Micronesia',
			value: '+691',
			code: 'FM',
			label: 'Micronesia, Federated States of Micronesia +691',
			numeric: 691,
		},
		{
			name: 'Moldova',
			value: '+373',
			code: 'MD',
			label: 'Moldova +373',
			numeric: 373,
		},
		{
			name: 'Monaco',
			value: '+377',
			code: 'MC',
			label: 'Monaco +377',
			numeric: 377,
		},
		{
			name: 'Mongolia',
			value: '+976',
			code: 'MN',
			label: 'Mongolia +976',
			numeric: 976,
		},
		{
			name: 'Montenegro',
			value: '+382',
			code: 'ME',
			label: 'Montenegro +382',
			numeric: 382,
		},
		{
			name: 'Montserrat',
			value: '+1664',
			code: 'MS',
			label: 'Montserrat +1664',
			numeric: 1664,
		},
		{
			name: 'Morocco',
			value: '+212',
			code: 'MA',
			label: 'Morocco +212',
			numeric: 212,
		},
		{
			name: 'Mozambique',
			value: '+258',
			code: 'MZ',
			label: 'Mozambique +258',
			numeric: 258,
		},
		{
			name: 'Myanmar',
			value: '+95',
			code: 'MM',
			label: 'Myanmar +95',
			numeric: 95,
		},
		{
			name: 'Namibia',
			value: '+264',
			code: 'NA',
			label: 'Namibia +264',
			numeric: 264,
		},
		{
			name: 'Nauru',
			value: '+674',
			code: 'NR',
			label: 'Nauru +674',
			numeric: 674,
		},
		{
			name: 'Nepal',
			value: '+977',
			code: 'NP',
			label: 'Nepal +977',
			numeric: 977,
		},
		{
			name: 'Netherlands',
			value: '+31',
			code: 'NL',
			label: 'Netherlands +31',
			numeric: 31,
		},
		{
			name: 'Netherlands Antilles',
			value: '+599',
			code: 'AN',
			label: 'Netherlands Antilles +599',
			numeric: 599,
		},
		{
			name: 'New Caledonia',
			value: '+687',
			code: 'NC',
			label: 'New Caledonia +687',
			numeric: 687,
		},
		{
			name: 'New Zealand',
			value: '+64',
			code: 'NZ',
			label: 'New Zealand +64',
			numeric: 64,
		},
		{
			name: 'Nicaragua',
			value: '+505',
			code: 'NI',
			label: 'Nicaragua +505',
			numeric: 505,
		},
		{
			name: 'Niger',
			value: '+227',
			code: 'NE',
			label: 'Niger +227',
			numeric: 227,
		},
		{
			name: 'Nigeria',
			value: '+234',
			code: 'NG',
			label: 'Nigeria +234',
			numeric: 234,
		},
		{
			name: 'Niue',
			value: '+683',
			code: 'NU',
			label: 'Niue +683',
			numeric: 683,
		},
		{
			name: 'Norfolk Island',
			value: '+672',
			code: 'NF',
			label: 'Norfolk Island +672',
			numeric: 672,
		},
		{
			name: 'Northern Mariana Islands',
			value: '+1670',
			code: 'MP',
			label: 'Northern Mariana Islands +1670',
			numeric: 1670,
		},
		{
			name: 'Norway',
			value: '+47',
			code: 'NO',
			label: 'Norway +47',
			numeric: 47,
		},
		{
			name: 'Oman',
			value: '+968',
			code: 'OM',
			label: 'Oman +968',
			numeric: 968,
		},
		{
			name: 'Pakistan',
			value: '+92',
			code: 'PK',
			label: 'Pakistan +92',
			numeric: 92,
		},
		{
			name: 'Palau',
			value: '+680',
			code: 'PW',
			label: 'Palau +680',
			numeric: 680,
		},
		{
			name: 'Palestinian Territory, Occupied',
			value: '+970',
			code: 'PS',
			label: 'Palestinian Territory, Occupied +970',
			numeric: 970,
		},
		{
			name: 'Panama',
			value: '+507',
			code: 'PA',
			label: 'Panama +507',
			numeric: 507,
		},
		{
			name: 'Papua New Guinea',
			value: '+675',
			code: 'PG',
			label: 'Papua New Guinea +675',
			numeric: 675,
		},
		{
			name: 'Paraguay',
			value: '+595',
			code: 'PY',
			label: 'Paraguay +595',
			numeric: 595,
		},
		{ name: 'Peru', value: '+51', code: 'PE', label: 'Peru +51', numeric: 51 },
		{
			name: 'Philippines',
			value: '+63',
			code: 'PH',
			label: 'Philippines +63',
			numeric: 63,
		},
		{
			name: 'Pitcairn',
			value: '+872',
			code: 'PN',
			label: 'Pitcairn +872',
			numeric: 872,
		},
		{
			name: 'Poland',
			value: '+48',
			code: 'PL',
			label: 'Poland +48',
			numeric: 48,
		},
		{
			name: 'Portugal',
			value: '+351',
			code: 'PT',
			label: 'Portugal +351',
			numeric: 351,
		},
		{
			name: 'Puerto Rico',
			value: '+1939',
			code: 'PR',
			label: 'Puerto Rico +1939',
			numeric: 1939,
		},
		{
			name: 'Qatar',
			value: '+974',
			code: 'QA',
			label: 'Qatar +974',
			numeric: 974,
		},
		{
			name: 'Reunion',
			value: '+262',
			code: 'RE',
			label: 'Reunion +262',
			numeric: 262,
		},
		{
			name: 'Romania',
			value: '+40',
			code: 'RO',
			label: 'Romania +40',
			numeric: 40,
		},
		{ name: 'Russia', value: '+7', code: 'RU', label: 'Russia +7', numeric: 7 },
		{
			name: 'Rwanda',
			value: '+250',
			code: 'RW',
			label: 'Rwanda +250',
			numeric: 250,
		},
		{
			name: 'Saint Barthelemy',
			value: '+590',
			code: 'BL',
			label: 'Saint Barthelemy +590',
			numeric: 590,
		},
		{
			name: 'Saint Helena, Ascension and Tristan Da Cunha',
			value: '+290',
			code: 'SH',
			label: 'Saint Helena, Ascension and Tristan Da Cunha +290',
			numeric: 290,
		},
		{
			name: 'Saint Kitts and Nevis',
			value: '+1869',
			code: 'KN',
			label: 'Saint Kitts and Nevis +1869',
			numeric: 1869,
		},
		{
			name: 'Saint Lucia',
			value: '+1758',
			code: 'LC',
			label: 'Saint Lucia +1758',
			numeric: 1758,
		},
		{
			name: 'Saint Martin',
			value: '+590',
			code: 'MF',
			label: 'Saint Martin +590',
			numeric: 590,
		},
		{
			name: 'Saint Pierre and Miquelon',
			value: '+508',
			code: 'PM',
			label: 'Saint Pierre and Miquelon +508',
			numeric: 508,
		},
		{
			name: 'Saint Vincent and the Grenadines',
			value: '+1784',
			code: 'VC',
			label: 'Saint Vincent and the Grenadines +1784',
			numeric: 1784,
		},
		{
			name: 'Samoa',
			value: '+685',
			code: 'WS',
			label: 'Samoa +685',
			numeric: 685,
		},
		{
			name: 'San Marino',
			value: '+378',
			code: 'SM',
			label: 'San Marino +378',
			numeric: 378,
		},
		{
			name: 'Sao Tome and Principe',
			value: '+239',
			code: 'ST',
			label: 'Sao Tome and Principe +239',
			numeric: 239,
		},
		{
			name: 'Saudi Arabia',
			value: '+966',
			code: 'SA',
			label: 'Saudi Arabia +966',
			numeric: 966,
		},
		{
			name: 'Senegal',
			value: '+221',
			code: 'SN',
			label: 'Senegal +221',
			numeric: 221,
		},
		{
			name: 'Serbia',
			value: '+381',
			code: 'RS',
			label: 'Serbia +381',
			numeric: 381,
		},
		{
			name: 'Seychelles',
			value: '+248',
			code: 'SC',
			label: 'Seychelles +248',
			numeric: 248,
		},
		{
			name: 'Sierra Leone',
			value: '+232',
			code: 'SL',
			label: 'Sierra Leone +232',
			numeric: 232,
		},
		{
			name: 'Singapore',
			value: '+65',
			code: 'SG',
			label: 'Singapore +65',
			numeric: 65,
		},
		{
			name: 'Slovakia',
			value: '+421',
			code: 'SK',
			label: 'Slovakia +421',
			numeric: 421,
		},
		{
			name: 'Slovenia',
			value: '+386',
			code: 'SI',
			label: 'Slovenia +386',
			numeric: 386,
		},
		{
			name: 'Solomon Islands',
			value: '+677',
			code: 'SB',
			label: 'Solomon Islands +677',
			numeric: 677,
		},
		{
			name: 'Somalia',
			value: '+252',
			code: 'SO',
			label: 'Somalia +252',
			numeric: 252,
		},
		{
			name: 'South Africa',
			value: '+27',
			code: 'ZA',
			label: 'South Africa +27',
			numeric: 27,
		},
		{
			name: 'South Georgia and the South Sandwich Islands',
			value: '+500',
			code: 'GS',
			label: 'South Georgia and the South Sandwich Islands +500',
			numeric: 500,
		},
		{
			name: 'South Sudan',
			value: '+211',
			code: 'SS',
			label: 'South Sudan +211',
			numeric: 211,
		},
		{
			name: 'Spain',
			value: '+34',
			code: 'ES',
			label: 'Spain +34',
			numeric: 34,
		},
		{
			name: 'Sri Lanka',
			value: '+94',
			code: 'LK',
			label: 'Sri Lanka +94',
			numeric: 94,
		},
		{
			name: 'Sudan',
			value: '+249',
			code: 'SD',
			label: 'Sudan +249',
			numeric: 249,
		},
		{
			name: 'Suriname',
			value: '+597',
			code: 'SR',
			label: 'Suriname +597',
			numeric: 597,
		},
		{
			name: 'Svalbard and Jan Mayen',
			value: '+47',
			code: 'SJ',
			label: 'Svalbard and Jan Mayen +47',
			numeric: 47,
		},
		{
			name: 'Swaziland',
			value: '+268',
			code: 'SZ',
			label: 'Swaziland +268',
			numeric: 268,
		},
		{
			name: 'Sweden',
			value: '+46',
			code: 'SE',
			label: 'Sweden +46',
			numeric: 46,
		},
		{
			name: 'Switzerland',
			value: '+41',
			code: 'CH',
			label: 'Switzerland +41',
			numeric: 41,
		},
		{
			name: 'Syrian Arab Republic',
			value: '+963',
			code: 'SY',
			label: 'Syrian Arab Republic +963',
			numeric: 963,
		},
		{
			name: 'Taiwan',
			value: '+886',
			code: 'TW',
			label: 'Taiwan +886',
			numeric: 886,
		},
		{
			name: 'Tajikistan',
			value: '+992',
			code: 'TJ',
			label: 'Tajikistan +992',
			numeric: 992,
		},
		{
			name: 'Tanzania, United Republic of Tanzania',
			value: '+255',
			code: 'TZ',
			label: 'Tanzania, United Republic of Tanzania +255',
			numeric: 255,
		},
		{
			name: 'Thailand',
			value: '+66',
			code: 'TH',
			label: 'Thailand +66',
			numeric: 66,
		},
		{
			name: 'Timor-Leste',
			value: '+670',
			code: 'TL',
			label: 'Timor-Leste +670',
			numeric: 670,
		},
		{
			name: 'Togo',
			value: '+228',
			code: 'TG',
			label: 'Togo +228',
			numeric: 228,
		},
		{
			name: 'Tokelau',
			value: '+690',
			code: 'TK',
			label: 'Tokelau +690',
			numeric: 690,
		},
		{
			name: 'Tonga',
			value: '+676',
			code: 'TO',
			label: 'Tonga +676',
			numeric: 676,
		},
		{
			name: 'Trinidad and Tobago',
			value: '+1868',
			code: 'TT',
			label: 'Trinidad and Tobago +1868',
			numeric: 1868,
		},
		{
			name: 'Tunisia',
			value: '+216',
			code: 'TN',
			label: 'Tunisia +216',
			numeric: 216,
		},
		{
			name: 'Turkey',
			value: '+90',
			code: 'TR',
			label: 'Turkey +90',
			numeric: 90,
		},
		{
			name: 'Turkmenistan',
			value: '+993',
			code: 'TM',
			label: 'Turkmenistan +993',
			numeric: 993,
		},
		{
			name: 'Turks and Caicos Islands',
			value: '+1649',
			code: 'TC',
			label: 'Turks and Caicos Islands +1649',
			numeric: 1649,
		},
		{
			name: 'Tuvalu',
			value: '+688',
			code: 'TV',
			label: 'Tuvalu +688',
			numeric: 688,
		},
		{
			name: 'Uganda',
			value: '+256',
			code: 'UG',
			label: 'Uganda +256',
			numeric: 256,
		},
		{
			name: 'Ukraine',
			value: '+380',
			code: 'UA',
			label: 'Ukraine +380',
			numeric: 380,
		},
		{
			name: 'United Arab Emirates',
			value: '+971',
			code: 'AE',
			label: 'United Arab Emirates +971',
			numeric: 971,
		},
		{
			name: 'United Kingdom',
			value: '+44',
			code: 'GB',
			label: 'United Kingdom +44',
			numeric: 44,
		},
		{
			name: 'Uruguay',
			value: '+598',
			code: 'UY',
			label: 'Uruguay +598',
			numeric: 598,
		},
		{
			name: 'Uzbekistan',
			value: '+998',
			code: 'UZ',
			label: 'Uzbekistan +998',
			numeric: 998,
		},
		{
			name: 'Vanuatu',
			value: '+678',
			code: 'VU',
			label: 'Vanuatu +678',
			numeric: 678,
		},
		{
			name: 'Venezuela, Bolivarian Republic of Venezuela',
			value: '+58',
			code: 'VE',
			label: 'Venezuela, Bolivarian Republic of Venezuela +58',
			numeric: 58,
		},
		{
			name: 'Vietnam',
			value: '+84',
			code: 'VN',
			label: 'Vietnam +84',
			numeric: 84,
		},
		{
			name: 'Virgin Islands, British',
			value: '+1284',
			code: 'VG',
			label: 'Virgin Islands, British +1284',
			numeric: 1284,
		},
		{
			name: 'Virgin Islands, U.S.',
			value: '+1340',
			code: 'VI',
			label: 'Virgin Islands, U.S. +1340',
			numeric: 1340,
		},
		{
			name: 'Wallis and Futuna',
			value: '+681',
			code: 'WF',
			label: 'Wallis and Futuna +681',
			numeric: 681,
		},
		{
			name: 'Yemen',
			value: '+967',
			code: 'YE',
			label: 'Yemen +967',
			numeric: 967,
		},
		{
			name: 'Zambia',
			value: '+260',
			code: 'ZM',
			label: 'Zambia +260',
			numeric: 260,
		},
		{
			name: 'Zimbabwe',
			value: '+263',
			code: 'ZW',
			label: 'Zimbabwe +263',
			numeric: 263,
		},
	],
	gw_waitlist_top_container = document.getElementById('getWaitlistContainer'),
	gw_backend_url =
		gw_waitlist_top_container.getAttribute('data-backend_url') ||
		'https://api.getwaitlist.com/api/v1/',
	gw_waitlist_id = gw_waitlist_top_container.getAttribute('data-waitlist_id'),
	gw_default_state =
		gw_waitlist_top_container.getAttribute('data-default_state') || 'SUBMIT',
	gw_optional_waiter_email_placeholder_value =
		(console.assert(
			'CHECK' === gw_default_state || 'SUBMIT' === gw_default_state
		),
		gw_waitlist_top_container.getAttribute(
			'data-signup_email_placeholder_value'
		) ||
			gw_waitlist_top_container.getAttribute(
				'data-waiter_email_placeholder_value'
			)),
	gw_disable_gw_heartbeat = gw_waitlist_top_container.getAttribute(
		'data-gw_disable_gw_heartbeat'
	),
	gw_widget_type =
		gw_waitlist_top_container.getAttribute('data-widget_type') || 'WIDGET_1',
	gw_widget_shows_social_links = gw_waitlist_top_container.getAttribute(
		'data-show_social_links'
	),
	gw_flex_row = ' gw-flex-row ',
	gw_flex = ' gw-flex ',
	gw_justify_center = ' gw-justify-center ',
	gw_mb_4 = ' gw-mb-4 ',
	gw_mb_2 = ' gw-mb-2 ',
	gw_flex_col = 'gw-flex-col ',
	gw_w_full = ' gw-w-full ',
	gw_rounded_md = ' gw-rounded-md ',
	gw_p_7 = ' gw-p-7 ',
	gw_max_w_600px = ' gw-max-w-[600px] ',
	gw_items_center = ' gw-items-center ',
	gw_text_center = ' gw-text-center ',
	gw_font_bold = ' gw-font-bold ',
	gw_text_2xl = ' gw-text-2xl ',
	gw_pb_2 = ' gw-pb-2 ',
	gw_mt_2 = ' gw-mt-2 ',
	gw_pr_2 = ' gw-pr-2 ',
	gw_text_sm = ' gw-text-sm ',
	gw_font_semibold = ' gw-font-semibold ',
	gw_rounded = ' gw-rounded ',
	gw_rounded_3xl = ' gw-rounded-3xl ',
	gw_transition = ' gw-transition ',
	gw_duration_300 = ' gw-duration-300 ',
	gw_mt_1 = ' gw-mt-1 ',
	gw_border_solid = ' gw-border-solid ',
	gw_border = ' gw-border ',
	gw_pt_1 = ' gw-pt-1 ',
	gw_w_1_2 = ' gw-w-1/2 ',
	gw_w_1_3 = ' gw-w-1/3 ',
	gw_w_1_4 = ' gw-w-1/4 ',
	gw_mr_3 = ' gw-mr-3 ',
	gw_py_10 = 'gw-py-10',
	gw_bg_transparent = ' gw-bg-transparent ',
	gw_pl_2 = ' gw-pl-2 ',
	gw_mx_auto = ' gw-mx-auto ',
	gw_text_left = ' gw-text-left ',
	gw_justify_between = 'gw-justify-between ',
	gw_mt_3 = ' gw-mt-3 ',
	gw_space_x_4 = ' gw-space-x-4 ',
	gw_py_5 = ' gw-py-5 ',
	gw_px_4 = ' gw-px-4 ',
	gw_overflow_hidden = ' gw-overflow-hidden ',
	sm_gw_p_6 = ' sm:gw-p-6 ',
	gw_text_3xl = ' gw-text-3xl ',
	gw_truncate = ' gw-truncate ',
	gw_align_middle = ' gw-align-middle ',
	gw_mr_2 = ' gw-mr-2 ',
	gw_self_center = ' gw-self-center ',
	gw_mt_4 = ' gw-mt-4 ',
	gw_text_xs = ' gw-text-xs ',
	gw_px_1 = ' gw-px-1 ',
	gw_py_1 = ' gw-py-1 ',
	hover_gw_cursor_pointer = ' hover:gw-cursor-pointer ',
	focus_gw_ring_2 = 'focus:gw-ring-2 ',
	hover_gw_opacity_80 = ' hover:gw-opacity-80 ',
	gw_text_xl = ' gw-text-xl ',
	gw_my_1 = ' gw-my-1 ',
	gw_mb_3 = ' gw-mb-3 ',
	gw_py_2 = ' gw-py-2 ',
	gw_font_medium = ' gw-font-medium ',
	gw_border_transparent = ' gw-border-transparent ',
	gw_my_2 = ' gw-my-2 ',
	gw_h_3 = ' gw-h-3 ',
	gw_w_3 = ' gw-w-3 ',
	gw_bg_red_50 = ' gw-bg-red-50 ',
	gw_p_4 = ' gw-p-4 ',
	gw_p_2 = ' gw-p-2 ',
	gw_text_md = 'gw-text-md',
	gw_text_red_800 = ' gw-text-red-800 ',
	gw_w_1_8 = ' gw-w-1/8 ',
	gw_mr_4 = ' gw-mr-4 ',
	gw_w_6 = ' gw-w-6 ',
	gw_w_7_8 = ' gw-w-7/8 ',
	gw_ml_1 = ' gw-ml-1 ',
	gw_mr_1 = ' gw-mr-1 ',
	gw_mb_1 = ' gw-mb-1 ',
	gw_sm_mt_0 = ' sm:gw-mt-0 ',
	gw_sm_w_1_2 = ' sm:gw-w-1/2 ',
	gw_sm_flex_row = ' sm:gw-flex-row ',
	gw_sm_space_x_4 = ' sm:gw-space-x-4 ',
	gw_waitlist_container =
		('WIDGET_1' == gw_widget_type
			? (gw_waitlist_top_container.innerHTML = `
        <div style="margin-left:auto; margin-right:auto; position:relative; border-radius: 1.5rem;border: 1px solid rgba(255, 255, 255, 0.28);background: #070726;box-shadow: 0px 0px 193.4px 0px rgba(5, 0, 25, 0.75);" class="${gw_flex}${gw_flex_col}${gw_rounded_md}${gw_py_10}${gw_w_full}${gw_max_w_600px}" style='background-color:white' id="getWaitlistInnerContainer">
            <div class="${gw_flex}${gw_flex_row}${gw_justify_center}${gw_mb_4}">
                ${gw_make_spinner('#4937E8', '24px', '24px')}
            </div>
            <div class="${gw_flex}${gw_flex_row}${gw_justify_center}">
                Initializing Waitlist...
            </div>
        </div>
    `)
			: 'WIDGET_2' == gw_widget_type &&
			  (gw_waitlist_top_container.innerHTML = `
        <div class="${gw_flex}${gw_flex_col}${gw_rounded_md}${gw_p_2}${gw_w_full}${gw_max_w_600px}" style='background-color:white' id="getWaitlistInnerContainer">
            <div class="${gw_flex}${gw_flex_row}${gw_justify_center}${gw_mb_4}">
                ${gw_make_spinner('#4937E8', '24px', '24px')}
            </div>
            <div class="${gw_flex}${gw_flex_row}${gw_justify_center}">
                Initializing Waitlist...
            </div>
        </div>
    `),
		document.getElementById('getWaitlistInnerContainer'));
async function gw_heartbeat() {
	(null !== gw_disable_gw_heartbeat && 'false' !== gw_disable_gw_heartbeat) ||
		'' == window.location.hostname ||
		window.location.hostname.includes('localhost') ||
		window.location.hostname.includes('0.0') ||
		(await fetch(gw_backend_url + 'widget_heartbeats', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				location: window.location.href,
				waitlist_id: gw_waitlist_id,
				referrer: window.document.referrer,
				widget_type: gw_widget_type,
			}),
		})
			.then((e) => {
				if (200 == e.status) return e.json();
			})
			.then((e) => {
				gw_heartbeat_uuid = e.uuid;
			}));
}
function gw_handle_error_json(e, a, t, l) {
	console.error('gw_handle_error_json', e, a),
		t
			? (document.getElementById('getWaitlistErrorContainer').innerHTML = t)
			: (gw_waitlist_container.innerHTML = gw_error_handling_area),
		(document.getElementById(
			'getWaitlistErrorContainer'
		).parentElement.parentElement.style.display = ''),
		gw_danger_select(a),
		l && gw_primary_cta_is_not_loading_anymore(l);
}
function gw_clear_errors() {
	for (;;) {
		var e = gw_waitlist_container.querySelectorAll('.danger_select');
		if (0 === e.length) break;
		e[0].classList.remove('danger_select');
	}
}
function gw_color_border_background() {
	return (
		`color: ${gw_font_color}; background-color: ${gw_background_color}; border: 1px solid ` +
		gw_border_color
	);
}
function gw_set_styles() {
	(gw_font_color =
		gw_waitlist_obj.configuration_style_json?.widget_font_color || '#000000'),
		(gw_background_color =
			gw_waitlist_obj.configuration_style_json?.widget_background_color ||
			'#ffffff'),
		(gw_button_font_color =
			gw_waitlist_obj.configuration_style_json?.widget_button_font_color ||
			'#ffffff'),
		(gw_button_color =
			gw_waitlist_obj.configuration_style_json?.widget_button_color ||
			'#1400ff'),
		(gw_border_color =
			gw_waitlist_obj.configuration_style_json?.border_color || '#cccccc'),
		(gw_waitlist_name = gw_waitlist_obj.waitlist_name || 'the Waitlist'),
		(gw_signup_button_title = gw_waitlist_obj.signup_button_title),
		(gw_widget_shows_social_links =
			gw_waitlist_obj.widget_shows_social_links ||
			'true' === gw_widget_shows_social_links),
		(gw_title = gw_waitlist_obj.title),
		(gw_success_title = gw_waitlist_obj.success_title);
}
async function gw_get_waitlist_obj() {
	(gw_waiter_obj = gw_waitlist_obj = null), gw_clear_errors();
	let a;
	await fetch(gw_backend_url + 'waitlist/' + gw_waitlist_id, {
		Method: 'GET',
		Headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
	})
		.then((e) => ((a = e.status), e.json()))
		.then((e) => {
			if (399 < a)
				return gw_handle_error_json('gw_get_waitlist_obj', e, null, null);
			(gw_waitlist_obj = e),
				gw_set_styles(),
				'WIDGET_1' == gw_widget_type
					? gw_make_waitlist_widget(gw_default_state)
					: 'WIDGET_2' == gw_widget_type &&
					  gw_make_waitlist_widget_type_2(gw_default_state);
		});
}
function gw_modify_select_on_change(e, a) {
	e.selectedOptions && e.selectedOptions[0].value
		? (e.style.color = a)
		: (e.style.color = a + '80');
}
function social_media_message_maker() {
	var e;
	if (gw_waitlist_obj.twitter_message) {
		let e = '';
		return (
			(e = (e = gw_waiter_obj.priority
				? gw_waitlist_obj.twitter_message.replaceAll(
						'{priority}',
						'#' + gw_waiter_obj.priority
				  )
				: gw_waitlist_obj.twitter_message.replaceAll(
						'{priority}',
						''
				  )).replaceAll('{referral_link}', gw_waiter_obj.referral_link)),
			encodeURIComponent(e)
		);
	}
	return (
		(e = gw_waiter_obj.priority ? `#${gw_waiter_obj.priority} on` : 'on the'),
		encodeURIComponent(`I'm ${e} ${gw_waitlist_name} `) +
			'ðŸ‘‰' +
			encodeURIComponent(gw_waiter_obj.referral_link)
	);
}
function gw_tweet() {
	window.open(
		'https://twitter.com/intent/tweet?text=' + social_media_message_maker(),
		'_blank'
	);
}
function gw_whatsapp() {
	window.open('https://wa.me/?text=' + social_media_message_maker(), '_blank');
}
function gw_facebook() {
	window.open(
		`https://www.facebook.com/sharer.php?u=${gw_waiter_obj.referral_link}&quote=` +
			social_media_message_maker(),
		'_blank'
	);
}
function gw_linkedin() {
	window.open(
		`https://www.linkedin.com/sharing/share-offsite/?url=${
			gw_waiter_obj.referral_link
		}&summary=${social_media_message_maker()}&source=Waitlist`,
		'_blank'
	);
}
function gw_reddit() {
	window.open(
		`https://www.reddit.com/submit?url=${gw_waiter_obj.referral_link}&title=` +
			social_media_message_maker(),
		'_blank'
	);
}
function gw_telegram() {
	window.open(
		`https://t.me/share/url?url=${gw_waiter_obj.referral_link}&text=` +
			social_media_message_maker(),
		'_blank'
	);
}
function gw_email() {
	window.open(
		`mailto:?body=${social_media_message_maker()}&subject=` + gw_waitlist_name
	);
}
function gw_primary_cta_is_loading() {
	var e = document.getElementById('primaryCTA'),
		a = gw_make_spinner(e.style.color, 'transparent', '1rem', '1rem'),
		a =
			((e.innerHTML = `
        <span class="${gw_flex}${gw_flex_row}${gw_items_center}${gw_text_center}${gw_justify_center}${gw_w_full}">${a}&nbsp;Loading...</span>
    `),
			(e.style.disabled = !0),
			document.getElementById('getWaitlistErrorContainer'));
	(a.innerHTML = ''), (a.parentElement.parentElement.style.display = 'none');
}
function gw_primary_cta_is_not_loading_anymore(e) {
	var a = document.getElementById('primaryCTA');
	(a.innerHTML = e), (a.style.disabled = !1);
}
async function gw_get_waiter_obj() {
	(gw_waiter_obj = null), gw_clear_errors(), gw_primary_cta_is_loading();
	var e = gw_waitlist_container.querySelector('[name=email]').value;
	let a;
	await fetch(
		`${gw_backend_url}waiter?email=${encodeURIComponent(e)}&waitlist_id=` +
			encodeURIComponent(gw_waitlist_obj.id),
		{
			Method: 'GET',
			Headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	)
		.then((e) => ((a = e.status), e.json()))
		.then((e) => {
			if (399 < a)
				return gw_handle_error_json(
					'get_waiter_obj',
					e,
					e.error_string || 'An error has occurred.',
					'Check Status'
				);
			(gw_waiter_obj = e),
				'WIDGET_1' == gw_widget_type
					? gw_make_waitlist_widget('SUCCESS')
					: 'WIDGET_2' == gw_widget_type &&
					  gw_make_waitlist_widget_type_2('SUCCESS');
		});
}
async function gw_post_waiter_obj() {
	gw_clear_errors(), gw_primary_cta_is_loading();
	var e = {
			waitlist_id: gw_waitlist_obj.id,
			referral_link: window.location.href,
			heartbeat_uuid: gw_heartbeat_uuid,
			widget_type: gw_widget_type,
		},
		a = gw_waitlist_container.querySelector('[name=email]')?.value,
		a =
			(a && (e.email = a),
			gw_waitlist_container.querySelector('[name=first_name]')?.value),
		a =
			(a && (e.first_name = a),
			gw_waitlist_container.querySelector('[name=last_name]')?.value),
		a =
			(a && (e.last_name = a),
			gw_waitlist_container.querySelector('[name=phone]')?.value &&
			gw_waitlist_container.querySelector('[name=countrycode]')?.value
				? gw_waitlist_container.querySelector('[name=countrycode]').value +
				  gw_waitlist_container.querySelector('[name=phone]').value
				: null),
		a =
			(a && (e.phone = a),
			Array.from(gw_waitlist_container.querySelectorAll('.gw_question')));
	a.sort(function (e, a) {
		parseInt(e.id.slice(12)), parseInt(a.id.slice(12));
	}),
		(e.answers = a.map((e) => ({
			question_value: e.name,
			answer_value: e.value,
		})));
	let t;
	await fetch(gw_backend_url + 'waiter', {
		method: 'POST',
		headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
		body: JSON.stringify(e),
	})
		.then((e) => ((t = e.status), e.json()))
		.then((e) =>
			399 < t
				? gw_handle_error_json(
						'post_waiter_obj',
						e,
						e.error_string || 'An error has occurred.',
						gw_signup_button_title
				  )
				: ((gw_waiter_obj = e),
				  !gw_waitlist_obj.uses_signup_verification &&
						gw_waiter_obj.priority >
							gw_waitlist_obj.statistics.current_signups &&
						(gw_waitlist_obj.statistics.current_signups =
							gw_waiter_obj.priority),
				  gw_waitlist_obj.uses_leaderboard
						? get_leaderboard()
						: void ('WIDGET_1' == gw_widget_type
								? gw_make_waitlist_widget('SUCCESS')
								: 'WIDGET_2' == gw_widget_type &&
								  gw_make_waitlist_widget_type_2('SUCCESS')))
		);
}
async function get_leaderboard() {
	let a;
	await fetch(gw_backend_url + `waitlist/${gw_waitlist_id}/leaderboard`, {
		method: 'GET',
		headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
	})
		.then((e) => ((a = e.status), e.json()))
		.then((e) => {
			200 === a &&
				((gw_leaderboard = e),
				'WIDGET_1' == gw_widget_type
					? gw_make_waitlist_widget('SUCCESS')
					: 'WIDGET_2' == gw_widget_type &&
					  gw_make_waitlist_widget_type_2('SUCCESS'));
		});
}
function gw_danger_select(e) {
	e.field_key &&
		('phone' == e.field_key &&
			gw_waitlist_container
				.querySelectorAll('[name=countrycode]')
				.forEach((e) => e.classList.add('danger_select')),
		gw_waitlist_container
			.querySelectorAll(`[name="${e.field_key}"]`)
			.forEach((e) => e.classList.add('danger_select')));
}
function gw_copyButton() {
	try {
		navigator.clipboard.writeText(gw_waiter_obj.referral_link),
			(document.getElementById('getWaitlistgw_copyButton').innerHTML =
				'Copied!');
	} catch (e) {
		gw_error_handler(e);
	}
}
function gw_make_waitlist_widget(e) {
	gw_waitlist_container.style.backgroundColor = '#070726';
	let a;
	if (
		(('' === gw_title && '' === gw_success_title) || 'CHECK' !== e
			? '' !== gw_title && 'SUBMIT' === e
				? (a = gw_title || 'Sign up for ' + gw_waitlist_name)
				: '' !== gw_success_title &&
				  'SUCCESS' === e &&
				  (a =
						gw_success_title ||
						'Successfully signed up for ' + gw_waitlist_name)
			: (a = 'Check your status'),
		a
			? (gw_waitlist_container.innerHTML = `
            <div class="${gw_text_center}${gw_mx_auto}${gw_pb_2}">
                    <img style="width:3.6875rem;height:3.26156rem;" src="https://uploads-ssl.webflow.com/6567ce1f8de0adc9c209ef96/657e86fb26b42c8d9e52031b_Alqen%20Logo.webp" alt="Alqen Logo"/>
                    <img style="position:absolute; width:100%; height:100%; top:0; left:0; right:0; opacity:50%; " src="https://uploads-ssl.webflow.com/6567ce1f8de0adc9c209ef96/657d5b55dd1607d815d37814_Generate%20Glow.webp" alt="glow"/>
            </div>
            <div style="color: #FFFFFF" class="${gw_font_bold}${gw_text_2xl}${gw_pb_2}${gw_text_center}">
                ${a}
            </div>
            <div>
                <p style="color: #8989A8" class="${gw_mb_4}${gw_text_center}${gw_text_xl}">Fill out the form and secure a spot on our waiting list!</p>
            </div>
        `)
			: (gw_waitlist_container.innerHTML = ''),
		'SUBMIT' === e)
	) {
		let e = '',
			a =
				(gw_waitlist_obj.uses_firstname_lastname &&
					(e = `
                <div class="${gw_flex}${gw_flex_row}${gw_justify_center}${gw_mx_auto}${gw_mt_2}">
                    <div class="${gw_mx_auto}${gw_pr_2}">
                    ${
											gw_waitlist_obj.remove_widget_headers
												? ''
												: `<span style="color: #8989A8" class="${gw_text_md}${gw_mb_3}">First Name</span>`
										}
                        <input
                            class="${gw_w_full}${gw_rounded_md}${gw_text_sm}${gw_transition}${gw_duration_300}${gw_mt_1}${gw_border_solid}${gw_border}${gw_mb_4}"
                            style="color: rgba(255, 255, 255, 0.25); border-color: #353553; background: rgba(255, 255, 255, 0.04);"
                            name="first_name"
                            placeholder="Enter your first name..."
                        />
                    </div>
                    <div class="${gw_mx_auto}${gw_pl_2}">
                    ${
											gw_waitlist_obj.remove_widget_headers
												? ''
												: `<span style="color: #8989A8" class="${gw_text_md}${gw_mb_3}">Last Name</span>`
										}

                        <input
                            class="${gw_w_full}${gw_rounded_md}${gw_text_sm}${gw_transition}${gw_duration_300}${gw_mt_1}${gw_border_solid}${gw_border}"
                            style="color: rgba(255, 255, 255, 0.25);border-color: #353553;background: rgba(255, 255, 255, 0.04);"
                            name="last_name"
                            placeholder="Enter your last name..."
                        />
                    </div>
                </div>
            `),
				''),
			t =
				(['EMAIL', 'EMAIL_OR_PHONE', 'EMAIL_AND_PHONE'].includes(
					gw_waitlist_obj.required_contact_detail
				) && (a = gw_make_email_field()),
				'');
		if (
			['PHONE', 'EMAIL_OR_PHONE', 'EMAIL_AND_PHONE'].includes(
				gw_waitlist_obj.required_contact_detail
			)
		) {
			let a = [];
			gw_country_codes.forEach((e) =>
				a.push(
					`<option value="${e.value}" style="color: ${gw_font_color};background-color:${gw_background_color}">${e.label}</option>`
				)
			),
				(t = `
                <div class="${gw_w_full}${gw_mt_2}">
                ${
									gw_waitlist_obj.remove_widget_headers
										? ''
										: `<span style="color: ${gw_font_color}" class="${gw_text_sm}${gw_font_semibold}${gw_text_center}">Phone</span>`
								}
                    <div class="${gw_flex}${gw_flex_row}${gw_text_center}${gw_pt_1}${gw_w_full}">
                        <div class="${gw_w_1_2}${gw_mr_3}">
                            <!-- this is a crazy hack: the 80 makes it 50% opacity, by 8-char hex instead of 6 -->
                            <select
                                name="countrycode" class="${gw_w_full}${gw_rounded}${gw_text_sm}${gw_transition}${gw_duration_300}"
                                style="height: 100%; color: ${gw_font_color}80; border: 1px solid ${gw_border_color}; background-color: transparent;"
                                onchange="gw_modify_select_on_change(this, '${gw_font_color}')"
                            >
                                <option value="" style="color: ${gw_font_color};background-color:${gw_background_color}">Select a country</option>
                                ${a.join('')}
                            </select>
                        </div>
                        <div class="${gw_w_1_2}">
                            <input
                                class="${gw_w_full}${gw_rounded}${gw_text_sm}${gw_transition}${gw_duration_300}${gw_border_solid}${gw_border}${gw_bg_transparent}"
                                style="color: ${gw_font_color}; border-color: ${gw_border_color}"
                                name="phone"
                                placeholder="123 456 7890"
                            />
                        </div>
                    </div>
                </div>
            `);
		}
		let l = '';
		if (gw_waitlist_obj.questions && 0 < gw_waitlist_obj.questions?.length) {
			var _ = gw_waitlist_obj.remove_widget_headers ? '' : gw_mt_2;
			l += `
                <div class="${gw_mx_auto}${gw_flex}${gw_flex_col}${gw_w_full}${_}">
                ${
									gw_waitlist_obj.remove_widget_headers
										? ''
										: `
                    <div style="color: ${gw_font_color}"  class="${gw_text_sm} ${gw_font_semibold}${gw_text_left}">
                        Questions
                    </div>
                    `
								}

            `;
			for (let e = 0; e < gw_waitlist_obj.questions.length; e++)
				l += gw_make_question_answer_field(e);
			l += '</div>';
		}
		gw_waitlist_container.innerHTML += `
            <div class="${gw_w_full}">
                <div class="${gw_flex}${gw_flex_col}${gw_justify_between}${gw_items_center}${gw_rounded_3xl}${gw_w_full}">
                    ${e}
                    ${a}
                    ${t}
                    ${l}
                </div>
            </div>
        `;
	} else if ('CHECK' === e) {
		let e = '';
		['EMAIL', 'EMAIL_OR_PHONE', 'EMAIL_AND_PHONE'].includes(
			gw_waitlist_obj.required_contact_detail
		) && (e = gw_make_email_field()),
			(gw_waitlist_container.innerHTML += `
            <div class="${gw_w_full}">
                <div class="${gw_flex}${gw_flex_col}${gw_justify_between}${gw_items_center}${gw_rounded_3xl}${gw_w_full}">
                    ${e}
                </div>
            </div>
        `);
	} else if ('SUCCESS' === e) {
		let e = '',
			a =
				((e = gw_waiter_obj.removed_date
					? 'Offboarded!'
					: !gw_waitlist_obj.uses_signup_verification || gw_waiter_obj.verified
					? gw_waiter_obj.priority
					: `
                        <div class="${gw_text_sm}${gw_font_semibold}${gw_mt_3}" style="color: ${gw_font_color}; background-color: ${gw_background_color}">
                            This waitlist requires you to verify your email. To join, click the link we sent to ${gw_waiter_obj.email}.
                        </div>
                    `),
				'');
		if (gw_waitlist_obj.hide_counts) {
			let e = '';
			(e = gw_waiter_obj.removed_date
				? 'Offboarded!'
				: gw_waitlist_obj.uses_signup_verification && !gw_waiter_obj.verified
				? `This waitlist requires you to verify your email. To join, click the link we sent to ${gw_waiter_obj.email}.`
				: 'You are on the waitlist!'),
				(a = `
                <div class="${gw_px_4}${gw_py_5}${gw_rounded_md}${gw_border}${gw_overflow_hidden}${sm_gw_p_6}${gw_w_full}${gw_text_center}" style="${gw_color_border_background()}">
                    <dd class="${gw_mt_1}${gw_font_semibold}${gw_text_xl}" style="color: ${gw_font_color}; background-color: ${gw_background_color}">
                        ${e}
                    </dd>
                </div>`);
		} else
			a = `
                <div class="${gw_px_4}${gw_py_5}${gw_rounded_md}${gw_border}${gw_overflow_hidden}${sm_gw_p_6}${gw_sm_w_1_2}${gw_text_center}" style="${gw_color_border_background()}">
                    <dt class="${gw_text_sm}${gw_truncate}" style="color: ${gw_font_color}">
                        Your Position
                    </dt>
                    <dd class="${gw_mt_1}${gw_font_semibold}${
				gw_waiter_obj.removed_date ? gw_text_2xl : gw_text_3xl
			}" style="color: ${gw_font_color}; background-color: ${gw_background_color}">
                        ${e}
                    </dd>
                </div>
                <div class="${gw_px_4} ${gw_py_5} ${gw_rounded_md} ${gw_border}${gw_overflow_hidden}${sm_gw_p_6}${gw_mt_4}${gw_sm_mt_0}${gw_sm_w_1_2}${gw_text_center}" style="${gw_color_border_background()}">
                    <dt class="${gw_text_sm}${gw_truncate}" style="color: ${gw_font_color}">
                        People on Waitlist
                    </dt>
                    <dd class="${gw_mt_1}${gw_text_3xl}${gw_align_middle}${gw_font_semibold}" style="color: ${gw_font_color}; background-color: ${gw_background_color}">
                        ${gw_waitlist_obj.statistics.current_signups}
                    </dd>
                </div>
            `;
		if (
			((gw_waitlist_container.innerHTML += `
            <div class="${gw_flex}${gw_flex_col}${gw_w_full}${gw_mx_auto}">
                <div class="${gw_flex}${gw_flex_col}${gw_sm_flex_row}${gw_sm_space_x_4}">
                    ${a}
                </div>
                <div class="${gw_mt_4}">
                    <div class="${gw_px_4}${gw_py_5}${gw_rounded_md}${gw_border}${gw_overflow_hidden}${sm_gw_p_6}${gw_text_center}" style="${gw_color_border_background()}">
                        <dt class="${gw_text_sm} ${gw_truncate} ${gw_flex}${gw_flex_row}${gw_justify_center}">
                            <div class="${gw_mr_2}${gw_self_center}" style="color: ${gw_font_color}">
                                Referral Link
                            </div>
                            <div
                                class="${gw_flex}${gw_flex_row}${gw_rounded_md}${gw_text_xs}${gw_px_1}${gw_py_1}${hover_gw_cursor_pointer}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                                style="${gw_color_border_background()}"
                                onClick="gw_copyButton()"
                            >
                                <span id="getWaitlistgw_copyButton" class="noselect">Copy</span>
                            </div>
                        </dt>
                        <dd class="${gw_mt_1}${gw_text_xl}${gw_font_semibold}" style="color: ${gw_font_color}; background-color: ${gw_background_color}">
                            <span id="statusReferralgw_copyButton">
                                ${gw_waiter_obj.referral_link}
                            </span>
                        </dd>
                    </div>
                </div>
            </div>
        `),
			gw_waitlist_obj.uses_leaderboard && gw_leaderboard)
		) {
			let _ = [];
			gw_leaderboard?.leaderboard.forEach((e, a) => {
				var t =
						e.first_name && e.last_name ? e.first_name + ' ' + e.last_name : '',
					l = e.first_name,
					e = e.email;
				_.push(`
                    <div key=${a} class="${gw_flex}${gw_flex_row}${gw_justify_center}${gw_my_1}" style="color: ${gw_font_color}; background-color: ${gw_background_color}">
                        ${a + 1}. ${t || l || e}
                    </div>
                `);
			}),
				(gw_waitlist_container.innerHTML += `
                <div class="${gw_mt_4}${gw_px_4}${gw_py_5}${gw_rounded_md}${gw_border}${gw_overflow_hidden}${sm_gw_p_6}${gw_text_center}" style="${gw_color_border_background()}">
                    <div class="${gw_text_center}${gw_mb_3}${gw_text_sm} ${gw_truncate}">
                        Leaderboard
                    </div>
                    ${_.join('')}
                </div>
            `);
		}
	}
	_ = {
		SUBMIT: ['gw_post_waiter_obj()', gw_signup_button_title],
		CHECK: ['gw_get_waiter_obj()', 'Check Status'],
	};
	if ('SUCCESS' !== e)
		gw_waitlist_container.innerHTML += `
            <div class="${gw_mt_4} ${gw_mb_1} ${gw_text_center}">
                <button
                    id="primaryCTA"
                    style="background: linear-gradient(180deg, #B039FF 0%, #9C39FF 100%); color: #FFF; border-radius:0.5rem; border: 1px solid #B266FF; box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.16) inset, 0px 4px 13px 0px rgba(156, 57, 255, 0.25), 1px 2px 12px 0px rgba(0, 0, 0, 0.07), 0px -4px 4px 0px rgba(0, 0, 0, 0.05) inset;"
                    class="${gw_text_center}${gw_items_center}${gw_px_4}${gw_py_2}${gw_font_bold}${gw_text_sm}${gw_rounded_md}${gw_font_medium}${gw_border}${gw_border_transparent}${gw_w_full}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                    onclick="${_[e][0]}"
                >
                    ${_[e][1]}
                </button>
            </div>
        `;
	else {
		var l = [],
			n =
				(gw_waitlist_obj.show_email_on_widget && l.push('email'),
				gw_waitlist_obj.show_facebook_on_widget && l.push('facebook'),
				gw_waitlist_obj.show_instagram_on_widget && l.push('instagram'),
				gw_waitlist_obj.show_linkedin_on_widget && l.push('linkedin'),
				gw_waitlist_obj.show_reddit_on_widget && l.push('reddit'),
				gw_waitlist_obj.show_telegram_on_widget && l.push('telegram'),
				gw_waitlist_obj.show_twitter_on_widget && l.push('twitter'),
				gw_waitlist_obj.show_whatsapp_on_widget && l.push('whatsapp'),
				[]);
		let t =
			1 == l.length
				? gw_w_full
				: 2 == l.length
				? gw_w_1_2
				: 3 == l.length
				? gw_w_1_3
				: 4 <= l.length
				? gw_w_1_4
				: '';
		for (let a = 0; a < l.length; a++) {
			let e = '';
			a + 1 !== l.length &&
				(l.length <= 4 && (e = gw_mr_2),
				(5 != l.length && 6 != l.length) || (2 !== a && (e = gw_mr_2)),
				(7 != l.length && 8 != l.length) || (3 !== a && (e = gw_mr_2))),
				'twitter' == l[a] &&
					n.push(`
                    <div class="${t} ${e}">
                        <button
                            style="background-color: transparent; color: #FFF; border: 1px solid #3F3F5B;"
                            class="${gw_text_center}${gw_items_center}${gw_px_4}${gw_py_2}${gw_font_bold}${gw_text_sm}${gw_rounded_md}${gw_font_medium}${gw_border}${gw_border_transparent}${gw_w_full}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                            onclick="gw_tweet()"
                        >
                            <span class="${gw_flex}${gw_flex_row}${gw_items_center}${gw_justify_center}${gw_w_full}">${gw_twitter_svg_for_cta()}&nbsp;&nbsp;Twitter</span>
                        </button>
                    </div>
                `),
				'whatsapp' == l[a] &&
					n.push(`
                    <div class="${t} ${e}">
                        <button
                            style="background-color: transparent; color: #FFF; border: 1px solid #3F3F5B;"
                            class="${gw_text_center}${gw_items_center}${gw_px_4}${gw_py_2}${gw_font_bold}${gw_text_sm}${gw_rounded_md}${gw_font_medium}${gw_border}${gw_border_transparent}${gw_w_full}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                            onclick="gw_whatsapp()"
                        >
                            <span class="${gw_flex}${gw_flex_row}${gw_items_center}${gw_justify_center}${gw_w_full}">${gw_whatsapp_svg_for_cta()}&nbsp;&nbsp;Whatsapp</span>
                        </button>
                    </div>
                `),
				'telegram' == l[a] &&
					n.push(`
                    <div class="${t} ${e}">
                        <button
                            style="background-color: transparent; color: #FFF; border: 1px solid #3F3F5B;"
                            class="${gw_text_center}${gw_items_center}${gw_px_4}${gw_py_2}${gw_font_bold}${gw_text_sm}${gw_rounded_md}${gw_font_medium}${gw_border}${gw_border_transparent}${gw_w_full}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                            onclick="gw_telegram()" 
                        >
                            <span class="${gw_flex}${gw_flex_row}${gw_items_center}${gw_justify_center}${gw_w_full}">${gw_telegram_svg_for_cta()}&nbsp;&nbsp;Telegram</span>
                        </button>
                    </div>
                `),
				'reddit' == l[a] &&
					n.push(`
                    <div class="${t} ${e}">
                        <button
                            style="background-color: transparent; color: #FFF; border: 1px solid #3F3F5B;"
                            class="${gw_text_center}${gw_items_center}${gw_px_4}${gw_py_2}${gw_font_bold}${gw_text_sm}${gw_rounded_md}${gw_font_medium}${gw_border}${gw_border_transparent}${gw_w_full}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                            onclick="gw_reddit()" 
                        >
                            <span class="${gw_flex}${gw_flex_row}${gw_items_center}${gw_justify_center}${gw_w_full}">${gw_reddit_svg_for_cta()}&nbsp;&nbsp;Reddit</span>
                        </button>
                    </div>
                `),
				'linkedin' == l[a] &&
					n.push(`
                    <div class="${t} ${e}">
                        <button
                            style="background-color: transparent; color: #FFF; border: 1px solid #3F3F5B;"
                            class="${gw_text_center}${gw_items_center}${gw_px_4}${gw_py_2}${gw_font_bold}${gw_text_sm}${gw_rounded_md}${gw_font_medium}${gw_border}${gw_border_transparent}${gw_w_full}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                            onclick="gw_linkedin()" 
                        >
                            <span class="${gw_flex}${gw_flex_row}${gw_items_center}${gw_justify_center}${gw_w_full}">${gw_linkedin_svg_for_cta()}&nbsp;&nbsp;LinkedIn</span>
                        </button>
                    </div>
                `),
				'facebook' == l[a] &&
					n.push(`
                    <div class="${t} ${e}">
                        <button
                            style="background-color: transparent; color: #FFF; border: 1px solid #3F3F5B;"
                            class="${gw_text_center}${gw_items_center}${gw_px_4}${gw_py_2}${gw_font_bold}${gw_text_sm}${gw_rounded_md}${gw_font_medium}${gw_border}${gw_border_transparent}${gw_w_full}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                            onclick="gw_facebook()" 
                        >
                            <span class="${gw_flex}${gw_flex_row}${gw_items_center}${gw_justify_center}${gw_w_full}">${gw_facebook_svg_for_cta()}&nbsp;&nbsp;Facebook</span>
                        </button>
                    </div>
                `),
				'email' == l[a] &&
					n.push(`
                    <div class="${t} ${e}">
                        <button
                            style="background-color: transparent; color: #FFF; border: 1px solid #3F3F5B;"
                            class="${gw_text_center}${gw_items_center}${gw_px_4}${gw_py_2}${gw_font_bold}${gw_text_sm}${gw_rounded_md}${gw_font_medium}${gw_border}${gw_border_transparent}${gw_w_full}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                            onclick="gw_email()" 
                        >
                            <span class="${gw_flex}${gw_flex_row}${gw_items_center}${gw_justify_center}${gw_w_full}">${gw_email_svg_for_cta()}&nbsp;&nbsp;Email</span>
                        </button>
                    </div>
                `);
		}
		let e = '';
		(e =
			4 <= l.length
				? `
                <div class="${gw_mt_2}${gw_flex}${gw_flex_col}">
                    <div class="${gw_mb_2}${gw_text_center}${gw_justify_center}${gw_flex}${gw_flex_row}">
                        ${n.slice(0, n.length < 7 ? 3 : 4).join('')}
                    </div>
                    <div class="${gw_text_center}${gw_justify_center}${gw_flex}${gw_flex_row}">
                        ${n.slice(n.length < 7 ? 3 : 4).join('')}
                    </div>
                </div>
            `
				: `                
                <div class="${gw_mt_2}${gw_text_center}${gw_justify_center}${gw_flex}${gw_flex_row}">
                    ${n.join('')}
                </div>
            `),
			(gw_waitlist_container.innerHTML += `
            <div class="${gw_mt_4}${gw_text_center}${gw_flex}${gw_flex_col}${gw_text_sm}" style="color: ${gw_font_color}">
                Share and refer your friends to move up in line!
                ${e}
            </div>
        `);
	}
	(gw_waitlist_container.innerHTML += gw_error_handling_area),
		'SUBMIT' === e
			? (gw_waitlist_container.innerHTML += `
            <div class="${gw_mt_4} ${gw_text_center} ${gw_text_md}" style="color: #8989A8;">
    Signed up before? <span style="color: #9C39FF;" class="${hover_gw_cursor_pointer}" onClick="gw_make_waitlist_widget('CHECK')">Check your Status</span>
</div>
        `)
			: 'CHECK' === e &&
			  (gw_waitlist_container.innerHTML += `
            <div class="${gw_mt_4}${gw_text_center}${gw_text_sm}" style="color: #8989A8;">
                Haven't signed up yet? <span style="color: #9C39FF;" class="${hover_gw_cursor_pointer}" onClick="gw_make_waitlist_widget('SUBMIT')">Sign Up<span>
            </div>
        `),
		gw_widget_shows_social_links &&
			gw_waitlist_obj?.configuration_style_json?.social_links &&
			(gw_waitlist_container.innerHTML += gw_make_social_links()),
		gw_waitlist_obj.uses_waitlist_widget_branding &&
			(gw_waitlist_container.innerHTML += gw_branded_footer());
}
function gw_make_waitlist_widget_type_2(e) {
	if (
		((gw_waitlist_container.style.backgroundColor = gw_background_color),
		(gw_waitlist_container.innerHTML = ''),
		'SUBMIT' === e)
	)
		gw_waitlist_container.innerHTML = `
            <div class="${gw_w_full}">
                <div class="${gw_flex}${gw_flex_row}${gw_justify_between}${gw_items_center}${gw_rounded_3xl}${gw_w_full}">
                    <input
                        class="${gw_w_full} ${gw_text_sm} ${gw_transition} ${gw_duration_300} ${gw_border_solid} ${gw_border} ${gw_bg_transparent}"
                        style="color: ${gw_font_color}; border-color: ${gw_border_color}; border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;"
                        name="email"
                        placeholder="${
													gw_optional_waiter_email_placeholder_value ||
													'example@getwaitlist.com'
												}"
                    />
                    <button
                        id="primaryCTA"
                        style="background-color: ${gw_button_color}; color: ${gw_button_font_color}; border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;"
                        class="${gw_text_center}${gw_items_center}${gw_px_4}${gw_py_2}${gw_font_bold}${gw_text_sm}${gw_font_medium}${gw_border}${gw_border_transparent}${gw_w_1_2}${hover_gw_opacity_80}${gw_transition}${gw_duration_300}"
                        onclick="gw_post_waiter_obj()"
                    >
                        ${gw_signup_button_title}
                    </button>
                </div>
            </div>
        `;
	else if ('SUCCESS' === e) {
		let e = '',
			a = '';
		gw_waiter_obj.removed_date
			? (e = 'Offboarded!')
			: gw_waitlist_obj.uses_signup_verification && !gw_waiter_obj.verified
			? (e = `This waitlist requires you to verify your email. To join, click the link we sent to ${gw_waiter_obj.email}.`)
			: (a =
					((e = gw_waitlist_obj.hide_counts
						? 'You are on the Waitlist! Refer people to move up: '
						: `You are #${gw_waiter_obj.priority} in line! Refer people to move up: `),
					`<div class="${gw_flex}${gw_flex_row}">${gw_waiter_obj.referral_link}</div>`)),
			(gw_waitlist_container.innerHTML = `
            <div id="gw_success" class="${gw_justify_center}${gw_flex}${gw_flex_col}${gw_items_center}${gw_text_sm}${gw_px_4}${gw_py_2}" style="border: 1px solid ${gw_button_color}; border-radius:0.375rem;">
                <div class="${gw_flex}${gw_flex_row}${gw_font_bold}">
                    ${e}
                </div>
                ${a}
            </div>
        `);
	}
	(gw_waitlist_container.innerHTML += gw_widget_2_error_handling_area),
		gw_waitlist_obj.uses_waitlist_widget_branding &&
			(gw_waitlist_container.innerHTML += gw_widget_2_branded_footer());
}
function gw_make_question_answer_field(e) {
	var t = gw_waitlist_obj.questions[e];
	let l = gw_mt_2;
	if (
		(0 !== e || gw_waitlist_obj.remove_widget_headers || (l = ' '),
		t && t.answer_value)
	) {
		let a = [];
		return (
			t.answer_value.forEach((e) =>
				a.push(
					`<option value="${e}" style="color: ${gw_font_color};background-color:${gw_background_color}">${e}</option>`
				)
			),
			`
            <div class="${gw_mt_1}">
                <select
                    class="gw_question ${l} ${gw_w_full} ${gw_rounded} ${gw_text_sm} ${gw_transition} ${gw_duration_300} ${gw_border_solid} ${gw_border} ${gw_bg_transparent}"
                    id="gw_question_${e}"
                    name="${t.question_value}"
                    style="height: 43px; color: ${gw_font_color}80; border-color: ${gw_border_color}"
                    onchange="gw_modify_select_on_change(this, '${gw_font_color}')"
                >
                    <option value="" style="color: ${gw_font_color};background-color:${gw_background_color}">${
				t.question_value
			}</option>
                    ${a.join('')}
                </select>
            </div>
        `
		);
	}
	return `
            <div class="${gw_mt_1}">
                <input
                    class="gw_question ${l} ${gw_w_full} ${gw_rounded} ${gw_text_sm} ${gw_transition} ${gw_duration_300} ${gw_border_solid} ${gw_border} ${gw_bg_transparent}"
                    style="color: ${gw_font_color}; border-color: ${gw_border_color}"
                    placeholder="${t.question_value}"
                    name="${t.question_value}"
                    id="gw_question_${e}"
                />
            </div>
        `;
}
function gw_twitter_svg_for_cta() {
	return `<?xml version="1.0" encoding="UTF-8"?><svg width="20" height="20" enable-background="new 0 0 248 204" viewBox="0 0 248 204" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">        <path class="st0" d="m221.95 51.29c0.15 2.17 0.15 4.34 0.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-0.04c-27.44 0.04-54.31-7.82-77.41-22.64 3.99 0.48 8 0.72 12.02 0.73 22.74 0.02 44.83-7.61 62.72-21.66-21.61-0.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-0.87-23.56-4.76-40.51-25.46-40.51-49.5v-0.64c7.02 3.91 14.88 6.08 22.92 6.32-22.19-14.83-29.03-44.35-15.63-67.43 25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z" fill="${gw_button_font_color}"/></svg>`;
}
function gw_whatsapp_svg_for_cta() {
	return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="20" height="20" fill-rule="nonzero"><g fill="${gw_button_font_color}" fill-opacity="0.0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,2.25121 0.63234,4.35007 1.71094,6.15039l-1.60352,5.84961l5.97461,-1.56836c1.74732,0.99342 3.76446,1.56836 5.91797,1.56836c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM10.89258,9.40234c0.195,0 0.39536,-0.00119 0.56836,0.00781c0.214,0.005 0.44692,0.02067 0.66992,0.51367c0.265,0.586 0.84202,2.05608 0.91602,2.20508c0.074,0.149 0.12644,0.32453 0.02344,0.51953c-0.098,0.2 -0.14897,0.32105 -0.29297,0.49805c-0.149,0.172 -0.31227,0.38563 -0.44727,0.51563c-0.149,0.149 -0.30286,0.31238 -0.13086,0.60938c0.172,0.297 0.76934,1.27064 1.65234,2.05664c1.135,1.014 2.09263,1.32561 2.39063,1.47461c0.298,0.149 0.47058,0.12578 0.64258,-0.07422c0.177,-0.195 0.74336,-0.86411 0.94336,-1.16211c0.195,-0.298 0.39406,-0.24644 0.66406,-0.14844c0.274,0.098 1.7352,0.8178 2.0332,0.9668c0.298,0.149 0.49336,0.22275 0.56836,0.34375c0.077,0.125 0.07708,0.72006 -0.16992,1.41406c-0.247,0.693 -1.45991,1.36316 -2.00391,1.41016c-0.549,0.051 -1.06136,0.24677 -3.56836,-0.74023c-3.024,-1.191 -4.93108,-4.28828 -5.08008,-4.48828c-0.149,-0.195 -1.21094,-1.61031 -1.21094,-3.07031c0,-1.465 0.76811,-2.18247 1.03711,-2.48047c0.274,-0.298 0.59492,-0.37109 0.79492,-0.37109z"></path></g></g></svg>`;
}
function gw_telegram_svg_for_cta() {
	return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg viewBox="0,0,24,24" width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" fill="${gw_button_font_color}"/></svg>`;
}
function gw_facebook_svg_for_cta() {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" fill="${gw_button_font_color}"/></svg>`;
}
function gw_email_svg_for_cta() {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" fill="${gw_button_font_color}"/></svg>`;
}
function gw_reddit_svg_for_cta() {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" fill="${gw_button_font_color}"/></svg>`;
}
function gw_linkedin_svg_for_cta() {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="${gw_button_font_color}" fill-opacity="0.0"/></svg>`;
}
var gw_error_handling_area = `
    <div class="${gw_mt_4} ${gw_rounded_md} ${gw_bg_red_50} ${gw_p_4}" style="display:none">
        <h3 class="${gw_flex} ${gw_flex_row} ${gw_justify_center} ${gw_items_center} ${gw_text_sm} ${gw_text_red_800}">
            <div class="${gw_w_1_8} ${gw_mr_4}">
            <svg xmlns="http://www.w3.org/2000/svg" class="${gw_w_6}" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" fill="#991b1b"/></svg>
            </div>
            <div class="${gw_w_7_8}" id="getWaitlistErrorContainer">
                An error has occurred in trying to retrieve this Waitlist ID # ${gw_waitlist_id}. Please try again later, or contact support@getwaitlist.com.
            </div>
        </h3>
    </div>
`,
	gw_widget_2_error_handling_area = `
    <div class="${gw_mt_2} ${gw_rounded_md}" style="display:none">
        <div class="${gw_flex} ${gw_flex_row} ${gw_justify_center} ${gw_items_center} ${gw_text_sm} ${gw_text_red_800}">
            <div class="${gw_w_7_8}" id="getWaitlistErrorContainer">
                An error has occurred in trying to retrieve this Waitlist ID # ${gw_waitlist_id}. Please try again later, or contact support@getwaitlist.com.
            </div>
        </div>
    </div>
`;
function gw_branded_footer() {
	return `
        <div class="${gw_mt_4}">
            <div class="${gw_flex} ${gw_flex_row} ${gw_justify_center}">
                <div class="${gw_self_center} ${gw_h_3} ${gw_w_3} ${gw_mr_2}">
                    <svg viewBox="0 0 870 870" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_5)">
                            <path
                                d="M273.49 511.854L726.839 154.461L357.004 607.16L569.711 862.045C580.905 875.458 602.524 871.207 607.788 854.559L868.939 28.7688C874.366 11.608 858.059 -4.48154 840.94 1.14185L15.2113 272.374C-1.71121 277.932 -5.44289 300.17 8.74037 310.933L273.49 511.854Z"
                                fill="${gw_font_color}"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_5">
                                <rect fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div class="${gw_text_xs}" style="color: ${gw_font_color}">
                    Widget by <a class="${gw_font_bold}" href="https://www.getwaitlist.com" target="_blank">getwaitlist.com</a>
                </div>
            </div>
        </div>
    `;
}
function gw_widget_2_branded_footer() {
	return `
        <div class="${gw_mt_2}">
            <div class="${gw_flex} ${gw_flex_row} ${gw_justify_center}">
                <div class="${gw_text_xs}" style="color: ${gw_font_color}80">
                    Waitlist hosted by <a class="${gw_font_bold}" href="https://www.getwaitlist.com" target="_blank">getwaitlist.com</a>
                </div>
            </div>
        </div>
    `;
}
function gw_make_social_links() {
	var e = [],
		a = gw_waitlist_obj.configuration_style_json?.social_links?.facebook,
		t = gw_waitlist_obj.configuration_style_json?.social_links?.pinterest,
		l = gw_waitlist_obj.configuration_style_json?.social_links?.twitter,
		_ = gw_waitlist_obj.configuration_style_json?.social_links?.linkedin,
		n = gw_waitlist_obj.configuration_style_json?.social_links?.instagram,
		o =
			'transparent' === gw_background_color
				? gw_font_color
				: gw_background_color;
	if (
		(a &&
			e.push(
				`<?xml version="1.0" encoding="UTF-8"?><a class="${gw_ml_1} ${gw_mr_1}" href="${a}" target="_blank" xmlns="http://www.w3.org/2000/svg"><svg width="37" height="37" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg"><path d="m22.821 45.643c12.604 0 22.822-10.218 22.822-22.822 0-12.604-10.218-22.821-22.822-22.821-12.604 0-22.821 10.218-22.821 22.821 0 12.604 10.218 22.822 22.821 22.822z" fill="#fff"/><path d="m22.821 45.643c12.604 0 22.822-10.218 22.822-22.822 0-12.604-10.218-22.821-22.822-22.821-12.604 0-22.821 10.218-22.821 22.821 0 12.604 10.218 22.822 22.821 22.822z" fill="${gw_border_color}"/><path d="m20.801 32.964v-9.0731h-3.0508v-3.6055h3.0508v-2.8526c0-1.5056 0.4226-2.6744 1.2678-3.5064 0.8453-0.8321 1.9678-1.2481 3.3678-1.2481 1.1358 0 2.0602 0.0528 2.7734 0.1585v3.2092h-1.9018c-0.7132 0-1.2018 0.1585-1.4659 0.4755-0.2114 0.2641-0.317 0.6867-0.317 1.2678v2.4961h3.3677l-0.4754 3.6055h-2.8923v9.0731h-3.7243z" fill="${o}"/></svg></a>`
			),
		t &&
			e.push(
				`<?xml version="1.0" encoding="UTF-8"?><a class="${gw_ml_1} ${gw_mr_1}" href="${t}" target="_blank" xmlns="http://www.w3.org/2000/svg"><svg width="37" height="37" viewBox="0 0 47 46" xmlns="http://www.w3.org/2000/svg"><path d="m23.608 45.643c12.604 0 22.821-10.218 22.821-22.822 0-12.604-10.218-22.821-22.821-22.821-12.604 0-22.821 10.218-22.821 22.821 0 12.604 10.217 22.822 22.821 22.822z" fill="#fff"/><path d="m23.608 45.643c12.604 0 22.821-10.218 22.821-22.822 0-12.604-10.218-22.821-22.821-22.821-12.604 0-22.821 10.218-22.821 22.821 0 12.604 10.217 22.822 22.821 22.822z" fill="${gw_border_color}"/><path d="m24.083 12.679c1.2414 0.0264 2.4102 0.3104 3.5064 0.8519 1.0961 0.5414 1.9612 1.2876 2.5951 2.2385 0.6868 1.0301 1.0301 2.1857 1.0301 3.4668s-0.2113 2.4895-0.6339 3.6253c-0.4754 1.2414-1.149 2.2187-2.0206 2.9319-0.9773 0.7924-2.1263 1.1886-3.447 1.1886-0.5283 0-1.0565-0.1255-1.5848-0.3764s-0.9113-0.6009-1.149-1.0499l-0.317 1.2678c-0.3433 1.3735-0.6207 2.3244-0.832 2.8527-0.317 0.7131-0.8849 1.6244-1.7037 2.7338l-0.1585 0.0792-0.1188-0.1188-0.0396-0.5943c-0.0793-0.7396-0.1189-1.2943-0.1189-1.6641 0-0.7924 0.1321-1.8225 0.3962-3.0904 0.1585-0.7396 0.4226-1.8357 0.7924-3.2885l0.4755-1.9018c-0.2642-0.5018-0.3963-1.1622-0.3963-1.981 0-0.766 0.1982-1.3999 0.5944-1.9018 0.3433-0.4226 0.766-0.6867 1.2678-0.7924 0.5019-0.1056 0.9377-0.0132 1.3075 0.2774 0.3698 0.2905 0.5547 0.7528 0.5547 1.3867 0 0.3434-0.0529 0.7264-0.1585 1.149-0.0528 0.2377-0.1717 0.6075-0.3566 1.1093-0.1849 0.5019-0.3038 0.8717-0.3566 1.1094-0.1056 0.4226-0.1585 0.7924-0.1585 1.1094 0 0.5018 0.1783 0.9179 0.5349 1.248 0.3566 0.3302 0.7858 0.4953 1.2877 0.4953 0.8452 0 1.5584-0.3698 2.1395-1.1094 0.5018-0.6075 0.8716-1.4263 1.1094-2.4565 0.2113-0.8452 0.3169-1.6772 0.3169-2.496 0-1.3735-0.4292-2.4433-1.2876-3.2093-0.8585-0.766-1.9877-1.149-3.3876-1.149-1.0301 0-1.9744 0.2377-2.8329 0.7132-0.8584 0.4754-1.5253 1.1226-2.0008 1.9414-0.4754 0.8188-0.7132 1.7565-0.7132 2.813 0 0.4491 0.0793 0.8849 0.2378 1.3075 0.0792 0.2377 0.2245 0.5283 0.4358 0.8717 0.1585 0.2641 0.2377 0.4358 0.2377 0.515 0 0.2113-0.0528 0.4755-0.1585 0.7924-0.132 0.3962-0.2773 0.5943-0.4358 0.5943-0.3434 0-0.7132-0.1783-1.1094-0.5348-0.3962-0.3566-0.7263-0.8387-0.9905-1.4462-0.2905-0.7132-0.4358-1.5056-0.4358-2.3772 0-1.4263 0.3962-2.6942 1.1886-3.8036 0.7396-1.0301 1.7301-1.8423 2.9715-2.4366 1.2415-0.5943 2.549-0.8915 3.9225-0.8915z" fill="${o}"/></svg></a>`
			),
		l &&
			e.push(
				`<?xml version="1.0" encoding="UTF-8"?><a class="${gw_ml_1} ${gw_mr_1}" href="${l}" target="_blank" xmlns="http://www.w3.org/2000/svg"><svg width="37" height="37" viewBox="0 0 47 46" xmlns="http://www.w3.org/2000/svg"><path d="m23.393 45.643c12.604 0 22.821-10.218 22.821-22.822 0-12.604-10.218-22.821-22.821-22.821s-22.821 10.218-22.821 22.821c0 12.604 10.218 22.822 22.821 22.822z" fill="#fff"/><path d="m23.393 45.643c12.604 0 22.821-10.218 22.821-22.822 0-12.604-10.218-22.821-22.821-22.821s-22.821 10.218-22.821 22.821c0 12.604 10.218 22.822 22.821 22.822z" fill="${gw_border_color}"/><path d="m31.436 19.335c0.0264 0.1056 0.0396 0.2773 0.0396 0.515 0 1.9018-0.4622 3.7376-1.3867 5.5073-0.9509 1.8754-2.2848 3.3677-4.0017 4.4771-1.8753 1.2414-4.0281 1.8622-6.4581 1.8622-2.3244 0-4.4507-0.6208-6.3789-1.8622 0.2905 0.0264 0.6207 0.0396 0.9905 0.0396 1.9282 0 3.6583-0.5943 5.1903-1.7829-0.9245 0-1.7367-0.2707-2.4367-0.8122-0.6999-0.5415-1.182-1.2217-1.4461-2.0405 0.2641 0.0264 0.5151 0.0396 0.7528 0.0396 0.3698 0 0.7396-0.0396 1.1093-0.1188-0.9508-0.2113-1.7433-0.7-2.3772-1.466s-0.9509-1.6376-0.9509-2.6149v-0.0793c0.5811 0.3434 1.2018 0.5283 1.8622 0.5547-0.5547-0.3962-1.0037-0.898-1.3471-1.5056-0.3434-0.6075-0.5151-1.2744-0.5151-2.0008s0.1981-1.4197 0.5943-2.0801c1.0302 1.2943 2.2914 2.3244 3.7838 3.0904s3.0838 1.1887 4.7743 1.2679c-0.0529-0.317-0.0793-0.6339-0.0793-0.9509 0-0.7396 0.1849-1.4329 0.5547-2.0801 0.3698-0.6471 0.8716-1.1556 1.5056-1.5254 0.6339-0.3697 1.3207-0.5546 2.0602-0.5546 0.6075 0 1.1688 0.1188 1.6839 0.3565 0.5151 0.2378 0.9707 0.5547 1.3669 0.9509 0.9509-0.1849 1.8358-0.515 2.6546-0.9905-0.317 0.9773-0.9245 1.7433-1.8226 2.298 0.7924-0.1057 1.5849-0.3302 2.3773-0.6735-0.5811 0.8452-1.2811 1.5716-2.0999 2.1791z" fill="${o}"/></svg></a>`
			),
		_ &&
			e.push(
				`<?xml version="1.0" encoding="UTF-8"?><a class="${gw_ml_1} ${gw_mr_1}" href="${_}" target="_blank" xmlns="http://www.w3.org/2000/svg"><svg width="37" height="37" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg"><path d="m23.179 45.643c12.604 0 22.822-10.218 22.822-22.822 0-12.604-10.218-22.821-22.822-22.821-12.604 0-22.821 10.218-22.821 22.821 0 12.604 10.217 22.822 22.821 22.822z" fill="#fff"/><path d="m23.179 45.643c12.604 0 22.822-10.218 22.822-22.822 0-12.604-10.218-22.821-22.822-22.821-12.604 0-22.821 10.218-22.821 22.821 0 12.604 10.217 22.822 22.821 22.822z" fill="${gw_border_color}"/><path d="m16.443 16.958c-0.5811 0-1.0829-0.2113-1.5056-0.6339-0.4226-0.4226-0.6339-0.9245-0.6339-1.5056s0.2113-1.0829 0.6339-1.5056c0.4227-0.4226 0.9245-0.6339 1.5056-0.6339s1.083 0.2113 1.5056 0.6339c0.4226 0.4227 0.6339 0.9245 0.6339 1.5056s-0.2113 1.083-0.6339 1.5056-0.9245 0.6339-1.5056 0.6339zm1.8226 13.471h-3.6847v-11.846h3.6847v11.846zm10.103 0h3.6847v-6.4977c0-1.8226-0.2641-3.1696-0.7924-4.0413-0.6868-1.083-1.8886-1.6244-3.6055-1.6244-0.8452 0-1.5848 0.2113-2.2187 0.6339-0.5811 0.3434-1.0037 0.7792-1.2679 1.3075h-0.0396v-1.6245h-3.5262v11.846h3.6451v-5.8638c0-0.9245 0.132-1.6244 0.3962-2.0999 0.3434-0.6339 0.9377-0.9509 1.7829-0.9509s1.4131 0.3566 1.7037 1.0698c0.1585 0.4226 0.2377 1.1094 0.2377 2.0603v5.7845z" fill="${o}" clipRule="evenodd" fillRule="evenodd"/></svg></a>`
			),
		n &&
			e.push(
				`<?xml version="1.0" encoding="UTF-8"?><a class="${gw_ml_1} ${gw_mr_1}" href="${n}" target="_blank" xmlns="http://www.w3.org/2000/svg"><svg width="37" height="37" fill="none" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg"><path d="m22.82 45.64c12.603 0 22.82-10.217 22.82-22.82s-10.217-22.82-22.82-22.82-22.82 10.217-22.82 22.82 10.217 22.82 22.82 22.82z" fill=""/><path d="m22.82 45.64c12.603 0 22.82-10.217 22.82-22.82s-10.217-22.82-22.82-22.82-22.82 10.217-22.82 22.82 10.217 22.82 22.82 22.82z" fill="${gw_border_color}"/><mask id="d" x="12" y="12" width="22" height="22" mask-type="alpha" maskUnits="userSpaceOnUse"><g clipPath="url(#clip0)"><path d="m27.015 12h-8.6442c-3.513 0-6.3711 2.8581-6.3711 6.3711v8.6442c0 3.5131 2.8581 6.3712 6.3711 6.3712h8.6442c3.5131 0 6.3712-2.8581 6.3712-6.3712v-8.6442c-1e-4 -3.513-2.8581-6.3711-6.3712-6.3711zm4.2197 15.015c0 2.3305-1.8892 4.2197-4.2197 4.2197h-8.6442c-2.3304 0-4.2196-1.8892-4.2196-4.2197v-8.6442c0-2.3304 1.8892-4.2196 4.2196-4.2196h8.6442c2.3305 0 4.2197 1.8892 4.2197 4.2196v8.6442z" fill="url(#c)"/><path d="m22.693 17.162c-3.05 0-5.5313 2.4814-5.5313 5.5313s2.4813 5.5313 5.5313 5.5313 5.5313-2.4814 5.5313-5.5313c0-3.05-2.4813-5.5313-5.5313-5.5313zm0 8.9111c-1.8666 0-3.3798-1.5131-3.3798-3.3798 0-1.8666 1.5132-3.3798 3.3798-3.3798 1.8667 0 3.3798 1.5132 3.3798 3.3798s-1.5132 3.3798-3.3798 3.3798z" fill="url(#b)"/><path d="m28.236 18.529c0.732 0 1.3254-0.5935 1.3254-1.3255s-0.5934-1.3254-1.3254-1.3254-1.3254 0.5934-1.3254 1.3254 0.5934 1.3255 1.3254 1.3255z" fill="url(#a)"/></g></mask><g mask="url(#d)"><rect x="-2.9707" y="1.3066" width="45.981" height="42.238" fill="${o}"/></g><defs><linearGradient id="c" x1="22.693" x2="22.693" y1="33.324" y2="12.166" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#E09B3D"/><stop offset=".3" stopColor="#C74C4D"/><stop offset=".6" stopColor="#C21975"/><stop offset="1" stopColor="#7024C4"/></linearGradient><linearGradient id="b" x1="22.693" x2="22.693" y1="33.324" y2="12.166" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#E09B3D"/><stop offset=".3" stopColor="#C74C4D"/><stop offset=".6" stopColor="#C21975"/><stop offset="1" stopColor="#7024C4"/></linearGradient><linearGradient id="a" x1="28.236" x2="28.236" y1="33.324" y2="12.166" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#E09B3D"/><stop offset=".3" stopColor="#C74C4D"/><stop offset=".6" stopColor="#C21975"/><stop offset="1" stopColor="#7024C4"/></linearGradient></defs></svg></a>`
			),
		e)
	)
		return `<div class="${gw_mt_4}"><div class="${gw_flex} ${gw_items_center} ${gw_w_full} ${gw_justify_center}">${e.join(
			''
		)}</div></div>`;
}
function gw_make_email_field() {
	return `
        <div class="${gw_mx_auto} ${gw_mb_2} ${gw_w_full}">
        ${
					gw_waitlist_obj.remove_widget_headers
						? ''
						: `<span style="color: #8989A8" class="${gw_text_md}${gw_mb_1}">Email</span>`
				}
            <div class="${gw_text_center} ${gw_mt_1} ${gw_w_full}">
                <input
                    class="${gw_w_full}${gw_rounded_md}${gw_text_sm} ${gw_transition} ${gw_duration_300} ${gw_border_solid} ${gw_border}"
                    style="color: rgba(255, 255, 255, 0.25); border-color: #353553; background: rgba(255, 255, 255, 0.04);"
                    name="email"
                    placeholder="${
											gw_optional_waiter_email_placeholder_value ||
											'example@alqen.com'
										}"
                />
            </div>
        </div>
    `;
}
function gw_make_spinner(e, a, t) {
	return `
        <svg viewBox="0 0 24 24" class="app-loading-spinner-svg" style="width: ${a}; height: ${t}">
            <g transform="translate(1 1)" fill-rule="nonzero" fill="none">
                <circle cx="11" cy="11" r="11"></circle>
                <path
                    d="M10.998 22a.846.846 0 0 1 0-1.692 9.308 9.308 0 0 0 0-18.616 9.286 9.286 0 0 0-7.205 3.416.846.846 0 1 1-1.31-1.072A10.978 10.978 0 0 1 10.998 0c6.075 0 11 4.925 11 11s-4.925 11-11 11z"
                    fill="${e}"
                ></path>
            </g>
        </svg>
    `;
}
console.log('Alqen Waitlist Loaded'),
	gw_heartbeat().then(() => gw_get_waitlist_obj());
