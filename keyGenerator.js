const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);


function generateKey (length, characters) {
  let key = '';
  const charactersLength = characters.length;
  for(let i = 0; i < length; i++) {
    const randomIndex = parseInt(Math.random() * charactersLength);
    key += characters[randomIndex];
  } 
  return key;
}

console.log(key);
