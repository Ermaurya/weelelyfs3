import { useState,useEffect } from "react";
import UserTable from "./UserTable";
import FilterData from "./FilterData";

function Users() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState([]);

  const getData = () => {
    
    fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      setUsers(data.results);
      setState(data.results);
    })
    .catch(() => {});
  };
useEffect(()=>{
getData();
},[])
  return (
    <div style={{ padding: "30px" }}>
      <h2>Users Details</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        voluptate voluptates, veniam corrupti neque quo non placeat
        necessitatibus dolores blanditiis aperiam assumenda quasi exercitationem
        aut inventore nemo maxime animi dignissimos qui suscipit atque eos
        corporis distinctio. Consectetur unde ducimus, blanditiis id iusto ipsum
        itaque. Reprehenderit doloremque, accusamus magnam laudantium pariatur
        aspernatur omnis facere voluptatum tempore, nam iure illum eum illo at
        aliquam sequi quasi veritatis veniam ipsam! Exercitationem rerum
        laudantium corporis fugiat inventore odio qui nostrum aperiam. Aliquid
        optio corrupti exercitationem laboriosam cumque ipsam, iusto neque,
        ducimus nesciunt architecto eum, adipisci veritatis harum sequi eaque?
        Totam natus dolores delectus. A in fuga amet magnam unde alias, quia
        deserunt similique tenetur, natus, nisi quaerat. Fuga quam, molestias
        eligendi ut consequuntur, provident distinctio ipsum possimus eos
        perferendis ullam voluptate aperiam placeat libero. Eaque quaerat natus
        nihil vitae omnis reiciendis laborum nesciunt, deleniti quidem pariatur
        perferendis assumenda recusandae hic neque, cum adipisci animi cumque
        modi! Officia sequi iure atque dolorem molestiae quos error cum illum
        asperiores libero, reprehenderit aut dicta consequatur tenetur mollitia
        consectetur quis. Suscipit beatae aliquid debitis repudiandae numquam
        maxime dicta minima, iusto, facilis minus recusandae atque dolor ipsa et
        tempore quidem, officiis dolorem modi? Nostrum repudiandae nesciunt
        excepturi mollitia quam.
      </p>

      {users.length > 0 && <FilterData setUsers={setUsers} state={state} />}
      {users.length > 0 && <UserTable users={users} />}
    </div>
  );
}

export default Users;
