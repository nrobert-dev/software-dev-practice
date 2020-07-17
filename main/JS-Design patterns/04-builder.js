/* Used for building objects which have
 a lot of working parts or parts which can vary but they still belong to the same abstraction
 */
 
 /* Classic Way */
function Book(_bookName){
  this.bookName = _bookName;
}

function BookBuilder(_bookName){
   this.book = new Book(_bookName);
}

BookBuilder.prototype.setAuthor = function(author){
  this.book.author = author;
  return this;
}

BookBuilder.prototype.setId = function(id) {
    this.book.id = id;
    return this;
}

BookBuilder.prototype.build = function() {
    return this;
}
const builder = new BookBuilder("HP").setAuthor("Rowling").setId(3);

console.log(builder);


