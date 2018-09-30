export default function guyReducer(
  state = {
    list: [
      {
        avatar: '4',
        description: 'Ready for hard work and constant learning front-end developer. Probably the best junior You will actually find. (source: own research) ',
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
  action
) {
  switch (action.type) {
    case "ADD_PERSON":
      const newGuyList = state.list.concat(action.payload);  //create new array
      return {
        ...state,
        list: newGuyList,
        nextId: state.nextId + 1,
      };

    case "REMOVE_GUY":
      const peopleList = state.list;
      const removedGuyList = peopleList.filter(function (item) {
        return item.num !== action.payload.num
      });

      return {
        ...state,
        list: removedGuyList,
        nextId: state.nextId,
      };

    case "EDIT_GUY":
      const editedGuy = action.payload;
      const guysList = state.list;

      let newGuysList = guysList.map((guy) => {
        return guy.num == editedGuy.num ? editedGuy : guy;
      });

      return {
        ...state,
        list: newGuysList,
        nextId: state.nextId,
      }
  }
  return state;
};