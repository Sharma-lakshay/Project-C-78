var member=[
    "My Father: Sandeep Sharma",
    "My Mother: Veni Sharma",
    "My Grandmother: Kamlesh Sharma",
    "My Grandfather: Narender Nath Sharma",
    "My Younger Brother: Pragunay Sharma"
  ];
  var image=[
     "FATHER.png",
     "MOTHER.jpg",
     "GRANDMOTHER.jpg",
     "GRANDFATHER.png",
     "BROTHER.jpg"
  ];
  var i= 0;
  function update(){
  i++;
  var number_of_family_members_in_array= 4;
  if(i> number_of_family_members_in_array){
    i= 0;
  }
  var update_names= member[i];
  var update_images= image[i];
  document.getElementById("membertext").innerHTML= update_names;
  document.getElementById("album").src= update_images;
  
  }

  
  
   
  