import styled from "styled-components";

export const OverviewWrapper = styled.div`
  margin: 3% 3%;
  & h2 {
    color: #012a4a;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 32px;
    margin: 3% 0;
  }

  & .paper {
    border-radius: 0;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  }

  & .tableHead {
    background: rgba(245, 245, 245);
    border: 0;
  }
  & .row {
    border: none;
  }

  & .pagination {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  & .showMenu {
    cursor: pointer;
  }
  & .action {
    position: relative;
  }

  & .tableBody {
    min-height: 60vh;
  }

  & .loading {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .chart-div {
    display: flex;
    align-items: center;
    // height: 18rem;
  }
  .card-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  @media (max-width: 768px) {
    .chart-div {
      display: block;
    }
    h2 {
      font-size: 12px;
    }
  }
`;

export const MiniMenu = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.1),
    0px 2px 4px -2px rgba(33, 33, 33, 0.06);
  border-radius: 8px;
  width: 18rem;
  position: absolute;
  top: -1rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  & div {
    padding: 8% 0 8% 15%;
    text-align: left;
    cursor: pointer;
  }

  & div:hover {
    background: rgba(245, 245, 245);
    color: #de3d6d;
    transition: all 0.5s;
  }
`;

export const TransactionCard = styled.div`
  width: 28rem;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`;
