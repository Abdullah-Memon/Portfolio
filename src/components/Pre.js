import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}>
    <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
</div>
  </div>;
}

export default Pre;
