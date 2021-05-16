
const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top',
    }});

function navChange(id){
    let login=document.querySelector('#login');
    let register=document.querySelector('#register');
    let home=document.querySelector('#home');
    if(id==='login'){
        login.classList.remove('hide');
        home.classList.add('hide');
        register.classList.add('hide');
    }
    if(id==='register'){
        login.classList.add('hide');
        home.classList.add('hide');
        register.classList.remove('hide');
    }
    if(id==='home'){
        login.classList.add('hide');
        register.classList.add('hide');
        home.classList.remove('hide');
    }
}
function login(){
    let username=document.querySelector('#loginUser').value;
    let password=document.querySelector('#loginPass').value;
    let users=JSON.parse(localStorage.getItem('users'));
    let userPresent=users&&users.some(user=>user.username==username&&user.password==password);
    console.log(userPresent);
    
    if(userPresent){
        notyf.success('correct');
        let msg=document.querySelector('#msg');
        msg.textContent=`Helo ${username}, Welcome to ArvLand.`;
        navChange('home');
        let obj=JSON.stringify({'username':username,'password':password})
        localStorage.setItem('loggedUser',obj);

    }
    else{
        notyf.error('wrong')
    }
    console.log(users)
}
function register(){
    let username=document.querySelector('#regUser').value;
    let email=document.querySelector('#regEmail').value;
    let password=document.querySelector('#regPass').value;
    let users=JSON.parse(localStorage.getItem('users'));
    let userdata=[];
    if(users&&users.length>0){
     userdata=[...users,{'username':username,'password':password,'email':email}]

    }
    else{
        userdata=[{'username':username,'password':password,'email':email}]
    }
    let obj=JSON.stringify(userdata)
    localStorage.setItem('users',obj);
    navChange('login');
}
function logout(){
localStorage.removeItem('loggedUser');
navChange('login')
}