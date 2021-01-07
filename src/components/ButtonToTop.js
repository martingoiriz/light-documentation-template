import React, { useRef } from "react";

function ButtonToTop() {
  const topBtn = useRef(null);

  window.onscroll = function scroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topBtn.current.style.display = "block";
    } else {
      topBtn.current.style.display = "none";
    }
  };

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <span className="btn-to-top" onClick={() => topFunction()} ref={topBtn}>
      <span class="chevron" />
    </span>
  );
}

export default ButtonToTop;
