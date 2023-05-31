import Heading2 from "@/components/headers/h2";

export default function HomeProjects() {
  return(
    <section className="flex sm:flex-col md:flex-col lg:flex-col items-center">
      <Heading2>Recent Projects</Heading2>
      <table class="min-w-1/2">
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b">BC Ferries website</td>
            <td class="py-2 px-4 border-b">Copywriting</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Sifter</td>
            <td class="py-2 px-4 border-b">Web Development</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}