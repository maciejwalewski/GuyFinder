export default function peopleReducer(
    state = {
      guyReducer: {
        list:[
          {
            avatar: '4',
            description: 'nice front-end',
            name: 'Maciej',
            num: 1,
            surname: 'Walewski',
            title: 'Front-end',
          },
          {
            avatar: '3',
            description: 'nice back-end',
            name: 'John',
            num: 2,
            surname: 'Snow',
            title: 'Back-end',
          },
          {
            avatar: '2',
            description: 'nice back-end',
            name: 'Hermione',
            num: 3,
            surname: 'Granger',
            title: 'Back-end',
          },

        ], 
        nextId: 4,
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
      const editedGuy = action.payload;
      const guysList = state.guyReducer.list;

      let newGuysList = guysList.map((guy) => {
        return guy.num == editedGuy.num ? editedGuy : guy;
      });

      return {
        ...state,
        guyReducer: {
          list: newGuysList,
          nextId: state.guyReducer.nextId,
        },
      }
  }
  return state;
};