import StandardRoomImage from '~/images/rooms/standard_room.inline.svg'
import DeluxeRoomImage from '~/images/rooms/deluxe_room.inline.svg'
import JuniorSuiteImage from '~/images/rooms/junior_suite.inline.svg'
import DeluxeSuiteImage from '~/images/rooms/suite_deluxe.inline.svg'

export default {
	eventName: 'Eurofurence',
	registrationLaunch: new Date('2023-01-21T12:30:23+02:00'),
	registrationExpirationDate: new Date('2023-01-31'),
	hotelBookingLaunch: new Date('2023-01-28T12:30:23+02:00'),
	eventStartDate: new Date('2023-08-02'),
	eventEndDate: new Date('2023-08-06'),
	stagePassPrice: 5,
	tshirtPrice: 20,
	tshirtSizes: ['S', 'M', 'L', 'XL', 'XXL'],
	ticketLevels: [
		{
			id: 'standard',
			prices: {
				full: 90,
				day: 25,
			},
		},
		{
			id: 'sponsor',
			prices: {
				full: 155,
				day: 45,
			},
		},
		{
			id: 'super-sponsor',
			prices: {
				full: 250,
				day: 125,
			},
		},
	],
	rooms: [
		{ id: 'standard', price: 140, image: StandardRoomImage },
		{ id: 'deluxe', price: 160, image: DeluxeRoomImage },
		{ id: 'junior-suite', price: 198, image: JuniorSuiteImage },
		{ id: 'deluxe-suite', price: 228, image: DeluxeSuiteImage },
	],
	apis: {
		// TODO can we discover the base path so the URLs are correct even in the presence of a path prefix?
		authsrv: {
			// this could be '/some-secret-prefix/authsrv', if our app is under '/some-secret-prefix/app' in the testing environment
			url: '/authsrv/v1',
			appName: 'registration-system',
		},
		attsrv: {
			url: '/attsrv/api/rest/v1',
		},
		paysrv: {
			url: '/paysrv/api/rest/v1',
		},
	},
} as const
