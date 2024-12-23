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
  .name = Day Ticket
  .extra = {DATETIME($day, month: "long", day: "numeric")}

invoice-item-definition-register-ticket-type-full =
  .name = Full Convention
  .extra = {DATETIME_RANGE($start, $end, month: "long", day: "numeric")}

invoice-item-definition-register-ticket-addons-stage-pass =
  .name = Stage Pass

invoice-item-definition-register-ticket-addons-tshirt =
  .name = T-shirt
  .extra = {$size}

invoice-item-definition-register-ticket-addons-early =
  .name = Early Bird

invoice-item-definition-register-ticket-addons-late =
  .name = Late Fee

invoice-item-definition-register-ticket-addons-benefactor =
  .name = Benefactor

invoice-item-definition-register-ticket-addons-fursuit =
  .name = Fursuit Badge (free)

invoice-item-definition-register-ticket-addons-fursuitadd =
  .name = Fursuit Badge (add.)

invoice-item-definition-register-ticket-addons-dealer-half =
  .name = Dealers' Den (Half Table)

invoice-item-definition-register-ticket-addons-dealer-full =
  .name = Dealers' Den (1 Table)

invoice-item-definition-register-ticket-addons-dealer-fullplus =
  .name = Dealers' Den (1.5 Tables)

invoice-item-definition-register-ticket-addons-dealer-double =
  .name = Dealers' Den (2 Tables)

invoice-item-definition-register-ticket-addons-dealer-quad =
  .name = Dealers' Den (4 Tables)

invoice-item-definition-register-ticket-addons-boat-trip =
  .name = Boat Trip

invoice-item-definition-register-ticket-addons-boat-vip =
  .name = Boat VIP

invoice-item-definition-register-ticket-addons-boat-benefactor =
  .name = Boat Sponsor

invoice-item-definition-register-ticket-addons-artshow-table-half =
  .name = Art Show (Half Table)

invoice-item-definition-register-ticket-addons-artshow-table-one =
  .name = Art Show (1 Table)

invoice-item-definition-register-ticket-addons-artshow-table-oneandhalf =
  .name = Art Show (1.5 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-two =
  .name = Art Show (2 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-twoandhalf =
  .name = Art Show (2.5 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-three =
  .name = Art Show (3 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-threeandhalf =
  .name = Art Show (3.5 Tables)

invoice-item-definition-register-ticket-addons-artshow-table-four =
  .name = Art Show (4 Tables)

invoice-item-definition-register-ticket-addons-artshow-panel-half =
  .name = Art Show (Half Panel)

invoice-item-definition-register-ticket-addons-artshow-panel-one =
  .name = Art Show (1 Panel)

invoice-item-definition-register-ticket-addons-artshow-panel-oneandhalf =
  .name = Art Show (1.5 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-two =
  .name = Art Show (2 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-twoandhalf =
  .name = Art Show (2.5 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-three =
  .name = Art Show (3 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-threeandhalf =
  .name = Art Show (3.5 Panels)

invoice-item-definition-register-ticket-addons-artshow-panel-four =
  .name = Art Show (4 Panels)

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

invoice-unprocessed-payments = Your payment is being processed

invoice-pay-button-sepa = SEPA Transfer


# Common register messages
register-header-title = Welcome to Eurofurence 2025!
register-header-description =
  We are very excited that you have decided to join us.
  Get ready for a fun couple of days with like-minded people and enjoy all the activities and events that we have lined up for you this year.

register-navigation-back = Go back
register-navigation-next = Continue
register-navigation-update = Save
register-navigation-finish = Finish

register-invoice-layout =
  .invoiceTitle = Your Registration

register-step-counter = Step {$step}



# Register ticket type page
register-ticket-type-title = Select your Ticket

register-ticket-type-day =
  .label = Day Ticket

register-ticket-type-full =
  .label = Full Convention

register-ticket-type-validation-errors-type-required = Please select a ticket type!



# Register ticket day page
register-ticket-day-title = Select your Ticket

register-ticket-day-card =
  .label = {DATETIME($date, weekday: "long", day: "numeric", month: "short")}

register-ticket-day-validation-errors-day-required = Please select a day!



# Register ticket level page
register-ticket-level-title = Select your Ticket

register-ticket-level-card-standard =
  This standard Convention ticket grants you access to the convention.

  + Standard convention badge
  + Program book
  + Participation in scheduled events

  .label = Standard
  .priceLabel = {$type ->
                   *[full] Standard Ticket
                    [day]  Standard Day Ticket
                }

register-ticket-level-card-sponsor =
  As a thank you for supporting Eurofurence with a voluntary donation, you will receive

  + Sponsor convention badge
  + Program book + honorable mention
  + Participation in scheduled events
  + Early access to the Dealers' Den and Art Show (Thursday)
  + Priority queueing for certain events
  + Sponsor pack**
  + Free T-shirt**

  .label = Sponsor
  .priceLabel = {$type ->
                   *[full] Sponsor Ticket
                    [day]  Sponsor Day Ticket
                }

register-ticket-level-card-super-sponsor =
  An even more generous donation, you have earned a Super Sponsor ticket! This means you will get

  + Super Sponsor convention badge
  + Program book + honorable mention
  + Participation in scheduled events
  + Super-early access to the Dealers' Den and Art Show (Thursday)
  + Priority queueing for certain events
  + Super Sponsor pack**
  + Free T-shirt**

  .label = Super sponsor
  .priceLabel = {$type ->
                   *[full] Super Sponsor Ticket
                    [day]  Super Sponsor Day Ticket
                }

register-ticket-level-modifiers-early-bird =
  .label = Early Bird Discount (if paid before March 1st)
  .price = - €15

register-ticket-level-modifiers-late-fee =
  .label = Late Fee (if paid June 1st or later)
  .price = + €15

register-ticket-level-footnote-late-sponsors =
  .label = Subject to availability if booked less than 1 month before the convention!
  .price = .

register-ticket-level-expiration-notice = Register before {DATETIME($expirationDate, day: "numeric", month: "long")}

register-ticket-level-addons-title = Select Add-ons

register-ticket-level-addons-item-stage-pass =
  .label = Stage Pass
  .description = The Stage Pass will grant you access to the stage events.

register-ticket-level-addons-item-tshirt =
  .label = Eurofurence T-shirt
  .description = 100% cotton, high-quality T-shirts. You can also purchase these at the event, but purchasing one at least one month before the convention will guarantee availability of your size.

register-ticket-level-addons-item-tshirt-option-size =
  .label = T-shirt size

register-ticket-level-addons-item-tshirt-option-size-value = { $value ->
  [XS]    X-Small (Regular Cut)
  [wXS]   X-Small (Ladies Cut)
 *[S]     Small (Regular Cut)
  [wS]    Small (Ladies Cut)
  [M]     Medium (Regular Cut)
  [wM]    Medium (Ladies Cut)
  [L]     Large (Regular Cut)
  [wL]    Large (Ladies Cut)
  [XL]    X-Large (Regular Cut)
  [wXL]   X-Large (Ladies Cut)
  [XXL]   XX-Large (Regular Cut)
  [wXXL]  XX-Large (Ladies Cut)
  [m3XL]  3X-Large (Regular Cut)
  [w3XL]  3X-Large (Ladies Cut)
  [m4XL]  4X-Large (Regular Cut)
  [w4XL]  4X-Large (Ladies Cut)
}

register-ticket-level-addons-item-benefactor =
  .label = Benefactor
  .description = Your voluntary extra contribution to make Eurofurence even more amazing. Being a Benefactor, you can directly support us and play a part in promoting diversity and quality of Eurofurence, realizing new ideas and projects, and making the event more inclusive, creative, and exciting.

register-ticket-level-addons-item-benefactor-option-count =
  .label = Count

register-ticket-level-addons-item-benefactor-option-count-value = { $value ->
 *[c1]   1x
  [c2]   2x
  [c3]   3x
  [c4]   4x
  [c5]   5x
  [c6]   6x
  [c8]   8x
  [c10]  10x
  [c15]  15x
  [c20]  20x
  [c30]  30x
  [c40]  40x
  [c50]  50x
  [c100]  100x
}

register-ticket-level-addons-item-fursuit =
  .label = Free Fursuit Badge
  .description = We will print a badge for your fursuit. You can wear it while in suit, but you will still need to carry your normal badge with you. The first one is free.

register-ticket-level-addons-item-fursuitadd =
  .label = Additional Fursuit Badges
  .description = If you have more than one fursuit or would like additional fursuit badges, then pick this and choose how many you would like to purchase. You will be billed for them as part of your registration.

register-ticket-level-addons-item-fursuitadd-option-count =
  .label = Count

register-ticket-level-addons-item-fursuitadd-option-count-value = { $value ->
 *[c1]   1x
  [c2]   2x
  [c3]   3x
  [c4]   4x
  [c5]   5x
  [c6]   6x
  [c7]   7x
  [c8]   8x
  [c9]   9x
  [c10]  10x
}

# validation errors

register-ticket-level-validation-errors-level-required = Please select a ticket level!

register-ticket-level-validation-errors-addons-tshirt-options-size-required = Please select a T-shirt size!

register-ticket-level-validation-errors-addons-benefactor-options-count-required = Please select how many times you would like to add this!

register-ticket-level-validation-errors-addons-fursuitadd-options-count-required = Please select the number of additional Fursuit Badges!


# Register personal info page
register-personal-info-title = Personal information

register-personal-info-nickname =
  .label = Nickname
  .placeholder = Johnny_The_Sergal

register-personal-info-first-name =
  .label = First Name
  .placeholder = John

register-personal-info-last-name =
  .label = Last Name
  .placeholder = Doe

register-personal-info-full-name-permission =
  .label = I grant permission to use / publish my legal name in Eurofurence related media.

register-personal-info-date-of-birth =
  .label = Date of Birth
  .placeholder = 1995-06-30

register-personal-info-spoken-languages =
  .label = Spoken Languages

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

register-personal-info-validation-errors-nickname-required = Please provide a nickname!
register-personal-info-validation-errors-nickname-max-length = Your nickname may be at most {$limit} characters long!
register-personal-info-validation-errors-nickname-validate-no-leading-or-trailing-whitespace = Please avoid leading or trailing whitespace!
register-personal-info-validation-errors-nickname-validate-min-one-alphanumeric-char = Your nickname must contain at least 1 letter or number!
register-personal-info-validation-errors-nickname-validate-max-two-non-alphanumeric-chars = Your nickname may contain at most 2 special characters!
register-personal-info-validation-errors-first-name-required = Please provide a first name!
register-personal-info-validation-errors-first-name-max-length = Your first name may be at most {$limit} characters long!
register-personal-info-validation-errors-last-name-required = Please provide a last name!
register-personal-info-validation-errors-last-name-max-length = Your last name may be at most {$limit} characters long!
register-personal-info-validation-errors-date-of-birth-required = Please provide your date of birth!
register-personal-info-validation-errors-date-of-birth-validate-minimum-age = You must be at least 18 years old to attend Eurofurence!
register-personal-info-validation-errors-date-of-birth-validate-maximum-age = 122-year-olds are the oldest people allowed at Eurofurence for technical reasons!
register-personal-info-validation-errors-spoken-languages-required = Please select your spoken languages!
register-personal-info-validation-errors-pronouns-selection-required = Please select your pronouns!
register-personal-info-validation-errors-pronouns-other-required = Provide an alternative set of pronouns!



# Register contact info page
register-contact-info-title = Contact Information

register-contact-info-email =
  .label = Email Address
  .placeholder = john.smith@example.com

register-contact-info-phone-number =
  .label = Phone Number
  .placeholder = +32 0 000 00 00

register-contact-info-telegram-username =
  .label = Telegram Username
  .placeholder = @johnnythesergal

register-contact-info-street =
  .label = Street
  .placeholder = Pennylane 40

register-contact-info-city =
  .label = City
  .placeholder = Zootopia

register-contact-info-postal-code =
  .label = Postal Code (ZIP)
  .placeholder = 8888

register-contact-info-state-or-province =
  .label = State / Province
  .placeholder = Fur Valley

register-contact-info-country =
  .label = Country
  .placeholder = Germany

register-contact-info-validation-errors-email-required = Please provide an email address!
register-contact-info-validation-errors-email-max-length = Your email address may be at most {$limit} characters long!
register-contact-info-validation-errors-email-pattern = Your email address must look like an email address!
register-contact-info-validation-errors-email-validate-is-verified = You may only use either your login email address or an email address you previously registered with!
register-contact-info-validation-errors-phone-number-required = Please provide a phone number!
register-contact-info-validation-errors-phone-number-max-length = Your phone number may be at most {$limit} characters long!
register-contact-info-validation-errors-telegram-username-max-length = Your telegram username may be at most {$limit} characters long!
register-contact-info-validation-errors-telegram-username-pattern = Your telegram username must include the initial @ character!
register-contact-info-validation-errors-street-required = Please provide a street!
register-contact-info-validation-errors-street-max-length = Your street name may be at most {$limit} characters long!
register-contact-info-validation-errors-city-required = Please provide a city!
register-contact-info-validation-errors-city-max-length = Your city name may be at most {$limit} characters long!
register-contact-info-validation-errors-postal-code-required = Please provide a postal code!
register-contact-info-validation-errors-postal-code-max-length = Your postal code may be at most {$limit} characters long!
register-contact-info-validation-errors-state-or-province-max-length = Your province name may be at most {$limit} characters long!
register-contact-info-validation-errors-country-required = Please provide a country!
register-contact-info-validation-errors-country-max-length = Your country name may be at most {$limit} characters long!


# Register optional info page
register-optional-info-title = Optional Information

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
register-summary-title-edit = Your Registration

register-summary-registration-status = { $status ->
 *[unsubmitted] Please double check your information below and click "Finish" to submit it.
  [new] We have received your registration and will confirm it when things are ready. Keep an eye on your mailbox!
  [approved] Your registration has been approved, if you pay now, you will be all set!
  [partially-paid] We have received partial payment, if you pay what is left, you will be all set!
  [paid] You are all set. See you at the convention!
  [checked-in] What are you doing looking at the registration system? Go have fun at the convention!
  [cancelled] Uh oh, your registration has been cancelled. You should have received an email explaining why. If you believe this is an error on our part, reply to that email.
  [waiting] You are on the waiting list. Let us hope a place opens up for you!
}

register-summary-registration-id = Badge Number: {$registrationId}

register-summary-section-personal-title = Personal Information
register-summary-section-contact-title = Contact Information
register-summary-section-optional-title = Optional Information

register-summary-edit = Edit information

register-summary-section-personal-property-nickname-name = Nickname
register-summary-section-personal-property-full-name-name = Legal Name
register-summary-section-personal-property-pronouns-name = Pronouns
register-summary-section-personal-property-date-of-birth-name = Date of Birth
register-summary-section-personal-property-spoken-languages-name = Spoken Language(s)
register-summary-section-personal-property-wheelchair-accomodation-name = Wheelchair Accommodation
register-summary-section-contact-property-email-name = E-mail Address
register-summary-section-contact-property-phone-number-name = Phone Number
register-summary-section-contact-property-street-name = Street
register-summary-section-contact-property-city-name = City
register-summary-section-contact-property-postal-code-name = Postal Code
register-summary-section-contact-property-state-or-province-name = State / Province
register-summary-section-contact-property-country-name = Country
register-summary-section-optional-property-notifications-name = I would like to receive event information and announcements about
register-summary-section-optional-property-digital-conbook-name = Digital Conbook only
register-summary-section-optional-property-comments-name = Comments

register-summary-boolean-value = { $value ->
  [true] Yes
 *[false] No
}

register-summary-rules-and-conditions-accepted = I accept the <rules>rules</rules> and <conditions>conditions</conditions>.

register-summary-validation-errors-rules-and-conditions-accepted-required = You must accept the rules and conditions to register!




# Register thank you page
register-thank-you-title = Thank you for your registration!
register-thank-you-subtitle = Next Steps
register-thank-you-content =
  We will review your registration and send you a response within a few days.
  You will receive an update by email after we have processed and approved your registration.





register-not-open-yet-title = Registration is not open yet!
register-not-open-yet-content =
  We are not yet accepting registrations!
  Check back here when registration opens!





# Common hotel booking messages
hotel-booking-header-title = Welcome to Eurofurence 2025!

hotel-booking-header-description =
  In order to speed up hotel booking and increase your chances of securing a room, you can enter your preferred dates,
  hotel room, contact and guest information on the following pages. We will then generate an email template for you,
  which you can copy and paste into your email client.

  Once booking starts, the secret code in the message below will be revealed.
  <span className="important">You need this code for the hotel to accept your booking.</span>

  The secret code will also be sent out on our [https://twitter.com/eurofurence](Twitter) and Telegram accounts.

hotel-booking-invoice-layout =
  .invoiceTitle = Your Hotel Room



# Hotel booking room page
hotel-booking-room-title = Room Types

hotel-booking-room-card-standard =
  The 27 sqm standard rooms offer luxurious living comfort.
  The rooms are additionally equipped with modern furnishings and spacious working & storage areas so as to best meet your needs.

  .label = Standard Room

hotel-booking-room-card-deluxe =
  The deluxe rooms at the Estrel Hotel feature an impressive 34 sqm of modern living space.
  The contemporary furnishings and generous work spaces are specially designed to meet the needs of business travellers.

  .label = Deluxe Room

hotel-booking-room-card-junior-suite =
  The spacious junior suites (49 to 55 sqm) offer separate living and sleeping areas and feature distinctive styles thanks
  to selected contemporary furnishings, colour accents and works of art.

  .label = Junior Suite

hotel-booking-room-card-deluxe-suite =
  Elegantly liveable and fully equipped, the executive suites with their 90 sqm of living space leave nothing to be desired.
  A separate living area with sofas and armchairs, a small bar area and a second TV screen in the bathroom create an upscale,
  welcoming atmosphere almost like home.

  .label = Deluxe Suite

hotel-booking-room-card-price-scope = Price per room per night
hotel-booking-room-card-breakfast-and-taxes-notice = Breakfast and taxes included

hotel-booking-room-validation-errors-type-required = Please select a room type!



# Hotel booking guests page
hotel-booking-guests-title = Guest Information
hotel-booking-guests-guest-title = Guest {$guestNumber}

hotel-booking-guests-first-name =
  .label = First Name
  .placeholder = John

hotel-booking-guests-last-name =
  .label = Last Name
  .placeholder = Doe

hotel-booking-guests-email =
  .label = Email Address
  .placeholder = john.smith@email.com

hotel-booking-guests-phone-number =
  .label = Phone Number
  .placeholder = +32 0 000 00 00

hotel-booking-guests-street =
  .label = Street
  .placeholder = Pennylane 40

hotel-booking-guests-city =
  .label = City
  .placeholder = Zootopia

hotel-booking-guests-postal-code =
  .label = Postal Code (ZIP)
  .placeholder = 8888

hotel-booking-guests-state-or-province =
  .label = State / Province
  .placeholder = Fur Valley

hotel-booking-guests-country =
  .label = Country
  .placeholder = Germany

hotel-booking-guests-validation-errors-guests-firstName-required = Please provide a first name!
hotel-booking-guests-validation-errors-guests-lastName-required = Please provide a last name!
hotel-booking-guests-validation-errors-guests-email-required = Please provide an email address!
hotel-booking-guests-validation-errors-guests-phoneNumber-required = Please provide a phone number!
hotel-booking-guests-validation-errors-guests-street-required = Please provide a street!
hotel-booking-guests-validation-errors-guests-city-required = Please provide a city!
hotel-booking-guests-validation-errors-guests-postalCode-required = Please provide a postal code!
hotel-booking-guests-validation-errors-guests-stateOrProvince-required = Please provide a state or province!
hotel-booking-guests-validation-errors-guests-country-required = Please provide a country!



# Hotel booking additional info page
hotel-booking-additional-info-title = Additional Information

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
  [registration-open-check]       We are unable to check if you are already registered.
  [registration-submission]       We are unable to submit your registration.
  [registration-update]           We are unable to update your registration.
  [registration-initiate-payment] We are unable to initiate your payment.
  [registration-set-locale]       We are unable to save your language preference.
  [user-info-lookup]              We are unable to retrieve your login information.
 *[unknown]                       There was an error handling your request.
}

funnel-error-report-message = {$category ->
  [attsrv] {$code ->
    [attendee-data-duplicate]  There is already an attendee registered with the information you supplied!
    [attendee-data-invalid]    The information you filled in was not accepted by the server. This should not happen under normal conditions. Please try again in a few minutes or contact support.
    [attendee-parse-error]     The server did not understand the information the website sent to it. This should not happen under normal conditions. Please try again in a few minutes or contact support.
    [attendee-write-error]     An error occurred when trying to save your attendee information. This should not happen under normal conditions. Please try again in a few minutes or contact support.
    [auth-forbidden]           You do not have permission to do this. Contact support if you believe this is a mistake.
   *[unknown]                  The server encountered an unexpected problem while processing your request. Please try again in a few minutes or contact support.
  }
  [paysrv] {$code ->
   *[unknown]                  The server encountered an unexpected problem while processing your request. Please try again in a few minutes or contact support.
  }
 *[frontend] {$code ->
    [network-error]            We could not reach the server to process your request. Please check if you are connected to the internet.
   *[unknown]                  An error occurred when we tried to handle your request. Please try again later. If this problem persists, try clearing your browser cache and refreshing the page. If this does not resolve the problem, contact support.
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
