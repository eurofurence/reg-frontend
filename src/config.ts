/* eslint-disable max-len */

import { withPrefix } from 'gatsby'

import StandardRoomImage from '~/images/rooms/standard_room.inline.svg'
import DeluxeRoomImage from '~/images/rooms/deluxe_room.inline.svg'
import JuniorSuiteImage from '~/images/rooms/junior_suite.inline.svg'
import DeluxeSuiteImage from '~/images/rooms/suite_deluxe.inline.svg'
import { checkConfig } from './util/config-types'
import { DateTime } from 'luxon'

// eslint-disable-next-line no-process-env
const apiPath = (path: string) => process.env.GATSBY_API_BASE_URL === undefined ? withPrefix(path) : `${process.env.GATSBY_API_BASE_URL}${path}`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const configMmc = {
	version: 6, // increment to prevent loading from local storage (new year, pricing changes, default packages)
	eventName: 'Mephit Minicon',
	registrationLaunch: DateTime.fromISO('2024-12-20T12:30:23+02:00'),
	registrationExpirationDate: DateTime.fromISO('2025-06-01', { zone: 'Europe/Berlin' }),
	hoursBeforeEditAvailable: 4,
	hotelBookingLaunch: DateTime.fromISO('2025-01-28T12:30:23+02:00'),
	eventStartDate: DateTime.fromISO('2025-05-29', { zone: 'Europe/Berlin' }),
	eventEndDate: DateTime.fromISO('2025-06-01', { zone: 'Europe/Berlin' }),
	dayTicketStartDate: DateTime.fromISO('2025-05-29', { zone: 'Europe/Berlin' }),
	dayTicketEndDate: DateTime.fromISO('2025-05-31', { zone: 'Europe/Berlin' }),
	earliestBirthDate: DateTime.fromISO('1901-01-01'),
	minimumAge: 18,
	enableRoomshare: true,
	allowedCountries: ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AC', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'CV', 'KH', 'CM', 'CA', 'KY', 'CF', 'EA', 'TD', 'CL', 'CN', 'CX', 'CP', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'HR', 'CU', 'CW', 'CY', 'CZ', 'CI', 'DK', 'DG', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'SZ', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'IC', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MK', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TA', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'UM', 'US', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW'],
	ticketLevels: {
		'standard': {
			prices: {
				full: 260,
				day: 26,
			},
		},
		'sponsor': {
			prices: {
				full: 260,
				day: 26,
			},
			hidden: true,
		},
		'super-sponsor': {
			prices: {
				full: 260,
				day: 26,
			},
			hidden: true,
		},
	},
	addons: {
		'stage-pass': {
			price: 0,
			default: false,
			options: {},
			unavailableFor: {
				type: ['day'],
			},
			hidden: true,
			unavailable: false,
		},
		'tshirt': {
			price: 26,
			default: false,
			options: {
				size: {
					type: 'select',
					items: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'm3XL', 'm4XL'],
				},
			},
			hidden: false,
			unavailable: false,
		},
		'early': {
			price: 0,
			default: false, // don't forget to increment version when changing this
			options: {},
			unavailableFor: {
				type: ['day'],
			},
			hidden: true,
			unavailable: false,
		},
		'late': {
			price: 0,
			default: false, // don't forget to increment version when changing this
			options: {},
			unavailableFor: {
				type: ['day'],
			},
			hidden: true,
			unavailable: false,
		},
		'unused': {
			price: 0,
			default: false,
			options: {
				count: {
					type: 'select',
					items: ['c1', 'c2'],
				},
			},
			hidden: true,
			unavailable: false,
		},
	},
	rooms: [
		{ id: 'standard', price: 140, image: StandardRoomImage },
		{ id: 'deluxe', price: 160, image: DeluxeRoomImage },
		{ id: 'junior-suite', price: 198, image: JuniorSuiteImage },
		{ id: 'deluxe-suite', price: 228, image: DeluxeSuiteImage },
	],
	apis: {
		authsrv: {
			// this could be '/some-secret-prefix/authsrv', if our app is under '/some-secret-prefix/app' in the testing environment
			url: apiPath('/authsrv/v1'),
			appName: 'registration-system',
		},
		attsrv: {
			url: apiPath('/attsrv/api/rest/v1'),
		},
		paysrv: {
			url: apiPath('/paysrv/api/rest/v1'),
		},
		roomsrv: {
			url: apiPath('/roomsrv/api/rest/v1'),
			enable: true,
		},
	},
	websiteLinks: {
		// these two links need to be in the footer bar on each page
		privacyStatement: 'https://www.mephitminicon.de/datenschutzerklaerung.htm',
		imprint: 'https://www.mephitminicon.de/impressum.htm',
		// further links we may need
		policies: 'https://www.mephitminicon.de/hausordnung.htm',
		hotelInfo: 'https://www.jugendherberge.de/jugendherbergen/freusburg/',
		terms: 'https://www.mephitminicon.de/hausordnung.htm',
		rules: 'https://www.mephitminicon.de/hausordnung.htm',
		contact: 'https://help.eurofurence.org/contact',
	},
	disablePackageEditForStatuses: ['checked-in'],
} as const

const configEf = {
	version: 10, // increment to prevent loading local storage (new year, pricing changes, default packages)
	eventName: 'Eurofurence',
	registrationLaunch: DateTime.fromISO('2025-01-01T20:00:00+02:00'), // set early enough to allow testing
	registrationExpirationDate: DateTime.fromISO('2025-09-06', { zone: 'Europe/Berlin' }), // currently unused
	hoursBeforeEditAvailable: 0, // feature is commented out anyway
	hotelBookingLaunch: DateTime.fromISO('2025-01-11T20:00:00+02:00'),
	eventStartDate: DateTime.fromISO('2025-09-03', { zone: 'Europe/Berlin' }),
	eventEndDate: DateTime.fromISO('2025-09-06', { zone: 'Europe/Berlin' }),
	dayTicketStartDate: DateTime.fromISO('2025-09-03', { zone: 'Europe/Berlin' }),
	dayTicketEndDate: DateTime.fromISO('2025-09-06', { zone: 'Europe/Berlin' }),
	earliestBirthDate: DateTime.fromISO('1901-01-01'),
	minimumAge: 18,
	enableRoomshare: false,
	allowedCountries: ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AC', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'CV', 'KH', 'CM', 'CA', 'KY', 'CF', 'EA', 'TD', 'CL', 'CN', 'CX', 'CP', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'HR', 'CU', 'CW', 'CY', 'CZ', 'CI', 'DK', 'DG', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'SZ', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'IC', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MK', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TA', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'UM', 'US', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW'],
	ticketLevels: {
		'standard': {
			prices: {
				full: 165,
				day: 90,
			},
			requires: ['stage-pass'],
		},
		'sponsor': {
			prices: {
				full: 285,
				day: 210,
			},
			requires: ['stage-pass'],
			includes: ['tshirt'],
		},
		'super-sponsor': {
			prices: {
				full: 365,
				day: 290,
			},
			requires: ['stage-pass'],
			includes: ['tshirt'],
		},
	},
	addons: {
		'stage-pass': {
			price: 5,
			default: true,
			options: {},
			unavailableFor: {
				type: ['day'],
			},
			hidden: false,
			resetOn: {
				levelChange: true,
			},
			unavailable: false,
		},
		'tshirt': {
			price: 20,
			default: false,
			options: {
				size: {
					type: 'select',
					items: ['XS', 'wXS', 'S', 'wS', 'M', 'wM', 'L', 'wL', 'XL', 'wXL', 'XXL', 'wXXL', 'm3XL', 'w3XL', 'm4XL', 'w4XL'],
				},
			},
			hidden: false,
			resetOn: {
				levelChange: true,
			},
			unavailable: true,
		},
		'early': {
			price: -15,
			default: false, // don't forget to increment version when changing this
			options: {},
			unavailableFor: {
				type: ['day'],
			},
			hidden: true,
			unavailable: false,
		},
		'late': {
			price: 15,
			default: true, // don't forget to increment version when changing this
			options: {},
			unavailableFor: {
				type: ['day'],
			},
			hidden: true,
			unavailable: false,
		},
		'benefactor': {
			price: 50,
			default: false,
			options: {
				count: {
					type: 'select',
					items: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c8', 'c10', 'c15', 'c20', 'c30', 'c40', 'c50', 'c100'],
				},
			},
			unavailableFor: {
				level: ['standard', 'sponsor', null],
			},
			hidden: false,
			resetOn: {
				levelChange: true,
			},
			unavailable: false,
		},
		'fursuit': {
			price: 0,
			default: false,
			options: {},
			hidden: false,
			unavailable: true,
		},
		'fursuitadd': {
			price: 2,
			default: false,
			options: {
				count: {
					type: 'select',
					items: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'],
				},
			},
			hidden: false,
			requires: ['fursuit'],
			unavailable: true,
		},
		'dealer-half': {
			price: 50,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'dealer-full': {
			price: 100,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'dealer-fullplus': {
			price: 150,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'dealer-double': {
			price: 200,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'dealer-quad': {
			price: 400,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'boat-cruise': {
			price: 30,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'boat-trip': {
			price: 40,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'boat-vip': {
			price: 25,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'boat-benefactor': {
			price: 100,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-table-half': {
			price: 5,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-table-one': {
			price: 10,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-table-oneandhalf': {
			price: 15,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-table-two': {
			price: 20,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-table-twoandhalf': {
			price: 25,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-table-three': {
			price: 30,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-table-threeandhalf': {
			price: 35,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-table-four': {
			price: 40,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-panel-half': {
			price: 10,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-panel-one': {
			price: 20,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-panel-oneandhalf': {
			price: 30,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-panel-two': {
			price: 40,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-panel-twoandhalf': {
			price: 50,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-panel-three': {
			price: 60,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-panel-threeandhalf': {
			price: 70,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
		'artshow-panel-four': {
			price: 80,
			default: false,
			options: {},
			hidden: true,
			unavailable: false,
		},
	},
	rooms: [
		{ id: 'standard', price: 140, image: StandardRoomImage },
		{ id: 'deluxe', price: 160, image: DeluxeRoomImage },
		{ id: 'junior-suite', price: 198, image: JuniorSuiteImage },
		{ id: 'deluxe-suite', price: 228, image: DeluxeSuiteImage },
	],
	apis: {
		authsrv: {
			// this could be '/some-secret-prefix/authsrv', if our app is under '/some-secret-prefix/app' in the testing environment
			url: apiPath('/authsrv/v1'),
			appName: 'registration-system',
		},
		attsrv: {
			url: apiPath('/attsrv/api/rest/v1'),
		},
		paysrv: {
			url: apiPath('/paysrv/api/rest/v1'),
		},
		roomsrv: {
			url: apiPath('/roomsrv/api/rest/v1'),
			enable: false,
		},
	},
	websiteLinks: {
		// these two links need to be in the footer bar on each page
		privacyStatement: 'https://help.eurofurence.org/legal/privacy',
		imprint: 'https://help.eurofurence.org/legal/imprint',
		// further links we may need
		policies: 'https://www.eurofurence.org/EF29/policies',
		hotelInfo: 'https://www.eurofurence.org/EF29/hotels',
		terms: 'https://help.eurofurence.org/legal/terms',
		rules: 'https://help.eurofurence.org/legal/roc',
		contact: 'https://help.eurofurence.org/contact',
	},
	disablePackageEditForStatuses: ['paid', 'checked-in', 'cancelled'],
} as const

const config = checkConfig(configEf)

export default config
