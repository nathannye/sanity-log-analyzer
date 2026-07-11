export default function SectionWrapper({ children, title, ...rest }: { children: any, title: string }) {
	return <section
  class="scroll-mt-32"
  {...rest}
  >
  <h2 class="heading-2 mb-12">{title}</h2>
	{children}
</section>
}