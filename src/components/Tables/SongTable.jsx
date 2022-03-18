import { Center, Spinner, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { useGlobalState } from "../../contexts/GlobalContext";
import CustomTable from "./CustomTable";
const SongTable = ({ title }) => {
  const { tracks } = useGlobalState();

  const columns = useMemo(
    () => [
      {
        Header: title,
        accessor: "name",
      },
    ],
    [title]
  );
  const data = [];

  tracks && tracks.items.map((t) => data.push({ name: t.track?.name }));
  return data.length === 0 ? (
    <Center h="700px" flexDir="column">
      <Text mb={3}>Fetching tracks from playlist</Text>
      <Spinner />
    </Center>
  ) : (
    <CustomTable hasRadio={false} columns={columns} data={data} />
  );
};

export default SongTable;
