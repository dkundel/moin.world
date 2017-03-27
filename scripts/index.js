const emojiRegEx = require('emoji-regex');
const emojione = require('emojione');

/**
 * EMOJI FILTER
 */
hexo.extend.filter.register('after_render:html', function(html){
  if (html.indexOf('class="emojione"') !== -1) {
    return html;
  }

  let matches = html.match(emojiRegEx());
  let uniqueMatches = [...new Set(matches)];
  for (let emoji of uniqueMatches) {
    let emojiRegEx = new RegExp(emoji, 'g');
    html = html.replace(emojiRegEx, emojione.toImage(emoji));
  }
  return html;
}, 900000);