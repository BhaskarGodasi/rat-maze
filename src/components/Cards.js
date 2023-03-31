import React from "react";
import { ImageCom } from "./ImageCom";

export const Cards = () => {
  console.log('inside cards')
  const input = prompt("enter the number");
  let x = input;
  let y = input;
  const mylistComponent = [];
  let k = 1;
  for (let i = 1; i <= x; i++) {
    mylistComponent[i] = [];
    for (let j = 1; j <= y; j++) {
      mylistComponent[i][j] = <ImageCom key={k} />;
      k = k + 1;
    }
  }
  const Iterate = () => {
    const cont = document.querySelector(".cont")
    cont.classList.add(".showImg")
  };

  console.log(mylistComponent);
  return (
    <>
      <div className="cards justify-content-center">
        {/* {
            mylistComponent.map(val=>{
                return(
                    <div className='col-lg-4 '>
                    {val}
                </div>
                )
            })
        } */}
        <table>
          <tbody>
            {mylistComponent.map((items) => {
              return (
                <tr key={x}>
                  {items.map((subItems, index) => {
                    return <td key={index}> {subItems} </td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button
            className="btn border bg-success rounded-pill"
            onClick={() => Iterate()}
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
};
