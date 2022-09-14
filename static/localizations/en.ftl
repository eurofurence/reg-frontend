hello = Hello world!

register-navigation-back = Go back

register-navigation-next = Continue

register-ticket-day-card =
  .label = {DATETIME($date, day: "numeric", month: "long", year: "numeric")}

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

register-form-nickname =
  .label = Nickname
  .placeholder = Johnny_The_Sergal

register-form-first-name =
  .label = First name
  .placeholder = John

register-form-last-name =
  .label = Last name
  .placeholder = Doe

register-form-full-name-permission =
  .label = I grant permission to use my full name in Eurofurence related media.

register-form-name-on-badge =
  .legend = Name on badge

register-form-name-on-badge-real-name =
  .label = Real name

register-form-name-on-badge-nickname =
  .label = Nickname

register-form-name-on-badge-real-name-and-nickname =
  .label = Real name + nickname

register-form-pronoun =
  .legend = Pronoun

register-form-pronoun-male =
  .label = He/Him

register-form-pronoun-female =
  .label = She/Her

register-form-pronoun-non-binary =
  .label = They/Them

register-form-pronoun-prefer-not-to-say =
  .label = I prefer not to say

register-form-accessibility =
  .legend = Accessibility

register-form-accessibility-wheelchair =
  .label = Please accomodate my wheelchair (and me).

register-price = {$price ->
   [0]     Free
  *[other] {$price} €
}

register-invoice-layout =
  .invoiceTitle = Your registration

register-step-counter = Step {$step}

register-change-ticket-type =
  .label = Change ticket type

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

footer-links-privacy-policy = Privacy policy

footer-links-cookie-statement = Cookie statement

footer-links-contact = Contact Eurofurence

footer-last-saved = Your information was last saved on {DATETIME($lastSaved, weekday: "long", month: "long", day: "numeric", year: "numeric")} at {DATETIME($lastSaved, hour: "numeric", minute: "numeric")}.
