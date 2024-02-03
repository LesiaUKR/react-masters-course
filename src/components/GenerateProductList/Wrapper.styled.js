import styled from "styled-components";

// export const Wrapper = styled.div`
//   width: 300px;
//   background-color: yellow;
// `;

export const Wrapper = styled("div")(({ active }) => {
  //   console.log(props);
  return {
    width: "300px",
    backgroundColor: active ? "red" : "blue",
    img: { width: "300px" },
    "&.active": {
      backgroundColor: "green",
    },
  };
});

export const Title = styled.h5`
  color: blue;
`;
