import Layout from "@/components/common/Layout";
import Selectbox from "@/components/common/input/Selectbox";
import { useGetServersQuery } from "@/store/queries/ServerQueries";
import { Container, FilterContainer } from "@/styles/components/MainStyles";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: servers, isFetching, isLoading } = useGetServersQuery();
  const [server, setServer] = useState("All");
  useEffect(() => {
    console.log(server);
  }, [server]);

  const onSubmit = () => {
    console.log("submit!", marchant);
    // axios
    //   .post("http://localhost:3000/api/alarm", {
    //     location: marchant.location,
    //     npc: marchant.npc,
    //     item: marchant.item,
    //   })
    //   .then((res) => console.log(res));
  };

  if (!isLoading)
    return (
      <Layout>
        <Container>
          <FilterContainer>
            <Selectbox options={servers} value={server} onChange={setServer} />
            {/* keyword & alarm */}
          </FilterContainer>
          <div className="section-alarm-list">body</div>
        </Container>
      </Layout>
    );
}

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
