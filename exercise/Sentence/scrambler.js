function stringPrinter( starterString ){
  $('#output').text( starterString )
}
stringPrinter("Hello World")

function funnySentence( noun, adjective, verb, adverb ){
  var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

  stringPrinter(sentence);
};
funnySentence("Man ", "Tall ", "Ran", "Fast "),
funnySentence("woman ", "husky ", "walked ", "hard ")
