
/**
 * Creates YouTube embed code from a YouTube link.
 * Fades the poster out and video in.
 */
jQuery(function ($) {
    $('.stc-yt a').click(function(e) {
        //on mobiles open video directly
        if(!isMobile) { 
            e.preventDefault();
            var ytsrc = $(this).attr('href');
            var ytid = getYtId(ytsrc);
            ytsrc = buildYtEmbed(ytid);
            var ytframe = $('<iframe/>');
            $(ytframe).attr('src', ytsrc);
            $(this).fadeOut(500, function() {
                $(ytframe).appendTo($(this).parent()).fadeIn();
            });
        }
    });
});

/**
 * Gets a YouTube video ID from a given YouTube URL
 * @param (string) url
 * @returns {String} 
 */
function getYtId(url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    }
    else {
      return null;
    }
}

/**
 * Builds the YouTube embed code from a given video ID.
 * @param {String} vid
 * @returns {String}
 */
function buildYtEmbed(vid) {
    var params = {
        autoplay: 1,
        rel: 0,
        modestbranding: 1,
        showinfo: 0
    };
    return "https://www.youtube.com/embed/" + vid + "?" + $.param(params);
}
