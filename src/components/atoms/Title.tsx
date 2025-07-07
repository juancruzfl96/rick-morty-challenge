type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => (
  <h2 className="text-lg sm:text-xl font-bold text-white w-full sm:w-auto text-center sm:text-left">
    {text}
  </h2>
);
