var stc = stc || {};
(function(geo, $){
    
    /**
     * List of Member countries and their website URLs
     */
    geo.members = {
        "AU": {
            "iso": "AU",
            "title": "Australia",
            "url": "http://www.savethechildren.org.au",
            "url_donate": "https://www.savethechildren.org.au/donate/today",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "CA": {
            "iso": "CA",
            "title": "Canada",
            "url": "http://www.savethechildren.ca",
            "url_donate": "https://support.savethechildren.ca/DonatetoChildren",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "CO": {
            "iso": "CO",
            "title": "Colombia",
            "url": "https://www.savethechildren.org.co",
            "url_donate": "https://www.savethechildren.org.co/donar",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "DK": {
            "iso": "DK",
            "title": "Denmark",
            "url": "http://www.redbarnet.dk",
            "url_donate": "https://redbarnet.dk/stoet",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "DO": {
            "iso": "DO",
            "title": "Dominican Republic",
            "url": "http://savethechildren.org.do",
            "url_donate": "http://savethechildren.org.do",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "FJ": {
            "iso": "FJ",
            "title": "Fiji",
            "url": "http://www.savethechildren.org.fj",
            "url_donate": "http://www.savethechildren.org.fj/donate-now",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "FI": {
            "iso": "FI",
            "title": "Finland",
            "url": "http://www.pelastakaalapset.fi",
            "url_donate": "https://www.pelastakaalapset.fi/auta-lapsia/lahjoita/#/kertalahjoitus",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "DE": {
            "iso": "DE",
            "title": "Germany",
            "url": "http://www.savethechildren.de",
            "url_donate": "https://spenden.savethechildren.de",
            "mappedCountries": ["AT"],
            "supportedLanguages": []
        },
        "GT": {
            "iso": "GT",
            "title": "Guatemala",
            "url": "http://www.savethechildren.org.gt",
            "url_donate": "http://savethechildren.org.gt/como-ayudar",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "HN": {
            "iso": "HN",
            "title": "Honduras",
            "url": "http://www.savethechildrenhonduras.org",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "HK": {
            "iso": "HK",
            "title": "Hong Kong",
            "url": "http://www.savethechildren.org.hk",
            "url_donate": "https://savethechildren.org.hk/monthlygiving.aspx",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "IS": {
            "iso": "IS",
            "title": "Iceland",
            "url": "http://www.barnaheill.is",
            "url_donate": "http://www.barnaheill.is/Borninogthu/Einstaklingar/heillavinur",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "IN": {
            "iso": "IN",
            "title": "India",
            "url": "http://www.savethechildren.in",
            "url_donate": "https://support.savethechildren.in/#donate-form ",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "ID": {
            "iso": "ID",
            "title": "Indonesia",
            "url": "https://www.stc.or.id",
            "url_donate": "https://www.stc.or.id/donate",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "IT": {
            "iso": "IT",
            "title": "Italy",
            "url": "http://www.savethechildren.it",
            "url_donate": "https://www.savethechildren.it/dona-ora",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "JP": {
            "iso": "JP",
            "title": "Japan",
            "url": "http://www.savechildren.or.jp",
            "url_donate": "http://www.savechildren.or.jp/contribute",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "JO": {
            "iso": "JO",
            "title": "Jordan",
            "url": "http://jordan.savethechildren.net",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "KR": {
            "iso": "KR",
            "title": "Korea",
            "url": "http://www.sc.or.kr",
            "url_donate": "https://m.sc.or.kr/support/supportMonth.do",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "LT": {
            "iso": "LT",
            "title": "Lithuania",
            "url": "https://www.gelbekitvaikus.lt",
            "url_donate": "https://www.gelbekitvaikus.lt/paaukok",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "MX": {
            "iso": "MX",
            "title": "Mexico",
            "url": "https://www.savethechildren.mx",
            "url_donate": "https://www.savethechildren.mx/donar",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "NL": {
            "iso": "NL",
            "title": "Netherlands",
            "url": "https://www.savethechildren.nl",
            "url_donate": "https://www.savethechildren.nl/help-mee/donee",
            "mappedCountries": ["BE"],
            "supportedLanguages": []
        },
        "NZ": {
            "iso": "NZ",
            "title": "New Zealand",
            "url": "http://www.savethechildren.org.nz",
            "url_donate": "https://savethechildren.org.nz/how-to-help/donate",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "NO": {
            "iso": "NO",
            "title": "Norway",
            "url": "http://www.reddbarna.no",
            "url_donate": "https://www.reddbarna.no/gi",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "PH": {
            "iso": "PH",
            "title": "Philippines",
            "url": "http://www.savethechildren.org.ph",
            "url_donate": "https://donate.savethechildren.org.ph",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "RO": {
            "iso": "RO",
            "title": "Romania",
            "url": "http://www.salvaticopiii.ro",
            "url_donate": "http://www.salvaticopiii.ro/?id2=doneaza",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "ZA": {
            "iso": "ZA",
            "title": "South Africa",
            "url": "http://www.savethechildren.org.za",
            "url_donate": "https://www.savethechildren.org.za/donate",
            "mappedCountries": ["ZW", "NA"],
            "supportedLanguages": []
        },
        "ES": {
            "iso": "ES",
            "title": "Spain",
            "url": "http://www.savethechildren.es",
            "url_donate": "https://www.savethechildren.es/colaborar-ong/hazte-socio-y-cambia-la-vida-de-los-ninos-y-ninas-mas-vulnerables",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "SZ": {
            "iso": "SZ",
            "title": "Swaziland",
            "url": "http://www.savethechildren.org.sz",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "SE": {
            "iso": "SE",
            "title": "Sweden",
            "url": "http://www.rb.se",
            "url_donate": "https://www.raddabarnen.se/stod-oss/manadsgivare/#steg1",
            "mappedCountries": [],
            "supportedLanguages": []
        },
        "CH": {
            "iso": "CH",
            "title": "Switzerland",
            "url": "http://www.savethechildren.ch",
            "url_donate": "https://www.savethechildren.ch/de/online_spenden/spenden_neu.cfm",
            "mappedCountries": ["LI"],
            "supportedLanguages": []
        },
        "GB": {
            "iso": "GB",
            "title": "United Kingdom",
            "url": "http://www.savethechildren.org.uk",
            "url_donate": "https://secure.savethechildren.org.uk/donate",
            "mappedCountries": ["IE"],
            "supportedLanguages": []
        },
        "US": {
            "iso": "US",
            "title": "United States",
            "url": "http://www.savethechildren.org",
            "url_donate": "https://secure.savethechildren.org/site/c.8rKLIXMGIpI4E/b.8102415/k.1377/Please_Give_Monthly_to_Save_the_Children/apps/ka/sd/donor.asp",
            "mappedCountries": [],
            "supportedLanguages": []
        }
    };
    
    /**
     * Redirects visitors to a Member website, defaults to current member country.
     * 
     * @param {object} [member = geo.memberCountry] The Member object to redirect to.
     * @param {object} [options] The optional parameters to pass to util.goToUrl().
     * @return {boolean} True if redirection occurs or false.
     */
    geo.goToMemberSite = function(member, options) {
        member = member || geo.memberCountry;
        options = options || {};
        if(typeof member === "undefined" || typeof member.url === "undefined") {
            return false;
        }
        options.eventLabel = member.iso + " - " + member.url;
        stc.util.goToURL(member.url, options);
        return true;
    };
    
    /**
     * Hides page content and attempts to redirect visitors to a Member website.
     */
    geo.goToMemberSiteOnLoad = function() {
        stc.util.hideOnLoad();
        //wait for load event as well so that GA is available.
        stc.util.listenToMultiEvents(['load','countryIsSet'], 'redirectOnLoad',function() {
            if(!geo.goToMemberSite(null, {replace: true, eventAction: 'Redirect'})) {
                stc.util.unhide();
            }
        });
    };
    
    /**
     * Adds Member country select options to a given drop-down
     * @param {object} select The select element to add options to
     * @param {string} attribute The Member object attribute to use as the option value paramater
     */
    geo.addMembersSelectOptions = function(select, attribute) {
        if(select[0].nodeName === "SELECT") {
            $.each(geo.members, function(i,v) {
                if(attribute && !v[attribute]) {
                    return true;
                }
                var value = v[attribute] || i;
                var option = $('<option>' + v.title + '</option>').attr({"value": value, "data-geo": i});
                $(select).append(option);
            });
        }
        //run the geo selection
        geo.swapGeoAlternatives(geo.country);
        //if the value is a url, then add an onchange redirect behaviour 
        if(/url/.test(attribute)) {
            $(select).on('change', function() {
                stc.util.goToURL($(this).val(), {eventLabel: $(this).find('option:selected').attr('data-geo') + " - " + $(this).val()});
            }).closest('form').on('submit', function(e) {
                e.preventDefault();
                stc.util.goToURL($(select).val());
            });
        }
    };
    
    /**
     * Creates a modal window suggesting the visitor goes to the relevant Member country website.
     * @param {stc.member} [member = geo.countryMember] 
     *   The Member country to suggest to the visitor. Defaults to the current Member country if set.
     * @param {HTMLElement} [element = body]
     *   The HTML element to place the modal window in. Defaults to body.
     * @param {int} [days = 1]
     *   The number of days to remember the visitor's choice (if they choose to stay). Defaults to 1 day.
     */
    geo.suggestMemberSite = function(member, element, days) {
        member = member || geo.memberCountry;
        element = element || $('body');
        if(days !== 0 ) {
            days = days || 1;
        }
        if(typeof member !== "undefined" && typeof member.url !== "undefined" && stc.util.getCookie('stc_suggest_denied') !== "1") {
            var modal = $('<div/>').attr({id:'memberSuggestModal', class: 'modal fade', role: 'dialog', 'tab-index': '-1'})
                .append($('<div/>').attr({class:'modal-dialog', role: 'document'})
                    .append($('<div/>').attr({class:'modal-content'})
                        .append($('<div/>').attr({class:'modal-header'})
                            .append($('<button/>').attr({type:'button', class:'close', 'data-dismiss':'modal', 'aria-label':'Close'})
                                .append($('<span/>').attr('aria-hidden', 'true').html('&times;'))
                            )
                        )
                        .append($('<div/>').attr({class:'modal-body text-center'})
                            .append($('<h4/>').text('Welcome, ' + member.title + ' friend!'))
                            .append('<p>Good news, Save the Children has a website in ' + ($.inArray(member.iso, ['GB','US','NL']) > -1 ? "the " : "") + member.title + '.<br/>Do you wish to visit our ' + member.title + ' website?</p>')
                        )
                        .append($('<div/>').attr({class:'modal-footer'})
                            .append($('<button/>').attr({type:'button', class:'btn btn-default', 'data-dismiss':'modal'}).html('Stay on global page'))
                            .append($('<a>').attr({href:member.url, class:'btn btn-primary'}).html('Go to ' + member.title))
                        )
                    )
                );
            $(element).append($(modal).modal().on('hidden.bs.modal', function (e) {
                if(days > 0) {
                    stc.util.setCookie("stc_suggest_denied", "1", days);
                }
            })); 
        }
    };

    /**
     * Gets the user Member country object if it exists
     */ 
    stc.util.waitForObjectOrEvent(stc.geo.country, "countryIsSet", function() {
        geo.memberCountry = geo.members[geo.country];
        //check for mapped countries and reset user country if applicable
        if(typeof geo.memberCountry !== "object") {
            $.each(geo.members, function(i,v) {
                if($.inArray(geo.country, v.mappedCountries) > -1) {
                    geo.memberCountry = v;
                    geo.setUserCountry(v.iso);
                    return false;
                }
            });
        }
    });
    
}(stc.geo = stc.geo || {}, jQuery));
