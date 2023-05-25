export default function UserCard({userData}){
    console.log("usercard",userData);
    return(
    <>  
        <img src={userData.picture.medium} alt="" />
        <h2>{userData.name.first} {userData.name.last}</h2>
        <p>Age: {userData.dob.age} ans</p>
    </>
       
    )
}