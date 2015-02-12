$(document).ready(function(){

  // only works for one line
  var headingMatch = function(input) {
    var outputArr = input.match(block.heading);
    console.log(outputArr)
    var count = outputArr[1].length
    return '<h'+count+'>'+outputArr[2]+'</h'+count+'>'
  }

  $('#question-form').on('keyup', '#question_content', function(){
    var text = $(this).val();
    if (text.split('').indexOf("#") === -1) {
      $("#markdown").html(text)
    } else {
      $("#markdown").html(headingMatch(text))
    };
  })

  // $('#question-form').on('keyup', '#question_content', function(e){
  //   var text = e.currentTarget.value

  //   var words = text.split(' ')
  //   var length = words.length
  //   for (var i = 0; i< length; i++) {
  //     if (words[i].match(inline.em)) {
  //       words[i] = "<h1>"+words[i]+"</hi>"
  //     }
  //     console.log(words[i])
  //   }
  //   var result = words.join(' ')
  //   $('#markdown').html(result)

    var inline = {
    escape: /^\\([\\`*{}\[\]()#+\-.!_>|])/,
    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
    link: /^!?\[(inside)\]\(href\)/,
    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
    em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
    code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
    br: /^ {2,}\n(?!\s*$)/,
    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
  };

    var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
    lheading: /^([^\n]+)\n *(=|-){3,} *\n*/,
    blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
    list: /^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
    def: /^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
    paragraph: /^([^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+\n*/,
    text: /^[^\n]+/
  };
})
