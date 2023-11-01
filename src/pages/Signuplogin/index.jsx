import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const SignuploginPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-start mx-auto p-[145px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row gap-[51px] items-start justify-center w-[67%] md:w-full">
          <div className="bg-white-A700_4c border border-solid border-white-A700_33 flex flex-col items-center justify-end p-2.5 rounded-[10px] shadow-bs w-[48%] md:w-full">
            <div className="flex flex-col items-start justify-start mt-1 w-[94%] md:w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <a
                  href="javascript:"
                  className="mt-3 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                >
                  <Text size="txtPoppinsBold24">Sign up</Text>
                </a>
                <Text
                  className="border border-solid border-white-A700 mb-[7px] px-3 py-0.5 rounded-[20px] text-2xl md:text-[22px] text-center text-shadow-ts text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  ×
                </Text>
              </div>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[460px] sm:min-w-full mt-[11px]"
                onClick={() => googleSignIn()}
                leftIcon={
                  <div className="mt-0.5 mb-[5px] mr-2.5 bg-white-A700_cc">
                    <Img src="images/img_google.svg" alt="google" />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
                  Sign up with Google
                </div>
              </Button>
              <Line className="bg-white-A700_cc h-px mt-[13px] w-[98%]" />
              <div className="flex flex-col gap-2 items-start justify-start mt-[7px] w-[98%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Name
                </Text>
                <Input
                  name="groupFive"
                  placeholder="Enter Your Full Name"
                  className="leading-[normal] md:text-[22px] p-0 placeholder:text-white-A700_7f sm:text-xl text-2xl text-left w-full"
                  wrapClassName="w-full"
                  type="text"
                ></Input>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-2.5 w-[98%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Email
                </Text>
                <Input
                  name="groupFour"
                  placeholder="Enter Your Email Address"
                  className="leading-[normal] md:text-[22px] p-0 placeholder:text-white-A700_7f sm:text-xl text-2xl text-left w-full"
                  wrapClassName="w-full"
                  type="email"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start mt-2.5 w-[98%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Password
                </Text>
                <Input
                  name="groupThree"
                  placeholder="At least 8 characters"
                  className="leading-[normal] md:text-[22px] p-0 placeholder:text-white-A700_7f sm:text-xl text-2xl text-left w-full"
                  wrapClassName="mt-[3px] w-full"
                ></Input>
              </div>
              <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-start mt-4 w-[83%] md:w-full">
                <div className="bg-blue_gray-100 h-[15px] mb-[13px] sm:mt-0 mt-[7px] rounded-[3px] w-[15px]"></div>
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsRegular24"
                >
                  <span className="text-white-A700 font-poppins text-left font-normal">
                    I agree with{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-yellow-A200 font-poppins text-left font-normal underline"
                  >
                    Terms
                  </a>
                  <span className="text-white-A700 font-poppins text-left font-normal">
                    {" "}
                    and{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-yellow-A200 font-poppins text-left font-normal underline"
                  >
                    Privacy
                  </a>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[460px] sm:min-w-full mt-[17px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="yellow_A200_99"
                variant="fill"
              >
                Sign up
              </Button>
              <Line className="bg-white-A700_cc h-px mt-5 w-[98%]" />
              <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[72px] mt-[23px]">
                <a
                  href="javascript:"
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                >
                  <Text size="txtPoppinsRegular24">
                    Already have an account?
                  </Text>
                </a>
                <a
                  href="javascript:"
                  className="text-2xl md:text-[22px] sm:text-xl text-yellow-A200"
                >
                  <Text size="txtPoppinsBold24YellowA200">Log in</Text>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white-A700_4c border border-solid border-white-A700_33 flex flex-col items-center justify-end mb-[120px] p-3.5 rounded-[10px] shadow-bs w-[48%] md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-[96%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <a
                    href="javascript:"
                    className="mt-3 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  >
                    <Text size="txtPoppinsBold24">Log in</Text>
                  </a>
                  <Text
                    className="border border-solid border-white-A700 mb-[7px] px-3 py-0.5 rounded-[20px] text-2xl md:text-[22px] text-center text-shadow-ts text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    ×
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[460px] sm:min-w-full mt-[11px]"
                  leftIcon={
                    <div className="mt-px mb-1.5 mr-2.5 bg-white-A700_cc">
                      <Img src="images/img_google.svg" alt="google" />
                    </div>
                  }
                >
                  <div className="font-medium leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
                    Log in with Google
                  </div>
                </Button>
                <Line className="bg-white-A700_cc h-px mt-3.5 w-[98%]" />
                <div className="flex flex-col gap-[9px] items-start justify-start mt-[5px] w-[98%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Email
                  </Text>
                  <Input
                    name="groupTwo"
                    placeholder="Enter Your Email Address"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-white-A700_7f sm:text-xl text-2xl text-left w-full"
                    wrapClassName="w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start mt-[11px] w-[98%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Password
                  </Text>
                  <Input
                    name="groupOne"
                    placeholder="Enter Your Password"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-white-A700_7f sm:text-xl text-2xl text-left w-full"
                    wrapClassName="w-full"
                    type="password"
                  ></Input>
                </div>
                <div className="flex flex-row items-center justify-start mt-[13px] w-[42%] md:w-full">
                  <div className="bg-blue_gray-100 h-[15px] my-2.5 rounded-[3px] w-[15px]"></div>
                  <Text
                    className="ml-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsRegular24"
                  >
                    Remember Me
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[460px] sm:min-w-full mt-[15px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="yellow_A200_99"
                  variant="fill"
                >
                  Log in
                </Button>
                <Line className="bg-white-A700_cc h-px mt-5 w-[98%]" />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start">
                <a
                  href="javascript:"
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                >
                  <Text size="txtPoppinsRegular24">Don’t have an account?</Text>
                </a>
                <a
                  href="javascript:"
                  className="text-2xl md:text-[22px] sm:text-xl text-yellow-A200"
                >
                  <Text size="txtPoppinsBold24YellowA200">Sign up</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignuploginPage;
