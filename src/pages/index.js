import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [marchant, setMarchant] = useState({
    location: "",
    npc: "",
    item: "",
  });
  const onSubmit = () => {
    console.log("submit!", marchant);
    axios.post("http://localhost:3000/api/alarm", {
      location: marchant.location,
      npc: marchant.npc,
      item: marchant.item,
    }).then(res => console.log(res));
  };

  return (
    <Main>
      <div>
        <p>입력창</p>
        <div>
          <label>
            지역
            <input
              type="text"
              value={marchant.location}
              onChange={(e) =>
                setMarchant({ ...marchant, location: e.target.value })
              }
            />
          </label>
          <label>
            NPC
            <input
              type="text"
              value={marchant.npc}
              onChange={(e) =>
                setMarchant({ ...marchant, npc: e.target.value })
              }
            />
          </label>
          <label>
            아이템 이름
            <input
              type="text"
              value={marchant.item}
              onChange={(e) =>
                setMarchant({ ...marchant, item: e.target.value })
              }
            />
          </label>
          <button onClick={onSubmit}>전송</button>
        </div>
        <div>
          {marchant.location}/{marchant.npc}/{marchant.item}
        </div>
      </div>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

/**
 * 
export async function getStaticProps() {
  try {
    const response = await axios.post("http://localhost:3000/api/alarm", {
      location: marchant.location,
      npc: marchant.npc,
      item: marchant.item,
    });
    return {
      props: {
        foodGetData: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
 */
