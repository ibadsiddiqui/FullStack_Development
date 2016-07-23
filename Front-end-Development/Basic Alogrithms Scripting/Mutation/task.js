function mutation(arr){
  var arr1 = arr[1].toLowerCase();
  var arr2 = arr[0].toLowerCase();
  for(var i = 0; i < arr2.length; i++)
    if(arr2.indexOf(arr1[i]) < 0)
      return false;
  return true;

}
