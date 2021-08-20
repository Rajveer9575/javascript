
let user = {
    name: "Rajveer Singh",
    age: 26,
    profession: 'Full Stack Engineer'
}
message = 'Hello';

const getUser = () => {
    document.getElementsByClassName("items-1")[0].innerHTML = getMessage()+' '+user.name;
    document.getElementsByClassName("items-2")[0].innerHTML = user.age;
    document.getElementsByClassName("items-3")[0].innerHTML = user.profession;  
}

const fakeUser = () =>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
              .then(response => response.json())
                   .then(json => console.log(json))
}, 2000);
};

const getFakeUser = () => {
    let id;
    let userId;
    let title;
    let completed;

    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
               .then(json => console.log(json));
}, 2000);

    document.getElementsByClassName('item items-4')[0].innerHTML = id;
    document.getElementsByClassName('item items-4')[0].innerHTML = userId;
    document.getElementsByClassName('item items-4')[0].innerHTML = title;
    document.getElementsByClassName('item items-4')[0].innerHTML = completed;
};

const getMessage = () =>  message; 
// let cars =   ['Swift','Maruti','Dezire','Mahindra'];
// const getCars = () => {  
//    return cars;
// };


