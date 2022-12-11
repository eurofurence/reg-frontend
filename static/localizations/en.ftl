# Header
header-dropdown-my-account = My account

header-dropdown-language = Language

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
footer-links-privacy-policy = Privacy policy

footer-links-cookie-statement = Cookie statement

footer-links-contact = Contact Eurofurence

footer-last-saved = Your information was last saved on {DATETIME($lastSaved, weekday: "long", month: "long", day: "numeric", year: "numeric")} at {DATETIME($lastSaved, hour: "numeric", minute: "numeric")}.



# Invoices
invoice-total-label = Total
invoice-total-taxesnotice = Taxes included

invoice-item-label = {$amount} x {$name}

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



# Common register messages
register-header-title = Welcome to Eurofurence 2022!
register-header-description =
  We're very excited that you've decided to join us for this confurence.
  Get ready for a fun couple of days with likeminded people and enjoy all the activities and events that we've got lined up for you this year.

register-navigation-back = Go back
register-navigation-next = Continue
register-navigation-finish = Finish

register-invoice-layout =
  .invoiceTitle = Your registration

register-step-counter = Step {$step}



# Register ticket type page
register-ticket-type-day =
  .label = Day ticket

register-ticket-type-full =
  .label = Full convention

register-ticket-type-validation-errors-type-required = Please select a ticket type.



# Register ticket day page
register-ticket-day-card =
  .label = {DATETIME($date, day: "numeric", month: "long", year: "numeric")}

register-ticket-day-validation-errors-day-required = Please select a day.



# Register ticket level page
register-ticket-level-title = Select your ticket

register-ticket-level-card-standard =
  This Standard Convention ticket grants you access to the convention from Wednesday to Sunday.

  + Standard convention badge
  + program book
  + participation in all scheduled events

  .label = Standard
  .priceLabel = Standard ticket

register-ticket-level-card-sponsor =
  As a thank you for supporting Eurofurence with a voluntary donation, you will receive

  + Sponsor convention badge
  + program book + honorable mention
  + participation in all scheduled events
  + early access to the Dealer's Den on Thursday
  + free T-shirt

  .label = Sponsor
  .priceLabel = Early-bird ticket

register-ticket-level-card-super-sponsor =
  An even more generous donation, you've earned a Super Sponsor ticket! This means you'll get

  + Super Sponsor convention badge
  + program book + honorable mention
  + participation in all scheduled events
  + super-early access to the Dealer's Den on Thursday
  + free T-shirt
  + access to exclusive Super Sponsor events

  .label = Super sponsor
  .priceLabel = Super early-bird ticket

register-ticket-level-expiration-notice = Register before {DATETIME($expirationDate, day: "numeric", month: "long")}

register-ticket-level-addons-title = Select add-ons

register-ticket-level-addons-item-stage-pass =
  .label = Stage pass
  .description = The Stage pass will grant you access to the stage events from **Wednesday** to **Saturday**.

register-ticket-level-addons-item-tshirt =
  .label = Eurofurence T-shirt
  .description = 100% cotton, high-quality T-shirts. You can also purchase these at the event, but purchasing it now will guarantee the availability of your size.

register-ticket-level-addons-item-tshirt-option-size =
  .label = T-shirt size

register-ticket-level-validation-errors-level-required = Please select a ticket level.

register-ticket-level-validation-errors-addons-tshirt-size-required = Please select a T-shirt size.



# Register personal info page
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

register-personal-info-name-on-badge =
  .legend = Name on badge

register-personal-info-name-on-badge-legal-name =
  .label = Legal name

register-personal-info-name-on-badge-nickname =
  .label = Nickname

register-personal-info-name-on-badge-legal-name-and-nickname =
  .label = Legal name + nickname

register-personal-info-spoken-languages =
  .label = Spoken languages

register-personal-info-pronouns =
  .legend = Pronouns

register-personal-info-accessibility =
  .legend = Accessibility

register-personal-info-accessibility-wheelchair =
  .label = Please accomodate my wheelchair (and me).

register-personal-info-validation-errors-nickname-required = Please provide a nickname.
register-personal-info-validation-errors-nickname-max-length = Your nickname may be at most {$limit} characters long.
register-personal-info-validation-errors-nickname-validate-no-leading-or-trailing-whitespace = Please avoid leading or trailing whitespace.
register-personal-info-validation-errors-nickname-validate-min-one-alphanumeric-char = Your nickname must contain at least 1 letter or number.
register-personal-info-validation-errors-nickname-validate-max-two-non-alphanumeric-chars = Your nickname may contain at most 2 special characters.
register-personal-info-validation-errors-first-name-required = Please provide a first name.
register-personal-info-validation-errors-first-name-max-length = Your first name may be at most {$limit} characters long.
register-personal-info-validation-errors-last-name-required = Please provide a last name.
register-personal-info-validation-errors-last-name-max-length = Your last name may be at most {$limit} characters long.
register-personal-info-validation-errors-name-on-badge-required = Please select which name you would like to have on your badge.
register-personal-info-validation-errors-spoken-languages-required = Please select your spoken languages.
register-personal-info-validation-errors-pronouns-required = Please select your pronouns.



# Register contact info page
register-contact-info-email =
  .label = Email address
  .placeholder = john.smith@email.com

register-contact-info-phone-number =
  .label = Phone number
  .placeholder = +32 0 000 00 00

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
register-contact-info-validation-errors-phone-number-required = Please provide a phone number.
register-contact-info-validation-errors-phone-number-max-length = Your phone number may be at most {$limit} characters long.
register-contact-info-validation-errors-street-required = Please provide a street.
register-contact-info-validation-errors-street-max-length = Your street name may be at most {$limit} characters long.
register-contact-info-validation-errors-city-required = Please provide a city.
register-contact-info-validation-errors-city-max-length = Your city name may be at most {$limit} characters long.
register-contact-info-validation-errors-postal-code-required = Please provide a postal code.
register-contact-info-validation-errors-postal-code-max-length = Your postal code may be at most {$limit} characters long.
register-contact-info-validation-errors-state-or-province-required = Please provide a state or province.
register-contact-info-validation-errors-state-or-province-max-length = Your street name may be at most {$limit} characters long.
register-contact-info-validation-errors-country-required = Please provide a country.
register-contact-info-validation-errors-country-max-length = Your street name may be at most {$limit} characters long.


# Register optional info page
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

register-optional-info-comments =
  .label = Comments
  .placeholder = I would like to know more about...


# Register summary page
register-summary-title = Registration

register-summary-section-personal-title = Personal information
register-summary-section-contact-title = Contact information
register-summary-section-optional-title = Optional information

register-summary-edit = Edit information

register-summary-section-personal-property-nickname-name = Nickname
register-summary-section-personal-property-full-name-name = Full name
register-summary-section-personal-property-pronouns-name = Pronouns
register-summary-section-personal-property-badge-name-name = You will be known as
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
register-summary-section-optional-property-comments-name = Comments

register-summary-section-personal-property-wheelchair-accomodation-value = { $value ->
  [true] Yes
 *[false] No
}



# Register thank you page
register-thank-you-title = Thank you for your registration
register-thank-you-subtitle = Next steps
register-thank-you-content =
  We'll review your registration and send you a response within a week or two.
  You'll receive a confirmation after we've processed and approved your registration.





# Common hotel booking messages
hotel-booking-header-title = Welcome to Eurofurence 2022!

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

# General utility messages
price = {$price ->
   [0]     Free
  *[other] {NUMBER($price, minimumFractionDigits: 0)}
}

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
