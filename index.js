// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"];

describe('Array functions', () => {
    let cats;
    beforeEach(() => {cats = ['Milo', 'Otis', 'Garfield'];
  });
})
  let destructivelyAppendCat= (name) => {
      it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat('Ralph');
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    };
        describe,('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");
        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });
    

      
    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        destructivelyRemoveLastCat();
        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });
  
    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        destructivelyRemoveFirstCat();
        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });
    function destructivelyRemoveFirstCat() {
        cats.shift();
    }
    
    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  
    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
   ;

    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  
  
  describe('removeFirstCat', () => {
    it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', () => {
      const [_, ...newCats] = cats;
      expect(newCats).to.have.ordered.members(["Otis", "Garfield"]);
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });
  function removeFirstCat() {
    return cats.slice(1);
}
