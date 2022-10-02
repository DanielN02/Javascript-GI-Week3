// const pii = (function () {
//   const name = "Daniel Ndri";
//   const social = 000 - 00 - 0002;

//   function getName() {
//     return pii.name;
//   }

//   return {
//     getName,
//   };
// })("Daniel", "000-00-0002");

var personalInfo = () => {
  var pii = {
    name: "Daniel N'Dri",
    ssn: "000-000-0002",
  };

  return {
    getName: () => {
      return pii.name;
    },
  };
};

console.log(personalInfo().getName());
