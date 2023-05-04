import "./SecondaryBody.css";
import BackgroundShape from "../../assets/BackgroundShape.svg";

export function SecondaryBody() {
  return (
    <>
      <div className="relative">
        <img src={BackgroundShape} alt="BackgroundImage" className="mt-1 w-full max-sm:h-72 sm:max-lg:h-80 lg:h-96" />
        <p className="text-white font-semibold text-roboto text-center absolute max-sm:top-12 top-16 lg:top-24 text-2xl
        min-[350px]:left-[27%] min-[400px]:left-[33%] min-[520px]:left-[38%] md:left-[40%] lg:left-[42%]
        min-[350px]:text-xl lg:text-3xl">
          How does it Work ?
        </p>
        <p className="absolute text-roboto text-white font-light text-center
         max-sm:text-xs sm:text-sm md:text-base lg:text-lg max-sm:top-20 top-24 lg:top-36 max-md:mx-7 md:mx-14 lg:mx-20">
Phishing refers to an online scam in which criminals impersonate genuine organizations through email, text messages, advertisements, or other methods to obtain sensitive information. Typically, this involves providing a link that appears to direct you to the legitimate company's website, where you enter your information. However, the website is a well-crafted fake, and the information you submit goes directly to the scammers. To effectively identify these malicious websites, we employ a Machine Learning technique called Artificial Neural Network, which has been trained on a dataset of 600,000 authentic and malicious URLs.
          
          <br/> <br/>
        </p>
      </div>
    </>
  );
}
