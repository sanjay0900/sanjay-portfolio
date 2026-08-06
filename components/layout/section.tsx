import Container from "./Container";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}