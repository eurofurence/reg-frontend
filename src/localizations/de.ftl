# Header
header-dropdown-my-account = Mein Konto

header-dropdown-language = Sprache

header-clock-component-months =
  .caption = Monate
header-clock-component-days =
  .caption = Tage
header-clock-component-hours =
  .caption = Stunden
header-clock-component-minutes =
  .caption = Minuten
header-clock-component-seconds =
  .caption = Sekunden



# Footer
footer-links-privacy-policy = Datenschutzrichtlinie
footer-links-legal-info = Rechtliche informationen
footer-links-policies = Regelungen
footer-links-contact = Kontakt

footer-last-saved = Deine Daten wurden zuletzt am {DATETIME($lastSaved, weekday: "long", month: "long", day: "numeric", year: "numeric")} um {DATETIME($lastSaved, hour: "numeric", minute: "numeric")} gespeichert.



# Invoices
invoice-edit-selection = Auswahl bearbeiten

invoice-item-label = {$amount} x {$name}

invoice-total-item-label = {$name}

invoice-item-definition-register-ticket-type-day =
  .name = Day ticket
  .extra = {DATETIME($day, month: "long", day: "numeric")}

invoice-item-definition-register-ticket-type-full =
  .name = Gesamte Veranstaltung
  .extra = {DATETIME_RANGE($start, $end, month: "long", day: "numeric")}

invoice-item-definition-register-ticket-addons-stage-pass =
  .name = Bühnenpass

invoice-item-definition-register-ticket-addons-tshirt =
  .name = T-Shirt
  .extra = {$size}

invoice-total =
  .name = Summe
  .extra = inkl. Steuern

invoice-paid =
  .name = Bezahlt

invoice-due =
  .name = Ausstehend

invoice-pay-button-credit-card = 💳 Mit KK zahlen


# Common register messages
register-header-title = Willkommen zur Eurofurence 2023!
register-header-description =
  Wir freuen uns auf Dich!
  Freu Dich auf eine tolle Zeit mit Gleichgesinnten, und genieße die Attraktionen und Veranstaltungen die wir für Dich bereit halten.

register-navigation-back = Zurück
register-navigation-next = Weiter
register-navigation-update = Speichern
register-navigation-finish = Abschließen

register-invoice-layout =
  .invoiceTitle = Deine Registrierung

register-step-counter = Schritt {$step}



# Register ticket type page
register-ticket-type-title = Wähle Dein Ticket

register-ticket-type-day =
  .label = Tagesticket

register-ticket-type-full =
  .label = Gesamte Veranstaltung

register-ticket-type-validation-errors-type-required = Bitte wähle ein Ticket.



# Register ticket day page
register-ticket-day-title = Wähle Dein Ticket

register-ticket-day-card =
  .label = {DATETIME($date, day: "numeric", month: "long", year: "numeric")}

register-ticket-day-validation-errors-day-required = Bitte wähle einen Tag aus.



# Register ticket level page
register-ticket-level-title = Wähle Dein Ticket

register-ticket-level-card-standard =
  Dieses Standard-Ticket gibt Dir von Sonntag bis Mittwoch Zugang zur Veranstaltung.

  + Standard-Badge
  + Programmheft
  + Teilnahme an allen regulären Veranstaltungen

  .label = Standard
  .priceLabel = Standard-Ticket

register-ticket-level-card-sponsor =
  Als Dankeschön für Deine Unterstützung der Eurofurence durch Deine Spende erhälst Du

  + Sponsor-Badge
  + Programmheft + lobende Erwähnung
  + Teilnahme an allen regulären Veranstaltungen
  + Vorzeitiger Zugang zum Dealers' Den
  + kostenloses T-Shirt

  .label = Sponsor
  # TODO why does this say Early-bird ticket? sponsor or not has nothing to do with price levels, and we've scrapped price levels anyway
  .priceLabel = Sponsor-Ticket

register-ticket-level-card-super-sponsor =
  Mit dieser noch großzügigeren Spende verdienst Du ein Super-Sponsor-Ticket. Daher erhälst Du

  + Super-Sponsor-Badge
  + Programmheft + lobende Erwähnung
  + Teilnahme an allen regulären Veranstaltungen
  + Besonders vorzeitiger Zugang zum Dealers' Den
  + kostenloses T-Shirt
  + Teilnahme an exklusiven Super-Sponsor-Veranstaltungen

  .label = Supersponsor
  # TODO why does this say Super early-bird ticket? super sponsor or not has nothing to do with price levels, and we've scrapped price levels anyway
  .priceLabel = Super-Sponsor-Ticket

# TODO we've scrapped price levels, but this is still referenced in the code
register-ticket-level-expiration-notice = Regestriere Dich vor dem {DATETIME($expirationDate, day: "numeric", month: "long")}

register-ticket-level-addons-title = Zusatzoptionen auswählen

register-ticket-level-addons-item-stage-pass =
  .label = Bühnenpass
  .description = Der Bühnenpass gibt Dir Zugang zu den Bühnen-Veranstaltungen.

register-ticket-level-addons-item-tshirt =
  .label = Eurofurence T-shirt
  .description = Hochwertiges T-Shirt aus 100% Baumwolle. Du kannst es auch vor Ort kaufen, aber hier kannst Du es in Deiner Größe vorbestellen.

register-ticket-level-addons-item-tshirt-option-size =
  .label = T-Shirt-Größe

# t-shirt size configuration:
# tshirtsizes:
#    - 'XS':
#        'en-US': 'XS (Regular Cut)'
#        'de-DE': 'XS (weit geschnitten)'
#    - 'wXS':
#        'en-US': 'XS (Narrow Cut)'
#        'de-DE': 'XS (schmal geschnitten)'
#    - 'S':
#        'en-US': 'S (Regular Cut)'
#        'de-DE': 'S (weit geschnitten)'
#    - 'wS':
#        'en-US': 'S (Narrow Cut)'
#        'de-DE': 'S (schmal geschnitten)'
#    - 'M':
#        'en-US': 'M (Regular Cut)'
#        'de-DE': 'M (weit geschnitten)'
#    - 'wM':
#        'en-US': 'M (Narrow Cut)'
#        'de-DE': 'M (schmal geschnitten)'
#    - 'L':
#        'en-US': 'L (Regular Cut)'
#        'de-DE': 'L (weit geschnitten)'
#    - 'wL':
#        'en-US': 'L (Narrow Cut)'
#        'de-DE': 'L (schmal geschnitten)'
#    - 'XL':
#        'en-US': 'XL (Regular Cut)'
#        'de-DE': 'XL (weit geschnitten)'
#    - 'wXL':
#        'en-US': 'XL (Narrow Cut)'
#        'de-DE': 'XL (schmal geschnitten)'
#    - 'XXL':
#        'en-US': 'XXL (Regular Cut)'
#        'de-DE': 'XXL (weit geschnitten)'
#    - 'wXXL':
#        'en-US': 'XXL (Narrow Cut)'
#        'de-DE': 'XXL (schmal geschnitten)'
#    - '3XL':
#        'en-US': '3XL (Regular Cut)'
#        'de-DE': '3XL (weit geschnitten)'
#    - 'w3XL':
#        'en-US': '3XL (Narrow Cut)'
#        'de-DE': '3XL (schmal geschnitten)'
#    - '4XL':
#        'en-US': '4XL (Regular Cut)'
#        'de-DE': '4XL (weit geschnitten)'
#    - 'w4XL':
#        'en-US': '4XL (Narrow Cut)'
#        'de-DE': '4XL (schmal geschnitten)'
register-ticket-level-addons-item-tshirt-option-size-value = { $value ->
  [XS]   X-Small (weit geschnitten)
  [wXS]  X-Small (schmal geschnitten)
 *[S]    Small (weit geschnitten)
  [wS]   Small (schmal geschnitten)
  [M]    Medium (weit geschnitten)
  [wM]   Medium (schmal geschnitten)
  [L]    Large (weit geschnitten)
  [wL]   Large (schmal geschnitten)
  [XL]   X-Large (weit geschnitten)
  [wXL]  X-Large (schmal geschnitten)
  [XXL]  XX-Large (weit geschnitten)
  [wXXL] XX-Large (schmal geschnitten)
  [3XL]  3X-Large (weit geschnitten)
  [w3XL] 3X-Large (schmal geschnitten)
  [4XL]  4X-Large (weit geschnitten)
  [w4XL] 4X-Large (schmal geschnitten)
}

register-ticket-level-validation-errors-level-required = Bitte wähle eine Ticketart aus.

register-ticket-level-validation-errors-addons-tshirt-options-size-required = Bitte wähle eine T-Shirt-Größe aus.



# Register personal info page
register-personal-info-title = Deine Daten

register-personal-info-nickname =
  .label = Nickname
  .placeholder = Johnny_The_Sergal

register-personal-info-first-name =
  .label = Vorname
  .placeholder = Manfred

register-personal-info-last-name =
  .label = Nachname
  .placeholder = Mustermann

register-personal-info-full-name-permission =
  .label = Ich stimme der Verwendung meines vollen Namens in Eurofurence-bezogenen Medien zu,

register-personal-info-date-of-birth =
  .label = Geburtstag
  .placeholder = 1995-06-30

register-personal-info-spoken-languages =
  .label = Beherrschte Sprachen

register-personal-info-pronouns =
  .legend = Pronomen

register-personal-info-pronouns-other =
  .label = Andere

register-personal-info-accessibility =
  .legend = Barrierefreiheit

register-personal-info-accessibility-wheelchair =
  .label = Bitte bringt meinen Rollstuhl (und mich) unter.

register-personal-info-validation-errors-nickname-required = Bitte gib einen Nickname an.
register-personal-info-validation-errors-nickname-max-length = Dein Nickname muß mindestens {$limit} Zeichen lang sein.
register-personal-info-validation-errors-nickname-validate-no-leading-or-trailing-whitespace = Bitte vermeide Leerzeichen am Anfang und am Ende.
register-personal-info-validation-errors-nickname-validate-min-one-alphanumeric-char = Dein Nickname muß mindestens einen Buchstaben oder eine Zahl enthalten.
register-personal-info-validation-errors-nickname-validate-max-two-non-alphanumeric-chars = Dein Nickname kann nur maximal zwei Sonderzeichen enthalten.
register-personal-info-validation-errors-first-name-required = Bitte gib einen Vornamen ein.
register-personal-info-validation-errors-first-name-max-length = Dein Vorname kann nur maximal {$limit} Zeichen lang sein.
register-personal-info-validation-errors-last-name-required = Bitte gib einen Nachnamen ein.
register-personal-info-validation-errors-last-name-max-length = Dein Nachname kann nur maximal {$limit} Zeichen lang sein.
register-personal-info-validation-errors-date-of-birth-required = Bitte gib ein Geburtsdatum ein.
register-personal-info-validation-errors-date-of-birth-validate-minimum-age = Du musst mindestens 18 Jahre alt sein um an Eurofurence teilnehmen zu können.
register-personal-info-validation-errors-date-of-birth-validate-maximum-age = Aus technischen Gründen können wir die Teilnahme an Eurofurence nur bis zu einem Alter von 122 Jahren zulassen.
register-personal-info-validation-errors-spoken-languages-required = Bitte gib an welche Sprachen Du sprichst.
register-personal-info-validation-errors-pronouns-selection-required = Bitte wähle Deine Pronomen.
register-personal-info-validation-errors-pronouns-other-required = Gib einen alternativen Pronomen-Satz an.



# Register contact info page
register-contact-info-title = Kontaktdaten

register-contact-info-email =
  .label = Email-Addresse
  .placeholder = john.smith@example.com

register-contact-info-phone-number =
  .label = Telefonnummer
  .placeholder = +32 0 000 00 00

register-contact-info-telegram-username =
  .label = Telegram-Username
  .placeholder = @johnnythesergal

register-contact-info-street =
  .label = Straße
  .placeholder = Pennylane 40

register-contact-info-city =
  .label = Stadt
  .placeholder = Zootopia

register-contact-info-postal-code =
  .label = Postleitzahl
  .placeholder = 8888

register-contact-info-state-or-province =
  .label = Bundesland
  .placeholder = Fur Valley

register-contact-info-country =
  .label = Staat
  .placeholder = Germany

register-contact-info-validation-errors-email-required = Bitte gib eine Email-Adresse an.
register-contact-info-validation-errors-email-max-length = Deine Email-Adresse kann maximal {$limit} Zeichen lang sein.
register-contact-info-validation-errors-email-pattern = Deine Email-Adresse muß auch wie eine Email-Adresse aussehen.
register-contact-info-validation-errors-phone-number-required = Bitte gib eine Telefonnummer an.
register-contact-info-validation-errors-phone-number-max-length = Deine Telefonnummer kann maximal {$limit} Zeichen lang sein.
register-contact-info-validation-errors-telegram-username-max-length = Dein Telegram-Username kann maximal {$limit} Zeichen lang sein.
register-contact-info-validation-errors-telegram-username-pattern = Dein Telegram-Username muß mit einem @ beginnen.
register-contact-info-validation-errors-street-required = Bitte gib eine Straße ein.
register-contact-info-validation-errors-street-max-length = Dein Straßenname kann maximal {$limit} Zeichen lang sein.
register-contact-info-validation-errors-city-required = Bitte gib eine Stadt an.
register-contact-info-validation-errors-city-max-length = Deine Stadt kann maximal {$limit} Zeichen lang sein.
register-contact-info-validation-errors-postal-code-required = Bitte gib eine Postleitzahl an.
register-contact-info-validation-errors-postal-code-max-length = Deine Postleitzahl kann maximal {$limit} Zeichen lang sein.
register-contact-info-validation-errors-state-or-province-max-length = Der Name des Bundelands kann maximal {$limit} Zeichen lang sein.
register-contact-info-validation-errors-country-required = Bitte gib einen Staat an.
register-contact-info-validation-errors-country-max-length = Der Name des Staates kann maximal {$limit} Zeichen lang sein.


# Register optional info page
register-optional-info-title = Optionale Informationen

register-optional-info-notifications =
  .legend = Ich möchte Informationen und Ankündigungen erhalten zu

register-optional-info-notifications-art =
  .label = { -notification-type(type: "art") }

register-optional-info-notifications-animation =
  .label = { -notification-type(type: "animation") }

register-optional-info-notifications-music =
  .label = { -notification-type(type: "music") }

register-optional-info-notifications-fursuiting =
  .label = { -notification-type(type: "fursuiting") }

register-optional-info-comments =
  .label = Kommentare
  .placeholder = Ich möchte mehr erfahren über...


# Register summary page
register-summary-title-initial = Bestätigung
register-summary-title-edit = Registrierung


register-summary-section-personal-title = Deine Daten
register-summary-section-contact-title = Kontaktdaten
register-summary-section-optional-title = Optionale Informationen

register-summary-edit = Daten bearbeiten

register-summary-section-personal-property-nickname-name = Nickname
register-summary-section-personal-property-full-name-name = Vollständiger Name
register-summary-section-personal-property-pronouns-name = Pronomen
register-summary-section-personal-property-date-of-birth-name = Geburtstag
register-summary-section-personal-property-spoken-languages-name = Beherrschte Sprachen
register-summary-section-personal-property-wheelchair-accomodation-name = Rollstuhlunterbringung
register-summary-section-contact-property-email-name = Email-Adresse
register-summary-section-contact-property-phone-number-name = Telefonnummer
register-summary-section-contact-property-street-name = Straße
register-summary-section-contact-property-city-name = Stadt
register-summary-section-contact-property-postal-code-name = Postleitzahl
register-summary-section-contact-property-state-or-province-name = Bundesland
register-summary-section-contact-property-country-name = Staat
register-summary-section-optional-property-notifications-name = Ich möchte weitere Informationen und Ankündigungen erhalten über
register-summary-section-optional-property-comments-name = Kommentare

register-summary-section-personal-property-wheelchair-accomodation-value = { $value ->
  [true] Ja
 *[false] Nein
}



# Register thank you page
register-thank-you-title = Danke für Deine Anmeldung
register-thank-you-subtitle = Nächste Schritte
register-thank-you-content =
  Wir werden Deine Anmeldung prüfen und Dir in wenigen Wochen eine Antwort senden.
  Du erhälst eine Benachrichtigung per Email nachdem wir Deine Anmeldung bearbeitet haben.





register-not-open-yet-title = Die Registration ist noch nicht geöffnet!
register-not-open-yet-content =
  Wir nehmen derzeit keine Anmeldungen an.
  Schau wieder rein wenn die Registration öffnet.





# Common hotel booking messages
hotel-booking-header-title = Willkommen zur Eurofurence 2023!

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
funnel-error-report-title = Oh nein...

funnel-error-report-operation = {$operation ->
  [registration-open-check]       Wir konnten nicht prüfen ob Du schon angemeldet bist.
  [registration-submission]       Wir konnten Deine Anmeldung nicht absenden.
  [registration-update]           Wir konnten Deine Anmeldung nicht aktualisieren.
  [registration-initiate-payment] Wir konnten Deinen Bezahlvorgang nicht anstoßen.
 *[unknown]                       Es gab einen Fehler bei Deinem Antrag.
}

funnel-error-report-message = {$category ->
  [attsrv] {$code ->
    [attendee-data-duplicate]  Ein anderer Teilnehmer ist bereits mit diesen Daten registriert.
    [attendee-data-invalid]    Die von Dir angegebenen Informationen wurden vom Server nicht akzeptiert. Dies sollte unter normalen Umständen nicht passieren. Bitte versuch es in einigen Minuten erneut oder wende Dich an den Support.
    [attendee-parse-error]     Der Server hat die Informationen nicht verstanden die von der Webseite gesendet wurden.  Dies sollte unter normalen Umständen nicht passieren. Bitte versuch es in einigen Minuten erneut oder wende Dich an den Support.
    [attendee-write-error]     Beim Speichern Deiner Teilnehmerdaten gab es einen Fehler.  Dies sollte unter normalen Umständen nicht passieren. Bitte versuch es in einigen Minuten erneut oder wende Dich an den Support.
    [auth-forbidden]           Du hast nicht die benötigten Zugangsrechte hierfür. Wende Dich an den Support falls Du glaubst das sei ein Fehler.
   *[unknown]                  Der Server ist auf ein unerwartetes Problem gestoßen.  Bitte versuch es in einigen Minuten erneut oder wende Dich an den Support.
  }
  [paysrv] {$code ->
   *[unknown]                  Der Server ist auf ein unerwartetes Problem gestoßen.  Bitte versuch es in einigen Minuten erneut oder wende Dich an den Support.
  }
 *[frontend] {$code ->
    [network-error]            Wir konnten den Server nicht erreichen um Deinen Auftrag zu bearbeiten. Bitte stell sicher dass Du mit dem Internet verbunden bist.
   *[unknown]                  Bei der Bearbeitung Deines Auftrags ist ein Fehler aufgetreten. Bitte versuche es später nochmal. Falls das Problem weiterhin besteht versuch Deinen Browser-Cache zu leeren and die Seite neu zu laden.
  }
}


# General utility messages
price = {$value ->
   [0]     Free
  *[other] {NUMBER($value, minimumFractionDigits: 0)}
}

due = {NUMBER($value, minimumFractionDigits: 0)}

-notification-type = { $type ->
  [art]        Kunst
  [animation]  Animation
  [music]      Musik
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
  [EG] Ägypten
  [AX] Åland
  [AL] Albanien
  [DZ] Algerien
  [AS] Amerikanisch-Samoa
  [VI] Amerikanische Jungferninseln
  [AD] Andorra
  [AO] Angola
  [AI] Anguilla
  [AQ] Antarktis
  [AG] Antigua und Barbuda
  [GQ] Äquatorialguinea
  [AR] Argentinien
  [AM] Armenien
  [AW] Aruba
  [AC] Ascension
  [AZ] Aserbaidschan
  [ET] Äthiopien
  [AU] Australien
  [BS] Bahamas
  [BH] Bahrain
  [BD] Bangladesch
  [BB] Barbados
  [BY] Belarus
  [BE] Belgien
  [BZ] Belize
  [BJ] Benin
  [BM] Bermuda
  [BT] Bhutan
  [BO] Bolivien
  [BQ] Bonaire, Saba, Sint Eustatius
  [BA] Bosnien und Herzegowina
  [BW] Botswana
  [BV] Bouvetinsel
  [BR] Brasilien
  [VG] Britische Jungferninseln
  [IO] Britisches Territorium im Indischen Ozean
  [BN] Brunei
  [BG] Bulgarien
  [BF] Burkina Faso
  [BI] Burundi
  [CV] Cabo Verde
  [KY] Cayman Islands (Kaimaninseln)
  [EA] Ceuta, Melilla
  [CL] Chile
  [CP] Clipperton
  [CO] Colombia
  [KM] Comoros
  [CD] Congo (Democratic Republic of the)
  [CK] Cookinseln
  [CR] CostaRica
  [CW] Curaçao
  [ZR] Demokratische Republik Kongo
  [DK] Dänemark
 *[DE] Deutschland
  [DG] Diego Garcia
  [DM] Dominica
  [DO] Dominikanische Republik
  [DJ] Dschibuti
  [EC] Ecuador
  [SV] El Salvador
  [CI] Elfenbeinküste (Côte d’Ivoire)
  [ER] Eritrea
  [EE] Estonia
  [SZ] Eswatini
  [FK] Falklandinseln
  [FJ] Fidschi
  [FI] Finnland
  [FR] Frankreich
  [FX] Frankreich France métropolitaine
  [GF] Französisch-Guayana
  [PF] Französisch-Polynesien
  [TF] Französische Süd- und Antarktisgebiete
  [FO] Färöer
  [FM] Föderierte Staaten von Mikronesien
  [GA] Gabun
  [GM] Gambia
  [GE] Georgien
  [GH] Ghana
  [GI] Gibraltar
  [GD] Grenada
  [GR] Griechenland
  [GL] Grönland
  [GP] Guadeloupe
  [GU] Guam
  [GT] Guatemala
  [GG] Guernsey (Kanalinsel)
  [GN] Guinea
  [GW] Guinea-Bissau
  [GY] Guyana
  [HT] Haiti
  [HM] Heard und McDonaldinseln
  [HN] Honduras
  [HK] Hongkong
  [IN] Indien
  [ID] Indonesien
  [IQ] Irak
  [IR] Iran
  [IE] Irland
  [IS] Island
  [IM] Isle of Man
  [IL] Israel
  [IT] Italien
  [JM] Jamaika
  [JP] Japan
  [YE] Jemen
  [JE] Jersey (Kanalinsel)
  [JO] Jordanien
  [KH] Kambodscha
  [CM] Kamerun
  [CA] Kanada
  [IC] Kanarische Inseln
  [KZ] Kazakhstan
  [KE] Kenia
  [KG] Kirgisistan
  [KI] Kiribati
  [CC] Kokosinseln
  [HR] Kroatien
  [CU] Kuba
  [KW] Kuwait
  [LA] Laos
  [LB] Lebanon
  [LS] Lesotho
  [LV] Lettland
  [LR] Liberia
  [LY] Libya
  [LI] Liechtenstein
  [LT] Litauen
  [LU] Luxemburg
  [MO] Macau
  [MG] Madagaskar
  [MW] Malawi
  [MY] Malaysia
  [MV] Maldives
  [ML] Mali
  [MT] Malta
  [MA] Marokko
  [MH] Marshallinseln
  [MQ] Martinique
  [MR] Mauretanien
  [MU] Mauritius
  [YT] Mayotte
  [MX] Mexiko
  [MD] Moldau (Moldawien)
  [MC] Monaco
  [MN] Mongolei
  [ME] Montenegro
  [MS] Montserrat
  [MZ] Mosambik
  [BU] Myanmar
  [MM] Myanmar
  [NA] Namibia
  [NR] Nauru
  [NP] Nepal
  [NC] Neukaledonien
  [NT] Neutrale Zone
  [NZ] New Zealand
  [NI] Nicaragua
  [NL] Niederlande
  [NE] Niger
  [NG] Nigeria
  [NU] Niue
  [KP] Nordkorea
  [MK] Nordmazedonien
  [NF] Norfolkinsel
  [NO] Norwegen
  [MP] Nördliche Marianen
  [OM] Oman
  [AT] Österreich
  [TL] Osttimor
  [PK] Pakistan
  [PS] Staat Palästina
  [PW] Palau
  [PA] Panama
  [PG] Papua-Neuguinea
  [PY] Paraguay
  [PE] Peru
  [PH] Philippinen
  [PN] Pitcairninseln
  [PL] Polen
  [PT] Portugal
  [PR] PuertoRico
  [QA] Qatar
  [CG] Republik Kongo
  [RW] Ruanda
  [RO] Rumänien
  [RU] Russland
  [RE] Réunion
  [VC] Saint Vincent and the Grenadines
  [BL] Saint-Barthélemy
  [MF] Saint-Martin (französischer Teil)
  [PM] Saint-Pierre und Miquelon
  [SB] Salomonen
  [ZM] Sambia
  [WS] Samoa
  [SM] SanMarino
  [SA] Saudi-Arabien
  [SE] Schweden
  [CH] Schweiz (Confoederatio Helvetica)
  [SN] Senegal
  [RS] Serbia
  [SC] Seychellen
  [SL] Sierra Leone
  [ZW] Simbabwe
  [SG] Singapur
  [SX] SintMaarten
  [SI] Slovenia
  [SK] Slowakei
  [SO] Somalia
  [GS] South Georgia and the South Sandwich Islands
  [SS] South Sudan
  [ES] Spanien
  [SJ] Spitzbergen und Jan Mayen
  [LK] Sri Lanka
  [KN] St. Kitts und Nevis
  [LC] St. Lucia
  [SH] St.Helena, Ascension und Tristan daCunha
  [SD] Sudan
  [SR] Suriname
  [SY] Syrien
  [ST] SãoTomé undPríncipe
  [ZA] Südafrika
  [KR] Südkorea
  [TJ] Tadschikistan
  [TW] Taiwan
  [TZ] Tanzania, the United Republic of
  [TH] Thailand
  [TG] Togo
  [TK] Tokelau
  [TO] Tonga
  [TT] Trinidad und Tobago
  [TA] Tristan da Cunha
  [TD] Tschad
  [CZ] Tschechien
  [TN] Tunesien
  [TM] Turkmenistan
  [TC] Turks- und Caicosinseln
  [TV] Tuvalu
  [TR] Türkei
  [UG] Uganda
  [UA] Ukraine
  [HU] Ungarn
  [UM] United States Minor Outlying Islands
  [UY] Uruguay
  [UZ] Usbekistan
  [VU] Vanuatu
  [VA] Vatikanstadt
  [VE] Venezuela
  [AE] Vereinigte Arabische Emirate
  [US] Vereinigte Staaten von Amerika
  [GB] Vereinigtes Königreich
  [VN] Vietnam
  [CN] Volksrepublik China
  [WF] Wallis und Futuna
  [CX] Weihnachtsinsel
  [EH] Westsahara
  [CF] Zentralafrikanische Republik
  [CY] Zypern
}
