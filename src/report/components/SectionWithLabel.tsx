import { getSectionLabel } from "../sections";

export function SectionWithLabel({ label, children, title }: { label: string, children: any, title: string }) {
  return (
    <section class="scroll-mt-20 not-last:mb-80" data-section={title}>
      <div class="heading-2 mb-12">
        {getSectionLabel(title)}
      </div>
      {children}
    </section>
  );
}