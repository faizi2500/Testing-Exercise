const string = (a)=> {

  const characters = a.length
  if(characters < 1 || characters > 10){
    return 'Invalid string size';
  }
  else{
    return characters;
  }
};
module.exports = string;