import { useState } from "react";
import Assets from "../assets";
import { QuestionAnswerProps } from "../interfaces";

const QuestionAnswer = ({
  question,
  answer,
  maxHeight,
  index,
  isOpen,
  open,
}: QuestionAnswerProps) => {
  return (
    <div
      style={{
        maxHeight: isOpen ? maxHeight : "60px",
      }}
      className="relative flex w-full max-w-[850px] bg-[#000]/[.2] rounded-[5px] overflow-hidden transition-all duration-[300ms]"
    >
      <div
        onClick={() => open(isOpen ? (undefined as unknown as number) : index)}
        className="absolute flex items-center justify-between w-full h-[60px] bg-[#F0F0F0] border-[1.5px] border-[#000]/[.2] rounded-[5px] px-[20px] cursor-pointer"
      >
        <span className="font-medium text-[16px] text-[#7A8CA1]">
          {question}
        </span>

        <Assets.FAQPlus />
      </div>
      <div className="flex items-center w-full pt-[80px] pb-[20px] px-[20px] overflow-hidden whitespace-normal">
        <span className="text-[#032853] text-[13px] md:text-[16px]">
          {answer}
        </span>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(
    undefined as unknown as number
  );
  const questions = [
    {
      question: "How do you calculate the resell prices and profit?",
      answer:
        "Our software automatically watches websites for releases and then swiftly finds a product to gather its retail and resell prices on StockX. Once we have that, we then ping that to our users and just like that, you have your next pair of Panda Dunks.",
      maxHeight: "172px",
    },
    {
      question: "Where am I notified of releasing products?",
      answer:
        "You are notified via discord, meaning it’s accessible everywhere — your phone, your tablet, your desktop— yes, everywhere!",
      maxHeight: "148px",
    },
    {
      question: "Can I use the ResellX on the go?",
      answer:
        "Yes! With our discord based webhook systems, as long as you have everything pre set-up on our website, you can be eating dinner or watching a sports game— you can cop from anywhere!",
      maxHeight: "148px",
    },
  ];

  return (
    <div className="flex flex-col pt-[160px] pb-[100px] gap-[30px] px-[25px]">
      <div className="flex flex-col gap-[10px] items-center lg:items-start">
        <span className="font-bold text-[28px] text-[#032853]">
          Frequently Asked Questions
        </span>

        <span className="font-medium w-full max-w-[500px] text-[14px] md:text-[16px] max-sm:max-w-[400px] text-[#7A8CA1]">
          Learn more about ResellX through our FAQ! If your question is not
          answer, feel free to contact us via Twitter, Instagram, or Discord.
        </span>
      </div>

      <div className="flex flex-col gap-[20px] w-full max-lg:px-5">
        {questions.map((question, index) => {
          return (
            <QuestionAnswer
              key={`question-${index}`}
              question={question.question}
              answer={question.answer}
              maxHeight={question.maxHeight}
              index={index}
              isOpen={openQuestion === index}
              open={(val) => setOpenQuestion(val)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
