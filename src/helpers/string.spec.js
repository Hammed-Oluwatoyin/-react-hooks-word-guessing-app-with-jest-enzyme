import stringModule from './string';
const {getStringByLanguage} = stringModule;

const strings = {
    en: {submit: 'submit' },
    emoji: {submit: '🚀'},
    mermish: {}
}

test('returns correct submit for english', () => {
 const string = getStringByLanguage('en','submit', strings)
 expect(string).toBe('submit');
});

test('returns the correct submit string for emoji', () => {
    const string = getStringByLanguage('emoji', 'submit', strings)
    expect(string).toBe('🚀')
});

test('returns english submit string when language does not exist', ()=> {
  const string = getStringByLanguage('notALanguage', 'submit' , strings);
  expect(string).toBe('submit');

})

test('return english submit string language does note exist', () => {
    const string = getStringByLanguage('mermish', 'submit', strings)
    expect(string).toBe('submit');

});