# Header
header-menu-item-my-account =
  .label = My account

header-menu-item-language =
  .label = Language

header-clock-component-months =
  .caption = Months
header-clock-component-days =
  .caption = Days
header-clock-component-hours =
  .caption = Hours
header-clock-component-minutes =
  .caption = Minutes
header-clock-component-seconds =
  .caption = Seconds



# Footer
footer-links-privacy-policy = Privacy
footer-links-legal-info = Imprint
footer-links-policies = Policies
footer-links-contact = Contact

footer-last-saved = Your information was last saved on {DATETIME($lastSaved, weekday: "long", month: "long", day: "numeric", year: "numeric")} at {DATETIME($lastSaved, hour: "numeric", minute: "numeric")}.


# Auth
auth-unverified-title = You have not verified your email address.
auth-unverified-message = Please click the verification link in the email you received before registering!
auth-unverified-retry = Retry



# Invoices
invoice-edit-selection = Edit selection

invoice-item-label = {$amount} x {$name}

invoice-total-item-label = {$name}

invoice-item-definition-register-ticket-type-day =
  .name = Day ticket
  .extra = {DATETIME($day, month: "long", day: "numeric")}

invoice-item-definition-register-ticket-type-full =
  .name = Full conv.
  .extra = {DATETIME_RANGE($start, $end, month: "long", day: "numeric")}

invoice-item-definition-register-ticket-addons-stage-pass =
  .name = Stage pass

invoice-item-definition-register-ticket-addons-tshirt =
  .name = T-shirt
  .extra = {$size}

invoice-item-definition-register-ticket-addons-early =
  .name = Early Bird

invoice-item-definition-register-ticket-addons-late =
  .name = Late Fee

invoice-item-definition-register-ticket-addons-dealer-half =
  .name = Dealer (Half a Table)

invoice-item-definition-register-ticket-addons-dealer-full =
  .name = Dealer (1 Table)

invoice-item-definition-register-ticket-addons-dealer-double =
  .name = Dealer (2 Tables)

invoice-item-definition-register-ticket-addons-dealer-quad =
  .name = Dealer (4 Tables)

invoice-item-definition-register-ticket-addons-boat-trip =
  .name = Boat Trip

invoice-item-definition-register-ticket-addons-boat-vip =
  .name = Boat VIP

invoice-item-definition-register-ticket-addons-boat-benefactor =
  .name = Boat Sponsor

invoice-item-definition-register-ticket-addons-artshow-table-half =
  .name = Artshow (Half a Table)

invoice-item-definition-register-ticket-addons-artshow-table-one =
  .name = Artshow (1 Table)

invoice-item-definition-register-ticket-addons-artshow-table-oneandhalf =
  .name = Artshow (1.5 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-two =
  .name = Artshow (2 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-twoandhalf =
  .name = Artshow (2.5 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-three =
  .name = Artshow (3 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-threeandhalf =
  .name = Artshow (3.5 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-four =
  .name = Artshow (4 Tables)

invoice-item-definition-register-ticket-addons-artshow-panel-half =
  .name = Artshow (Half a Panel)

invoice-item-definition-register-ticket-addons-artshow-panel-one =
  .name = Artshow (1 Panel)

invoice-item-definition-register-ticket-addons-artshow-panel-oneandhalf =
  .name = Artshow (1.5 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-two =
  .name = Artshow (2 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-twoandhalf =
  .name = Artshow (2.5 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-three =
  .name = Artshow (3 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-threeandhalf =
  .name = Artshow (3.5 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-four =
  .name = Artshow (4 Panels)

invoice-item-definition-other =
  .name = Other fees

invoice-total =
  .name = Total
  .extra = Taxes included

invoice-paid =
  .name = Paid

invoice-due =
  .name = Due

invoice-pay-button-credit-card = 💳 Pay with CC

invoice-unprocessed-payments = Your payment is being processed.

invoice-pay-button-sepa = SEPA Transfer


# Common register messages
register-header-title = Welcome to Eurofurence 2024!
register-header-description =
  We're very excited that you've decided to join us.
  Get ready for a fun couple of days with like-minded people and enjoy all the activities and events that we've got lined up for you this year.

register-navigation-back = Go back
register-navigation-next = Continue
register-navigation-update = Save
register-navigation-finish = Finish

register-invoice-layout =
  .invoiceTitle = Your registration

register-step-counter = Step {$step}



# Register ticket type page
register-ticket-type-title = Select your ticket

register-ticket-type-day =
  .label = Day ticket

register-ticket-type-full =
  .label = Full convention

register-ticket-type-validation-errors-type-required = Please select a ticket type.



# Register ticket day page
register-ticket-day-title = Select your ticket

register-ticket-day-card =
  .label = {DATETIME($date, weekday: "long", day: "numeric", month: "short")}

register-ticket-day-validation-errors-day-required = Please select a day.



# Register ticket level page
register-ticket-level-title = Select your ticket

register-ticket-level-card-standard =
  This Standard Convention ticket grants you access to the convention.

  + Standard convention badge
  + program book
  + participation in scheduled events

  .label = Standard
  .priceLabel = {$type ->
                   *[full] Standard ticket
                    [day]  Standard day ticket
                }

register-ticket-level-card-sponsor =
  As a thank you for supporting Eurofurence with a voluntary donation, you will receive

  + Sponsor convention badge
  + program book + honorable mention
  + participation in scheduled events
  + early access to the Dealers' Den and Art Show (Thursday)
  + priority queueing for certain events
  + Sponsor pack
  + free T-shirt

  .label = Sponsor
  .priceLabel = {$type ->
                   *[full] Sponsor ticket
                    [day]  Sponsor day ticket
                }

register-ticket-level-card-super-sponsor =
  An even more generous donation, you've earned a Super Sponsor ticket! This means you'll get

  + Super Sponsor convention badge
  + program book + honorable mention
  + participation in scheduled events
  + super-early access to the Dealers' Den and Art Show (Thursday)
  + priority queueing for certain events
  + Super Sponsor pack
  + free T-shirt

  .label = Super sponsor
  .priceLabel = {$type ->
                   *[full] Super sponsor ticket
                    [day]  Super sponsor day ticket
                }

register-ticket-level-modifiers-early-bird =
  .label = Early Bird Discount (if paid before March 1st)
  .price = - €15

register-ticket-level-modifiers-late-fee =
  .label = Late Fee (if paid June 1st or later)
  .price = + €15

register-ticket-level-expiration-notice = Register before {DATETIME($expirationDate, day: "numeric", month: "long")}

register-ticket-level-addons-title = Select add-ons

register-ticket-level-addons-item-stage-pass =
  .label = Stage pass
  .description = The Stage pass will grant you access to the stage events.

register-ticket-level-addons-item-tshirt =
  .label = Eurofurence T-shirt
  .description = 100% cotton, high-quality T-shirts. You can also purchase these at the event, but purchasing one now will guarantee availability of your size.

register-ticket-level-addons-item-tshirt-option-size =
  .label = T-shirt size

register-ticket-level-addons-item-tshirt-option-size-value = { $value ->
  [XS]    X-Small (Regular Cut)
  [wXS]   X-Small (Contoured Cut)
 *[S]     Small (Regular Cut)
  [wS]    Small (Contoured Cut)
  [M]     Medium (Regular Cut)
  [wM]    Medium (Contoured Cut)
  [L]     Large (Regular Cut)
  [wL]    Large (Contoured Cut)
  [XL]    X-Large (Regular Cut)
  [wXL]   X-Large (Contoured Cut)
  [XXL]   XX-Large (Regular Cut)
  [wXXL]  XX-Large (Contoured Cut)
  [m3XL]  3X-Large (Regular Cut)
  [w3XL]  3X-Large (Contoured Cut)
  [m4XL]  4X-Large (Regular Cut)
  [w4XL]  4X-Large (Contoured Cut)
}

register-ticket-level-validation-errors-level-required = Please select a ticket level.

register-ticket-level-validation-errors-addons-tshirt-options-size-required = Please select a T-shirt size.



# Register personal info page
register-personal-info-title = Personal information

register-personal-info-nickname =
  .label = Nickname
  .placeholder = Johnny_The_Sergal

register-personal-info-first-name =
  .label = First name
  .placeholder = John

register-personal-info-last-name =
  .label = Last name
  .placeholder = Doe

register-personal-info-full-name-permission =
  .label = I grant permission to use my full name in Eurofurence related media.

register-personal-info-date-of-birth =
  .label = Date of birth
  .placeholder = 1995-06-30

register-personal-info-spoken-languages =
  .label = Spoken languages

register-personal-info-pronouns =
  .legend = Pronouns

register-personal-info-pronouns-prefer-not-to-say =
  .label = Prefer not to say

register-personal-info-pronouns-other =
  .label = Other

register-personal-info-accessibility =
  .legend = Accessibility

register-personal-info-accessibility-wheelchair =
  .label = Please accommodate my wheelchair (and me).

register-personal-info-validation-errors-nickname-required = Please provide a nickname.
register-personal-info-validation-errors-nickname-max-length = Your nickname may be at most {$limit} characters long.
register-personal-info-validation-errors-nickname-validate-no-leading-or-trailing-whitespace = Please avoid leading or trailing whitespace.
register-personal-info-validation-errors-nickname-validate-min-one-alphanumeric-char = Your nickname must contain at least 1 letter or number.
register-personal-info-validation-errors-nickname-validate-max-two-non-alphanumeric-chars = Your nickname may contain at most 2 special characters.
register-personal-info-validation-errors-first-name-required = Please provide a first name.
register-personal-info-validation-errors-first-name-max-length = Your first name may be at most {$limit} characters long.
register-personal-info-validation-errors-last-name-required = Please provide a last name.
register-personal-info-validation-errors-last-name-max-length = Your last name may be at most {$limit} characters long.
register-personal-info-validation-errors-date-of-birth-required = Please provide your date of birth.
register-personal-info-validation-errors-date-of-birth-validate-minimum-age = You must be at least 18 years old to attend Eurofurence.
register-personal-info-validation-errors-date-of-birth-validate-maximum-age = 122-year-olds are the oldest people allowed at Eurofurence for technical reasons.
register-personal-info-validation-errors-spoken-languages-required = Please select your spoken languages.
register-personal-info-validation-errors-pronouns-selection-required = Please select your pronouns.
register-personal-info-validation-errors-pronouns-other-required = Provide an alternative set of pronouns.



# Register contact info page
register-contact-info-title = Contact information

register-contact-info-email =
  .label = Email address
  .placeholder = john.smith@example.com

register-contact-info-phone-number =
  .label = Phone number
  .placeholder = +32 0 000 00 00

register-contact-info-telegram-username =
  .label = Telegram username
  .placeholder = @johnnythesergal

register-contact-info-street =
  .label = Street
  .placeholder = Pennylane 40

register-contact-info-city =
  .label = City
  .placeholder = Zootopia

register-contact-info-postal-code =
  .label = Postal code (ZIP)
  .placeholder = 8888

register-contact-info-state-or-province =
  .label = State / Province
  .placeholder = Fur Valley

register-contact-info-country =
  .label = Country
  .placeholder = Germany

register-contact-info-validation-errors-email-required = Please provide an email address.
register-contact-info-validation-errors-email-max-length = Your email address may be at most {$limit} characters long.
register-contact-info-validation-errors-email-pattern = Your email address must look like an email address.
register-contact-info-validation-errors-email-validate-is-verified = You may only use either your login email address or an email address you previously registered with.
register-contact-info-validation-errors-phone-number-required = Please provide a phone number.
register-contact-info-validation-errors-phone-number-max-length = Your phone number may be at most {$limit} characters long.
register-contact-info-validation-errors-telegram-username-max-length = Your telegram username may be at most {$limit} characters long.
register-contact-info-validation-errors-telegram-username-pattern = Your telegram username must include the initial @ character.
register-contact-info-validation-errors-street-required = Please provide a street.
register-contact-info-validation-errors-street-max-length = Your street name may be at most {$limit} characters long.
register-contact-info-validation-errors-city-required = Please provide a city.
register-contact-info-validation-errors-city-max-length = Your city name may be at most {$limit} characters long.
register-contact-info-validation-errors-postal-code-required = Please provide a postal code.
register-contact-info-validation-errors-postal-code-max-length = Your postal code may be at most {$limit} characters long.
register-contact-info-validation-errors-state-or-province-max-length = Your province name may be at most {$limit} characters long.
register-contact-info-validation-errors-country-required = Please provide a country.
register-contact-info-validation-errors-country-max-length = Your country name may be at most {$limit} characters long.


# Register optional info page
register-optional-info-title = Optional information

register-optional-info-notifications =
  .legend = I would like to receive event information and announcements about

register-optional-info-notifications-art =
  .label = { -notification-type(type: "art") }

register-optional-info-notifications-animation =
  .label = { -notification-type(type: "animation") }

register-optional-info-notifications-music =
  .label = { -notification-type(type: "music") }

register-optional-info-notifications-fursuiting =
  .label = { -notification-type(type: "fursuiting") }

register-optional-info-conbook =
  .legend = Conbook

register-optional-info-conbook-digital-only =
  .label = I only want to receive a digital version of the convention booklet.

register-optional-info-comments =
  .label = Comments
  .placeholder = I would like to know more about...


# Register summary page
register-summary-title-initial = Confirmation
register-summary-title-edit = Your registration

register-summary-registration-status = { $status ->
 *[unsubmitted] Please double check your information below and click "Finish" to submit it.
  [new] We have received your registration and will confirm it when things are ready. Keep an eye on your mailbox!
  [approved] Your registration has been approved, if you pay now, you'll be all set!
  [partially-paid] We have received partial payment, if you pay what's left, you'll be all set!
  [paid] You're all set. See you at the convention!
  [checked-in] What are you doing looking at the registration system? Go have fun at the convention!
  [cancelled] Uh oh, your registration has been cancelled. You should have received an email explaining why. If you believe this is an error on our part, reply to that email.
  [waiting] You are on the waiting list. Let's hope a place opens up for you!
}

register-summary-registration-id = Badge number: {$registrationId}

register-summary-section-personal-title = Personal information
register-summary-section-contact-title = Contact information
register-summary-section-optional-title = Optional information

register-summary-edit = Edit information

register-summary-section-personal-property-nickname-name = Nickname
register-summary-section-personal-property-full-name-name = Full name
register-summary-section-personal-property-pronouns-name = Pronouns
register-summary-section-personal-property-date-of-birth-name = Date of birth
register-summary-section-personal-property-spoken-languages-name = Spoken language(s)
register-summary-section-personal-property-wheelchair-accomodation-name = Wheelchair accomodation
register-summary-section-contact-property-email-name = E-mail address
register-summary-section-contact-property-phone-number-name = Phone number
register-summary-section-contact-property-street-name = Street
register-summary-section-contact-property-city-name = City
register-summary-section-contact-property-postal-code-name = Postal code
register-summary-section-contact-property-state-or-province-name = State / Province
register-summary-section-contact-property-country-name = Country
register-summary-section-optional-property-notifications-name = I would like to receive event information and announcements about
register-summary-section-optional-property-digital-conbook-name = Digital conbook only
register-summary-section-optional-property-comments-name = Comments

register-summary-boolean-value = { $value ->
  [true] Yes
 *[false] No
}

register-summary-rules-and-conditions-accepted = I accept the <rules>rules</rules> and <conditions>conditions</conditions>.

register-summary-validation-errors-rules-and-conditions-accepted-required = You must accept the rules and conditions to register.




# Register thank you page
register-thank-you-title = Thank you for your registration
register-thank-you-subtitle = Next steps
register-thank-you-content =
  We'll review your registration and send you a response within a few weeks.
  You'll receive an update by e-mail after we've processed and approved your registration.





register-not-open-yet-title = Registration is not open yet!
register-not-open-yet-content =
  We are not yet accepting registrations.
  Check back here when registration opens!





# Common hotel booking messages
hotel-booking-header-title = Welcome to Eurofurence 2024!

hotel-booking-header-description =
  In order to speed up hotel booking and increase your chances of securing a room, you can enter your preferred dates,
  hotel room, contact and guest information on the following pages. We will then generate an email template for you,
  which you can copy and paste into your email client.

  Once booking starts, the secret code in the message below will be revealed.
  <span className="important">You need this code for the hotel to accept your booking.</span>

  The secret code will also be sent out on our [https://twitter.com/eurofurence](Twitter) and Telegram accounts.

hotel-booking-invoice-layout =
  .invoiceTitle = Your hotel room



# Hotel booking room page
hotel-booking-room-title = Room types

hotel-booking-room-card-standard =
  The 27 sqm standard rooms offer luxurious living comfort.
  The rooms are additionally equipped with modern furnishings and spacious working & storage areas so as to best meet guests' needs.

  .label = Standard room

hotel-booking-room-card-deluxe =
  The deluxe rooms at the Estrel Hotel feature an impressive 34 sqm of modern living space.
  The contemporary furnishings and generous work spaces are specially designed to meet the needs of business travellers.

  .label = Deluxe room

hotel-booking-room-card-junior-suite =
  The spacious junior suites (49 to 55 sqm) offer separate living and sleeping areas and feature distinctive styles thanks
  to selected contemporary furnishings, colour accents and works of art.

  .label = Junior suite

hotel-booking-room-card-deluxe-suite =
  Elegantly liveable and fully equipped, the executive suites with their 90 sqm of living space leave nothing to be desired.
  A separate living area with sofas and armchairs, a small bar area and a second TV screen in the bathroom create an upscale,
  welcoming atmosphere almost like home.

  .label = Deluxe suite

hotel-booking-room-card-price-scope = Price per room per night
hotel-booking-room-card-breakfast-and-taxes-notice = Breakfast and taxes included

hotel-booking-room-validation-errors-type-required = Please select a room type.



# Hotel booking guests page
hotel-booking-guests-title = Guest information
hotel-booking-guests-guest-title = Guest {$guestNumber}

hotel-booking-guests-first-name =
  .label = First name
  .placeholder = John

hotel-booking-guests-last-name =
  .label = Last name
  .placeholder = Doe

hotel-booking-guests-email =
  .label = Email address
  .placeholder = john.smith@email.com

hotel-booking-guests-phone-number =
  .label = Phone number
  .placeholder = +32 0 000 00 00

hotel-booking-guests-street =
  .label = Street
  .placeholder = Pennylane 40

hotel-booking-guests-city =
  .label = City
  .placeholder = Zootopia

hotel-booking-guests-postal-code =
  .label = Postal code (ZIP)
  .placeholder = 8888

hotel-booking-guests-state-or-province =
  .label = State / Province
  .placeholder = Fur Valley

hotel-booking-guests-country =
  .label = Country
  .placeholder = Germany

hotel-booking-guests-validation-errors-guests-firstName-required = Please provide a first name.
hotel-booking-guests-validation-errors-guests-lastName-required = Please provide a last name.
hotel-booking-guests-validation-errors-guests-email-required = Please provide an email address.
hotel-booking-guests-validation-errors-guests-phoneNumber-required = Please provide a phone number.
hotel-booking-guests-validation-errors-guests-street-required = Please provide a street.
hotel-booking-guests-validation-errors-guests-city-required = Please provide a city.
hotel-booking-guests-validation-errors-guests-postalCode-required = Please provide a postal code.
hotel-booking-guests-validation-errors-guests-stateOrProvince-required = Please provide a state or province.
hotel-booking-guests-validation-errors-guests-country-required = Please provide a country.



# Hotel booking additional info page
hotel-booking-additional-info-title = Additional information

hotel-booking-additional-info-comments =
  .label = Comments
  .placeholder = I would like to know more about...



# Hotel booking email page
hotel-booking-email-title = Copy your generated email
hotel-booking-email-description =
  Once booking starts, the secret code in the message below will be revealed. <span className="important">You need this code for the hotel to accept your booking.</span>

  If you want, you can already copy the text below in a draft message in your email client so you only need to enter the secret code once it has been revealed.

  The secret code will also be sent out on our [https://twitter.com/eurofurence](Twitter) and Telegram accounts.


# Error reporting
funnel-error-report-title = Oh no...

funnel-error-report-operation = {$operation ->
  [registration-open-check]       We couldn't check if you are already registered.
  [registration-submission]       We couldn't submit your registration.
  [registration-update]           We couldn't update your registration.
  [registration-initiate-payment] We couldn't initiate your payment.
  [registration-set-locale]       We couldn't save your language preference.
  [user-info-lookup]              We couldn't retrieve your login information.
 *[unknown]                       There was an error handling your request.
}

funnel-error-report-message = {$category ->
  [attsrv] {$code ->
    [attendee-data-duplicate]  There is already an attendee registered with the information you supplied.
    [attendee-data-invalid]    The information you filled in was not accepted by the server. This shouldn't happen under normal conditions. Please try again in a few minutes or contact support.
    [attendee-parse-error]     The server did not understand the information the website sent to it. This shouldn't happen under normal conditions. Please try again in a few minutes or contact support.
    [attendee-write-error]     An error occurred when trying to save your attendee information. This shouldn't happen under normal conditions. Please try again in a few minutes or contact support.
    [auth-forbidden]           You do not have permission to do this. Contact support if you believe this is a mistake.
   *[unknown]                  The server encountered an unexpected problem while processing your request. Please try again in a few minutes or contact support.
  }
  [paysrv] {$code ->
   *[unknown]                  The server encountered an unexpected problem while processing your request. Please try again in a few minutes or contact support.
  }
 *[frontend] {$code ->
    [network-error]            We could not reach the server to process your request. Please check if you are connected to the internet.
   *[unknown]                  An error occurred when we tried to handle your request. Please try again later. If this problem persists, try clearing your browser's cache and refreshing the page. If that doesn't resolve the problem, contact support.
  }
}


# General utility messages
price = {$value ->
   [0]     Free
  *[other] {NUMBER($value, minimumFractionDigits: 0)}
}

due = {NUMBER($value, minimumFractionDigits: 0)}

-notification-type = { $type ->
  [art]        Art
  [animation]  Animation
  [music]      Music
 *[fursuiting] Fursuiting
}

notification-type = { $type ->
  [art]        { -notification-type(type: "art") }
  [animation]  { -notification-type(type: "animation") }
  [music]      { -notification-type(type: "music") }
 *[fursuiting] { -notification-type(type: "fursuiting") }
}

country-name = { $countryCode ->
  [AF] Afghanistan
  [AX] Åland Islands
  [AL] Albania
  [DZ] Algeria
  [AS] American Samoa
  [AD] Andorra
  [AO] Angola
  [AI] Anguilla
  [AQ] Antarctica
  [AG] Antigua and Barbuda
  [AR] Argentina
  [AM] Armenia
  [AW] Aruba
  [AC] Ascension
  [AU] Australia
  [AT] Austria
  [AZ] Azerbaijan
  [BS] Bahamas
  [BH] Bahrain
  [BD] Bangladesh
  [BB] Barbados
  [BY] Belarus
  [BE] Belgium
  [BZ] Belize
  [BJ] Benin
  [BM] Bermuda
  [BT] Bhutan
  [BO] Bolivia
  [BQ] Bonaire
  [BA] Bosnia and Herzegovina
  [BW] Botswana
  [BV] Bouvet Island
  [BR] Brazil
  [IO] British Indian Ocean Territory
  [BN] Brunei Darussalam
  [BG] Bulgaria
  [BF] Burkina Faso
  [BI] Burundi
  [CV] Cabo Verde
  [KH] Cambodia
  [CM] Cameroon
  [CA] Canada
  [KY] Cayman Islands
  [CF] Central African Republic
  [EA] Ceuta, Melilla
  [TD] Chad
  [CL] Chile
  [CN] China
  [CX] Christmas Island
  [CP] Clipperton
  [CC] Cocos (Keeling) Islands
  [CO] Colombia
  [KM] Comoros
  [CG] Congo
  [CD] Congo (Democratic Republic of the)
  [CK] Cook Islands
  [CR] Costa Rica
  [HR] Croatia
  [CU] Cuba
  [CW] Curaçao
  [CY] Cyprus
  [CZ] Czechia
  [CI] Côte d'Ivoire
  [DK] Denmark
  [DG] Diego Garcia
  [DJ] Djibouti
  [DM] Dominica
  [DO] Dominican Republic
  [EC] Ecuador
  [EG] Egypt
  [SV] El Salvador
  [GQ] Equatorial Guinea
  [ER] Eritrea
  [EE] Estonia
  [SZ] Eswatini
  [ET] Ethiopia
  [FK] Falkland Islands
  [FO] Faroe Islands
  [FJ] Fiji
  [FI] Finland
  [FR] France
  [GF] French Guiana
  [PF] French Polynesia
  [TF] French Southern Territories
  [GA] Gabon
  [GM] Gambia
  [GE] Georgia
 *[DE] Germany
  [GH] Ghana
  [GI] Gibraltar
  [GR] Greece
  [GL] Greenland
  [GD] Grenada
  [GP] Guadeloupe
  [GU] Guam
  [GT] Guatemala
  [GG] Guernsey
  [GN] Guinea
  [GW] Guinea-Bissau
  [GY] Guyana
  [HT] Haiti
  [HM] Heard Island and McDonald Islands
  [VA] Holy See (Vatican City State)
  [HN] Honduras
  [HK] Hong Kong
  [HU] Hungary
  [IS] Iceland
  [IN] India
  [ID] Indonesia
  [IR] Iran
  [IQ] Iraq
  [IE] Ireland
  [IM] Isle of Man
  [IL] Israel
  [IT] Italy
  [JM] Jamaica
  [JP] Japan
  [JE] Jersey
  [JO] Jordan
  [IC] Kanarische Inseln
  [KZ] Kazakhstan
  [KE] Kenya
  [KI] Kiribati
  [KP] North Korea
  [KR] South Korea
  [KW] Kuwait
  [KG] Kyrgyzstan
  [LA] Lao
  [LV] Latvia
  [LB] Lebanon
  [LS] Lesotho
  [LR] Liberia
  [LY] Libya
  [LI] Liechtenstein
  [LT] Lithuania
  [LU] Luxembourg
  [MO] Macao
  [MG] Madagascar
  [MW] Malawi
  [MY] Malaysia
  [MV] Maldives
  [ML] Mali
  [MT] Malta
  [MH] Marshall Islands
  [MQ] Martinique
  [MR] Mauritania
  [MU] Mauritius
  [YT] Mayotte
  [MX] Mexico
  [FM] Micronesia
  [MD] Moldova
  [MC] Monaco
  [MN] Mongolia
  [ME] Montenegro
  [MS] Montserrat
  [MA] Morocco
  [MZ] Mozambique
  [MM] Myanmar
  [NA] Namibia
  [NR] Nauru
  [NP] Nepal
  [NL] Netherlands
  [NC] New Caledonia
  [NZ] New Zealand
  [NI] Nicaragua
  [NE] Niger
  [NG] Nigeria
  [NU] Niue
  [NF] Norfolk Island
  [MK] North Macedonia
  [MP] Northern Mariana Islands
  [NO] Norway
  [OM] Oman
  [PK] Pakistan
  [PW] Palau
  [PS] Palestine, State of
  [PA] Panama
  [PG] Papua New Guinea
  [PY] Paraguay
  [PE] Peru
  [PH] Philippines
  [PN] Pitcairn
  [PL] Poland
  [PT] Portugal
  [PR] Puerto Rico
  [QA] Qatar
  [RE] Réunion
  [RO] Romania
  [RU] Russian Federation
  [RW] Rwanda
  [BL] Saint Barthélemy
  [SH] Saint Helena
  [KN] Saint Kitts and Nevis
  [LC] Saint Lucia
  [MF] Saint Martin (French part)
  [PM] Saint Pierre and Miquelon
  [VC] Saint Vincent and the Grenadines
  [WS] Samoa
  [SM] San Marino
  [ST] Sao Tome and Principe
  [SA] Saudi Arabia
  [SN] Senegal
  [RS] Serbia
  [SC] Seychelles
  [SL] Sierra Leone
  [SG] Singapore
  [SX] Sint Maarten (Dutch part)
  [SK] Slovakia
  [SI] Slovenia
  [SB] Solomon Islands
  [SO] Somalia
  [ZA] South Africa
  [GS] South Georgia and the South Sandwich Islands
  [SS] South Sudan
  [ES] Spain
  [LK] Sri Lanka
  [SD] Sudan
  [SR] Suriname
  [SJ] Svalbard
  [SE] Sweden
  [CH] Switzerland
  [SY] Syrian Arab Republic
  [TW] Taiwan
  [TJ] Tajikistan
  [TZ] Tanzania
  [TH] Thailand
  [TL] Timor-Leste
  [TG] Togo
  [TK] Tokelau
  [TO] Tonga
  [TT] Trinidad and Tobago
  [TA] Tristan da Cunha
  [TN] Tunisia
  [TR] Türkiye
  [TM] Turkmenistan
  [TC] Turks and Caicos Islands
  [TV] Tuvalu
  [UG] Uganda
  [UA] Ukraine
  [AE] United Arab Emirates
  [GB] United Kingdom
  [UM] United States Minor Outlying Islands
  [US] United States of America
  [UY] Uruguay
  [UZ] Uzbekistan
  [VU] Vanuatu
  [VE] Venezuela
  [VN] Viet Nam
  [VG] Virgin Islands (British)
  [VI] Virgin Islands (U.S.)
  [WF] Wallis and Futuna
  [EH] Western Sahara
  [YE] Yemen
  [ZM] Zambia
  [ZW] Zimbabwe
}

language-name = { $languageCode ->
  [ach] Acholi
  [ady] Adyghe
  [af]  Afrikaans
  [ak]  Akan
  [ar]  Arabic
  [az]  Azerbaijani
  [bg]  Bulgarian
  [bn]  Bengali
  [br]  Breton
  [ca]  Catalan
  [cak] Kaqchikel
  [cs]  Czech
  [cy]  Welsh
  [da]  Danish
  [de]  German
  [dsb] Lower Sorbian
  [el]  Greek
 *[en]  English
  [eo]  Esperanto
  [es]  Spanish
  [et]  Estonian
  [eu]  Basque
  [fa]  Persian
  [ff]  Fulah
  [fi]  Finnish
  [fil] Filipino
  [fo]  Faroese
  [fr]  French
  [ga]  Irish
  [gd]  Gaelic
  [gl]  Galician
  [gv]  Manx
  [he]  Hebrew
  [hi]  Hindi
  [hr]  Croatian
  [hsb] Upper Sorbian
  [ht]  Haitian Creole
  [hu]  Hungarian
  [hy]  Armenian
  [id]  Indonesian
  [is]  Icelandic
  [it]  Italian
  [ja]  Japanese
  [km]  Khmer
  [kl]  Greenlandic
  [kab] Kabyle
  [kn]  Kannada
  [ko]  Korean
  [kw]  Cornish
  [la]  Latin
  [lb]  Luxembourgish
  [lt]  Lithuanian
  [lv]  Latvian
  [mai] Maithili
  [mk]  Macedonian
  [ml]  Malayalam
  [mr]  Marathi
  [ms]  Malay
  [mt]  Maltese
  [my]  Burmese
  [no]  Norwegian
  [nb]  Norwegian (bokmal)
  [ne]  Nepali
  [nl]  Dutch
  [oc]  Occitan
  [pa]  Punjabi
  [pl]  Polish
  [pt]  Portuguese
  [ro]  Romanian
  [ru]  Russian
  [sh]  Serbo-Croatian
  [sk]  Slovak
  [sl]  Slovenian
  [sq]  Albanian
  [sr]  Serbian
  [su]  Sundanese
  [sv]  Swedish
  [sw]  Swahili
  [ta]  Tamil
  [te]  Telugu
  [tg]  Tajik
  [th]  Thai
  [tl]  Filipino
  [tlh] Klingon
  [tr]  Turkish
  [uk]  Ukrainian
  [ur]  Urdu
  [uz]  Uzbek
  [vi]  Vietnamese
  [yi]  Yiddish
  [zh]  Chinese
}
