function titleCase(str) {
  str = str.split(" ")
  let result= []
  for (let a in str) {
    result.push(str[a][0].toUpperCase()+str[a].slice(1))
  }
  console.log(result.join(" "))
  return result.join(" ");
}

titleCase("I'm a little tea pot");