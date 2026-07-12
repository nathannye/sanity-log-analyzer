export function SectionWithLabel({ label, children, title }: { label: string, children: any, title: string }) {
  return (
    <section class="scroll-mt-32" data-section={title}>
      <div class="heading-2 mb-8">
        {label}
      </div>
      {children}
    </section>
  );
}
