function angryProfessor(k, a) {
    // sorting the array in ascending order
      a = a.sort((a,b)=>a-b)
      let onTime = []
      for(let i in a){
        if(a[i]<=0){
          onTime.push(a[i])
        }else{
          break
        }      
      }
      if(onTime.length>=k) return "YES"
      return "NO"
  }