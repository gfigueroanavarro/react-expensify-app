const add = (a,b) => a + b;
const generatedGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers',()=>{
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should return greeting with name', () =>{
    const result = generatedGreeting('Tom');
    expect(result).toBe('Hello Tom!');
});

test('should return greeting with no name', () =>{
    const result = generatedGreeting();
    expect(result).toBe('Hello Anonymous!');
});