//Array Destructuring

const address = ['Cas Oorthuyskade', 'Amsterdam', 'North Holland', '1087DP'];

const [, cityName, state = 'Delhi'] = address;

console.log(`you are in ${cityName} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, ,price ] = item;

console.log(`A medium ${coffee} costs ${price}`);

// Object Destructuring

const person = {
  name: 'Mike',
  age: 27,
  location: {
    city: "Amsterdam",
    temp: 5
  }
};

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age} year old.`);

const {city, temp: temperature} = person.location;

if (city && temperature)
  console.log(`It's ${temperature} degrees in ${city}.`);


const book = {
  title : 'Autobiography of a Yogi',
  author: 'Paramhansa Yogananda',
  publisher: {
      name: 'Penguin'
  }
};

//Default and Penguin

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
