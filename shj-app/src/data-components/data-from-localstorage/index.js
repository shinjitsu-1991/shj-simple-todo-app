export default class EditToDoData {
    constructor() {
        this.dataName = 'shjToDoData';
    }

    getData = () => {
        if(!localStorage.getItem(this.dataName)) {
            localStorage.setItem(this.dataName, '[]');
        }
        return JSON.parse(localStorage.getItem(this.dataName));
    };

    addItem = (newItem) => {
        const data = this.getData(),
            newData = [...data, newItem];
        this.setData(JSON.stringify(newData))
    };

    removeItem = (removedItemId) => {
        const data = this.getData(),
              idx = data.findIndex((el)=>
                el.id === removedItemId
            );
        const newData = [...data.slice(0,idx), ...data.slice(idx+1)];
        this.setData(JSON.stringify(newData))
    };

    editItemParam = (itemId, editedParam) => {
        const data = this.getData(),
              idx = data.findIndex((el)=>
                    el.id === itemId
                );
        const newData = [...data];
        newData[idx][editedParam] = !newData[idx][editedParam];
        this.setData(JSON.stringify(newData))
    };

    setData = (newData) => {
        localStorage.setItem(this.dataName, newData);
    };
}
