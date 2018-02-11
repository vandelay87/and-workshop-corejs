/*

	Task 1) Refactor the following traditional Javascript "class" into new class syntax

*/

class Animal{
  constructor(say) {
    this.say = say;
  }

  speak() {
    return 'meow';
  }

  eat(){
    return this.say;
  }
}

test('Make cat meow', () => {
  var Cat = new Animal('nom nom nom');
  expect(Cat.speak()).toBe('meow');
  expect(Cat.eat()).toBe('nom nom nom');
});

/*

	 Task 2) Create a class Kitten, that extends the Animal. Overwriting the previous speak method.
		The test should fail when you add the extended class, you will need to override the method for the test to pass
	 	Tip: Use extends keyword

*/

test('Hear the kitten meow', () => {
  class Kitten extends Animal{
    speak(){
      super.speak();
      return 'kitten ' + super.speak();
    }
  }

  const Kitty = new Kitten();
  expect(Kitty.speak()).toBe('kitten meow');
});
