export default function HomeIntro() {
  return (
    <section className="flex sm:flex-col md:flex-row lg:flex-row items-center justify-center">
      <p>Hi, I'm Liam.</p>
      <img
        src={'https://raw.githubusercontent.com/niamlaylor/portfolio/main/public/liamnaylor_bw.jpg'}
        height={200}
        width={200}
      />
    </section>
  );
};