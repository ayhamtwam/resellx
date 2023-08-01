import { PageProps } from "../../interfaces";

const Login = ({ notify }: PageProps) => {
  return (
    <div className="flex h-screen bg-[#F0F0F0] bg-[url('/login-background.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="fixed flex w-screen items-center justify-end pt-[40px] px-[75px] lg:px-[125px] z-[99]">
        <a href="/">
          <button className="w-[120px] h-[47.5px] rounded-[5px] bg-[#032853] font-semibold text-[16px] text-white">
            Return
          </button>
        </a>
      </div>

      <div className="flex w-screen h-screen items-center justify-center">
        <div className="flex flex-col bg-white rounded-[10px] py-[15px] px-[20px]">
          <div className="flex flex-col w-full gap-[5px]">
            <div className="flex flex-col gap-[5px]">
              <span className="font-medium text-[16px] text-[#032853]">
                Email
              </span>

              <input
                placeholder="email@email.com"
                type="text"
                className="font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />
            </div>

            <div className="flex flex-col w-full gap-[5px]">
              <span className="font-medium text-[16px] text-[#032853]">
                Password
              </span>

              <input
                placeholder="********"
                type="password"
                className="font-medium text-[14px] text-[#032853] h-[40px] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />
            </div>
          </div>

          <span className="font-medium text-[#5988FF] text-[14px] cursor-pointer mt-[5px]">
            Forgot Password?
          </span>

          <div className="flex flex-col items-center mt-[15px] gap-[10px]">
            <button
              onClick={() => {
                notify({
                  title: "Error",
                  info: "Credentials invalid, contact support.",
                });
              }}
              className="flex items-center justify-center w-[304px] h-[35px] rounded-[5px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] gap-[5px]"
            >
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                <path
                  opacity="0.4"
                  d="M6.875 0.5C8.1125 0.5 9.125 1.505 9.125 2.75V13.25C9.125 14.4875 8.1125 15.5 6.875 15.5H2.375C1.13 15.5 0.125 14.4875 0.125 13.25V2.75C0.125 1.505 1.13 0.5 2.375 0.5H6.875Z"
                  fill="white"
                />
                <path
                  d="M6.36894 4.84255C6.66894 4.54255 7.14144 4.54255 7.43394 4.84255C7.73394 5.13505 7.73394 5.60755 7.43394 5.90005L6.09144 7.24255H12.9089C13.3289 7.24255 13.6589 7.57255 13.6589 7.99255C13.6589 8.40505 13.3289 8.74255 12.9089 8.74255H6.09894L7.44894 10.0851C7.74894 10.3776 7.74894 10.8501 7.44894 11.1426C7.15644 11.4351 6.68394 11.4351 6.39144 11.1426L4.29894 9.04255C3.71394 8.45005 3.71394 7.50505 4.29894 6.92005L6.39894 4.82005L6.36894 4.84255Z"
                  fill="white"
                />
              </svg>

              <span className="font-semibold text-white text-[13px]">
                Sign In
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
