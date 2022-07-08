import React, { useEffect, useState } from "react";
function Test() {
  const [userData, setUserData] = useState([]);

  const database = async () => {
    const res = await fetch("https://api.github.com/users");
    setUserData(await res.json());
    console.log(await res.json());
  };

  useEffect(() => {
    database();
  }, []);

  const deletethis = (id) => {
    const updateditems = userData.filter((e) => {
      return id !== e.id;
    });
    console.log(updateditems);
    setUserData(updateditems);
  };
  const filterData = () => {
    const output = userData.filter((e) => e.login === "mojombo");
    console.log(output);
    setUserData(output);
  };
  const CapitalizeData = () => {
    const output = userData.map((e) => {
      return e.login.charAt(0).toUpperCase() + e.login.slice(1);
    });
    console.log(output);
    setUserData(output);
  };

  return (
    <div>
      <div>
        {userData.map((e) => {
          return (
            <div key={e.id}>
              <div className="d-flex">
                <div className="px-5">{e.login}</div>
                <div className="px-5">{e.id}</div>
                <div
                  className="btn btn-primary mx-5"
                  onClick={() => deletethis(e.id)}
                >
                  delete
                </div>
              </div>
            </div>
          );
        })}
        <div className="btn btn-primary" onClick={filterData}>
          filter
        </div>
        <div className="btn btn-primary" onClick={CapitalizeData}>
          Capitalize
        </div>
      </div>
    </div>
  );
}

export default Test;
