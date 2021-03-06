jQuery(function ($) {
    
    QUnit.test('should return a valid url for a member country', function (assert) {
        assert.ok(/^http.+$/.test(stc.geo.members.GB.url), 'Valid URL for United Kingdom country member');
    });
    
    QUnit.test('should add country member options to drop down', function (assert) {
        var selectHTML = '<select class="stc-geo-select">'
            + '<option>Default</option>'
            + '</select>';
        var $select = $(selectHTML).appendTo('#qunit-fixture');
        stc.geo.addMembersSelectOptions($select, 'url');
        assert.ok($('#qunit-fixture').find('select option').length > 1, 'country member options correctly added');
        
        //wait a tenth of a second for this as it can create conflicts with other calls
        var done = assert.async();
        setTimeout(function() {
            stc.geo.swapGeoAlternatives("DE");
            assert.ok($('#qunit-fixture').find('select').val().indexOf('.de') > 1, 'Country Member URL correctly selected - ' + $('#qunit-fixture').find('select').val());
            done();
        }, 100);
    });
    
    QUnit.test('Should create a Member country suggestion modal', function (assert) {
        assert.expect(1);
        stc.util.setCookie("stc_suggest_denied", "0", -1);
        stc.geo.suggestMemberSite(stc.geo.members.GB, $('#qunit-fixture'), -1);
        assert.ok($('.modal-body').text().indexOf(stc.geo.members.GB.title) > 1, "The modal window was opened and set to the right country");
        $('#memberSuggestModal').modal('hide');
    });
    
});
