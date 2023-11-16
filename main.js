//let arrayOfPeople;



const people = () => {
    const allPeople = document.getElementById('all-people')
    arrayOfPeople.map((data) => {
        const li = document.createElement('li')
        const li5 = document.createElement('li')
        const li6 = document.createElement('li')
        const name = document.createElement('span'); 
        name.style.fontWeight = 'bold'; 
        name.textContent = data.name.first + " " + data.name.last; 
        const picture = document.createElement('img')
        picture.src = data.picture.thumbnail;
        const newButton = document.createElement('button');
        newButton.textContent = 'Extra Info';
        li.appendChild(name);
        li5.appendChild(picture)
        allPeople.append(li)
        li6.appendChild(newButton)
        li.append(li5);
        li.append(li6)

        newButton.addEventListener('click', () => {
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            const li4 = document.createElement('li');
            const birthDay = document.createElement('span');
            birthDay.textContent = 'Age:' + ' ' + data.dob.age;
            const address = document.createElement('span');
            address.textContent = 'Location:' + ' ' + data.location.city + ' ' + data.location.state ;
            const number = document.createElement('span');
            number.textContent = 'Number' + ' ' + data.phone
            li2.appendChild(birthDay);
            li3.appendChild(address);
            li4.appendChild(number);
            li.append(li2);
            li.append(li3);
            li.append(li4)
        });      
    })

}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=9')
    .then(res => res.json())
    .then(data => {
      arrayOfPeople = data.results;
      people();
      console.log(data);
    })
}

getUsers();



  



