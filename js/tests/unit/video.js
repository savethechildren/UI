jQuery(function ($) {
    QUnit.test('should return a valid YouTube video id', function (assert) {
        assert.expect(2);
        assert.equal(stc.video.getYtId("https://www.youtube.com/watch?v=ixrzuoOMBgw"), "ixrzuoOMBgw");
        assert.equal(stc.video.getYtId("https://www.youtube.com/invalid/ixrzuoOMBgw", null));
    });
});
