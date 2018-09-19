export default function peopleReducer(
    people = {
      list:[], 
      nextId: 1, 
      currentPerson: 1
    },
    action
  ){
  switch (action.type) {
    case "ADD_PERSON":
      const newGuyList = people.list.concat(action.payload);  //create new array
      return {
        ...people,
        list: newGuyList,
        nextId: people.nextId + 1
      };

    case "REMOVE_GUY":
      const peopleList = people.list;
      const removedGuyList = peopleList.filter(function(item) {
        return item.num !== action.payload.num
      });

      return {
        ...people,
        list: removedGuyList
      };

    case "EDIT_EMPLOYEE":
      let editedList = people.list;
      let editedName = people.list[action.payload].name;
      let editedTitle = people.list[action.payload].title;
      let editedTech = people.list[action.payload].tech;

      editedName = action.namePayload;
      editedTitle = action.titlePayload;
      editedTech = action.techPayload;

      editedList[action.payload] = {
        name: editedName,
        title: editedTitle,
        tech: editedTech
      }


      return {
        ...people,
        list: editedList,
        currentPerson: action.payload
      }
  }
  return people;
};