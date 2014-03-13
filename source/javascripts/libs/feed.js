/**
 * pretty basic right now, want to convert to $.fn.saddington or something
 *
 * @param {url} this is the url of the feed
 * @param {$el} this is the dom element you want to append the items
 */

function wpFeed(url, $el) {
      $.ajax({
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        success: function(data) {
          
          var entries = data.responseData.feed.entries;
          var fragment = '';
          
          if(entries) {
             
             for(var i=0;i < 4; i++) {
              fragment += '<li><a href="'+entries[i].link+'">'+entries[i].title+'</a></li>';
              
             }
            
            $el.append(fragment);

            }
          }
      });
    }