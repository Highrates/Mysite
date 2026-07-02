type SectionLabelProps = {
  children: React.ReactNode;
  id?: string;
};

export function SectionLabel({ children, id }: SectionLabelProps) {
  return (
    <h2
      id={id}
      className="select-none font-medium leading-[1.6] text-quaternary"
    >
      {children}
    </h2>
  );
}
