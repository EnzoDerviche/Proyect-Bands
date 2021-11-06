import styled from "styled-components";

export const Authentication = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url("http://k42.kn3.net/5F0B221BA.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`;
export const ContainerApp = styled.div`
    width: 100%;
    margin: 0px;
`;

export const SearchBand = styled.form`
    padding: 0.25rem;
    border: solid 2px gray;
    width: fit-content;
    border-radius: 9999px;
    display: flex;
    background-color: white;
`;

export const InputSearch = styled.input`
    border: none;
    margin-left: 0.5rem;
    margin-right: 0rem;
    :focus{
        outline: none;
    }
`;

export const InputSubmit = styled.input`
    background-color: white;
    border: none;
    width: 4.5rem;
    height: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    color:black;
    border-radius: 9999px;
    cursor: pointer;
    :focus{
        outline: none;
    }
    :hover{
        background-color: rgb(255, 255, 255);
        color: rgb(185, 183, 183);
    }
`;

export const Filters = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 55px;
    background-color: transparent;
    margin: 0px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
    gap: 1rem;
    margin: 10px;
    min-height: 15rem;
    height: fit-content;
    background-color: #E3E3E3;
    border: 1px solid black;
    border-radius: 15px;
`;

export const Band = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    color: white;
    background-color: black;
    border-radius: 15px 15px 0px 0px;
    h2{
        :hover {
            color: grey;
        }
    }
`;

export const Fact = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-size:17px;
    font-weight: 500;
    align-items: center;
    width: fit-content;
    min-width: 6rem;
    padding: 1px 7px;
    height:2rem;
    border-radius:15px;
    background-color:  ${(props) => props.background};
`; 

export const Members = styled.h3`
    color:black;
    font-weight: 700;
    margin: 5px 0 2px 0;
`;

export const ListArtist = styled.div`
    margin-bottom: 15px;
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        li{
        font-weight: bold;
        width: 100%;
        margin-left: 5px;
    }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom:7px;
    width: 100%;
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: black;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin-top: 30px;
`;

export const Item = styled.li`
    list-style:none;
    margin: 0 15px;
    cursor: pointer;
    color: white;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
    :hover{
        background-size: 100% 2px;
    }
`;

export const List = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
    width: 100%;
    height: 10rem;
    background-color: red;
    background-image: url("https://mobimg.b-cdn.net/v3/fetch/d5/d555e7128cd78753db19e9b1218a531f.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Subtitle = styled.div`
    height: 50px;
    margin-bottom: 10px;
    p{
        color: white;
        font-size: 15px;
    }
`;

export const Modal = styled.div`
    display: flex;
    border-radius: 10px;
    flex-direction: ${(props) => props.direction || "column"};;
    justify-content: ${(props) => props.justify};
    align-items: center;
    width: 22rem;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.5);
    border: 2px solid #7F7F7F;
`;

export const InputContainers = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexdirection || "column"};
  align-items: ${(props) => props.align || "center"};
  text-align: center;
  position: relative;
  width: 100%;
  margin-bottom: 25px;
`;

export const Inputs = styled.input`
  background-color: ${(props) => props.bgcolor || "rgba(0, 0, 0, 0.5)"};
  width: ${(props) => props.width || "80%"};
  padding: 0 20px 0;
  border-radius: 12px;
  border: ${(props) => props.border || "2px solid rgb(255, 255, 255)"};
  color: ${(props) => props.color || "rgb(255, 255, 255)"};
  font-size: 16px;
  height: 45px;
    &:focus ~ .placeholder {
    transform: translateY(-35px) translateX(-0px) scale(0.9);
    }
    &:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-35px) translateX(-0px) scale(0.9);
    }
`;

export const Placeholder = styled.label`
    position: absolute;
    top: 15px;
    left: 60px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 14px;
    pointer-events: none;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    font-weight: 500;
`;

export const ErrorRegistro = styled.label`
    margin: 5px 0 0 0;
    color: #FF5F5F;
`;

export const Title = styled.p`
    color: white;
    font-size: 40px;
    font-weight: 400;
`;

export const Button = styled.button`
    display: flex;
    color: ${(props) => props.color || "white"};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.font};
    width: ${(props) => props.width || "3rem"};
    height: ${(props) => props.height || "2rem"};
    background-color: ${(props) => props.background};
`;

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0 1rem;
`;

export const Submit = styled.button`
  width: 92%;
  margin: 0 0 25px 0;
  height: 35px;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 6px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  &:active {
    background-color: rgb(202, 202, 202);
  }
  &:disabled {
    background-color: #FA8B8B ;
  }
`;

export const GSubmit = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  & .Icon {
    background-image: url("https://i.imgur.com/fhnjiVz.png");
    background-size: cover;
    width: 30px;
    height: 30px;
    justify-self: flex-start;
  }
  & .ButtonText {
    width: 100%;
    font-weight: 700;
    text-align: center;
  }
  &:active {
    background-color: rgb(202, 202, 202);
  }
`;

