function compareArrays(arr1, arr2) {
    let result = arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
    return result; 
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => user.gender === gender).map(result => result.age).reduce((summ, userAge, index, array) => {
      summ += userAge;
      if (index === array.length - 1) {
        return summ / array.length;
      }
      return summ;
    }, 0);
  }