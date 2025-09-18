import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type AuthHeaderType = {
  className?: string;
  welcomeToStackguard?: string;
  secureYourCodebaseWithAdvanced?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivFlex?: CSSProperties["flex"];
  frameDivFlex1?: CSSProperties["flex"];
};

const AuthHeader: FunctionComponent<AuthHeaderType> = ({
  className = "",
  frameDivWidth,
  frameDivAlignSelf,
  frameDivFlex,
  frameDivFlex1,
  welcomeToStackguard,
  secureYourCodebaseWithAdvanced,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      alignSelf: frameDivAlignSelf,
      flex: frameDivFlex,
    };
  }, [frameDivWidth, frameDivAlignSelf, frameDivFlex]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex1,
    };
  }, [frameDivFlex1]);

  return (
    <div
      className={`w-[497px] flex flex-col items-center gap-16 text-center text-[32px] text-black font-poppins mq750:gap-8 ${className}`}
      style={frameDivStyle}
    >
      <div className="flex items-center gap-2">
        <img
          className="h-[45.9px] w-[51px] relative"
          loading="lazy"
          alt=""
          src="/Group-1244832109.svg"
        />
        <h1 className="m-0 relative text-[length:inherit] leading-[100%] font-normal font-[inherit] mq750:text-[26px] mq750:leading-[26px] mq450:text-[19px] mq450:leading-[19px]">
          Stackguard
        </h1>
      </div>
      <div
        className="self-stretch flex flex-col items-center gap-4"
        style={frameDiv1Style}
      >
        <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[100%] font-medium font-[inherit] mq750:text-[26px] mq750:leading-[26px] mq450:text-[19px] mq450:leading-[19px]">
          {welcomeToStackguard}
        </h2>
        <div className="self-stretch relative text-xl leading-[103%] mq450:text-base mq450:leading-4">
          {secureYourCodebaseWithAdvanced}
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
