import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface IUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IUserValue extends IUser {
  image: object | null;
}

const Register = () => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [image, setImage] = useState<object | null>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    const newData: IUser = { ...userData };
    newData[name as keyof IUser] = value;
    setUserData(newData);
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleShowClick = () => {
    setShow(!show);
  };

  const handleSubmit = (): void => {
    const value: IUserValue = {
      ...userData,
      image: image,
    };
    console.log(value);
  };
  return (
    <VStack>
      <FormControl isRequired>
        <FormLabel color={"white"}>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          color={"white"}
          name="name"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color={"white"}>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          color={"white"}
          name="email"
          onChange={handleChange}
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
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button onClick={handleShowClick} size={"sm"} h="1.5rem">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel color={"white"}>Confirm password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            color={"white"}
            name="confirmPassword"
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button onClick={handleShowClick} size={"sm"} h="1.5rem">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel color={"white"}>Upload your image</FormLabel>
        <Input
          type="file"
          p={1}
          accept="image/*"
          color={"white"}
          name="file"
          onChange={handleFile}
        />
      </FormControl>

      <Button width={"100%"} mt={5} onClick={handleSubmit}>
        Sign up
      </Button>
    </VStack>
  );
};

export default Register;
