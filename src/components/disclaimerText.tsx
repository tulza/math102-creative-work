const DisclaimerText = ({ text }: { text: string }) => {
  return (
    <code className="z-10 -m-1 w-max rounded-lg bg-black p-2 text-white">
      {text}
    </code>
  );
};

export default DisclaimerText;
