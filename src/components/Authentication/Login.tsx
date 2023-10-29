import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface IUser {
  email: string | undefined;
  password: string | undefined;
}

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [show, setShow] = useState<boolean>(false);

  const handleShowClick = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    const value: IUser = {
      email: email,
      password: password,
    };

    console.log(value);
  };
  return (
    <VStack>
      <FormControl isRequired>
        <FormLabel color={"white"}>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          color={"white"}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color={"white"}>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            color={"white"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button onClick={handleShowClick} size={"sm"} h="1.5rem">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button width={"100%"} mt={5} onClick={handleSubmit}>
        Sign up
      </Button>
    </VStack>
  );
};

export default Login;
