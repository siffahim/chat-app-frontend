import {
  Box,
  Container,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

const Homepage = () => {
  return (
    <Container maxW={"xl"}>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        w="100%"
        bg={"#535bf2"}
        p={"4px"}
        borderRadius={5}
        color={"white"}
      >
        <Image src="https://img.icons8.com/arcade/64/chat.png" />
        <Text fontSize={"3xl"}>Blink chat</Text>
      </Box>
      <Box w="100%" bg={"#646cff"} borderRadius={5}>
        <Tabs variant="soft-rounded">
          <TabList mt="20px" p={3}>
            <Tab width="50%">Log In</Tab>
            <Tab width="50%" color={"white"}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
