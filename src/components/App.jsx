import React,{useState} from "react";

function App() {
const [fullName,setFullName]=useState({
fName:"",
lName:"",
});
function update(event){
const[value,name]=event.target;
if(name===fName){

}


}
const[firstName,setfirstname]=useState("");

const[lastName,setlastname]=useState("");

const [change1name,set1name]=useState("");

const [change2name,set2name]=useState("");

function change1(event){
set1name(event.target.value);
}
function change2(event){
set2name(event.target.value);
}
function update(event){
setfirstname(change1name);
setlastname(change2name);
event.preventDefault();
}

  return (

    <div className="container">
      <h1>Hello {firstName} {lastName}</h1>
      <form onSubmit={update}>
        <input onChange={change1} name="fName" placeholder="First Name" />
        <input onChange={change2} name="lName" placeholder="Last Name"  />
        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
