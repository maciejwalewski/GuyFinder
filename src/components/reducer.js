export default function peopleReducer(
    state = {
      guyReducer: {
        list:[], 
        nextId: 1,
      },
    },
    action
  ){
  switch (action.type) {
    case "ADD_PERSON":
      const newGuyList = state.guyReducer.list.concat(action.payload);  //create new array
      return {
        ...state,
        guyReducer: {
          list: newGuyList,
          nextId: state.guyReducer.nextId + 1
        },
      };

    case "REMOVE_GUY":
      const peopleList = state.guyReducer.list;
      const removedGuyList = peopleList.filter(function(item) {
        return item.num !== action.payload.num
      });

      return {
        ...state,
        guyReducer: {
          list: removedGuyList,
          nextId: state.guyReducer.nextId,
        },
      };

    case "EDIT_GUY":
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
        ...state,
        guyReducer: {
          list: editedList,
          nextId: state.guyReducer.nextId,
        },
      }
  }
  return state;
};