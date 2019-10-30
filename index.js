function CreatePerson (name, age) {
  let _name = name
  let _age = age
  return {
    getDataPerson () {
      return _name +' '+ _age +' age old'
    },
    setDataPerson (newName,newAge){
      _age = newAge
      _name= newName
    }
  }
}
const girl = CreatePerson('Nina',19)
const boy = CreatePerson('Peter', 25)

console.log(girl.getDataPerson())
console.log(boy.getDataPerson())
girl.setDataPerson('Sonia',20)
boy.setDataPerson('John',26)
console.log(girl.getDataPerson())
console.log(boy.getDataPerson())
